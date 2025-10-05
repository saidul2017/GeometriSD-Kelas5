// Materi Data - Konten Pembelajaran Geometri

const materiData = {
    segitiga: {
        title: "Segitiga",
        icon: "🔺",
        category: "Bangun Datar",
        description: "Pelajari semua tentang segitiga, rumus luas dan keliling",
        sections: [
            {
                id: 1,
                title: "Apa itu Segitiga?",
                content: `
                    <h3>🔺 Pengertian Segitiga</h3>
                    <p>Segitiga adalah bangun datar yang memiliki <strong>3 sisi</strong> dan <strong>3 sudut</strong>.</p>
                    <p>Jumlah semua sudut dalam segitiga selalu <strong>180°</strong>.</p>
                    
                    <div class="info-box">
                        <strong>💡 Tahukah Kamu?</strong>
                        <p>Segitiga adalah bangun datar yang paling kuat dan sering digunakan dalam konstruksi!</p>
                    </div>
                `
            },
            {
                id: 2,
                title: "Jenis-jenis Segitiga",
                content: `
                    <h3>📐 Berdasarkan Panjang Sisi:</h3>
                    <div class="types-grid">
                        <div class="type-card">
                            <div class="type-icon">🔺</div>
                            <h4>Segitiga Sama Sisi</h4>
                            <p>Ketiga sisinya sama panjang</p>
                            <p>Ketiga sudutnya = 60°</p>
                        </div>
                        <div class="type-card">
                            <div class="type-icon">🔻</div>
                            <h4>Segitiga Sama Kaki</h4>
                            <p>Dua sisi sama panjang</p>
                            <p>Dua sudut sama besar</p>
                        </div>
                        <div class="type-card">
                            <div class="type-icon">📐</div>
                            <h4>Segitiga Sembarang</h4>
                            <p>Ketiga sisi berbeda</p>
                            <p>Ketiga sudut berbeda</p>
                        </div>
                    </div>

                    <h3 style="margin-top: 30px;">📏 Berdasarkan Besar Sudut:</h3>
                    <div class="types-grid">
                        <div class="type-card">
                            <div class="type-icon">⬜</div>
                            <h4>Segitiga Siku-siku</h4>
                            <p>Memiliki satu sudut 90°</p>
                        </div>
                        <div class="type-card">
                            <div class="type-icon">◀</div>
                            <h4>Segitiga Lancip</h4>
                            <p>Semua sudut < 90°</p>
                        </div>
                        <div class="type-card">
                            <div class="type-icon">◣</div>
                            <h4>Segitiga Tumpul</h4>
                            <p>Memiliki satu sudut > 90°</p>
                        </div>
                    </div>
                `
            },
            {
                id: 3,
                title: "Rumus Luas Segitiga",
                content: `
                    <h3>📊 Rumus Luas Segitiga</h3>
                    <div class="formula-box">
                        <div class="formula-main">
                            Luas = <strong>½ × alas × tinggi</strong>
                        </div>
                        <div class="formula-symbol">
                            L = ½ × a × t
                        </div>
                    </div>

                    <h4>📝 Contoh Soal:</h4>
                    <div class="example-box">
                        <p><strong>Soal:</strong> Sebuah segitiga memiliki alas 10 cm dan tinggi 8 cm. Hitunglah luasnya!</p>
                        <p><strong>Penyelesaian:</strong></p>
                        <p>Diketahui:</p>
                        <ul>
                            <li>Alas (a) = 10 cm</li>
                            <li>Tinggi (t) = 8 cm</li>
                        </ul>
                        <p>Ditanya: Luas = ?</p>
                        <p>Jawab:</p>
                        <p>L = ½ × a × t</p>
                        <p>L = ½ × 10 × 8</p>
                        <p>L = ½ × 80</p>
                        <p class="answer">L = <strong>40 cm²</strong> ✅</p>
                    </div>
                `
            },
            {
                id: 4,
                title: "Rumus Keliling Segitiga",
                content: `
                    <h3>📏 Rumus Keliling Segitiga</h3>
                    <div class="formula-box">
                        <div class="formula-main">
                            Keliling = <strong>sisi 1 + sisi 2 + sisi 3</strong>
                        </div>
                        <div class="formula-symbol">
                            K = a + b + c
                        </div>
                    </div>

                    <h4>📝 Contoh Soal:</h4>
                    <div class="example-box">
                        <p><strong>Soal:</strong> Segitiga ABC memiliki sisi AB = 5 cm, BC = 7 cm, dan AC = 8 cm. Berapakah kelilingnya?</p>
                        <p><strong>Penyelesaian:</strong></p>
                        <p>Diketahui:</p>
                        <ul>
                            <li>Sisi a = 5 cm</li>
                            <li>Sisi b = 7 cm</li>
                            <li>Sisi c = 8 cm</li>
                        </ul>
                        <p>Ditanya: Keliling = ?</p>
                        <p>Jawab:</p>
                        <p>K = a + b + c</p>
                        <p>K = 5 + 7 + 8</p>
                        <p class="answer">K = <strong>20 cm</strong> ✅</p>
                    </div>
                `
            },
            {
                id: 5,
                title: "Latihan & Kalkulator",
                content: `
                    <h3>🧮 Kalkulator Segitiga</h3>
                    <p>Gunakan kalkulator di bawah untuk menghitung luas dan keliling segitiga!</p>
                    <div id="calculatorSection"></div>
                `
            }
        ]
    },
    persegi: {
        title: "Persegi",
        icon: "🟦",
        category: "Bangun Datar",
        description: "Pelajari sifat, rumus luas dan keliling persegi",
        sections: [
            {
                id: 1,
                title: "Apa itu Persegi?",
                content: `
                    <h3>🟦 Pengertian Persegi</h3>
                    <p>Persegi adalah bangun datar yang memiliki <strong>4 sisi sama panjang</strong> dan <strong>4 sudut siku-siku (90°)</strong>.</p>
                    
                    <div class="info-box">
                        <strong>💡 Ciri-ciri Persegi:</strong>
                        <ul>
                            <li>✅ Memiliki 4 sisi sama panjang</li>
                            <li>✅ Memiliki 4 sudut sama besar (90°)</li>
                            <li>✅ Memiliki 2 diagonal sama panjang</li>
                            <li>✅ Diagonal berpotongan tegak lurus</li>
                        </ul>
                    </div>
                `
            },
            {
                id: 2,
                title: "Sifat-sifat Persegi",
                content: `
                    <h3>⭐ Sifat-sifat Persegi</h3>
                    <div class="types-grid">
                        <div class="type-card">
                            <div class="type-icon">📏</div>
                            <h4>Sisi</h4>
                            <p>4 sisi sama panjang</p>
                        </div>
                        <div class="type-card">
                            <div class="type-icon">⬜</div>
                            <h4>Sudut</h4>
                            <p>4 sudut siku-siku (90°)</p>
                        </div>
                        <div class="type-card">
                            <div class="type-icon">✂️</div>
                            <h4>Diagonal</h4>
                            <p>2 diagonal sama panjang</p>
                        </div>
                        <div class="type-card">
                            <div class="type-icon">🔄</div>
                            <h4>Simetri</h4>
                            <p>4 sumbu simetri</p>
                        </div>
                    </div>
                `
            },
            {
                id: 3,
                title: "Rumus Luas Persegi",
                content: `
                    <h3>📊 Rumus Luas Persegi</h3>
                    <div class="formula-box">
                        <div class="formula-main">
                            Luas = <strong>sisi × sisi</strong>
                        </div>
                        <div class="formula-symbol">
                            L = s × s = s²
                        </div>
                    </div>

                    <h4>📝 Contoh Soal:</h4>
                    <div class="example-box">
                        <p><strong>Soal:</strong> Sebuah persegi memiliki panjang sisi 8 cm. Hitunglah luasnya!</p>
                        <p><strong>Penyelesaian:</strong></p>
                        <p>Diketahui: Sisi (s) = 8 cm</p>
                        <p>Ditanya: Luas = ?</p>
                        <p>Jawab:</p>
                        <p>L = s × s</p>
                        <p>L = 8 × 8</p>
                        <p class="answer">L = <strong>64 cm²</strong> ✅</p>
                    </div>
                `
            },
            {
                id: 4,
                title: "Rumus Keliling Persegi",
                content: `
                    <h3>📏 Rumus Keliling Persegi</h3>
                    <div class="formula-box">
                        <div class="formula-main">
                            Keliling = <strong>4 × sisi</strong>
                        </div>
                        <div class="formula-symbol">
                            K = 4 × s
                        </div>
                    </div>

                    <h4>📝 Contoh Soal:</h4>
                    <div class="example-box">
                        <p><strong>Soal:</strong> Keliling sebuah persegi adalah 24 cm. Berapakah panjang sisinya?</p>
                        <p><strong>Penyelesaian:</strong></p>
                        <p>Diketahui: Keliling (K) = 24 cm</p>
                        <p>Ditanya: Sisi (s) = ?</p>
                        <p>Jawab:</p>
                        <p>K = 4 × s</p>
                        <p>24 = 4 × s</p>
                        <p>s = 24 ÷ 4</p>
                        <p class="answer">s = <strong>6 cm</strong> ✅</p>
                    </div>
                `
            },
            {
                id: 5,
                title: "Latihan & Kalkulator",
                content: `
                    <h3>🧮 Kalkulator Persegi</h3>
                    <p>Gunakan kalkulator di bawah untuk menghitung luas dan keliling persegi!</p>
                    <div id="calculatorSection"></div>
                `
            }
        ]
    }
};

// Export
window.materiData = materiData;
console.log('Materi data loaded! 📚', Object.keys(materiData));