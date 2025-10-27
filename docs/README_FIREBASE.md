# 🔥 Sistema de Monitoreo de Orquídeas - Firebase

## Descripción
Prototipo web para el **Calendario de Riego** usando **Firebase Firestore** (sin necesidad de servidor backend).

## 📋 Requerimientos Funcionales Implementados
1. ✅ **Establecer el calendario de riego** - Los usuarios pueden programar fechas de riego
2. ✅ **Guardar riegos en la nube** - Almacenamiento en Firebase Firestore

## 🚀 Configuración e Instalación

### Paso 1: Crear proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en **"Agregar proyecto"**
3. Dale un nombre: `sistema-orquideas`
4. Sigue los pasos (puedes desactivar Google Analytics)
5. Una vez creado, haz clic en el ícono **Web** (`</>`)
6. Registra tu app con el nombre `Sistema Orquideas Web`
7. **Copia** las credenciales de configuración

### Paso 2: Configurar Firestore

1. En Firebase Console, ve a **Build → Firestore Database**
2. Haz clic en **"Crear base de datos"**
3. Selecciona **"Comenzar en modo de prueba"** (para desarrollo)
4. Selecciona una ubicación (ej: `us-central`)
5. Haz clic en **Crear**

### Paso 3: Configurar el proyecto

1. Abre el archivo `public/firebaseConfig.js`
2. Reemplaza `TU_API_KEY_AQUI` y demás valores con los de tu proyecto Firebase
3. Guarda el archivo

### Paso 4: Ejecutar el proyecto

**Opción A: Usar Live Server (VS Code)**
1. Instala la extensión "Live Server" en VS Code
2. Haz clic derecho en `public/inicio.html`
3. Selecciona **"Open with Live Server"**

**Opción B: Publicar con Firebase Hosting (GRATIS)**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## 🌐 Uso del Sistema

### Acceder al sistema
1. Abre `inicio.html` en tu navegador o con Live Server
2. Verás la página de inicio con dos opciones:
   - 📊 **Visualización de Datos** - Dashboard con sensores simulados
   - 📅 **Calendario de Riego** - Sistema con Firebase

### Programar un riego
1. Haz clic en "Calendario de Riego"
2. Selecciona una fecha
3. Ingresa un correo electrónico
4. (Opcional) Agrega una nota
5. Haz clic en "Guardar Riego"
6. ✅ Se guardará en Firebase Firestore

## 📁 Estructura del Proyecto
```
Sistema de Orquideas/
├── public/
│   ├── inicio.html          # Página principal
│   ├── calendario.html      # Calendario con Firebase
│   ├── dashboard.html       # Dashboard con sensores
│   └── firebaseConfig.js    # Configuración Firebase
├── package.json
└── README.md
```

## 🔧 Tecnologías Utilizadas
- **Frontend:** HTML, CSS (Materialize), JavaScript
- **Base de Datos:** Firebase Firestore (NoSQL en la nube)
- **Hosting:** Firebase Hosting (opcional)

## 🔥 Ventajas de Firebase
- ✅ No necesitas servidor local (XAMPP, MySQL)
- ✅ No necesitas Node.js
- ✅ Base de datos en la nube
- ✅ Puedes publicarlo online GRATIS
- ✅ Actualizaciones en tiempo real
- ✅ Sin problemas de API keys

## 📝 Estructura de Datos en Firestore

**Colección:** `riegos`

**Documento:**
```json
{
  "fecha": "2025-10-30",
  "email": "usuario@ejemplo.com",
  "nota": "Riego especial",
  "timestamp": "2025-10-26T15:30:00Z"
}
```

## ✅ Para Entregar a tu Docente
1. Muestra la página de inicio
2. **Dashboard:** Demuestra las lecturas simuladas
3. **Calendario:** Programa un riego y muestra que se guarda en Firebase
4. **Firebase Console:** Muestra los datos guardados en Firestore

## 🌐 Publicar Online (Opcional)

Si quieres publicar tu proyecto online GRATIS:

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar
firebase init hosting

# Publicar
firebase deploy
```

Tu proyecto estará disponible en: `https://sistema-orquideas.web.app`

---
**Desarrollado por Vicente Muñoz - 2025**
