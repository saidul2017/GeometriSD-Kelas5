# Struktur Project - Geometri SD Kelas 5

Dokumen ini menjelaskan struktur file dan folder dalam project.

## 📁 Struktur Folder

```
geometri-sd-kelas5/
├── public/                          # Public web files
│   ├── css/                         # Stylesheets
│   │   ├── animations.css          # Animation utilities
│   │   ├── confetti.css            # Confetti celebration styles
│   │   ├── loader.css              # Loading animation styles
│   │   ├── modern-style.css        # ✅ Main stylesheet (USE THIS)
│   │   ├── navigation.css          # Navigation component styles
│   │   ├── notifications.css       # Toast notification styles
│   │   ├── responsive.css          # Responsive/mobile styles
│   │   └── style.css               # ⚠️ Legacy (deprecated)
│   │
│   ├── js/                          # JavaScript files
│   │   ├── auth.js                 # Authentication logic
│   │   ├── confetti.js             # Confetti animation
│   │   ├── constants.js            # ✅ Application constants
│   │   ├── dashboard-guru.js       # Teacher dashboard logic
│   │   ├── firebase-config.js      # Firebase initialization
│   │   ├── kuis.js                 # Quiz system logic
│   │   ├── loader.js               # Loading screen
│   │   ├── materi-data.js          # Learning materials data
│   │   ├── materi.js               # Materials page logic
│   │   ├── navigation.js           # Navigation component
│   │   ├── notifications.js        # Toast notifications
│   │   ├── progress.js             # Progress tracking
│   │   ├── quiz-data.js            # Quiz questions database
│   │   └── utils.js                # ✅ Utility functions
│   │
│   └── *.html                       # HTML pages (see below)
│
├── .gitignore                       # Git ignore rules
├── database.rules.json              # Firebase database rules
├── firebase.json                    # Firebase configuration
├── IMPROVEMENTS.md                  # ✅ Documentation of improvements
├── PROJECT_STRUCTURE.md             # ✅ This file
├── README.md                        # Project overview
├── SECURITY.md                      # ✅ Security guidelines
└── users-data.json                  # Sample user data
```

## 📄 HTML Pages

### Landing & Authentication
- **`index.html`** - Landing page / Homepage
- **`login.html`** - Login page (student & teacher)

### Student Dashboard
- **`dashboard-siswa.html`** - Main student dashboard
- **`materi.html`** - Learning materials list
- **`materi-detail.html`** - Individual material detail page
- **`kuis.html`** - Quiz selection page
- **`quiz-play.html`** - Quiz taking interface
- **`progress.html`** - Student progress tracking
- **`achievements.html`** - Achievements & badges

### Teacher Dashboard
- **`dashboard-guru.html`** - Teacher monitoring dashboard

## 🎨 CSS Architecture

### CSS Loading Order (in HTML)
```html
<link rel="stylesheet" href="css/modern-style.css">      <!-- Base styles -->
<link rel="stylesheet" href="css/navigation.css">        <!-- Navigation -->
<link rel="stylesheet" href="css/loader.css">            <!-- Loader -->
<link rel="stylesheet" href="css/notifications.css">     <!-- Toasts -->
<link rel="stylesheet" href="css/confetti.css">          <!-- Confetti -->
<link rel="stylesheet" href="css/responsive.css">        <!-- Optional: Mobile -->
```

### CSS Files Description

| File | Purpose | Required |
|------|---------|----------|
| `modern-style.css` | Main stylesheet dengan CSS variables & modern design | ✅ Yes |
| `navigation.css` | Navigation bar styles | ✅ Yes |
| `loader.css` | Loading screen animation | ✅ Yes |
| `notifications.css` | Toast notification styles | ✅ Yes |
| `confetti.css` | Celebration animations | Optional |
| `animations.css` | Reusable animations | Optional |
| `responsive.css` | Mobile responsive rules | Optional |
| `style.css` | ⚠️ Legacy - DO NOT USE | No |

## 📜 JavaScript Architecture

### Script Loading Order (in HTML)
```html
<!-- 1. Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js"></script>

<!-- 2. Utilities & Constants (no dependencies) -->
<script src="js/utils.js"></script>
<script src="js/constants.js"></script>

<!-- 3. Firebase Config (depends on Firebase SDK) -->
<script src="js/firebase-config.js"></script>

<!-- 4. UI Components (optional) -->
<script src="js/loader.js"></script>
<script src="js/navigation.js"></script>
<script src="js/notifications.js"></script>
<script src="js/confetti.js"></script>

<!-- 5. Data Files (if needed) -->
<script src="js/materi-data.js"></script>
<script src="js/quiz-data.js"></script>

<!-- 6. Page-specific logic -->
<script src="js/auth.js"></script>              <!-- For login page -->
<script src="js/dashboard-guru.js"></script>    <!-- For teacher dashboard -->
<script src="js/materi.js"></script>            <!-- For materials page -->
<script src="js/kuis.js"></script>              <!-- For quiz page -->
<script src="js/progress.js"></script>          <!-- For progress page -->
```

### JavaScript Files Description

#### 🔧 Core Utilities
| File | Purpose | Dependencies |
|------|---------|--------------|
| `utils.js` | Common utility functions (format, validation, etc.) | None |
| `constants.js` | Application constants & configuration | None |
| `firebase-config.js` | Firebase initialization & helpers | Firebase SDK |

#### 🎨 UI Components
| File | Purpose | Dependencies |
|------|---------|--------------|
| `loader.js` | Loading screen component | None |
| `navigation.js` | Navigation bar component | Firebase |
| `notifications.js` | Toast notification system | None |
| `confetti.js` | Celebration animations | notifications.js |

#### 📚 Data Files
| File | Purpose | Dependencies |
|------|---------|--------------|
| `materi-data.js` | Learning materials content | None |
| `quiz-data.js` | Quiz questions database | None |

#### 📄 Page-specific Logic
| File | Purpose | Used In |
|------|---------|---------|
| `auth.js` | Login/logout logic | login.html, all pages |
| `dashboard-guru.js` | Teacher dashboard | dashboard-guru.html |
| `materi.js` | Materials display logic | materi.html, materi-detail.html |
| `kuis.js` | Quiz system logic | kuis.html, quiz-play.html |
| `progress.js` | Progress tracking | progress.html, dashboard-siswa.html |

## 🗄️ Firebase Structure

### Realtime Database Schema
```
geometri-sd-kelas5/
├── users/
│   └── {userId}/
│       ├── name: string
│       ├── email: string
│       ├── role: "siswa" | "guru"
│       └── lastLogin: timestamp
│
├── progress/
│   └── {userId}/
│       └── {materiId}/
│           ├── progress: number (0-100)
│           └── timestamp: timestamp
│
├── quizzes/
│   └── {userId}/
│       └── {quizId}/
│           ├── quizId: string
│           ├── score: number (0-100)
│           ├── correctCount: number
│           ├── totalQuestions: number
│           ├── timeSpent: number (seconds)
│           ├── answers: array
│           └── timestamp: timestamp
│
└── activity/
    └── {userId}/
        └── {date}/
            ├── timestamp: timestamp
            └── activities: boolean
```

## 🔐 Security

### Firebase Security Rules Location
- **File**: `database.rules.json`
- **Documentation**: See `SECURITY.md` for detailed rules

### Security Best Practices
1. ✅ All user inputs are validated
2. ✅ XSS prevention with sanitization
3. ✅ Role-based access control (RBAC)
4. ✅ Secure authentication flow
5. ✅ Error handling without exposing sensitive data

## 🚀 Development Guidelines

### Adding a New Page
1. Create HTML file in `public/` folder
2. Include required CSS files (see CSS Architecture above)
3. Include required JS files in correct order (see JS Architecture above)
4. Add authentication check if needed
5. Test on multiple browsers

### Adding a New Feature
1. Check if utility function exists in `utils.js`
2. Add constants to `constants.js` if needed
3. Create new JS file if feature is complex
4. Update this documentation
5. Test thoroughly

### Modifying Styles
1. ✅ Edit `modern-style.css` (main stylesheet)
2. Use CSS variables for colors, spacing, etc.
3. Keep responsive design in mind
4. Test on mobile devices

### Code Style Guidelines
- **Functions**: camelCase (`getUserData`, `formatDate`)
- **Constants**: UPPER_SNAKE_CASE (`USER_ROLES`, `AUTH_ERRORS`)
- **CSS Classes**: kebab-case (`nav-menu`, `btn-primary`)
- **Files**: kebab-case (`firebase-config.js`, `modern-style.css`)

## 📊 File Dependencies Graph

```
utils.js (no dependencies)
    └── Used by: All JS files
    
constants.js (no dependencies)
    └── Used by: All JS files

firebase-config.js
    ├── Depends on: Firebase SDK, utils.js
    └── Used by: All authenticated pages

navigation.js
    ├── Depends on: Firebase
    └── Used by: All pages with navigation

notifications.js (no dependencies)
    └── Used by: Many pages for user feedback

materi-data.js (no dependencies)
    └── Used by: materi.html, materi-detail.html

quiz-data.js (no dependencies)
    └── Used by: kuis.html, quiz-play.html
```

## 🎯 Key Improvements Made

### ✅ New Files Added
1. **`utils.js`** - Centralized utility functions
2. **`constants.js`** - Application constants
3. **`.gitignore`** - Git ignore rules
4. **`IMPROVEMENTS.md`** - Improvement documentation
5. **`SECURITY.md`** - Security guidelines
6. **`PROJECT_STRUCTURE.md`** - This file

### ✅ Files Removed
1. **`dashboard.js`** - Unused file (deleted)

### ✅ Files Deprecated
1. **`style.css`** - Marked as legacy, use `modern-style.css` instead

### ✅ All HTML Files Updated
- Added `utils.js` script tag
- Added `constants.js` script tag
- Consistent script loading order
- Better error handling

## 🔄 Migration Notes

### From Old to New Structure
If you're migrating from an older version:

1. **Replace CSS imports**:
   ```html
   <!-- Old -->
   <link rel="stylesheet" href="css/style.css">
   
   <!-- New -->
   <link rel="stylesheet" href="css/modern-style.css">
   ```

2. **Update script includes** (add these after Firebase):
   ```html
   <script src="js/utils.js"></script>
   <script src="js/constants.js"></script>
   ```

3. **Use utility functions**:
   ```javascript
   // Old
   const formatted = date.toLocaleDateString('id-ID');
   
   // New
   const formatted = formatDate(date);
   ```

4. **Use constants**:
   ```javascript
   // Old
   if (userData.role === 'siswa') { ... }
   
   // New
   if (userData.role === USER_ROLES.SISWA) { ... }
   ```

## 📚 Additional Documentation

- **`README.md`** - Project overview & quick start
- **`IMPROVEMENTS.md`** - Detailed list of all improvements
- **`SECURITY.md`** - Security guidelines & best practices
- **`PROJECT_STRUCTURE.md`** - This file

## 🆘 Troubleshooting

### Scripts not loading
- Check browser console for errors
- Verify script loading order (see JS Architecture above)
- Ensure Firebase SDK is loaded before other scripts

### Styles not applying
- Check CSS file path is correct
- Verify `modern-style.css` is loaded (not `style.css`)
- Clear browser cache

### Firebase errors
- Check Firebase configuration in `firebase-config.js`
- Verify Firebase project settings
- Check database rules in `database.rules.json`

---

**Last Updated**: 2025-10-18  
**Version**: 2.0  
**Maintainer**: Development Team
