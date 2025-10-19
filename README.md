# 📐 Geometri SD Kelas 5

> Aplikasi pembelajaran Geometri interaktif untuk siswa SD Kelas 5 dengan Firebase

[![Firebase](https://img.shields.io/badge/Firebase-9.22.0-orange.svg)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-success.svg)](https://github.com)

## 🌟 Fitur Utama

### 👨‍🎓 Untuk Siswa
- 📚 **Materi Pembelajaran Interaktif** - Belajar dengan gambar, animasi, dan contoh soal
- 🎯 **Kuis Interaktif** - Latihan soal dengan feedback langsung
- 📊 **Tracking Progress** - Monitor perkembangan belajar secara real-time
- 🏆 **Sistem Achievement** - Dapatkan badge dan reward untuk motivasi
- 📈 **Dashboard Personal** - Lihat statistik belajar pribadi

### 👩‍🏫 Untuk Guru
- 📋 **Monitoring Siswa** - Pantau progress seluruh siswa
- 📊 **Statistik Kelas** - Lihat performa kelas secara keseluruhan
- 👀 **Detail Siswa** - Akses riwayat belajar setiap siswa
- 📈 **Analisis Progress** - Identifikasi siswa yang perlu bantuan

## 🎓 Materi Pembelajaran

### Bangun Datar
- 🔺 Segitiga (luas, keliling, jenis-jenis)
- 🟦 Persegi (sifat, rumus)
- 📏 Persegi Panjang
- 🔵 Lingkaran (jari-jari, diameter, π)
- 🔷 Jajar Genjang
- 🔶 Trapesium

### Bangun Ruang
- 🎲 Kubus (volume, luas permukaan)
- 📦 Balok
- 🥫 Tabung
- ⛺ Limas

## 🚀 Quick Start

### Prerequisites
- Web browser modern (Chrome, Firefox, Safari, Edge)
- Koneksi internet untuk Firebase
- Firebase project (untuk deployment)

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/yourusername/geometri-sd-kelas5.git
   cd geometri-sd-kelas5
   ```

2. **Setup Firebase**
   - Buat project di [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Enable Realtime Database
   - Copy Firebase config ke `public/js/firebase-config.js`

3. **Configure Firebase**
   ```javascript
   // public/js/firebase-config.js
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     databaseURL: "YOUR_DATABASE_URL",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

4. **Setup Database Rules**
   - Copy rules dari `database.rules.json`
   - Apply di Firebase Console > Realtime Database > Rules
   - Atau deploy dengan Firebase CLI:
   ```bash
   firebase deploy --only database
   ```

5. **Create Initial Users**
   - Gunakan Firebase Console untuk create users
   - Atau import dari `users-data.json` (sample data)

6. **Run locally**
   ```bash
   # Option 1: Simple HTTP server dengan Python
   python -m http.server 8000 --directory public
   
   # Option 2: Dengan Node.js http-server
   npx http-server public -p 8000
   
   # Option 3: Dengan Firebase hosting
   firebase serve
   ```

7. **Open browser**
   ```
   http://localhost:8000
   ```

### Demo Accounts
```
Student Account:
Email: siswa@demo.com
Password: siswa123

Teacher Account:
Email: guru@demo.com
Password: guru123
```

## 📁 Struktur Project

```
geometri-sd-kelas5/
├── public/                    # Public web files
│   ├── css/                   # Stylesheets
│   │   ├── modern-style.css  # Main stylesheet
│   │   ├── navigation.css    # Navigation styles
│   │   ├── animations.css    # Animations
│   │   └── ...
│   ├── js/                    # JavaScript files
│   │   ├── utils.js          # Utility functions
│   │   ├── constants.js      # App constants
│   │   ├── firebase-config.js # Firebase config
│   │   ├── auth.js           # Authentication
│   │   └── ...
│   └── *.html                 # HTML pages
├── .gitignore                 # Git ignore rules
├── database.rules.json        # Firebase DB rules
├── firebase.json              # Firebase config
├── IMPROVEMENTS.md            # Improvement docs
├── PROJECT_STRUCTURE.md       # Project structure
├── SECURITY.md                # Security guidelines
└── README.md                  # This file
```

Lihat [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) untuk detail lengkap.

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with variables, grid, flexbox
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Firebase SDK 9.22.0** - Backend services

### Backend (Firebase)
- **Firebase Authentication** - User management
- **Firebase Realtime Database** - Data storage
- **Firebase Hosting** - Web hosting (optional)

### Tools & Libraries
- **Google Fonts** - Typography (Fredoka, Poppins)
- **CSS Animations** - Smooth transitions & effects
- **Firebase Console** - Database management

## 🔐 Security

Aplikasi ini mengimplementasikan best practices untuk keamanan:

- ✅ Input validation & sanitization
- ✅ XSS prevention
- ✅ Role-based access control (RBAC)
- ✅ Secure authentication flow
- ✅ Firebase security rules
- ✅ Error handling tanpa expose sensitive data

Lihat [SECURITY.md](SECURITY.md) untuk detail lengkap.

## 📚 Documentation

- **[README.md](README.md)** - Project overview (this file)
- **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - Detailed project structure
- **[IMPROVEMENTS.md](IMPROVEMENTS.md)** - List of improvements made
- **[SECURITY.md](SECURITY.md)** - Security guidelines & best practices

## 🎨 Features Detail

### Sistem Kuis
- ⏱️ Timer countdown
- ✅ Auto-feedback langsung
- 📝 Penjelasan detail untuk setiap soal
- 🔄 Review jawaban setelah selesai
- 💯 Skor otomatis

### Tracking Progress
- 📊 Progress bar per materi
- 🎯 Statistik quiz
- 📈 Grafik perkembangan
- 🔥 Streak belajar
- 🏆 Achievement badges

### UI/UX
- 🎨 Design colorful & child-friendly
- 📱 Responsive design (mobile-friendly)
- ✨ Smooth animations
- 🎉 Confetti celebrations
- 🔔 Toast notifications

## 🚀 Deployment

### Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init
   # Select Hosting
   # Set public directory to "public"
   # Configure as single-page app: No
   ```

4. **Deploy**
   ```bash
   firebase deploy
   ```

### Other Hosting Options
- **Netlify**: Drag & drop `public` folder
- **Vercel**: Connect Git repository
- **GitHub Pages**: Push to `gh-pages` branch
- **Any Web Server**: Upload `public` folder

## 🔧 Configuration

### Firebase Configuration
Edit `public/js/firebase-config.js`:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Database Rules
Copy from `database.rules.json` to Firebase Console.

### Constants
Edit `public/js/constants.js` untuk customize:
- Material IDs
- Score thresholds
- Time limits
- Default values

## 🧪 Testing

### Manual Testing Checklist
- [ ] Login (siswa & guru)
- [ ] Dashboard loading
- [ ] Materi loading & navigation
- [ ] Quiz functionality
- [ ] Progress tracking
- [ ] Achievement system
- [ ] Logout

### Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

## 🐛 Troubleshooting

### Firebase Connection Issues
```javascript
// Check Firebase config
console.log(firebase.app().name); // Should print "[DEFAULT]"
```

### Authentication Issues
- Verify email/password authentication is enabled
- Check user exists in Firebase Console
- Clear browser cache & cookies

### Database Permission Denied
- Check database rules in Firebase Console
- Verify user is authenticated
- Check user role in database

### Page Not Loading
- Check browser console for errors
- Verify all script files are loaded
- Check network tab for failed requests

## 🤝 Contributing

Contributions are welcome! Silakan:

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Contribution Guidelines
- Follow existing code style
- Add comments untuk code yang complex
- Test thoroughly sebelum submit
- Update documentation jika perlu

## 📝 Changelog

### Version 2.0 (2025-10-18)
- ✅ Added `utils.js` for reusable functions
- ✅ Added `constants.js` for app constants
- ✅ Improved error handling & validation
- ✅ Removed 77% unnecessary console.logs
- ✅ Enhanced security measures
- ✅ Comprehensive documentation
- ✅ Code refactoring & optimization

### Version 1.0 (Initial Release)
- 📚 Basic learning materials
- 🎯 Quiz system
- 📊 Progress tracking
- 👨‍🎓 Student dashboard
- 👩‍🏫 Teacher dashboard

Lihat [IMPROVEMENTS.md](IMPROVEMENTS.md) untuk detail lengkap.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Development Team** - Initial work & improvements

## 🙏 Acknowledgments

- Firebase team for excellent backend services
- Google Fonts for beautiful typography
- Kurikulum Kemendikbud for educational content
- Open source community

## 📞 Support

Jika ada pertanyaan atau masalah:
- 📧 Email: support@geometri-sd.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/geometri-sd-kelas5/issues)
- 📚 Docs: [Documentation](https://github.com/yourusername/geometri-sd-kelas5/wiki)

## 🌟 Show Your Support

Jika project ini membantu, berikan ⭐ di GitHub!

---

Made with ❤️ for Indonesian students

**Happy Learning! 📚✨**
