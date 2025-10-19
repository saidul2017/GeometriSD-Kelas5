# Panduan Keamanan Aplikasi

Dokumen ini berisi panduan keamanan dan best practices untuk aplikasi Geometri SD Kelas 5.

## 🔒 Firebase Security Rules

### Database Rules (Recommended)
Pastikan Firebase Realtime Database Rules dikonfigurasi dengan benar:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid || root.child('users').child(auth.uid).child('role').val() === 'guru'",
        ".write": "$uid === auth.uid || root.child('users').child(auth.uid).child('role').val() === 'guru'",
        ".validate": "newData.hasChildren(['name', 'email', 'role'])"
      }
    },
    "progress": {
      "$uid": {
        ".read": "$uid === auth.uid || root.child('users').child(auth.uid).child('role').val() === 'guru'",
        ".write": "$uid === auth.uid"
      }
    },
    "quizzes": {
      "$uid": {
        ".read": "$uid === auth.uid || root.child('users').child(auth.uid).child('role').val() === 'guru'",
        ".write": "$uid === auth.uid"
      }
    },
    "activity": {
      "$uid": {
        ".read": "$uid === auth.uid || root.child('users').child(auth.uid).child('role').val() === 'guru'",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

**Penjelasan:**
- **users**: User hanya bisa read/write data mereka sendiri, guru bisa read semua
- **progress**: User hanya bisa read/write progress mereka sendiri, guru bisa read semua
- **quizzes**: User hanya bisa write quiz results mereka sendiri
- **activity**: User hanya bisa track activity mereka sendiri

### Authentication Rules
Di Firebase Console > Authentication:
- ✅ Enable Email/Password authentication
- ✅ Enable email verification (optional)
- ✅ Set password requirements (min 6 characters)
- ❌ Disable public sign-up (hanya admin yang bisa create user)

## 🛡️ Input Validation & Sanitization

### 1. Email Validation
```javascript
// Validasi format email
if (!isValidEmail(email)) {
    showError('Format email tidak valid!');
    return;
}
```

### 2. Input Sanitization
```javascript
// Sanitize user input untuk mencegah XSS
const sanitizedInput = sanitizeInput(userInput);
```

### 3. Parameter Validation
```javascript
// Validasi parameter function
async function updateProgress(userId, materiId, progress) {
    // Validasi required parameters
    if (!userId || !materiId) {
        throw new Error('User ID and Material ID are required');
    }
    
    // Validasi tipe dan range data
    if (typeof progress !== 'number' || progress < 0 || progress > 100) {
        throw new Error('Progress must be a number between 0 and 100');
    }
    
    // ... rest of function
}
```

## 🔐 Authentication Best Practices

### 1. Session Management
```javascript
// Check authentication sebelum akses halaman protected
firebase.auth().onAuthStateChanged(async (user) => {
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    // Load page content
});
```

### 2. Role-Based Access Control (RBAC)
```javascript
// Verifikasi role sebelum akses fitur tertentu
async function checkUserRole(uid) {
    const userData = await getUserData(uid);
    
    if (!userData || !userData.role) {
        throw new Error('User role not found');
    }
    
    return userData.role;
}

// Redirect berdasarkan role
if (userData.role === USER_ROLES.SISWA) {
    window.location.href = 'dashboard-siswa.html';
} else if (userData.role === USER_ROLES.GURU) {
    window.location.href = 'dashboard-guru.html';
}
```

### 3. Secure Logout
```javascript
async function logout() {
    try {
        // Clear local data
        localStorage.clear();
        sessionStorage.clear();
        
        // Sign out dari Firebase
        await firebase.auth().signOut();
        
        // Redirect ke login
        window.location.href = 'login.html';
    } catch (error) {
        console.error('Logout error:', error);
        showError('Gagal logout. Coba lagi!');
    }
}
```

## 🚫 XSS Prevention

### 1. Sanitize User Input
```javascript
// Jangan gunakan innerHTML dengan user input langsung
// BAD:
element.innerHTML = userInput;

// GOOD:
element.textContent = userInput;
// ATAU
element.innerHTML = sanitizeInput(userInput);
```

### 2. Escape HTML Characters
```javascript
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}
```

### 3. Content Security Policy
Tambahkan CSP header di server atau meta tag:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' https://www.gstatic.com; 
               style-src 'self' 'unsafe-inline';">
```

## 🔒 Data Privacy

### 1. Minimal Data Collection
- Hanya kumpulkan data yang benar-benar diperlukan
- Jangan simpan informasi sensitif di client-side

### 2. Secure Data Storage
```javascript
// JANGAN simpan password atau data sensitif di localStorage
// BAD:
localStorage.setItem('password', password);

// GOOD:
// Gunakan Firebase Authentication untuk handle credentials
```

### 3. Data Encryption
- Firebase otomatis encrypt data at rest
- HTTPS encrypt data in transit
- Pastikan domain menggunakan HTTPS

## 🚨 Error Handling

### 1. Jangan Expose Sensitive Information
```javascript
// BAD:
catch (error) {
    alert(error.stack); // Expose stack trace
}

// GOOD:
catch (error) {
    console.error('Error:', error); // Log untuk debugging
    showError('Terjadi kesalahan. Silakan coba lagi.'); // User-friendly message
}
```

### 2. Log Errors Securely
```javascript
try {
    await someOperation();
} catch (error) {
    // Log error dengan context
    console.error('Error in someOperation:', {
        message: error.message,
        code: error.code,
        timestamp: new Date().toISOString()
    });
    
    // Show generic error ke user
    showError('Operasi gagal. Silakan coba lagi.');
}
```

## 🛠️ Security Checklist

### Development
- [x] Input validation pada semua form
- [x] XSS prevention dengan sanitization
- [x] Proper error handling tanpa expose sensitive data
- [x] Role-based access control
- [x] Secure authentication flow

### Firebase Configuration
- [ ] Firebase Database Rules dikonfigurasi
- [ ] Authentication rules di-setup
- [ ] API keys di-restrict (Firebase Console)
- [ ] Email verification enabled (optional)
- [ ] Password requirements di-set

### Deployment
- [ ] HTTPS enabled
- [ ] CSP headers configured
- [ ] Environment variables untuk sensitive data
- [ ] Security headers configured:
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: DENY
  - X-XSS-Protection: 1; mode=block

### Monitoring
- [ ] Firebase Analytics enabled
- [ ] Error monitoring setup
- [ ] Security alerts configured
- [ ] Regular security audits

## 📚 Additional Resources

### Firebase Security
- [Firebase Security Rules Documentation](https://firebase.google.com/docs/rules)
- [Firebase Authentication Best Practices](https://firebase.google.com/docs/auth/web/start)

### Web Security
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

### JavaScript Security
- [JavaScript Security Best Practices](https://cheatsheetseries.owasp.org/cheatsheets/JavaScript_Security_Cheat_Sheet.html)
- [XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

## ⚠️ Important Notes

1. **Firebase API Keys**: Firebase API keys di client-side adalah public by design. Security berasal dari Firebase Rules, bukan dari hiding API keys.

2. **Database Rules**: PASTIKAN Firebase Database Rules dikonfigurasi dengan benar. Ini adalah layer security utama untuk aplikasi Firebase.

3. **HTTPS**: Selalu gunakan HTTPS di production untuk encrypt data in transit.

4. **Regular Updates**: Update Firebase SDK dan dependencies secara regular untuk patch security vulnerabilities.

5. **User Education**: Edukasi user tentang password security dan privacy.

## 🆘 Incident Response

Jika terjadi security incident:

1. **Immediate Action**:
   - Isolate affected systems
   - Change all credentials
   - Review access logs

2. **Investigation**:
   - Identify breach point
   - Assess damage
   - Document findings

3. **Recovery**:
   - Patch vulnerabilities
   - Restore from backups if needed
   - Notify affected users

4. **Prevention**:
   - Update security measures
   - Implement additional monitoring
   - Conduct security audit

---

**Last Updated**: 2025-10-18
**Version**: 1.0
