/* ========================================
   FIREBASE CONFIGURATION
   Geometri SD Kelas 5
======================================== */

// Firebase Configuration
// GANTI dengan kredensial Firebase project Anda!
const firebaseConfig = {
    apiKey: "AIzaSyBb2E3FBqTK-hmW2MljEOUKpbtJB9va6Qw",
    authDomain: "geometri-sd-kelas5.firebaseapp.com",
    databaseURL: "https://geometri-sd-kelas5-default-rtdb.firebaseio.com",
    projectId: "geometri-sd-kelas5",
    storageBucket: "geometri-sd-kelas5.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Services
const auth = firebase.auth();
const database = firebase.database();

// Database References
const usersRef = database.ref('users');
const progressRef = database.ref('progress');
const quizzesRef = database.ref('quizzes');
const materialsRef = database.ref('materials');

// Helper: Get Current User ID
function getCurrentUserId() {
    const user = auth.currentUser;
    return user ? user.uid : null;
}

// Helper: Get Current User Data
async function getCurrentUserData() {
    const userId = getCurrentUserId();
    if (!userId) return null;
    
    try {
        const snapshot = await usersRef.child(userId).once('value');
        return snapshot.val();
    } catch (error) {
        console.error('Error getting user data:', error);
        return null;
    }
}

// Helper: Update User Progress
async function updateProgress(userId, materialId, progress) {
    try {
        await progressRef.child(userId).child(materialId).update({
            progress: progress,
            lastUpdated: firebase.database.ServerValue.TIMESTAMP
        });
        return true;
    } catch (error) {
        console.error('Error updating progress:', error);
        return false;
    }
}

// Helper: Save Quiz Result
async function saveQuizResult(userId, quizData) {
    try {
        const quizId = quizzesRef.push().key;
        await quizzesRef.child(userId).child(quizId).set({
            ...quizData,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });
        return quizId;
    } catch (error) {
        console.error('Error saving quiz result:', error);
        return null;
    }
}

// Helper: Show Notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span>${type === 'success' ? '✓' : '✗'}</span>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Demo Users Data (for testing)
const demoUsers = {
    'siswa@demo.com': {
        email: 'siswa@demo.com',
        password: 'password123',
        role: 'siswa',
        name: 'Budi Siswa'
    },
    'guru@demo.com': {
        email: 'guru@demo.com',
        password: 'password123',
        role: 'guru',
        name: 'Ibu Guru'
    }
};

console.log('Firebase initialized successfully! 🔥');