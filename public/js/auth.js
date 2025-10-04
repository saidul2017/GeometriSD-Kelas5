/* ========================================
   AUTHENTICATION LOGIC
   Login, Logout, Session Management
======================================== */

// Check if user is logged in on page load
auth.onAuthStateChanged((user) => {
    const currentPage = window.location.pathname;
    
    if (user) {
        // User is logged in
        if (currentPage.includes('login.html') || currentPage.includes('index.html')) {
            // Redirect to appropriate dashboard
            getUserRole(user.uid).then(role => {
                if (role === 'guru') {
                    window.location.href = 'dashboard-guru.html';
                } else {
                    window.location.href = 'dashboard-siswa.html';
                }
            });
        }
        
        // Update user info in navbar
        updateUserInfo(user);
    } else {
        // User is not logged in
        const protectedPages = ['dashboard-siswa', 'dashboard-guru', 'materi', 'kuis', 'progress'];
        const isProtectedPage = protectedPages.some(page => currentPage.includes(page));
        
        if (isProtectedPage) {
            window.location.href = 'login.html';
        }
    }
});

// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const role = document.querySelector('input[name="role"]:checked').value;
        
        const loginBtn = document.getElementById('loginBtn');
        const loginText = document.getElementById('loginText');
        const loginLoader = document.getElementById('loginLoader');
        const errorMessage = document.getElementById('errorMessage');
        
        // Show loading
        loginBtn.disabled = true;
        loginText.style.display = 'none';
        loginLoader.style.display = 'inline-block';
        errorMessage.style.display = 'none';
        
        try {
            // Sign in with Firebase Auth
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
            
            // Save/update user data in database
            await usersRef.child(user.uid).update({
                email: user.email,
                role: role,
                lastLogin: firebase.database.ServerValue.TIMESTAMP
            });
            
            // Redirect based on role
            if (role === 'guru') {
                window.location.href = 'dashboard-guru.html';
            } else {
                window.location.href = 'dashboard-siswa.html';
            }
            
        } catch (error) {
            // Show error
            errorMessage.textContent = getErrorMessage(error.code);
            errorMessage.style.display = 'block';
            
            // Reset button
            loginBtn.disabled = false;
            loginText.style.display = 'inline';
            loginLoader.style.display = 'none';
        }
    });
}

// Logout Handler
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        
        try {
            await auth.signOut();
            showNotification('Berhasil logout!', 'success');
            window.location.href = 'login.html';
        } catch (error) {
            console.error('Logout error:', error);
            showNotification('Gagal logout!', 'error');
        }
    });
}

// Helper: Get User Role
async function getUserRole(userId) {
    try {
        const snapshot = await usersRef.child(userId).child('role').once('value');
        return snapshot.val() || 'siswa';
    } catch (error) {
        console.error('Error getting user role:', error);
        return 'siswa';
    }
}

// Helper: Update User Info in Navbar
async function updateUserInfo(user) {
    const userName = document.getElementById('userName') || 
                     document.getElementById('studentName') || 
                     document.getElementById('teacherName') ||
                     document.getElementById('guruName');
    
    if (userName) {
        try {
            const snapshot = await usersRef.child(user.uid).once('value');
            const userData = snapshot.val();
            
            if (userData && userData.name) {
                userName.textContent = userData.name;
            } else {
                userName.textContent = user.email.split('@')[0];
            }
        } catch (error) {
            userName.textContent = user.email.split('@')[0];
        }
    }
}

// Helper: Error Messages in Indonesian
function getErrorMessage(errorCode) {
    const errorMessages = {
        'auth/invalid-email': 'Email tidak valid!',
        'auth/user-disabled': 'Akun ini telah dinonaktifkan!',
        'auth/user-not-found': 'Email tidak terdaftar!',
        'auth/wrong-password': 'Password salah!',
        'auth/email-already-in-use': 'Email sudah digunakan!',
        'auth/weak-password': 'Password terlalu lemah (minimal 6 karakter)!',
        'auth/network-request-failed': 'Koneksi internet bermasalah!',
        'auth/too-many-requests': 'Terlalu banyak percobaan, coba lagi nanti!'
    };
    
    return errorMessages[errorCode] || 'Terjadi kesalahan, coba lagi!';
}

// Register Link Handler (for future implementation)
const registerLink = document.getElementById('registerLink');
if (registerLink) {
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Fitur registrasi akan segera hadir!\n\nUntuk demo, gunakan:\n\nSiswa: siswa@demo.com / password123\nGuru: guru@demo.com / password123');
    });
}

console.log('Auth module loaded! 🔐');