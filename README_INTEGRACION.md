# 🌺 Sistema de Orquídeas - Integración Firebase & APIs

## 📋 Índice
- [🎯 Descripción General](#-descripción-general)
- [🔥 Integración Firebase](#-integración-firebase)
- [🌐 APIs Meteorológicas](#-apis-meteorológicas)
- [🏗️ Arquitectura del Sistema](#️-arquitectura-del-sistema)
- [⚙️ Configuración Paso a Paso](#️-configuración-paso-a-paso)
- [📊 Flujo de Datos](#-flujo-de-datos)
- [🔧 Funcionalidades Implementadas](#-funcionalidades-implementadas)
- [🚀 Cómo Usar el Sistema](#-cómo-usar-el-sistema)
- [🛠️ Solución de Problemas](#️-solución-de-problemas)

---

## 🎯 Descripción General

Este sistema integra **Firebase Firestore** para almacenamiento de datos de riego con **múltiples APIs meteorológicas** para obtener condiciones climáticas reales. Está diseñado específicamente para el monitoreo y cuidado de orquídeas, evaluando la adecuación climática de diferentes ubicaciones geográficas.

### **Componentes Principales:**
- **Frontend:** HTML5 + Materialize CSS + JavaScript (Vanilla)
- **Base de datos:** Firebase Firestore (NoSQL)
- **APIs externas:** OpenWeatherMap, WTTR.in, WeatherAPI
- **Funciones backend:** Firebase Functions (Node.js)

---

## 🔥 Integración Firebase

### **1. Configuración Base**
El sistema usa Firebase para:
- **Firestore Database:** Almacenar eventos de riego programados
- **Firebase Functions:** Procesamiento backend y envío de emails
- **Firebase Hosting:** Despliegue de la aplicación web

### **2. Estructura de Datos en Firestore**

```javascript
// Colección: 'riegos'
{
  id: "auto-generated-id",
  fecha: "2025-11-04",           // Fecha del riego (YYYY-MM-DD)
  hora: "14:30",                 // Hora del riego (HH:MM)
  planta: "Orquídea Cattleya",   // Nombre de la planta
  notas: "Riego después de fertilizar",
  timestamp: FirebaseTimestamp,   // Timestamp automático
  usuario: "sistema",            // Usuario que programó el riego
  estado: "programado"           // Estados: programado, completado, cancelado
}
```

### **3. Configuración Firebase (`firebaseConfig.ejemplo.js`)**

```javascript
// Configuración que debes personalizar
const firebaseConfig = {
    apiKey: "TU_API_KEY_AQUI",
    authDomain: "TU_PROJECT_ID.firebaseapp.com",
    projectId: "TU_PROJECT_ID", 
    storageBucket: "TU_PROJECT_ID.appspot.com",
    messagingSenderId: "TU_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicialización
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
```

### **4. Operaciones CRUD Implementadas**

```javascript
// CREATE - Programar nuevo riego
async function programarRiego(datos) {
    try {
        const docRef = await db.collection('riegos').add({
            fecha: datos.fecha,
            hora: datos.hora,
            planta: datos.planta,
            notas: datos.notas,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            estado: 'programado'
        });
        console.log("Riego programado con ID: ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error programando riego: ", error);
        throw error;
    }
}

// READ - Obtener riegos programados
async function obtenerRiegos() {
    try {
        const snapshot = await db.collection('riegos')
            .orderBy('fecha', 'asc')
            .get();
        
        const riegos = [];
        snapshot.forEach(doc => {
            riegos.push({
                id: doc.id,
                ...doc.data()
            });
        });
        return riegos;
    } catch (error) {
        console.error("Error obteniendo riegos: ", error);
        throw error;
    }
}

// UPDATE - Actualizar estado del riego
async function actualizarRiego(riegoId, nuevosDatos) {
    try {
        await db.collection('riegos').doc(riegoId).update(nuevosDatos);
        console.log("Riego actualizado exitosamente");
    } catch (error) {
        console.error("Error actualizando riego: ", error);
        throw error;
    }
}

// DELETE - Eliminar riego
async function eliminarRiego(riegoId) {
    try {
        await db.collection('riegos').doc(riegoId).delete();
        console.log("Riego eliminado exitosamente");
    } catch (error) {
        console.error("Error eliminando riego: ", error);
        throw error;
    }
}
```

---

## 🌐 APIs Meteorológicas

### **1. Fuentes de Datos Configuradas**

#### **🇨🇴 Colombia (Ideal para Orquídeas)**
```javascript
// Bogotá - Clima tropical de altura
{
    id: 'openweather-bogota',
    name: 'OpenWeather Colombia',
    city: 'Bogotá D.C.',
    climate: 'tropical-altitude',
    orchidSuitability: 'alta',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=Bogota,CO&appid=demo&units=metric'
}

// Medellín - Clima tropical montano (EXCELENTE)
{
    id: 'weatherapi-medellin',
    city: 'Medellín, Antioquia',
    climate: 'tropical-montano',
    orchidSuitability: 'muy-alta',  // ⭐ MEJOR PARA ORQUÍDEAS
    url: 'http://api.weatherapi.com/v1/current.json?key=demo&q=Medellin&aqi=no'
}
```

#### **🇨🇱 Chile (Clima Templado)**
```javascript
// Santiago - Clima mediterráneo
{
    id: 'chile-openweather',
    city: 'Santiago de Chile',
    climate: 'mediterraneo',
    orchidSuitability: 'media',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=Santiago,CL&appid=demo&units=metric'
}
```

#### **🥶 Patagonia (Climas Extremos)**
```javascript
// Punta Arenas - Clima subpolar
{
    id: 'punta-arenas',
    city: 'Punta Arenas, Chile',
    climate: 'subpolar-oceanico',
    orchidSuitability: 'muy-baja',  // ❄️ MUY DESAFIANTE
    url: 'https://wttr.in/Punta_Arenas,Chile?format=j1'
}
```

### **2. Sistema de Evaluación Climática**

```javascript
// Clasificación de adecuación para orquídeas
const ORCHID_SUITABILITY = {
    'muy-alta': {
        badge: 'green',
        text: 'Muy Alta 🌸',
        description: 'Condiciones ideales para orquídeas'
    },
    'alta': {
        badge: 'light-green', 
        text: 'Alta 🌺',
        description: 'Excelente para cultivo'
    },
    'media': {
        badge: 'orange',
        text: 'Media ⚠️',
        description: 'Requiere cuidados especiales'
    },
    'muy-baja': {
        badge: 'red darken-2',
        text: 'Muy Baja 🧊',
        description: 'Extremadamente desafiante'
    }
};
```

### **3. Parsers de APIs**

```javascript
// Parser para OpenWeatherMap
function parseOpenWeather(data) {
    return {
        temp: data.main?.temp || 22,
        hum: data.main?.humidity || 70,
        pressure: data.main?.pressure || 1013,
        condition: data.weather?.[0]?.description || 'Desconocido'
    };
}

// Parser para WTTR.in
function parseWTTR(data) {
    return {
        temp: parseFloat(data.current_condition?.[0]?.temp_C) || 20,
        hum: parseFloat(data.current_condition?.[0]?.humidity) || 75,
        pressure: parseFloat(data.current_condition?.[0]?.pressure) || 1015,
        condition: data.current_condition?.[0]?.weatherDesc?.[0]?.value || 'Desconocido'
    };
}
```

### **4. Sistema de Cache Inteligente**

```javascript
// Cache para mantener datos estables por 15 minutos
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutos
let dataCache = {};

function getCachedData(sourceId) {
    const cached = dataCache[sourceId];
    if (!cached) return null;
    
    const now = Date.now();
    if (now - cached.timestamp < CACHE_DURATION) {
        return cached.data;
    }
    
    delete dataCache[sourceId];
    return null;
}

function setCachedData(sourceId, data) {
    dataCache[sourceId] = {
        timestamp: Date.now(),
        data: data
    };
}
```

---

## 🏗️ Arquitectura del Sistema

```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (HTML/JS)                       │
├─────────────────────────────────────────────────────────────┤
│  📊 Dashboard          │  📅 Calendario        │  🏠 Inicio  │
│  - Datos en tiempo real │  - Programar riegos   │  - Menú     │
│  - Gráficos históricos │  - Ver eventos        │  - Nav      │
│  - Selector ubicaciones│  - CRUD Firebase      │            │
└─────────────────┬───────────────────┬───────────────────────┘
                  │                   │
                  ▼                   ▼
        ┌─────────────────┐ ┌─────────────────────┐
        │   APIs EXTERNAS │ │   FIREBASE BACKEND  │
        │                 │ │                     │
        │ 🌤️ OpenWeatherMap│ │ 🔥 Firestore DB     │
        │ 🌍 WTTR.in       │ │ ⚡ Functions        │
        │ 🌊 WeatherAPI    │ │ 📧 Email Service    │
        │                 │ │ 🚀 Hosting          │
        └─────────────────┘ └─────────────────────┘
                  │                   │
                  └───────────┬───────┘
                              │
                    ┌─────────────────┐
                    │  INTEGRACIÓN   │
                    │                │
                    │ 📡 Fetch APIs  │
                    │ 💾 Cache Data  │
                    │ 🔄 Sync Estado │
                    │ 📊 Update UI   │
                    └─────────────────┘
```

---

## ⚙️ Configuración Paso a Paso

### **Paso 1: Configurar Firebase**

1. **Crear proyecto Firebase:**
   ```bash
   1. Ve a https://console.firebase.google.com/
   2. Clic en "Crear proyecto"
   3. Nombre: "sistema-orquideas"
   4. Habilita Google Analytics (opcional)
   ```

2. **Configurar Firestore:**
   ```bash
   1. Ve a "Firestore Database"
   2. Clic "Crear base de datos"
   3. Selecciona "Modo de prueba"
   4. Elige ubicación (us-central1)
   ```

3. **Obtener credenciales:**
   ```bash
   1. Ve a "Configuración del proyecto"
   2. Scroll a "Tus apps"
   3. Clic en "Agregar app" → Web
   4. Copia la configuración
   5. Pégala en firebaseConfig.ejemplo.js
   ```

### **Paso 2: Configurar APIs Meteorológicas**

1. **OpenWeatherMap (Opcional):**
   ```bash
   # Para obtener API key real (opcional):
   1. Regístrate en https://openweathermap.org/api
   2. Obtén tu API key
   3. Reemplaza 'demo' en las URLs
   ```

2. **WTTR.in y WeatherAPI:**
   ```bash
   # Estas funcionan sin API key en modo demo
   # Para uso en producción, considera obtener claves reales
   ```

### **Paso 3: Configurar Email (Opcional)**

1. **Instalar dependencias:**
   ```bash
   cd functions
   npm install nodemailer
   ```

2. **Configurar variables de entorno:**
   ```bash
   firebase functions:config:set gmail.email="tu-email@gmail.com"
   firebase functions:config:set gmail.password="tu-app-password"
   ```

---

## 📊 Flujo de Datos

### **1. Flujo de Datos Meteorológicos**
```
Usuario selecciona ubicación
        ↓
Verificar cache (15 min)
        ↓
Cache válido? → SÍ → Mostrar datos del cache
        ↓ NO
Intentar API 1 (OpenWeather)
        ↓
Éxito? → SÍ → Parsear datos → Guardar en cache → Mostrar
        ↓ NO
Intentar API 2 (WTTR.in)
        ↓
Éxito? → SÍ → Parsear datos → Guardar en cache → Mostrar
        ↓ NO
Usar datos simulados realistas → Mostrar
```

### **2. Flujo de Programación de Riego**
```
Usuario completa formulario
        ↓
Validar datos (fecha, hora, planta)
        ↓
Enviar a Firebase Firestore
        ↓
¿Éxito? → SÍ → Actualizar calendario → Mostrar confirmación
        ↓ NO
Mostrar error → Permitir reintento
```

---

## 🔧 Funcionalidades Implementadas

### **📊 Dashboard**
- ✅ Visualización de temperatura y humedad en tiempo real
- ✅ Gráfico histórico con Chart.js
- ✅ Selector de 9 ubicaciones geográficas diferentes
- ✅ Sistema de evaluación de adecuación para orquídeas
- ✅ Cache inteligente para datos estables
- ✅ Auto-actualización cada 2 minutos
- ✅ Información detallada de fuentes meteorológicas

### **📅 Calendario de Riego**
- ✅ Programación de riegos con fecha y hora
- ✅ Almacenamiento en Firebase Firestore
- ✅ Visualización de eventos programados
- ✅ Edición y eliminación de riegos
- ✅ Validación de formularios
- ✅ Confirmaciones visuales con toasts

### **🌍 APIs Integradas**
- ✅ OpenWeatherMap (Colombia, Chile)
- ✅ WTTR.in (Valparaíso, Punta Arenas, Ushuaia)
- ✅ WeatherAPI (Medellín)
- ✅ Sistema de fallback con datos simulados realistas
- ✅ Manejo de errores robusto

---

## 🚀 Cómo Usar el Sistema

### **1. Abrir la Aplicación**
```bash
# Opción 1: Archivo local
Abre public/inicio.html en tu navegador

# Opción 2: Servidor local (recomendado)
python -m http.server 8000
# Luego ve a http://localhost:8000/public/inicio.html
```

### **2. Usar el Dashboard**
1. **Ver datos actuales:** Los valores se muestran automáticamente
2. **Cambiar ubicación:** 
   - Usa el selector dropdown
   - Presiona "Cambiar Ubicación"
   - Observa cómo cambian los datos
3. **Obtener datos frescos:** Presiona botones de temperatura/humedad
4. **Auto-actualización:** Activa para datos cada 2 minutos

### **3. Programar Riegos**
1. **Ir al calendario:** Clic en "📅 Calendario de Riego"
2. **Programar nuevo riego:**
   - Completa el formulario
   - Selecciona fecha y hora
   - Agrega notas opcionales
   - Presiona "Programar Riego"
3. **Ver riegos programados:** Aparecen en la lista automáticamente

---

## 🛠️ Solución de Problemas

### **Problema: No se conecta a Firebase**
```javascript
// Solución:
1. Verifica que firebaseConfig.ejemplo.js tenga tus credenciales reales
2. Asegúrate de que Firestore esté configurado en modo prueba
3. Revisa la consola del navegador para errores específicos

// Debug:
console.log("Firebase config:", firebaseConfig);
console.log("Firebase app:", firebase.app());
```

### **Problema: APIs meteorológicas no responden**
```javascript
// El sistema tiene 3 niveles de fallback:
1. API principal (OpenWeather)
2. API alternativa (WTTR.in)  
3. Datos simulados realistas

// Para debuggear:
console.log("Intentando fuente:", currentSource.name);
console.log("URL:", currentSource.url);
```

### **Problema: Los datos no se actualizan**
```javascript
// Posibles causas y soluciones:
1. Cache activo (15 min) → Espera o limpia cache manualmente
2. Error de red → Revisa conexión a internet
3. API temporalmente no disponible → El sistema usa fallback automáticamente

// Limpiar cache manualmente:
dataCache = {};
```

### **Problema: El selector de ubicaciones no funciona**
```javascript
// Solución:
1. Asegúrate de que Materialize CSS esté cargado
2. Verifica que la inicialización ocurra después del DOM

// Re-inicializar selector:
setTimeout(() => {
    const selector = document.getElementById('locationSelector');
    M.FormSelect.init(selector);
}, 100);
```

---

## 📈 Próximas Mejoras Sugeridas

### **🔮 Funcionalidades Futuras**
- [ ] **Notificaciones push** para recordatorios de riego
- [ ] **Gráficos comparativos** entre ubicaciones
- [ ] **Predicción del clima** a 7 días
- [ ] **Base de datos de especies** de orquídeas con requerimientos específicos
- [ ] **Sistema de usuarios** con perfiles personalizados
- [ ] **Exportación de datos** a CSV/Excel
- [ ] **API REST propia** para datos históricos
- [ ] **App móvil** con React Native o Flutter

### **🛡️ Mejoras de Seguridad**
- [ ] **Reglas de seguridad** más estrictas en Firestore
- [ ] **Autenticación de usuarios** con Firebase Auth
- [ ] **Validación backend** de datos
- [ ] **Rate limiting** para APIs
- [ ] **Encriptación** de datos sensibles

---

## 👨‍💻 Información del Desarrollador

- **Desarrollador:** Vicente Muñoz
- **Año:** 2025
- **Tecnologías:** Firebase, HTML5, JavaScript, Materialize CSS, Chart.js
- **APIs:** OpenWeatherMap, WTTR.in, WeatherAPI
- **Especialización:** Sistema IoT para cultivo de orquídeas

---

¡Este README te proporciona toda la información necesaria para entender, configurar y extender el sistema de orquídeas! 🌺

¿Tienes alguna pregunta específica sobre la integración de Firebase o las APIs? ¡Estoy aquí para ayudarte! 🚀