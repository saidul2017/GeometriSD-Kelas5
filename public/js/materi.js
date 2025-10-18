/* ========================================
   MATERI PEMBELAJARAN - INTERACTIVE LOGIC
======================================== */

// Material Data
const materiData = {
    segitiga: {
        title: '🔺 Segitiga',
        description: 'Belajar tentang segitiga dan jenis-jenisnya',
        content: `
            <div class="materi-content">
                <h2>Apa itu Segitiga?</h2>
                <p>Segitiga adalah bangun datar yang memiliki <strong>3 sisi</strong> dan <strong>3 sudut</strong>.</p>
                
                <div class="interactive-demo">
                    <svg width="200" height="200" viewBox="0 0 200 200">
                        <polygon points="100,20 20,180 180,180" 
                                 fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="3"/>
                        <text x="100" y="15" text-anchor="middle" fill="#333">A</text>
                        <text x="15" y="195" text-anchor="middle" fill="#333">B</text>
                        <text x="185" y="195" text-anchor="middle" fill="#333">C</text>
                    </svg>
                </div>

                <h3>Jenis-jenis Segitiga:</h3>
                <ul>
                    <li><strong>Segitiga Sama Sisi:</strong> Ketiga sisinya sama panjang</li>
                    <li><strong>Segitiga Sama Kaki:</strong> Dua sisi sama panjang</li>
                    <li><strong>Segitiga Sembarang:</strong> Ketiga sisi berbeda panjang</li>
                </ul>

                <h3>Rumus Segitiga:</h3>
                <div class="formula-box">
                    <p><strong>Luas:</strong> L = ½ × alas × tinggi</p>
                    <p><strong>Keliling:</strong> K = sisi A + sisi B + sisi C</p>
                </div>

                <h3>Contoh Soal:</h3>
                <div class="example-box">
                    <p><strong>Soal:</strong> Sebuah segitiga memiliki alas 10 cm dan tinggi 8 cm. Berapa luasnya?</p>
                    <p><strong>Jawab:</strong></p>
                    <p>L = ½ × alas × tinggi</p>
                    <p>L = ½ × 10 × 8</p>
                    <p>L = ½ × 80</p>
                    <p>L = <strong>40 cm²</strong></p>
                </div>

                <div class="video-container">
                    <p>📺 <strong>Video Pembelajaran:</strong></p>
                    <div class="video-placeholder">
                        <p>Video tutorial akan ditambahkan di sini</p>
                        <p style="font-size: 3rem;">🎥</p>
                    </div>
                </div>
            </div>
        `,
        questions: 5
    },
    persegi: {
        title: '🟥 Persegi',
        description: 'Memahami sifat dan rumus persegi',
        content: `
            <div class="materi-content">
                <h2>Apa itu Persegi?</h2>
                <p>Persegi adalah bangun datar yang memiliki <strong>4 sisi sama panjang</strong> dan <strong>4 sudut siku-siku</strong>.</p>
                
                <div class="interactive-demo">
                    <svg width="200" height="200" viewBox="0 0 200 200">
                        <rect x="50" y="50" width="100" height="100" 
                              fill="#ef4444" opacity="0.3" stroke="#ef4444" stroke-width="3"/>
                        <text x="45" y="45" fill="#333">A</text>
                        <text x="155" y="45" fill="#333">B</text>
                        <text x="155" y="165" fill="#333">C</text>
                        <text x="45" y="165" fill="#333">D</text>
                    </svg>
                </div>

                <h3>Sifat-sifat Persegi:</h3>
                <ul>
                    <li>Memiliki 4 sisi yang sama panjang</li>
                    <li>Memiliki 4 sudut siku-siku (90°)</li>
                    <li>Memiliki 2 diagonal yang sama panjang</li>
                    <li>Diagonal berpotongan tegak lurus</li>
                </ul>

                <h3>Rumus Persegi:</h3>
                <div class="formula-box">
                    <p><strong>Luas:</strong> L = sisi × sisi = s²</p>
                    <p><strong>Keliling:</strong> K = 4 × sisi = 4s</p>
                </div>

                <h3>Contoh Soal:</h3>
                <div class="example-box">
                    <p><strong>Soal:</strong> Sebuah persegi memiliki sisi 12 cm. Berapa luas dan kelilingnya?</p>
                    <p><strong>Jawab:</strong></p>
                    <p>Luas = s × s = 12 × 12 = <strong>144 cm²</strong></p>
                    <p>Keliling = 4 × s = 4 × 12 = <strong>48 cm</strong></p>
                </div>
            </div>
        `,
        questions: 5
    },
    lingkaran: {
        title: '🔵 Lingkaran',
        description: 'Mengenal lingkaran, keliling, dan luasnya',
        content: `
            <div class="materi-content">
                <h2>Apa itu Lingkaran?</h2>
                <p>Lingkaran adalah bangun datar yang semua titik di tepinya memiliki jarak yang sama dari titik pusat.</p>
                
                <div class="interactive-demo">
                    <svg width="200" height="200" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="60" 
                                fill="#3b82f6" opacity="0.3" stroke="#3b82f6" stroke-width="3"/>
                        <circle cx="100" cy="100" r="3" fill="#000"/>
                        <line x1="100" y1="100" x2="160" y2="100" stroke="#000" stroke-width="2"/>
                        <text x="125" y="95" fill="#333">r</text>
                    </svg>
                </div>

                <h3>Bagian-bagian Lingkaran:</h3>
                <ul>
                    <li><strong>Jari-jari (r):</strong> Jarak dari pusat ke tepi lingkaran</li>
                    <li><strong>Diameter (d):</strong> Jarak dari satu tepi ke tepi lain melalui pusat (d = 2r)</li>
                    <li><strong>Nilai π (pi):</strong> 3,14 atau 22/7</li>
                </ul>

                <h3>Rumus Lingkaran:</h3>
                <div class="formula-box">
                    <p><strong>Luas:</strong> L = π × r²</p>
                    <p><strong>Keliling:</strong> K = 2 × π × r atau π × d</p>
                </div>

                <h3>Contoh Soal:</h3>
                <div class="example-box">
                    <p><strong>Soal:</strong> Sebuah lingkaran memiliki jari-jari 7 cm. Berapa kelilingnya? (π = 22/7)</p>
                    <p><strong>Jawab:</strong></p>
                    <p>K = 2 × π × r</p>
                    <p>K = 2 × (22/7) × 7</p>
                    <p>K = 2 × 22</p>
                    <p>K = <strong>44 cm</strong></p>
                </div>
            </div>
        `,
        questions: 5
    }
    // Add more materials as needed
};

// Category Tab Switching
const categoryTabs = document.querySelectorAll('.tab-btn');
categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        categoryTabs.forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.category-content').forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        const category = tab.getAttribute('data-category');
        document.getElementById(category).classList.add('active');
    });
});

// Open Material Detail
function openMateri(materiId) {
    if (!materiId) {
        showError('ID materi tidak valid!');
        return;
    }
    
    const materi = materiData[materiId];
    if (!materi) {
        showError('Materi belum tersedia!');
        return;
    }
    
    const modal = document.getElementById('materiModal');
    const materiContent = document.getElementById('materiContent');
    
    if (!modal || !materiContent) {
        console.error('Modal elements not found');
        return;
    }
    
    materiContent.innerHTML = `
        <h1>${materi.title}</h1>
        <p class="materi-desc">${materi.description}</p>
        ${materi.content}
        <div class="materi-actions">
            <button class="btn btn-success" onclick="completeMateri('${materiId}')">✓ Selesai</button>
            <button class="btn btn-primary" onclick="goToQuiz('${materiId}')">Latihan Soal →</button>
        </div>
    `;
    
    modal.classList.add('active');
    modal.style.display = 'flex';
    
    // Track that user started this material
    trackMaterialView(materiId);
}

// Close Modal
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
            modal.style.display = 'none';
        });
    });
});

// Close modal on outside click
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        e.target.style.display = 'none';
    }
});

// Complete Material
async function completeMateri(materiId) {
    const userId = getCurrentUserId();
    if (!userId) return;
    
    try {
        await updateProgress(userId, materiId, 100);
        showNotification('Materi berhasil diselesaikan! 🎉', 'success');
        
        // Update UI
        updateMaterialProgress(materiId, 100);
        
        // Close modal
        document.getElementById('materiModal').style.display = 'none';
    } catch (error) {
        console.error('Error completing material:', error);
        showNotification('Gagal menyimpan progress!', 'error');
    }
}

// Go to Quiz
function goToQuiz(materiId) {
    window.location.href = `kuis.html?topic=${materiId}`;
}

// Track Material View
async function trackMaterialView(materiId) {
    const userId = getCurrentUserId();
    if (!userId) return;
    
    try {
        const progressSnapshot = await progressRef.child(userId).child(materiId).once('value');
        const currentProgress = progressSnapshot.val();
        
        if (!currentProgress || currentProgress.progress < 50) {
            await updateProgress(userId, materiId, 50);
            updateMaterialProgress(materiId, 50);
        }
    } catch (error) {
        console.error('Error tracking material view:', error);
    }
}

// Update Material Progress in UI
function updateMaterialProgress(materiId, progress) {
    const card = document.querySelector(`[data-topic="${materiId}"]`);
    if (card) {
        const progressFill = card.querySelector('.progress-fill');
        const progressText = card.querySelector('.progress-text');
        
        if (progressFill) progressFill.style.width = `${progress}%`;
        if (progressText) progressText.textContent = `${progress}% selesai`;
    }
}

// Load User Progress on Page Load
async function loadMaterialProgress() {
    const userId = getCurrentUserId();
    if (!userId) return;
    
    try {
        const snapshot = await progressRef.child(userId).once('value');
        const progressData = snapshot.val() || {};
        
        Object.keys(progressData).forEach(materiId => {
            const progress = progressData[materiId].progress || 0;
            updateMaterialProgress(materiId, progress);
        });
    } catch (error) {
        console.error('Error loading progress:', error);
    }
}

// Initialize on page load
if (window.location.pathname.includes('materi.html')) {
    auth.onAuthStateChanged(user => {
        if (user) {
            loadMaterialProgress();
        }
    });
}

// Materi module initialized