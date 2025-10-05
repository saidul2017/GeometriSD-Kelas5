// Quiz Data - Soal-soal Geometri

const quizData = {
    segitiga: {
        title: "Kuis Segitiga",
        icon: "🔺",
        difficulty: "Mudah",
        timeLimit: 900, // 15 minutes in seconds
        questions: [
            {
                id: 1,
                question: "Rumus luas segitiga adalah...",
                options: [
                    "1/2 × alas × tinggi",
                    "sisi × sisi",
                    "π × r²",
                    "panjang × lebar"
                ],
                correct: 0,
                explanation: "Luas segitiga = 1/2 × alas × tinggi"
            },
            {
                id: 2,
                question: "Sebuah segitiga memiliki alas 10 cm dan tinggi 8 cm. Berapakah luasnya?",
                options: [
                    "40 cm²",
                    "80 cm²",
                    "18 cm²",
                    "160 cm²"
                ],
                correct: 0,
                explanation: "Luas = 1/2 × 10 × 8 = 40 cm²"
            },
            {
                id: 3,
                question: "Jumlah sudut dalam segitiga adalah...",
                options: [
                    "90°",
                    "180°",
                    "360°",
                    "270°"
                ],
                correct: 1,
                explanation: "Jumlah sudut dalam segitiga selalu 180°"
            },
            {
                id: 4,
                question: "Segitiga yang memiliki 3 sisi sama panjang disebut...",
                options: [
                    "Segitiga sama sisi",
                    "Segitiga sama kaki",
                    "Segitiga siku-siku",
                    "Segitiga sembarang"
                ],
                correct: 0,
                explanation: "Segitiga dengan 3 sisi sama panjang = Segitiga sama sisi"
            },
            {
                id: 5,
                question: "Keliling segitiga dengan sisi 5 cm, 7 cm, dan 8 cm adalah...",
                options: [
                    "15 cm",
                    "20 cm",
                    "21 cm",
                    "280 cm"
                ],
                correct: 1,
                explanation: "Keliling = 5 + 7 + 8 = 20 cm"
            },
            {
                id: 6,
                question: "Segitiga yang memiliki satu sudut 90° disebut...",
                options: [
                    "Segitiga lancip",
                    "Segitiga tumpul",
                    "Segitiga siku-siku",
                    "Segitiga sama kaki"
                ],
                correct: 2,
                explanation: "Segitiga dengan sudut 90° = Segitiga siku-siku"
            },
            {
                id: 7,
                question: "Alas segitiga 12 cm, tinggi 5 cm. Luasnya adalah...",
                options: [
                    "60 cm²",
                    "30 cm²",
                    "17 cm²",
                    "25 cm²"
                ],
                correct: 1,
                explanation: "Luas = 1/2 × 12 × 5 = 30 cm²"
            },
            {
                id: 8,
                question: "Segitiga yang memiliki 2 sisi sama panjang disebut...",
                options: [
                    "Segitiga sama sisi",
                    "Segitiga sama kaki",
                    "Segitiga sembarang",
                    "Segitiga siku-siku"
                ],
                correct: 1,
                explanation: "Segitiga dengan 2 sisi sama = Segitiga sama kaki"
            },
            {
                id: 9,
                question: "Tinggi segitiga 6 cm, luas 24 cm². Alasnya adalah...",
                options: [
                    "4 cm",
                    "8 cm",
                    "12 cm",
                    "18 cm"
                ],
                correct: 1,
                explanation: "Alas = (Luas × 2) / tinggi = (24 × 2) / 6 = 8 cm"
            },
            {
                id: 10,
                question: "Sifat segitiga sama sisi adalah...",
                options: [
                    "Semua sisi sama panjang dan semua sudut sama besar",
                    "Hanya 2 sisi sama panjang",
                    "Ada sudut 90°",
                    "Semua sudut berbeda"
                ],
                correct: 0,
                explanation: "Segitiga sama sisi: semua sisi & sudut sama (60°)"
            }
        ]
    },
    persegi: {
        title: "Kuis Persegi",
        icon: "🟦",
        difficulty: "Mudah",
        timeLimit: 720, // 12 minutes
        questions: [
            {
                id: 1,
                question: "Rumus luas persegi adalah...",
                options: [
                    "sisi × sisi",
                    "1/2 × alas × tinggi",
                    "panjang × lebar",
                    "4 × sisi"
                ],
                correct: 0,
                explanation: "Luas persegi = sisi × sisi atau sisi²"
            },
            {
                id: 2,
                question: "Persegi dengan sisi 8 cm memiliki luas...",
                options: [
                    "16 cm²",
                    "32 cm²",
                    "64 cm²",
                    "24 cm²"
                ],
                correct: 2,
                explanation: "Luas = 8 × 8 = 64 cm²"
            },
            {
                id: 3,
                question: "Rumus keliling persegi adalah...",
                options: [
                    "2 × sisi",
                    "4 × sisi",
                    "sisi × sisi",
                    "sisi + sisi"
                ],
                correct: 1,
                explanation: "Keliling persegi = 4 × sisi"
            },
            {
                id: 4,
                question: "Keliling persegi dengan sisi 5 cm adalah...",
                options: [
                    "10 cm",
                    "15 cm",
                    "20 cm",
                    "25 cm"
                ],
                correct: 2,
                explanation: "Keliling = 4 × 5 = 20 cm"
            },
            {
                id: 5,
                question: "Jumlah sisi persegi adalah...",
                options: [
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                correct: 1,
                explanation: "Persegi memiliki 4 sisi yang sama panjang"
            },
            {
                id: 6,
                question: "Semua sudut persegi besarnya...",
                options: [
                    "45°",
                    "60°",
                    "90°",
                    "180°"
                ],
                correct: 2,
                explanation: "Semua sudut persegi = 90° (siku-siku)"
            },
            {
                id: 7,
                question: "Luas persegi 36 cm². Panjang sisinya adalah...",
                options: [
                    "4 cm",
                    "6 cm",
                    "8 cm",
                    "9 cm"
                ],
                correct: 1,
                explanation: "Sisi = √36 = 6 cm"
            },
            {
                id: 8,
                question: "Diagonal persegi membagi persegi menjadi...",
                options: [
                    "2 segitiga sama sisi",
                    "2 segitiga siku-siku",
                    "4 persegi kecil",
                    "2 persegi panjang"
                ],
                correct: 1,
                explanation: "Diagonal membagi persegi menjadi 2 segitiga siku-siku"
            },
            {
                id: 9,
                question: "Keliling persegi 24 cm. Panjang sisinya adalah...",
                options: [
                    "4 cm",
                    "6 cm",
                    "8 cm",
                    "12 cm"
                ],
                correct: 1,
                explanation: "Sisi = Keliling ÷ 4 = 24 ÷ 4 = 6 cm"
            },
            {
                id: 10,
                question: "Ciri-ciri persegi adalah...",
                options: [
                    "4 sisi sama panjang, 4 sudut siku-siku",
                    "3 sisi sama panjang",
                    "2 pasang sisi sejajar",
                    "Hanya 2 sudut siku-siku"
                ],
                correct: 0,
                explanation: "Persegi: 4 sisi sama & 4 sudut 90°"
            }
        ]
    }
};

// Export
window.quizData = quizData;
console.log('Quiz data loaded! 🎯', Object.keys(quizData));