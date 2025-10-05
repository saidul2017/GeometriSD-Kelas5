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

console.log('Firebase initialized successfully!');