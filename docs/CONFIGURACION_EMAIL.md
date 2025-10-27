# 📧 Configuración de Notificaciones por Email

## 🎯 Objetivo
Enviar un email automáticamente cada vez que se programa un riego en Firebase.

---

## 📋 Pasos de Configuración

### 1️⃣ Actualizar Firebase al Plan Blaze (GRATIS hasta cierto uso)

Firebase Cloud Functions requiere el **Plan Blaze** (pero es GRATIS para uso bajo):
- 2 millones de invocaciones gratis al mes
- Muy generoso para proyectos académicos
- Solo pagas si pasas los límites (muy difícil)

**Cómo actualizar:**
1. Ve a: https://console.firebase.google.com/
2. Selecciona tu proyecto: **sistema-orquideas**
3. En la parte inferior izquierda: **Upgrade Plan** o **Actualizar**
4. Selecciona **Blaze (Pay as you go)**
5. Agrega una tarjeta (NO te cobrará nada si no pasas los límites gratuitos)

---

### 2️⃣ Configurar Email para Enviar Notificaciones

**Opción A: Usar Gmail (Recomendado)** ⭐

1. **Habilitar verificación en 2 pasos:**
   - Ve a: https://myaccount.google.com/security
   - Busca "Verificación en 2 pasos"
   - Actívala si no lo está

2. **Crear contraseña de aplicación:**
   - Ve a: https://myaccount.google.com/apppasswords
   - Selecciona "Correo" y "Windows Computer" (o el que quieras)
   - Click en **Generar**
   - **COPIA LA CONTRASEÑA** (16 caracteres, sin espacios)

3. **Editar `functions/index.js`:**
   - Línea 13: Cambia `'TU_EMAIL@gmail.com'` por tu email
   - Línea 14: Cambia `'TU_CONTRASEÑA_DE_APP'` por la contraseña generada
   - Línea 31: Cambia `'TU_EMAIL@gmail.com'` por tu email

**Opción B: Usar Outlook/Hotmail**

1. **Editar `functions/index.js`:**
   ```javascript
   service: 'hotmail',  // En lugar de 'gmail'
   auth: {
       user: 'TU_EMAIL@hotmail.com',
       pass: 'TU_CONTRASEÑA_NORMAL'  // Outlook no requiere contraseña de app
   }
   ```

---

### 3️⃣ Instalar Firebase CLI

```powershell
npm install -g firebase-tools
```

---

### 4️⃣ Inicializar Firebase Functions

```powershell
cd "c:\Users\Acer\Desktop\Integracion\Sistema de Orquideas"
firebase login
firebase init functions
```

**Durante la configuración:**
- ¿Usar proyecto existente? → **SÍ**
- Selecciona: **sistema-orquideas**
- ¿Qué lenguaje? → **JavaScript**
- ¿Usar ESLint? → **No** (para simplificar)
- ¿Instalar dependencias? → **SÍ**

---

### 5️⃣ Instalar Dependencias

```powershell
cd functions
npm install
```

---

### 6️⃣ Desplegar a Firebase

```powershell
firebase deploy --only functions
```

Esto subirá tus funciones a Firebase. Verás algo como:
```
✔  functions[enviarNotificacionRiego(us-central1)]: Successful create operation.
✔  functions[testEmail(us-central1)]: Successful create operation.
```

---

### 7️⃣ Probar que Funciona

**Método 1: Desde tu app**
1. Abre `inicio.html`
2. Ve a "Calendario de Riego"
3. Programa un nuevo riego con TU email
4. ¡Deberías recibir un email en segundos! 📧

**Método 2: Función de prueba**
1. Ve a Firebase Console → Functions
2. Copia la URL de `testEmail`
3. Ábrela en tu navegador
4. Deberías recibir un email de prueba

---

## 🎨 Personalizar el Email

Edita `functions/index.js` líneas 36-95 para cambiar:
- El diseño del email (HTML/CSS)
- El mensaje
- Los colores
- El asunto

---

## ⚡ Cómo Funciona

```
1. Usuario programa un riego → Se guarda en Firestore
                                      ↓
2. Firebase detecta nuevo documento en colección "riegos"
                                      ↓
3. Se ejecuta la función "enviarNotificacionRiego"
                                      ↓
4. La función envía un email usando Nodemailer
                                      ↓
5. Usuario recibe email en su bandeja ✅
```

---

## 🔍 Ver Logs (Debug)

Si algo no funciona:

```powershell
firebase functions:log
```

O en Firebase Console:
1. Ve a **Functions**
2. Click en tu función
3. Pestaña **Logs**

---

## 💰 Costos (Tranquilo, es GRATIS)

**Plan Blaze - Límites Gratuitos:**
- ✅ 2,000,000 invocaciones/mes
- ✅ 400,000 GB-segundos/mes
- ✅ 200,000 CPU-segundos/mes

Para tu proyecto académico (digamos 100 riegos programados):
- Costo: **$0.00** 🎉

Solo pagarías si programas más de 2 MILLONES de riegos al mes (imposible).

---

## 🆘 Problemas Comunes

### "Error: Missing or insufficient permissions"
**Solución:** Asegúrate de haber hecho `firebase login`

### "Error: 535 Authentication failed"
**Solución:** 
- Verifica que la contraseña de aplicación de Gmail sea correcta
- Asegura que la verificación en 2 pasos esté activa

### "No recibo emails"
**Solución:**
1. Revisa la carpeta de SPAM
2. Verifica los logs: `firebase functions:log`
3. Prueba la función de test primero

### "Firebase requires Blaze plan"
**Solución:** Actualiza tu plan en Firebase Console (es gratis hasta ciertos límites)

---

## ✅ Checklist Final

- [ ] Plan Blaze activado en Firebase
- [ ] Contraseña de aplicación de Gmail creada
- [ ] `functions/index.js` editado con tu email
- [ ] Firebase CLI instalado (`npm install -g firebase-tools`)
- [ ] `firebase login` ejecutado
- [ ] `firebase init functions` completado
- [ ] Dependencias instaladas (`npm install` en carpeta functions)
- [ ] Funciones desplegadas (`firebase deploy --only functions`)
- [ ] Email de prueba recibido ✅

---

## 🎉 ¡Listo!

Ahora cada vez que programes un riego, recibirás un email automático en tu PC y teléfono (si tienes el email configurado en ambos).

**Desarrollado con 💚 - Vicente Muñoz - 2025**
