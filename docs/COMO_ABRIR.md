# 🎯 CÓMO ABRIR Y EJECUTAR EL PROYECTO

## 🖱️ Método 1: Doble Click (Más Fácil)

1. Ve a la carpeta `public/`
2. Busca el archivo `inicio.html`
3. **Doble click** en `inicio.html`
4. Se abrirá en tu navegador predeterminado
5. ¡Listo! Ya puedes usar el sistema

## 🚀 Método 2: Live Server (Recomendado para desarrollo)

### Si tienes VS Code:

1. Instala la extensión **"Live Server"** (by Ritwick Dey)
2. Click derecho en `public/inicio.html`
3. Selecciona **"Open with Live Server"**
4. Se abrirá en `http://127.0.0.1:5500/public/inicio.html`

### Ventajas de Live Server:
- ✅ Recarga automática al guardar cambios
- ✅ Mejor para desarrollo
- ✅ Simula un servidor web real

## 🌐 Método 3: Servidor HTTP Simple

Si tienes Python instalado:

```powershell
cd public
python -m http.server 8000
```

Luego abre: `http://localhost:8000/inicio.html`

Si tienes Node.js:

```powershell
npx http-server public -p 8000
```

Luego abre: `http://localhost:8000/inicio.html`

## ⚠️ IMPORTANTE: Antes de Abrir

**¿Ya configuraste Firebase?**

❌ **NO** → Lee primero [CONFIGURACION_RAPIDA.md](CONFIGURACION_RAPIDA.md)

✅ **SÍ** → ¡Adelante! Abre `public/inicio.html`

## 🎮 Navegación del Sistema

Una vez abierto `inicio.html`:

```
📱 Inicio
  ├─► 📊 Visualización de Datos → dashboard.html
  │    └─► Gráficos de temperatura/humedad
  │
  └─► 📅 Calendario de Riego 🔥 → calendario.html
       └─► Programar riegos con Firebase
```

## 🔍 Verificar que Funciona

### Dashboard:
1. Click en "Visualización de Datos"
2. Deberías ver:
   - Temperatura actual
   - Humedad actual
   - Gráfico con líneas azul (temp) y verde (humedad)
   - Últimos eventos de riego

### Calendario:
1. Click en "Calendario de Riego 🔥"
2. Deberías ver:
   - Campo de fecha (datepicker)
   - Campo de email
   - Campo de nota (opcional)
   - Lista de riegos programados

## ❓ Problemas Comunes

### "No se puede conectar a Firebase"
- ✅ Verifica que configuraste `firebaseConfig` en `calendario.html`
- ✅ Asegúrate de que Firestore esté habilitado en Firebase Console

### "La página no carga"
- ✅ Verifica que estés abriendo `inicio.html` (no `calendario.html` directamente)
- ✅ Revisa la consola del navegador (F12) para ver errores

### "Los datos no se guardan"
- ✅ Verifica tu configuración de Firebase
- ✅ Asegúrate de que Firestore esté en "modo de prueba"
- ✅ Abre Firebase Console → Firestore Database para ver si se crean datos

## 📞 Ayuda

Si tienes problemas:
1. Abre la consola del navegador (presiona **F12**)
2. Ve a la pestaña **"Console"**
3. Busca mensajes de error en rojo
4. Copia el error y busca solución

---

**¡Disfruta tu Sistema de Orquídeas! 🌸**
