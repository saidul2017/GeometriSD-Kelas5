#!/bin/bash

# Script untuk menjalankan server lokal
# Geometri SD Kelas 5

echo "╔═══════════════════════════════════════════╗"
echo "║   🚀 Starting Geometri SD Server...      ║"
echo "╚═══════════════════════════════════════════╝"
echo ""

# Check if port 8080 is already in use
if lsof -Pi :8080 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo "⚠️  Port 8080 is already in use!"
    echo "   Trying to kill existing process..."
    kill -9 $(lsof -t -i:8080) 2>/dev/null
    sleep 1
fi

# Start server
cd public

echo "✅ Starting server on http://localhost:8080"
echo ""
echo "📍 Access the website at:"
echo "   → http://localhost:8080"
echo ""
echo "👤 Demo Accounts:"
echo "   📚 Student: siswa@demo.com / siswa123"
echo "   👩‍🏫 Teacher: guru@demo.com / guru123"
echo ""
echo "Press Ctrl+C to stop the server"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Try Python 3 first, then Python 2
if command -v python3 &> /dev/null; then
    python3 -m http.server 8080
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8080
else
    echo "❌ Python not found!"
    echo "   Please install Python or use: npx http-server public -p 8080"
    exit 1
fi
