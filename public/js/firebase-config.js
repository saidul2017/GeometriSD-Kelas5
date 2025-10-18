// Firebase configuration and helpers
(() => {
  'use strict';

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

  // Database references (standardized)
  const usersRef = database.ref('users');
  const progressRef = database.ref('progress');
  // Standardize results under `quiz-results/{userId}` across the app
  const quizzesRef = database.ref('quiz-results');

  // Helper: get current user ID
  function getCurrentUserId() {
    const user = auth.currentUser;
    return user ? user.uid : null;
  }

  // Helper: guard - run callback only if authenticated, otherwise redirect
  function requireAuth(onAuthenticated, onNotAuthenticated) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        if (typeof onAuthenticated === 'function') onAuthenticated(user);
      } else {
        if (typeof onNotAuthenticated === 'function') {
          onNotAuthenticated();
        } else {
          window.location.href = 'login.html';
        }
      }
    });
  }

  // Helper: update progress under progress/{uid}/materi/{materiId}
  async function updateProgress(userId, materiId, progress) {
    if (!userId || !materiId) return;

    const isCompleted = Number(progress) >= 100;

    try {
      const payload = {
        progress: Number(progress) || 0,
        completed: isCompleted,
        // Record completedAt only when completed
        ...(isCompleted ? { completedAt: firebase.database.ServerValue.TIMESTAMP } : {}),
        updatedAt: firebase.database.ServerValue.TIMESTAMP
      };

      // Write to the standardized materi path
      await progressRef.child(userId).child('materi').child(materiId).update(payload);

      return true;
    } catch (error) {
      console.error('Error updating progress:', error);
      throw error;
    }
  }

  // Helper: save quiz result under quiz-results/{uid}
  async function saveQuizResult(userId, quizData) {
    if (!userId || !quizData) return;

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

  // Export globals needed by other scripts
  window.getCurrentUserId = getCurrentUserId;
  window.updateProgress = updateProgress;
  window.saveQuizResult = saveQuizResult;
  window.requireAuth = requireAuth;

  window.usersRef = usersRef;
  window.progressRef = progressRef;
  window.quizzesRef = quizzesRef;

  console.log('Firebase initialized successfully!');
})();