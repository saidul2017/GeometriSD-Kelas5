\# 🎓 Website Pembelajaran Geometri Kelas 5 SD



Website pembelajaran interaktif untuk siswa kelas 5 SD mata pelajaran Geometri, dilengkapi dengan sistem tracking progress real-time menggunakan Firebase.



\## ✨ Fitur Utama



\### 1. 📚 Materi Interaktif

\- Penjelasan dengan teks, gambar, dan video

\- Animasi SVG interaktif

\- Contoh soal kontekstual

\- Materi: Bangun Datar \& Bangun Ruang



\### 2. 🎯 Sistem Kuis

\- Soal pilihan ganda interaktif

\- \*\*Feedback otomatis\*\* dengan warna hijau (✓ BENAR) dan merah (✗ SALAH)

\- \*\*Penjelasan otomatis\*\* setelah menjawab setiap soal

\- Timer dan progress tracking

\- Penyimpanan skor ke database



\### 3. 📊 Progress Tracking Real-time

\- Dashboard siswa: monitor progress pribadi

\- Dashboard guru: monitoring semua siswa

\- Firebase Realtime Database

\- Grafik dan statistik visual

\- Badge pencapaian



\### 4. 🔐 Login \& Autentikasi

\- Firebase Authentication

\- Role-based access (Guru \& Siswa)

\- Session management



\### 5. 📱 Responsive Design

\- Mobile-first approach

\- Bekerja di semua perangkat (Desktop, Tablet, Smartphone)

\- Touch-friendly interface



\## 🚀 Cara Setup



\### 1. Clone atau Download Project



```bash

git clone https://github.com/saidul2017/GeometriSD-Kelas5.git

cd GeometriSD-Kelas5

```



\### 2. Setup Firebase



1\. Buat project baru di \[Firebase Console](https://console.firebase.google.com/)

2\. Aktifkan \*\*Authentication\*\* > Email/Password

3\. Aktifkan \*\*Realtime Database\*\*

4\. Copy konfigurasi Firebase

5\. Paste ke `public/js/firebase-config.js`



```javascript

const firebaseConfig = {

&nbsp;   apiKey: "YOUR\_API\_KEY",

&nbsp;   authDomain: "YOUR\_PROJECT.firebaseapp.com",

&nbsp;   databaseURL: "https://YOUR\_PROJECT.firebaseio.com",

&nbsp;   projectId: "YOUR\_PROJECT\_ID",

&nbsp;   storageBucket: "YOUR\_PROJECT.appspot.com",

&nbsp;   messagingSenderId: "YOUR\_SENDER\_ID",

&nbsp;   appId: "YOUR\_APP\_ID"

};

```



\### 3. Install Firebase CLI



```bash

npm install -g firebase-tools

```



\### 4. Login \& Initialize



```bash

firebase login

firebase init

```



Pilih:

\- ✅ Hosting

\- ✅ Realtime Database



\### 5. Deploy



```bash

firebase deploy

```



\## 🎮 Demo Credentials



\### Siswa

\- Email: `siswa@demo.com`

\- Password: `password123`



\### Guru

\- Email: `guru@demo.com`

\- Password: `password123`



\## 📁 Struktur Project



```

GeometriSD-Kelas5/

├── public/

│   ├── index.html              # Landing page

│   ├── login.html              # Halaman login

│   ├── dashboard-siswa.html    # Dashboard siswa

│   ├── dashboard-guru.html     # Dashboard guru

│   ├── materi.html             # Materi pembelajaran

│   ├── kuis.html               # Halaman kuis

│   ├── progress.html           # Tracking progress

│   ├── css/

│   │   ├── style.css           # Main styles

│   │   ├── responsive.css      # Responsive design

│   │   └── animations.css      # Animations

│   └── js/

│       ├── firebase-config.js  # Firebase config

│       ├── auth.js             # Authentication

│       ├── materi.js           # Materials logic

│       ├── kuis.js             # Quiz system

│       ├── progress.js         # Progress tracking

│       └── dashboard-guru.js   # Teacher dashboard

├── firebase.json               # Firebase hosting config

├── database.rules.json         # Security rules

└── README.md                   # Documentation

```



\## 🎯 Materi yang Tersedia



\### Bangun Datar

\- 🔺 Segitiga

\- 🟥 Persegi

\- 📏 Persegi Panjang

\- 🔵 Lingkaran

\- 🔷 Jajar Genjang

\- 🔶 Trapesium



\### Bangun Ruang

\- 🎲 Kubus

\- 📦 Balok

\- 🥫 Tabung

\- ⛺ Limas



\## 💡 Teknologi



\- \*\*Frontend:\*\* HTML5, CSS3, JavaScript (Vanilla)

\- \*\*Backend:\*\* Firebase Realtime Database

\- \*\*Authentication:\*\* Firebase Auth

\- \*\*Hosting:\*\* Firebase Hosting

\- \*\*Design:\*\* Mobile-First, Responsive



\## 📝 Lisensi



Dikembangkan untuk pendidikan Indonesia © 2025



\## 👨‍💻 Developer



\*\*Saidul Maulidi\*\*

\- GitHub: \[@saidul2017](https://github.com/saidul2017)

\- Email: saidul.2017@student.uny.ac.id



---



\*\*Selamat Belajar! 🌟\*\*

