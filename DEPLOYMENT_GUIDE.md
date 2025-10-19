# 🚀 Panduan Deployment & Testing

## 📍 Alamat Website

### Option 1: Firebase Hosting (Production)
Jika sudah di-deploy ke Firebase:
```
https://geometri-sd-kelas5.web.app
atau
https://geometri-sd-kelas5.firebaseapp.com
```

### Option 2: Local Testing (Development)
Server lokal sudah berjalan di:
```
http://localhost:8080
```

---

## 🎯 Cara Menjalankan Lokal

### Metode 1: Python HTTP Server (Sederhana)
```bash
# Masuk ke folder public
cd public

# Start server
python3 -m http.server 8080

# Buka browser
# http://localhost:8080
```

### Metode 2: Firebase Hosting Emulator
```bash
# Install Firebase CLI (jika belum)
npm install -g firebase-tools

# Login ke Firebase
firebase login

# Jalankan emulator
firebase serve

# Buka browser
# http://localhost:5000
```

### Metode 3: Node.js HTTP Server
```bash
# Install http-server
npm install -g http-server

# Start server
http-server public -p 8080

# Buka browser
# http://localhost:8080
```

---

## 🌐 Deploy ke Firebase Hosting

### Step 1: Setup Firebase CLI
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login ke Firebase
firebase login
```

### Step 2: Initialize (Jika Belum)
```bash
# Initialize Firebase
firebase init

# Pilih:
# - Hosting
# - Database (Realtime Database)

# Public directory: public
# Single-page app: No
```

### Step 3: Deploy
```bash
# Deploy semuanya
firebase deploy

# Atau deploy hanya hosting
firebase deploy --only hosting

# Atau deploy hanya database rules
firebase deploy --only database
```

### Step 4: Akses Website
Setelah deploy, Firebase akan memberikan URL:
```
✔ Deploy complete!

Project Console: https://console.firebase.google.com/project/geometri-sd-kelas5/overview
Hosting URL: https://geometri-sd-kelas5.web.app
```

---

## 👤 Demo Accounts untuk Testing

### Akun Siswa
```
Email:    siswa@demo.com
Password: siswa123
```

**Fitur yang bisa ditest:**
- ✅ Dashboard siswa
- ✅ Lihat & belajar materi
- ✅ Ikut kuis interaktif
- ✅ Tracking progress
- ✅ Lihat achievements

### Akun Guru
```
Email:    guru@demo.com
Password: guru123
```

**Fitur yang bisa ditest:**
- ✅ Dashboard guru
- ✅ Monitoring semua siswa
- ✅ Lihat statistik kelas
- ✅ Detail progress siswa
- ✅ Analytics & reports

---

## 🔐 Setup Firebase (Jika Belum)

### 1. Buat Firebase Project
1. Buka [Firebase Console](https://console.firebase.google.com/)
2. Klik "Add project"
3. Nama project: `geometri-sd-kelas5`
4. Ikuti setup wizard

### 2. Enable Authentication
1. Buka project di Firebase Console
2. Go to **Authentication** > **Sign-in method**
3. Enable **Email/Password**
4. Save

### 3. Setup Realtime Database
1. Go to **Realtime Database**
2. Click **Create Database**
3. Pilih location: **asia-southeast1** (Singapore)
4. Start in **test mode** (sementara)
5. Nanti update rules dari `database.rules.json`

### 4. Create Demo Users
**Via Firebase Console:**
1. Go to **Authentication** > **Users**
2. Click **Add user**
3. Tambahkan user:
   - Email: `siswa@demo.com`, Password: `siswa123`
   - Email: `guru@demo.com`, Password: `guru123`

### 5. Add User Data to Database
Go to **Realtime Database** dan tambahkan data manual:
```json
{
  "users": {
    "USER_ID_SISWA": {
      "name": "Budi Siswa",
      "email": "siswa@demo.com",
      "role": "siswa",
      "lastLogin": 1634567890000
    },
    "USER_ID_GURU": {
      "name": "Ibu Ratna",
      "email": "guru@demo.com",
      "role": "guru",
      "lastLogin": 1634567890000
    }
  }
}
```

### 6. Update Database Rules
Copy rules dari `database.rules.json` ke Firebase Console:
```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid || root.child('users').child(auth.uid).child('role').val() === 'guru'",
        ".write": "$uid === auth.uid || root.child('users').child(auth.uid).child('role').val() === 'guru'"
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
    }
  }
}
```

---

## 🧪 Testing Checklist

### ✅ Landing Page (index.html)
- [ ] Halaman loading dengan baik
- [ ] Tombol "Mulai Belajar" mengarah ke login
- [ ] Animasi berjalan smooth
- [ ] Responsive di mobile

### ✅ Login (login.html)
- [ ] Form login muncul
- [ ] Validasi email bekerja
- [ ] Login siswa berhasil → dashboard siswa
- [ ] Login guru berhasil → dashboard guru
- [ ] Error message muncul jika salah

### ✅ Dashboard Siswa (dashboard-siswa.html)
- [ ] User name muncul
- [ ] Statistik loading
- [ ] Card materi muncul
- [ ] Quick actions bekerja
- [ ] Logout berhasil

### ✅ Materi (materi.html)
- [ ] List materi muncul
- [ ] Klik materi → detail muncul
- [ ] Progress bar update
- [ ] Tombol "Selesai" bekerja

### ✅ Kuis (kuis.html)
- [ ] List kuis muncul
- [ ] Start quiz → pertanyaan muncul
- [ ] Timer berjalan
- [ ] Jawaban disimpan
- [ ] Feedback langsung muncul
- [ ] Skor dihitung benar
- [ ] Review jawaban bekerja

### ✅ Progress (progress.html)
- [ ] Progress circle update
- [ ] Material list muncul
- [ ] Quiz history muncul
- [ ] Achievements muncul
- [ ] Calendar activity muncul

### ✅ Dashboard Guru (dashboard-guru.html)
- [ ] Statistik kelas muncul
- [ ] List siswa muncul
- [ ] Detail siswa bisa dibuka
- [ ] Top performers muncul
- [ ] Recent activities muncul

---

## 🐛 Troubleshooting

### Server Lokal Tidak Jalan
```bash
# Cek port 8080 sudah dipakai atau belum
lsof -i :8080

# Kill process jika perlu
kill -9 <PID>

# Gunakan port lain
python3 -m http.server 8081
```

### Firebase Deploy Error
```bash
# Re-login
firebase login --reauth

# Check project
firebase projects:list

# Use correct project
firebase use geometri-sd-kelas5

# Try deploy again
firebase deploy
```

### Login Tidak Berhasil
1. Check Firebase Authentication enabled
2. Check user ada di Firebase Console
3. Check Firebase config di `firebase-config.js`
4. Check browser console untuk error
5. Check network tab untuk failed requests

### Database Permission Denied
1. Check database rules di Firebase Console
2. Verify user authenticated (check console)
3. Check user role di database
4. Test dengan test mode rules (temporary):
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

### Halaman Blank/White Screen
1. Open browser console (F12)
2. Check untuk JavaScript errors
3. Check network tab untuk failed requests
4. Verify all script files loaded
5. Check Firebase config correct

---

## 📱 Testing di Mobile

### Android
1. Connect phone ke komputer
2. Enable USB debugging
3. Chrome DevTools → Remote devices
4. Open `localhost:8080` on phone

### iOS
1. Connect iPhone ke Mac
2. Safari → Develop → iPhone name
3. Open `localhost:8080` on phone

### Online (jika sudah deploy)
Langsung buka URL Firebase di mobile browser:
```
https://geometri-sd-kelas5.web.app
```

---

## 📊 Monitoring & Analytics

### Firebase Console
```
https://console.firebase.google.com/project/geometri-sd-kelas5
```

**Yang bisa dimonitor:**
- 📈 User activity (Authentication)
- 💾 Database reads/writes
- 🌐 Hosting bandwidth usage
- ⚠️ Error logs
- 📊 Performance metrics

### Browser DevTools
```
F12 → Console Tab
F12 → Network Tab
F12 → Application Tab (untuk storage)
```

---

## 🎯 Quick Start Commands

```bash
# 1. Clone & setup (jika belum)
git clone <repo-url>
cd geometri-sd-kelas5

# 2. Run locally
cd public && python3 -m http.server 8080

# 3. Open browser
# http://localhost:8080

# 4. Login dengan demo account
# siswa@demo.com / siswa123
# guru@demo.com / guru123

# 5. Deploy ke production
firebase login
firebase deploy
```

---

## ✅ Current Status

**Local Server:** ✅ RUNNING on http://localhost:8080

**Test sekarang:**
1. Buka browser
2. Go to: `http://localhost:8080`
3. Click "Mulai Belajar"
4. Login dengan demo account
5. Explore fitur-fiturnya!

---

## 🆘 Need Help?

**Documentation:**
- README.md - Project overview
- PROJECT_STRUCTURE.md - File structure
- SECURITY.md - Security guidelines
- IMPROVEMENTS.md - All improvements

**Support:**
- 📧 Email: support@geometri-sd.com
- 🐛 Issues: GitHub Issues
- 📚 Docs: Project documentation

---

**Happy Testing! 🚀✨**
