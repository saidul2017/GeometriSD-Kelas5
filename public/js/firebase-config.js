// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu-RfNK31nIejXI1Y0KlVLalCez1iCOFI",
  authDomain: "geometri-sd-kelas5.firebaseapp.com",
  databaseURL: "https://geometri-sd-kelas5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "geometri-sd-kelas5",
  storageBucket: "geometri-sd-kelas5.firebasestorage.app",
  messagingSenderId: "757222961883",
  appId: "1:757222961883:web:bf8e5d907734883c6b52fe"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firebase services
const auth = firebase.auth();
const database = firebase.database();

// Database references
const usersRef = database.ref('users');
const progressRef = database.ref('progress');
const quizzesRef = database.ref('quizzes');

// Helper function to get current user ID
function getCurrentUserId() {
    const user = firebase.auth().currentUser;
    return user ? user.uid : null;
}

// Helper function to update progress
async function updateProgress(userId, materiId, progress) {
    if (!userId || !materiId) {
        throw new Error('User ID and Material ID are required');
    }
    
    if (typeof progress !== 'number' || progress < 0 || progress > 100) {
        throw new Error('Progress must be a number between 0 and 100');
    }
    
    try {
        await progressRef.child(userId).child(materiId).set({
            progress: progress,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });
        return true;
    } catch (error) {
        console.error('Error updating progress:', error);
        throw error;
    }
}

// Helper function to save quiz result
async function saveQuizResult(userId, quizData) {
    if (!userId || !quizData) {
        throw new Error('User ID and quiz data are required');
    }
    
    // Validate quiz data
    if (typeof quizData.score !== 'number' || quizData.score < 0 || quizData.score > 100) {
        throw new Error('Invalid quiz score');
    }
    
    try {
        const quizRef = quizzesRef.child(userId).push();
        await quizRef.set({
            ...quizData,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });
        return quizRef.key;
    } catch (error) {
        console.error('Error saving quiz result:', error);
        throw error;
    }
}

// Export helper functions globally
window.getCurrentUserId = getCurrentUserId;
window.updateProgress = updateProgress;
window.saveQuizResult = saveQuizResult;
window.usersRef = usersRef;
window.progressRef = progressRef;
window.quizzesRef = quizzesRef;

// Firebase initialized