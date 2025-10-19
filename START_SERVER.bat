@echo off
REM Script untuk menjalankan server lokal di Windows
REM Geometri SD Kelas 5

echo ╔═══════════════════════════════════════════╗
echo ║   🚀 Starting Geometri SD Server...      ║
echo ╚═══════════════════════════════════════════╝
echo.

cd public

echo ✅ Starting server on http://localhost:8080
echo.
echo 📍 Access the website at:
echo    → http://localhost:8080
echo.
echo 👤 Demo Accounts:
echo    📚 Student: siswa@demo.com / siswa123
echo    👩‍🏫 Teacher: guru@demo.com / guru123
echo.
echo Press Ctrl+C to stop the server
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.

REM Try Python 3 first
python -m http.server 8080

if errorlevel 1 (
    echo ❌ Python not found!
    echo    Please install Python or use: npx http-server public -p 8080
    pause
    exit /b 1
)
