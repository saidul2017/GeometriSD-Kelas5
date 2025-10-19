# 👤 Daftar Akun Demo - Geometri SD Kelas 5

## 📚 AKUN SISWA (Student Accounts)

### Siswa 1
```
Nama Depan:    Budi
Nama Belakang: Santoso
Nama Lengkap:  Budi Santoso
Email:         siswa@demo.com
Password:      siswa123
Role:          siswa
Kelas:         5A
```

### Siswa 2
```
Nama Depan:    Ani
Nama Belakang: Kusuma
Nama Lengkap:  Ani Kusuma
Email:         ani.siswa@demo.com
Password:      ani12345
Role:          siswa
Kelas:         5A
```

### Siswa 3
```
Nama Depan:    Dika
Nama Belakang: Pratama
Nama Lengkap:  Dika Pratama
Email:         dika.siswa@demo.com
Password:      dika12345
Role:          siswa
Kelas:         5B
```

### Siswa 4
```
Nama Depan:    Siti
Nama Belakang: Nurhaliza
Nama Lengkap:  Siti Nurhaliza
Email:         siti.siswa@demo.com
Password:      siti12345
Role:          siswa
Kelas:         5B
```

### Siswa 5
```
Nama Depan:    Rudi
Nama Belakang: Hartono
Nama Lengkap:  Rudi Hartono
Email:         rudi.siswa@demo.com
Password:      rudi12345
Role:          siswa
Kelas:         5C
```

---

## 👩‍🏫 AKUN GURU (Teacher Accounts)

### Guru 1
```
Nama Depan:    Ratna
Nama Belakang: Sari
Nama Lengkap:  Ibu Ratna Sari, S.Pd
Email:         guru@demo.com
Password:      guru123
Role:          guru
Mata Pelajaran: Matematika
```

### Guru 2
```
Nama Depan:    Ahmad
Nama Belakang: Wijaya
Nama Lengkap:  Bapak Ahmad Wijaya, S.Pd
Email:         ahmad.guru@demo.com
Password:      ahmad123
Role:          guru
Mata Pelajaran: Matematika
```

---

## 🔐 Format Standar untuk Login

### Login Form Format:
```
┌──────────────────────────────────────┐
│  Email:    [email address]           │
│  Password: [password]                │
│  Role:     [siswa/guru] (auto)       │
└──────────────────────────────────────┘
```

---

## 📋 Tabel Ringkasan Akun

### Siswa (Students)
| No | Nama Lengkap      | Email                  | Password  | Kelas |
|----|-------------------|------------------------|-----------|-------|
| 1  | Budi Santoso      | siswa@demo.com         | siswa123  | 5A    |
| 2  | Ani Kusuma        | ani.siswa@demo.com     | ani12345  | 5A    |
| 3  | Dika Pratama      | dika.siswa@demo.com    | dika12345 | 5B    |
| 4  | Siti Nurhaliza    | siti.siswa@demo.com    | siti12345 | 5B    |
| 5  | Rudi Hartono      | rudi.siswa@demo.com    | rudi12345 | 5C    |

### Guru (Teachers)
| No | Nama Lengkap           | Email                | Password  | Mapel       |
|----|------------------------|----------------------|-----------|-------------|
| 1  | Ibu Ratna Sari, S.Pd   | guru@demo.com        | guru123   | Matematika  |
| 2  | Bapak Ahmad Wijaya     | ahmad.guru@demo.com  | ahmad123  | Matematika  |

---

## 🎯 Cara Membuat User Baru di Firebase

### Option 1: Via Firebase Console (Manual)

**Step 1: Buat User Authentication**
1. Buka [Firebase Console](https://console.firebase.google.com/)
2. Pilih project: **geometri-sd-kelas5**
3. Go to **Authentication** > **Users**
4. Click **Add user**
5. Masukkan:
   - Email: `[email baru]`
   - Password: `[password baru]`
6. Click **Add user**
7. Copy **User UID** yang muncul

**Step 2: Tambahkan Data User ke Database**
1. Go to **Realtime Database**
2. Navigate ke `/users`
3. Click **+** untuk add child
4. Child name: `[User UID dari step 1]`
5. Tambahkan data:
```json
{
  "name": "Nama Lengkap",
  "email": "email@example.com",
  "role": "siswa",
  "kelas": "5A",
  "lastLogin": 1634567890000
}
```

### Option 2: Via Firebase Admin SDK (Programmatic)

**Script untuk bulk create users:**
```javascript
// create-users.js
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://geometri-sd-kelas5.firebaseio.com"
});

const users = [
  {
    email: 'siswa@demo.com',
    password: 'siswa123',
    name: 'Budi Santoso',
    role: 'siswa',
    kelas: '5A'
  },
  {
    email: 'guru@demo.com',
    password: 'guru123',
    name: 'Ibu Ratna Sari, S.Pd',
    role: 'guru'
  }
  // ... tambahkan user lainnya
];

async function createUsers() {
  for (const userData of users) {
    try {
      // Create auth user
      const userRecord = await admin.auth().createUser({
        email: userData.email,
        password: userData.password,
        displayName: userData.name
      });

      // Add to database
      await admin.database().ref(`users/${userRecord.uid}`).set({
        name: userData.name,
        email: userData.email,
        role: userData.role,
        kelas: userData.kelas || null,
        lastLogin: Date.now()
      });

      console.log(`✅ Created user: ${userData.email}`);
    } catch (error) {
      console.error(`❌ Error creating ${userData.email}:`, error);
    }
  }
}

createUsers();
```

---

## 📝 Template Data User untuk Database

### Template Siswa:
```json
{
  "users": {
    "USER_UID_HERE": {
      "name": "Nama Lengkap Siswa",
      "email": "siswa@example.com",
      "role": "siswa",
      "kelas": "5A",
      "lastLogin": 1634567890000,
      "createdAt": 1634567890000
    }
  }
}
```

### Template Guru:
```json
{
  "users": {
    "USER_UID_HERE": {
      "name": "Nama Lengkap Guru, S.Pd",
      "email": "guru@example.com",
      "role": "guru",
      "mataPelajaran": "Matematika",
      "lastLogin": 1634567890000,
      "createdAt": 1634567890000
    }
  }
}
```

---

## 🔒 Password Requirements

Aplikasi ini menggunakan Firebase Authentication dengan requirements:
- **Minimum length**: 6 characters
- **Recommended**: 8+ characters dengan kombinasi huruf dan angka
- **Example good passwords**: 
  - `siswa123` (minimum)
  - `Siswa2024!` (better)
  - `BudiSD5A@2024` (best)

---

## 🎓 Role-Based Access

### Role: `siswa` (Student)
**Akses:**
- ✅ Dashboard siswa
- ✅ Lihat & belajar materi
- ✅ Ikut kuis
- ✅ Tracking progress pribadi
- ✅ Lihat achievements
- ❌ Tidak bisa akses dashboard guru
- ❌ Tidak bisa lihat data siswa lain

### Role: `guru` (Teacher)
**Akses:**
- ✅ Dashboard guru
- ✅ Lihat semua materi
- ✅ Monitoring semua siswa
- ✅ Lihat statistik kelas
- ✅ Detail progress per siswa
- ✅ Analytics & reports
- ✅ Bisa akses fitur siswa juga

---

## 📱 Testing Accounts

### Untuk Testing Siswa:
**Gunakan:** `siswa@demo.com` / `siswa123`

**Test Scenario:**
1. Login sebagai siswa
2. Lihat dashboard
3. Pilih materi (misal: Segitiga)
4. Baca materi sampai selesai
5. Klik "Selesai" untuk mark completed
6. Pergi ke halaman Kuis
7. Pilih kuis (misal: Kuis Segitiga)
8. Jawab soal-soal
9. Lihat skor & review jawaban
10. Check progress di halaman Progress

### Untuk Testing Guru:
**Gunakan:** `guru@demo.com` / `guru123`

**Test Scenario:**
1. Login sebagai guru
2. Lihat dashboard guru
3. Check statistik kelas
4. Lihat list siswa
5. Click "Detail" pada salah satu siswa
6. Lihat progress detail siswa tersebut
7. Check top performers
8. Lihat recent activities

---

## 🆕 Cara Menambah Siswa Baru (Manual via Console)

### Quick Steps:
1. **Create Auth User**
   - Firebase Console → Authentication → Add user
   - Email: `nama.siswa@demo.com`
   - Password: `password123`
   - Copy UID

2. **Add to Database**
   - Firebase Console → Realtime Database
   - Navigate to `/users`
   - Add child with UID from step 1
   - Paste JSON:
   ```json
   {
     "name": "Nama Siswa",
     "email": "nama.siswa@demo.com",
     "role": "siswa",
     "kelas": "5A",
     "lastLogin": 1234567890000
   }
   ```

3. **Test Login**
   - Logout dari aplikasi
   - Login dengan email & password baru
   - Verify redirect ke dashboard siswa

---

## 📊 Import Bulk Users (Advanced)

Jika punya banyak user, gunakan CSV/JSON import:

### Format CSV:
```csv
firstName,lastName,email,password,role,kelas
Budi,Santoso,budi@demo.com,budi123,siswa,5A
Ani,Kusuma,ani@demo.com,ani123,siswa,5A
Dika,Pratama,dika@demo.com,dika123,siswa,5B
```

### Import Script (Node.js):
```javascript
const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('users.csv')
  .pipe(csv())
  .on('data', async (row) => {
    // Create user logic here
  });
```

---

## 🆘 Troubleshooting

### User tidak bisa login:
- ✅ Check email & password benar
- ✅ Check user exists di Firebase Authentication
- ✅ Check user data exists di Realtime Database
- ✅ Check role field (`siswa` atau `guru`)

### User login tapi redirect error:
- ✅ Check role di database
- ✅ Verify role = `siswa` atau `guru` (lowercase)
- ✅ Check browser console untuk error

### User tidak punya permission:
- ✅ Check database rules
- ✅ Verify user authenticated
- ✅ Check role-based access rules

---

## 📞 Support

Jika ada masalah dengan accounts:
- 📧 Email: support@geometri-sd.com
- 🐛 Issues: GitHub Issues
- 📚 Docs: README.md & documentation

---

**Last Updated**: 2025-10-18
**Version**: 2.0
