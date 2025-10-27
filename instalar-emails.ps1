# Script de instalación automática para notificaciones por email
# Sistema de Orquídeas - Firebase Cloud Functions

Write-Host "🌸 Sistema de Orquídeas - Configuración de Emails 🌸" -ForegroundColor Green
Write-Host ""

# Verificar si Firebase CLI está instalado
Write-Host "📦 Verificando Firebase CLI..." -ForegroundColor Cyan
$firebaseCLI = Get-Command firebase -ErrorAction SilentlyContinue

if (-not $firebaseCLI) {
    Write-Host "⚠️  Firebase CLI no encontrado. Instalando..." -ForegroundColor Yellow
    npm install -g firebase-tools
} else {
    Write-Host "✅ Firebase CLI ya instalado" -ForegroundColor Green
}

Write-Host ""
Write-Host "🔑 Ahora necesitas hacer login en Firebase" -ForegroundColor Cyan
Write-Host "Se abrirá tu navegador para autenticarte..." -ForegroundColor Yellow
Start-Sleep -Seconds 2

firebase login

Write-Host ""
Write-Host "📂 Instalando dependencias de Functions..." -ForegroundColor Cyan
Set-Location -Path "functions"
npm install

Write-Host ""
Write-Host "✅ ¡Instalación completada!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 PRÓXIMOS PASOS:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1️⃣  Edita el archivo: functions\index.js" -ForegroundColor White
Write-Host "    - Línea 13: Cambia 'TU_EMAIL@gmail.com' por tu email real" -ForegroundColor Gray
Write-Host "    - Línea 14: Cambia 'TU_CONTRASEÑA_DE_APP' por tu contraseña de aplicación de Gmail" -ForegroundColor Gray
Write-Host "    - Línea 31: Cambia 'TU_EMAIL@gmail.com' por tu email real" -ForegroundColor Gray
Write-Host ""
Write-Host "2️⃣  Crea una contraseña de aplicación en Gmail:" -ForegroundColor White
Write-Host "    https://myaccount.google.com/apppasswords" -ForegroundColor Cyan
Write-Host ""
Write-Host "3️⃣  Actualiza Firebase al Plan Blaze (GRATIS):" -ForegroundColor White
Write-Host "    https://console.firebase.google.com/" -ForegroundColor Cyan
Write-Host ""
Write-Host "4️⃣  Despliega las funciones:" -ForegroundColor White
Write-Host "    firebase deploy --only functions" -ForegroundColor Cyan
Write-Host ""
Write-Host "📖 Lee CONFIGURACION_EMAIL.md para más detalles" -ForegroundColor Yellow
Write-Host ""
