/* ========================================
   DASHBOARD GURU - TEACHER MONITORING
   Student Progress Monitoring System
======================================== */

// Load Teacher Dashboard Data
async function loadTeacherDashboard() {
    try {
        // Get all students
        const usersSnapshot = await usersRef.once('value');
        const allUsers = usersSnapshot.val() || {};
        
        // Filter students only
        const students = Object.entries(allUsers)
            .filter(([id, user]) => user.role === 'siswa')
            .map(([id, user]) => ({ id, ...user }));
        
        // Get progress for all students
        const progressPromises = students.map(async student => {
            const progressSnapshot = await progressRef.child(student.id).once('value');
            const quizSnapshot = await quizzesRef.child(student.id).once('value');
            
            const materialProgress = progressSnapshot.val() || {};
            const quizResults = quizSnapshot.val() || {};
            
            const completedMaterials = Object.values(materialProgress).filter(m => m.progress === 100).length;
            const quizArray = Object.values(quizResults);
            const completedQuizzes = quizArray.length;
            const avgScore = completedQuizzes > 0
                ? Math.round(quizArray.reduce((sum, q) => sum + q.score, 0) / completedQuizzes)
                : 0;
            
            return {
                ...student,
                completedMaterials,
                completedQuizzes,
                avgScore,
                lastActive: student.lastLogin || 0
            };
        });
        
        const studentsWithProgress = await Promise.all(progressPromises);
        
        // Update overall stats
        updateOverallStats(studentsWithProgress);
        
        // Display student table
        displayStudentTable(studentsWithProgress);
        
        // Display top performers
        displayTopPerformers(studentsWithProgress);
        
        // Display recent activities
        displayRecentActivities(studentsWithProgress);
        
    } catch (error) {
        console.error('Error loading teacher dashboard:', error);
    }
}

// Update Overall Stats
function updateOverallStats(students) {
    const totalStudents = students.length;
    const activeToday = students.filter(s => {
        const lastActive = new Date(s.lastActive);
        const today = new Date();
        return lastActive.toDateString() === today.toDateString();
    }).length;
    
    const avgScore = students.length > 0
        ? Math.round(students.reduce((sum, s) => sum + s.avgScore, 0) / students.length)
        : 0;
    
    const totalCompleted = students.reduce((sum, s) => sum + s.completedMaterials, 0);
    const totalMaterials = students.length * 10;
    const completionRate = totalMaterials > 0
        ? Math.round((totalCompleted / totalMaterials) * 100)
        : 0;
    
    // Update UI
    document.getElementById('totalStudents').textContent = totalStudents;
    document.getElementById('activeStudents').textContent = activeToday;
    document.getElementById('avgScore').textContent = avgScore;
    document.getElementById('completionRate').textContent = `${completionRate}%`;
}

// Display Student Table
function displayStudentTable(students) {
    const tbody = document.getElementById('studentTableBody');
    if (!tbody) return;
    
    if (students.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center">Belum ada siswa terdaftar</td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = students.map(student => {
        const scoreClass = getScoreClassification(student.avgScore);
        
        return `
            <tr>
                <td>${student.name || student.email}</td>
                <td>${student.completedMaterials}/10</td>
                <td>${student.completedQuizzes}</td>
                <td><span class="score-badge ${scoreClass.class}">${student.avgScore}</span></td>
                <td><span class="status-badge ${scoreClass.class}">${scoreClass.text}</span></td>
                <td>
                    <button class="btn btn-small btn-primary" onclick="viewStudentDetail('${student.id}')">
                        Detail
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

// Display Top Performers
function displayTopPerformers(students) {
    const container = document.getElementById('topPerformers');
    if (!container) return;
    
    const topStudents = students
        .sort((a, b) => b.avgScore - a.avgScore)
        .slice(0, 5);
    
    if (topStudents.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Belum ada data</p></div>';
        return;
    }
    
    container.innerHTML = topStudents.map((student, index) => {
        const medals = ['🥇', '🥈', '🥉'];
        const medal = medals[index] || '🏅';
        
        return `
            <div class="top-performer-item">
                <span class="rank">${medal}</span>
                <div class="performer-info">
                    <strong>${student.name || student.email}</strong>
                    <span class="score">${student.avgScore} poin</span>
                </div>
            </div>
        `;
    }).join('');
}

// Display Recent Activities
function displayRecentActivities(students) {
    const container = document.getElementById('recentActivities');
    if (!container) return;
    
    const activities = students
        .filter(s => s.lastActive)
        .sort((a, b) => b.lastActive - a.lastActive)
        .slice(0, 10)
        .map(student => {
            const date = new Date(student.lastActive);
            const timeAgo = getTimeAgo(date);
            
            return `
                <div class="activity-item">
                    <div class="activity-icon">👨‍🎓</div>
                    <div class="activity-content">
                        <p><strong>${student.name || student.email}</strong> aktif belajar</p>
                        <span class="activity-time">${timeAgo}</span>
                    </div>
                </div>
            `;
        }).join('');
    
    container.innerHTML = activities || '<div class="empty-state"><p>Belum ada aktivitas</p></div>';
}

// View Student Detail (Modal)
async function viewStudentDetail(studentId) {
    try {
        // Get student data
        const userSnapshot = await usersRef.child(studentId).once('value');
        const student = userSnapshot.val();
        
        // Check if student exists
        if (!student) {
            alert('Data siswa tidak ditemukan');
            return;
        }
        
        const progressSnapshot = await progressRef.child(studentId).once('value');
        const quizSnapshot = await quizzesRef.child(studentId).once('value');
        
        const materialProgress = progressSnapshot.val() || {};
        const quizResults = quizSnapshot.val() || {};
        
        // Build detail content
        const modal = document.getElementById('studentModal');
        const content = document.getElementById('studentDetailContent');
        
        content.innerHTML = `
            <div class="student-detail">
                <h3>${student.name || student.email}</h3>
                <div class="detail-stats">
                    <div class="detail-stat">
                        <strong>Email:</strong> ${student.email}
                    </div>
                    <div class="detail-stat">
                        <strong>Bergabung:</strong> ${new Date(student.lastLogin || Date.now()).toLocaleDateString('id-ID')}
                    </div>
                </div>
                
                <h4>Progress Materi:</h4>
                <div class="material-list">
                    ${Object.entries(materialProgress).map(([id, data]) => `
                        <div class="material-item">
                            <span>${id}</span>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${data.progress}%"></div>
                            </div>
                            <span>${data.progress}%</span>
                        </div>
                    `).join('') || '<p>Belum ada progress materi</p>'}
                </div>
                
                <h4>Riwayat Kuis:</h4>
                <div class="quiz-list">
                    ${Object.values(quizResults).map(quiz => `
                        <div class="quiz-item">
                            <span>${quiz.quizId || 'Quiz'}</span>
                            <span class="score-badge">${quiz.score}</span>
                        </div>
                    `).join('') || '<p>Belum ada kuis yang dikerjakan</p>'}
                </div>
            </div>
        `;
        
        modal.style.display = 'flex';
        modal.classList.add('active');
        
    } catch (error) {
        console.error('Error viewing student detail:', error);
        alert('Gagal memuat detail siswa');
    }
}

// Search Student
const searchInput = document.getElementById('searchStudent');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const rows = document.querySelectorAll('#studentTableBody tr');
        
        rows.forEach(row => {
            const name = row.cells[0]?.textContent.toLowerCase();
            if (name && name.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

// Helper function available from utils.js

// Initialize on page load
if (window.location.pathname.includes('dashboard-guru.html')) {
    auth.onAuthStateChanged(user => {
        if (user) {
            loadTeacherDashboard();
        }
    });
}

// Dashboard Guru module initialized