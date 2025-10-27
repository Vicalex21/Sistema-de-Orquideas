# 🚀 GUÍA RÁPIDA DE CONFIGURACIÓN - FIREBASE

## ⚡ Pasos Rápidos (5 minutos)

### 1️⃣ Crear Proyecto Firebase

1. Abre: https://console.firebase.google.com/
2. Click en **"Agregar proyecto"**
3. Nombre: `sistema-orquideas` → Continuar
4. Desactiva Google Analytics → Crear proyecto
5. Espera a que se cree (30 segundos)

### 2️⃣ Configurar Firestore

1. En el menú lateral: **Build** → **Firestore Database**
2. Click **"Crear base de datos"**
3. Selecciona **"Comenzar en modo de prueba"**
4. Ubicación: **us-central** (o la más cercana)
5. Click **"Habilitar"**

### 3️⃣ Obtener Credenciales

1. Click en el ícono de configuración ⚙️ (arriba izquierda)
2. **Configuración del proyecto**
3. En "Tus apps" → Click en el ícono Web **`</>`**
4. Nombre de la app: `Sistema Orquideas`
5. Click **"Registrar app"**
6. **¡COPIA TODO EL CÓDIGO `firebaseConfig`!**

Verás algo como:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "sistema-orquideas-xxxxx.firebaseapp.com",
  projectId: "sistema-orquideas-xxxxx",
  storageBucket: "sistema-orquideas-xxxxx.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:xxxxxxxxxxxxxxxxxxxxx"
};
```

### 4️⃣ Configurar el Proyecto

1. Abre `public/calendario_firebase.html`
2. Busca la línea 136 (aproximadamente):
```javascript
const firebaseConfig = {
    apiKey: "TU_API_KEY_AQUI",  // ← REEMPLAZA ESTO
```
3. **Reemplaza TODO el objeto `firebaseConfig`** con el que copiaste
4. Guarda el archivo

### 5️⃣ Ejecutar

**Opción A: Live Server** (Recomendado)
1. Instala extensión "Live Server" en VS Code
2. Click derecho en `public/inicio.html`
3. **"Open with Live Server"**

**Opción B: Abrir directamente**
1. Doble click en `public/inicio.html`
2. Se abrirá en tu navegador

## ✅ Verificar que Funciona

1. Click en **"Calendario de Riego 🔥"**
2. Programa un riego (fecha + email)
3. Click en **"Guardar en Firebase"**
4. Deberías ver el toast: ✅ "Riego guardado en Firebase"
5. Ve a Firebase Console → Firestore Database
6. Deberías ver una colección `riegos` con tu dato

## 🎉 ¡Listo!

Tu proyecto ahora usa Firebase y está 100% funcional sin necesidad de:
- ❌ MySQL
- ❌ Node.js server
- ❌ Brevo
- ❌ XAMPP

## 🌐 Bonus: Publicar Online (Opcional)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Selecciona "public" como directorio
firebase deploy
```

Tu app estará en: `https://sistema-orquideas-xxxxx.web.app`

---

**¿Problemas?**
- Verifica que copiaste TODA la configuración de Firebase
- Asegúrate de que Firestore esté en "modo de prueba"
- Abre la consola del navegador (F12) para ver errores
