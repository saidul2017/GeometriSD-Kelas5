// Dashboard.js - Dashboard Logic

// Check authentication
firebase.auth().onAuthStateChanged(async (user) => {
    if (!user) {
        // Not logged in, redirect to login
        window.location.href = 'login.html';
        return;
    }
    
    // Load user data
    try {
        const snapshot = await firebase.database().ref('users/' + user.uid).once('value');
        const userData = snapshot.val();
        
        if (userData) {
            // Update user name
            const userNameEl = document.getElementById('userName');
            if (userNameEl) {
                userNameEl.textContent = userData.name || 'Siswa';
            }
            
            // Load progress data
            loadProgressData(user.uid);
        }
    } catch (error) {
        console.error('Error loading user data:', error);
    }
});

// Load progress data
async function loadProgressData(userId) {
    try {
        const snapshot = await firebase.database().ref('progress/' + userId).once('value');
        const progressData = snapshot.val();
        
        if (progressData && progressData.materi) {
            const materiArray = Object.values(progressData.materi);
            
            // Count completed materials
            const completedCount = materiArray.filter(m => m.completed).length;
            const materiSelesaiEl = document.getElementById('materiSelesai');
            if (materiSelesaiEl) {
                materiSelesaiEl.textContent = completedCount;
            }
            
            // Calculate average score
            const scores = materiArray.filter(m => m.score).map(m => m.score);
            const avgScore = scores.length > 0 
                ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) 
                : 0;
            const skorRataEl = document.getElementById('skorRata');
            if (skorRataEl) {
                skorRataEl.textContent = avgScore;
            }
            
            // Badge count (based on completed materials)
            const badgeCount = Math.floor(completedCount / 2);
            const badgeCountEl = document.getElementById('badgeCount');
            if (badgeCountEl) {
                badgeCountEl.textContent = badgeCount;
            }
        }
    } catch (error) {
        console.error('Error loading progress:', error);
    }
}

// Logout button handler
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
        try {
            await firebase.auth().signOut();
            window.location.href = 'login.html';
        } catch (error) {
            console.error('Logout error:', error);
            alert('Gagal logout. Coba lagi!');
        }
    });
}

// Dashboard module initialized