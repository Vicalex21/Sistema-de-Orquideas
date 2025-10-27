# 📚 Documentación Completa - Sistema de Orquídeas

## 📖 Índice
1. [Resumen del Proyecto](#resumen-del-proyecto)
2. [Pasos de Implementación Realizados](#pasos-de-implementación-realizados)
3. [Firebase vs MySQL/MariaDB](#firebase-vs-mysqlmariadb)
4. [Cómo Iniciar de Cero](#cómo-iniciar-de-cero)
5. [Próximos Pasos: Integración con Arduino](#próximos-pasos-integración-con-arduino)
6. [Recursos y Referencias](#recursos-y-referencias)

---

## 📌 Resumen del Proyecto

**Sistema de Monitoreo de Orquídeas** - Plataforma web para:
- ✅ Programar calendario de riego
- ✅ Enviar notificaciones automáticas por email
- ✅ Visualizar datos de sensores (temperatura/humedad)
- ✅ Almacenar datos en la nube

**Stack Tecnológico:**
- Frontend: HTML5, CSS3, JavaScript (ES6+)
- Backend: Firebase Cloud Functions (Serverless)
- Base de Datos: Firebase Firestore (NoSQL)
- Email: Nodemailer + Gmail SMTP
- UI Framework: Materialize CSS
- Gráficos: Chart.js

---

## 🔧 Pasos de Implementación Realizados

### Fase 1: Configuración de Firebase

#### 1.1 Crear Proyecto en Firebase Console
```
1. Ir a: https://console.firebase.google.com/
2. Click en "Agregar proyecto"
3. Nombre: "sistema-orquideas"
4. Desactivar Google Analytics (opcional)
5. Crear proyecto
```

#### 1.2 Configurar Firestore Database
```
1. Build → Firestore Database
2. "Crear base de datos"
3. Modo: "Comenzar en modo de prueba"
4. Ubicación: us-central (o la más cercana)
5. Habilitar
```

#### 1.3 Registrar App Web
```
1. Configuración del proyecto (⚙️)
2. Agregar app → Web (</> ícono)
3. Nombre: "Sistema Orquideas"
4. Copiar firebaseConfig
```

#### 1.4 Actualizar al Plan Blaze (Para Cloud Functions)
```
1. Firebase Console → Upgrade
2. Seleccionar "Blaze (Pay as you go)"
3. Agregar método de pago
4. GRATIS hasta 2M invocaciones/mes
```

---

### Fase 2: Desarrollo del Frontend

#### 2.1 Estructura de Archivos Creada
```
Sistema de Orquideas/
├── public/
│   ├── inicio.html              # Página de inicio
│   ├── calendario.html          # Calendario de riego
│   └── dashboard.html           # Dashboard de sensores
├── functions/
│   ├── index.js                 # Cloud Functions
│   └── package.json             # Dependencias
├── CONFIGURACION_RAPIDA.md      # Guía de setup
├── CONFIGURACION_EMAIL.md       # Guía de emails
├── COMO_ABRIR.md                # Instrucciones de uso
├── firebase.json                # Config de Firebase
└── .firebaserc                  # Proyecto Firebase
```

#### 2.2 Implementación del Calendario (calendario.html)
```javascript
// SDK de Firebase v10.7.1 (ES Modules)
import { initializeApp } from 'firebase-app.js';
import { getFirestore, collection, addDoc, getDocs } from 'firebase-firestore.js';

// Configuración
const firebaseConfig = { /* credenciales */ };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Guardar riego
await addDoc(collection(db, "riegos"), {
    fecha: fecha,
    email: email,
    nota: nota,
    timestamp: Timestamp.now()
});

// Cargar riegos
const q = query(collection(db, "riegos"), orderBy("fecha"));
const querySnapshot = await getDocs(q);
```

#### 2.3 Implementación del Dashboard (dashboard.html)
```javascript
// Simulación de sensores
function simulateReading() {
    return {
        temp: (Math.random() * 10 + 20).toFixed(1), // 20-30°C
        hum: (Math.random() * 20 + 60).toFixed(1)   // 60-80%
    };
}

// Chart.js para gráficos
const chart = new Chart(ctx, {
    type: 'line',
    data: { /* datos */ },
    options: { /* configuración */ }
});

// LocalStorage para persistencia
localStorage.setItem('orch_history', JSON.stringify(history));
```

---

### Fase 3: Configuración de Cloud Functions

#### 3.1 Instalación de Firebase CLI
```powershell
npm install -g firebase-tools
```

#### 3.2 Login y Configuración
```powershell
cd "c:\Users\Acer\Desktop\Integracion\Sistema de Orquideas"
firebase login
firebase init functions
```

**Opciones seleccionadas:**
- Proyecto existente: sistema-orquideas
- Lenguaje: JavaScript
- ESLint: No
- Instalar dependencias: Sí

#### 3.3 Configuración de Gmail para Emails

**Paso 1: Habilitar verificación en 2 pasos**
```
Google Account → Seguridad → Verificación en 2 pasos → Activar
```

**Paso 2: Crear contraseña de aplicación**
```
https://myaccount.google.com/apppasswords
→ Seleccionar "Correo" y dispositivo
→ Generar
→ Copiar contraseña (16 caracteres)
```

#### 3.4 Implementación de Cloud Function
```javascript
// functions/index.js
const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const nodemailer = require('nodemailer');

// Configurar transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tu-email@gmail.com',
        pass: 'tu-contraseña-de-app'
    }
});

// Función que se ejecuta al crear un riego
exports.enviarNotificacionRiego = onDocumentCreated(
    "riegos/{riegoId}", 
    async (event) => {
        const riego = event.data.data();
        
        // Enviar email
        await transporter.sendMail({
            from: 'tu-email@gmail.com',
            to: riego.email,
            subject: `🌸 Recordatorio de Riego - ${riego.fecha}`,
            html: `<!-- HTML del email -->`
        });
    }
);
```

#### 3.5 Instalación de Dependencias
```powershell
cd functions
npm install nodemailer
```

#### 3.6 Despliegue
```powershell
firebase deploy --only functions
```

**Nota:** Primera vez puede tardar 2-3 minutos en configurar permisos de Eventarc.

---

## 🔄 Firebase vs MySQL/MariaDB

### ⚖️ Comparación Detallada

| Característica | Firebase Firestore | MySQL/MariaDB |
|----------------|-------------------|---------------|
| **Tipo** | NoSQL (Documentos) | SQL (Relacional) |
| **Hosting** | Cloud (Google) | Local o Cloud |
| **Configuración** | 5 minutos | 30+ minutos |
| **Escalabilidad** | Automática | Manual |
| **Costo inicial** | $0 (hasta límites) | $0 (local) |
| **Mantenimiento** | Ninguno | Backups, updates |
| **Tiempo real** | ✅ Nativo | ❌ Requiere polling |
| **Offline** | ✅ Soportado | ❌ No |
| **Backend** | Opcional (Functions) | Requerido (Node/PHP) |
| **Curva aprendizaje** | Baja | Media-Alta |

---

### ✅ Ventajas de Firebase

#### 1. **Desarrollo Rápido**
```
MySQL/MariaDB:
- Instalar XAMPP/WAMP
- Configurar MySQL
- Crear base de datos
- Escribir queries SQL
- Crear backend (Express/PHP)
- Manejar CORS
- Seguridad manual
TOTAL: 2-3 horas

Firebase:
- Crear proyecto
- Copiar config
- Listo
TOTAL: 5 minutos
```

#### 2. **Escalabilidad Automática**
```javascript
// Firebase escala solo
// 10 usuarios → 10,000 usuarios: mismo código
// Sin cambios en infraestructura
```

#### 3. **Características en Tiempo Real**
```javascript
// Escuchar cambios en vivo
onSnapshot(collection(db, "riegos"), (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            console.log("Nuevo riego:", change.doc.data());
        }
    });
});
```

#### 4. **Sin Backend Tradicional**
```
❌ No necesitas:
- Servidor Node.js corriendo 24/7
- Configurar Express
- Manejar autenticación manualmente
- Escribir APIs REST
- Configurar HTTPS/SSL

✅ Firebase maneja todo esto
```

#### 5. **Autenticación Integrada**
```javascript
// Firebase Auth (múltiples proveedores)
import { getAuth, signInWithGoogle } from 'firebase/auth';

// Login con Google en 3 líneas
const auth = getAuth();
signInWithGoogle(auth);
```

#### 6. **Cloud Functions (Serverless)**
```javascript
// Código que se ejecuta solo cuando se necesita
// No pagas por servidor inactivo
// Auto-escalado
exports.miFunction = onDocumentCreated(...);
```

#### 7. **Hosting Gratis**
```bash
firebase deploy
# Tu app en: https://tu-proyecto.web.app
# HTTPS gratis
# CDN global
# Despliegue en 30 segundos
```

---

### ✅ Ventajas de MySQL/MariaDB

#### 1. **Control Total**
```sql
-- Queries SQL complejas y optimizadas
SELECT r.*, u.name 
FROM riegos r
JOIN usuarios u ON r.user_id = u.id
WHERE r.fecha BETWEEN '2025-01-01' AND '2025-12-31'
GROUP BY u.name
HAVING COUNT(*) > 10;
```

#### 2. **Relaciones Complejas**
```
Usuarios → Orquídeas (1:N)
Orquídeas → Riegos (1:N)
Orquídeas → Sensores (1:N)
Sensores → Lecturas (1:N)

JOIN eficientes entre tablas
```

#### 3. **Sin Límites de Consulta**
```
Firebase:
- Lee/escribe cuentan para límite gratuito
- Estructura de datos limitada

MySQL:
- Consultas ilimitadas (local)
- Estructura completamente flexible
```

#### 4. **Herramientas Maduras**
```
- phpMyAdmin (UI visual)
- MySQL Workbench (diseño de BD)
- Triggers, Stored Procedures
- Vistas, Índices complejos
```

#### 5. **Costos Predecibles**
```
Firebase:
- Gratis hasta límites
- Después: pago por uso (variable)

MySQL Local:
- $0 siempre (solo electricidad)
- Costo fijo de hosting si cloud
```

#### 6. **Privacidad de Datos**
```
MySQL Local:
- Datos 100% en tu servidor
- Sin dependencia de terceros
- Control total de backups

Firebase:
- Datos en servidores de Google
- Sujeto a políticas de Google
```

---

### ⚠️ Desventajas de Firebase

1. **Costos pueden crecer**: Si tu app se vuelve viral, los costos aumentan
2. **Vendor Lock-in**: Difícil migrar a otra plataforma
3. **Queries limitados**: No puedes hacer JOINs complejos
4. **Dependencia de Internet**: Requiere conexión (aunque hay offline)
5. **Menos control**: Google maneja la infraestructura

---

### ⚠️ Desventajas de MySQL/MariaDB

1. **Configuración compleja**: XAMPP, seguridad, backups
2. **Sin tiempo real nativo**: Necesitas WebSockets adicionales
3. **Backend requerido**: Necesitas Node.js/PHP/Python
4. **Escalabilidad manual**: Más usuarios = más trabajo
5. **Mantenimiento**: Updates, seguridad, backups

---

### 🎯 ¿Cuándo usar cada uno?

#### Usa Firebase cuando:
- ✅ Proyecto pequeño/mediano
- ✅ Necesitas tiempo real
- ✅ Quieres desarrollo rápido
- ✅ No quieres mantener servidores
- ✅ Proyecto académico o prototipo
- ✅ Startup con recursos limitados

#### Usa MySQL/MariaDB cuando:
- ✅ Datos muy estructurados y relacionales
- ✅ Queries SQL complejos
- ✅ Control total de datos (privacidad)
- ✅ Proyecto enterprise
- ✅ Ya tienes infraestructura montada
- ✅ Costos predecibles importantes

---

## 🚀 Cómo Iniciar de Cero

### Opción 1: Clonar Este Proyecto

```powershell
# 1. Crear carpeta
mkdir MiProyectoOrquideas
cd MiProyectoOrquideas

# 2. Copiar archivos de este proyecto
# Copia toda la carpeta "Sistema de Orquideas"

# 3. Crear nuevo proyecto Firebase
# Ve a: https://console.firebase.google.com/
# Crea proyecto con nombre diferente

# 4. Actualizar configuración
# Edita public/calendario.html línea 126
# Pega tu nuevo firebaseConfig

# 5. Configurar email
# Edita functions/index.js líneas 14-16
# Pon tu email y contraseña de app

# 6. Desplegar
firebase login
firebase init functions  # Selecciona tu nuevo proyecto
cd functions
npm install
cd ..
firebase deploy --only functions

# 7. Listo!
```

---

### Opción 2: Desde Cero Absoluto

#### Paso 1: Crear Estructura
```powershell
mkdir SistemaOrquideas
cd SistemaOrquideas
mkdir public functions

# Crear archivos base
New-Item public/inicio.html
New-Item public/calendario.html
New-Item public/dashboard.html
New-Item functions/index.js
New-Item functions/package.json
```

#### Paso 2: Firebase Project
```bash
# 1. Crear en console.firebase.google.com
# 2. Copiar config
# 3. Inicializar
firebase login
firebase init hosting
firebase init functions
```

#### Paso 3: Código Base - inicio.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Sistema de Orquídeas</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet">
    <style>
        body {
            background: linear-gradient(135deg, #a3d9b3, #d5b8e2);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>
<body>
    <div class="container center-align">
        <h1 class="white-text">🌸 Sistema de Orquídeas 🌸</h1>
        <a href="calendario.html" class="btn btn-large green">Calendario de Riego</a>
        <a href="dashboard.html" class="btn btn-large blue">Dashboard</a>
    </div>
</body>
</html>
```

#### Paso 4: Calendario con Firebase
```html
<script type="module">
    import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
    import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
    
    const firebaseConfig = { /* TU CONFIG */ };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    // Guardar riego
    async function guardarRiego(fecha, email, nota) {
        await addDoc(collection(db, "riegos"), {
            fecha, email, nota,
            timestamp: new Date()
        });
    }
</script>
```

#### Paso 5: Cloud Function
```javascript
// functions/index.js
const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');

admin.initializeApp();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'TU_EMAIL@gmail.com',
        pass: 'TU_CONTRASEÑA_APP'
    }
});

exports.enviarEmail = onDocumentCreated("riegos/{id}", async (event) => {
    const data = event.data.data();
    
    await transporter.sendMail({
        from: 'TU_EMAIL@gmail.com',
        to: data.email,
        subject: `Riego programado para ${data.fecha}`,
        html: `<h1>Recordatorio de Riego</h1><p>Fecha: ${data.fecha}</p>`
    });
});
```

#### Paso 6: package.json
```json
{
  "name": "functions",
  "dependencies": {
    "firebase-admin": "^12.0.0",
    "firebase-functions": "^4.5.0",
    "nodemailer": "^6.9.7"
  }
}
```

#### Paso 7: Desplegar
```bash
cd functions
npm install
cd ..
firebase deploy
```

---

## 🔮 Próximos Pasos: Integración con Arduino

### 📡 Objetivo
Conectar un sensor DHT11/DHT22 (temperatura y humedad) con Arduino y enviar los datos a Firebase en tiempo real.

---

### Arquitectura Propuesta

```
[Arduino + Sensor DHT] 
        ↓ (Serial/USB o WiFi)
[Computadora/ESP8266] 
        ↓ (HTTP/MQTT)
[Firebase Firestore]
        ↓ (Real-time)
[Dashboard Web]
```

---

### Opción 1: Arduino UNO + Python (Serial)

#### Hardware Necesario
```
- Arduino UNO/Nano
- Sensor DHT11 o DHT22
- Cables jumper
- Cable USB
```

#### Conexiones
```
DHT Sensor → Arduino
VCC        → 5V
GND        → GND
DATA       → Pin Digital 2
```

#### Código Arduino
```cpp
// sketch_sensor_orquideas.ino
#include <DHT.h>

#define DHTPIN 2        // Pin de datos
#define DHTTYPE DHT11   // DHT11 o DHT22

DHT dht(DHTPIN, DHTTYPE);

void setup() {
    Serial.begin(9600);
    dht.begin();
}

void loop() {
    delay(2000); // Leer cada 2 segundos
    
    float temperatura = dht.readTemperature();
    float humedad = dht.readHumidity();
    
    if (isnan(temperatura) || isnan(humedad)) {
        Serial.println("ERROR:Sensor");
        return;
    }
    
    // Formato: TEMP:25.5,HUM:68.2
    Serial.print("TEMP:");
    Serial.print(temperatura);
    Serial.print(",HUM:");
    Serial.println(humedad);
}
```

#### Script Python (Bridge a Firebase)
```python
# sensor_to_firebase.py
import serial
import firebase_admin
from firebase_admin import credentials, firestore
from datetime import datetime

# Inicializar Firebase
cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# Conectar con Arduino
arduino = serial.Serial('COM3', 9600)  # Cambia COM3 por tu puerto

print("✅ Conectado a Arduino. Esperando datos...")

while True:
    try:
        linea = arduino.readline().decode('utf-8').strip()
        
        if linea.startswith("TEMP:"):
            # Parsear: TEMP:25.5,HUM:68.2
            partes = linea.split(',')
            temp = float(partes[0].split(':')[1])
            hum = float(partes[1].split(':')[1])
            
            # Guardar en Firebase
            db.collection('sensores').add({
                'temperatura': temp,
                'humedad': hum,
                'timestamp': firestore.SERVER_TIMESTAMP,
                'dispositivo': 'arduino-001'
            })
            
            print(f"📊 Temp: {temp}°C | Hum: {hum}% → Firebase ✅")
            
    except Exception as e:
        print(f"❌ Error: {e}")
```

#### Obtener serviceAccountKey.json
```
1. Firebase Console → Configuración del proyecto
2. Cuentas de servicio
3. Generar nueva clave privada
4. Descargar JSON
5. Renombrar a serviceAccountKey.json
```

#### Ejecutar
```bash
pip install pyserial firebase-admin
python sensor_to_firebase.py
```

---

### Opción 2: ESP8266/ESP32 (WiFi Directo)

#### Hardware Necesario
```
- NodeMCU ESP8266 o ESP32
- Sensor DHT11/DHT22
- Cable micro-USB
```

#### Ventajas
✅ No necesita computadora intermediaria
✅ Se conecta directamente a WiFi
✅ Envía datos directo a Firebase
✅ Más portable

#### Código ESP8266
```cpp
// esp8266_firebase.ino
#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>
#include <DHT.h>

#define WIFI_SSID "TU_WIFI"
#define WIFI_PASSWORD "TU_PASSWORD"
#define FIREBASE_HOST "sistema-orquideas.firebaseio.com"
#define FIREBASE_AUTH "TU_DATABASE_SECRET"

#define DHTPIN D2
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);
FirebaseData firebaseData;

void setup() {
    Serial.begin(115200);
    dht.begin();
    
    // Conectar WiFi
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("\n✅ WiFi conectado");
    
    // Configurar Firebase
    Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

void loop() {
    float temp = dht.readTemperature();
    float hum = dht.readHumidity();
    
    if (!isnan(temp) && !isnan(hum)) {
        // Enviar a Firebase
        String path = "/sensores/" + String(millis());
        
        Firebase.setFloat(firebaseData, path + "/temperatura", temp);
        Firebase.setFloat(firebaseData, path + "/humedad", hum);
        Firebase.setInt(firebaseData, path + "/timestamp", millis());
        
        Serial.printf("📊 Temp: %.1f°C | Hum: %.1f%% → Firebase ✅\n", temp, hum);
    }
    
    delay(10000); // Enviar cada 10 segundos
}
```

#### Librerías Necesarias (Arduino IDE)
```
1. ESP8266WiFi (incluida con ESP8266 board)
2. FirebaseESP8266 (por Mobizt)
3. DHT sensor library (por Adafruit)
```

---

### Opción 3: Arduino + Node.js (Recomendado para este proyecto)

#### Código Node.js (servidor local)
```javascript
// sensor-server.js
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const admin = require('firebase-admin');

// Inicializar Firebase
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

// Conectar con Arduino
const port = new SerialPort('COM3', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

console.log('✅ Esperando datos del sensor...');

parser.on('data', async (linea) => {
    try {
        // Parsear: TEMP:25.5,HUM:68.2
        if (linea.startsWith('TEMP:')) {
            const partes = linea.split(',');
            const temp = parseFloat(partes[0].split(':')[1]);
            const hum = parseFloat(partes[1].split(':')[1]);
            
            // Guardar en Firestore
            await db.collection('sensores').add({
                temperatura: temp,
                humedad: hum,
                timestamp: admin.firestore.FieldValue.serverTimestamp(),
                dispositivo: 'arduino-dht11'
            });
            
            console.log(`📊 ${temp}°C | ${hum}% → Firebase ✅`);
        }
    } catch (error) {
        console.error('❌ Error:', error);
    }
});
```

#### Instalar dependencias
```bash
npm install serialport firebase-admin
```

#### Ejecutar
```bash
node sensor-server.js
```

---

### Actualizar Dashboard para Mostrar Datos Reales

#### Modificar dashboard.html
```javascript
// Reemplazar simulateReading() con lecturas de Firebase

import { getFirestore, collection, query, orderBy, limit, onSnapshot } 
    from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const db = getFirestore(app);

// Escuchar cambios en tiempo real
const q = query(
    collection(db, "sensores"), 
    orderBy("timestamp", "desc"), 
    limit(1)
);

onSnapshot(q, (snapshot) => {
    snapshot.forEach((doc) => {
        const data = doc.data();
        updateReading({
            temp: data.temperatura,
            hum: data.humedad,
            ts: new Date()
        });
    });
});
```

---

### Roadmap Completo de Integración Arduino

#### Fase 1: Prototipo Local (1-2 días)
```
✅ Conectar sensor DHT a Arduino
✅ Leer datos y mostrar en Serial Monitor
✅ Verificar precisión de lecturas
```

#### Fase 2: Conexión a Firebase (2-3 días)
```
✅ Elegir método (Python/Node.js/ESP8266)
✅ Configurar serviceAccountKey.json
✅ Script para enviar datos a Firestore
✅ Probar lectura continua (10-30 seg)
```

#### Fase 3: Dashboard en Tiempo Real (1-2 días)
```
✅ Modificar dashboard.html
✅ Usar onSnapshot() para tiempo real
✅ Mostrar última lectura
✅ Gráfico con datos reales
```

#### Fase 4: Alertas Automáticas (1 día)
```
✅ Cloud Function que detecte anomalías
✅ Si temp > 30°C → enviar email
✅ Si humedad < 50% → enviar email
```

Ejemplo:
```javascript
// functions/index.js
exports.alertaTemperatura = onDocumentCreated(
    "sensores/{sensorId}",
    async (event) => {
        const data = event.data.data();
        
        if (data.temperatura > 30) {
            await transporter.sendMail({
                to: 'tu-email@gmail.com',
                subject: '⚠️ ALERTA: Temperatura Alta',
                html: `
                    <h1>🔥 Temperatura Crítica</h1>
                    <p>Temperatura actual: ${data.temperatura}°C</p>
                    <p>Revisa tus orquídeas urgentemente</p>
                `
            });
        }
    }
);
```

#### Fase 5: Historial y Análisis (2 días)
```
✅ Almacenar lecturas históricas
✅ Gráficos de última hora/día/semana
✅ Estadísticas (promedio, máx, mín)
✅ Exportar a CSV
```

---

### 🛠️ Materiales para Arduino

#### Opción Básica (~$15 USD)
```
- Arduino UNO R3: $8
- Sensor DHT11: $2
- Cables jumper: $2
- Protoboard: $3
```

#### Opción WiFi (~$25 USD)
```
- NodeMCU ESP8266: $5
- Sensor DHT22 (más preciso): $5
- Cables jumper: $2
- Fuente 5V: $3
- Caja protectora: $10
```

#### Opción Profesional (~$50 USD)
```
- ESP32 DevKit: $10
- Sensor DHT22: $5
- Sensor de luz LDR: $2
- Sensor de humedad de suelo: $3
- Display OLED 0.96": $5
- Relé para bomba de agua: $3
- Bomba de agua mini: $8
- Cables y componentes: $14
```

---

### 📚 Recursos Adicionales

#### Tutoriales Arduino + Firebase
```
1. Firebase con ESP8266:
   https://randomnerdtutorials.com/esp8266-nodemcu-firebase-realtime-database/

2. DHT11 con Arduino:
   https://www.arduinoguides.com/dht11-temperature-humidity-sensor-arduino/

3. Python Serial:
   https://pyserial.readthedocs.io/
```

#### Librerías Útiles
```
Arduino:
- DHT sensor library (Adafruit)
- FirebaseESP8266 (Mobizt)
- ArduinoJson

Python:
- pyserial
- firebase-admin

Node.js:
- serialport
- firebase-admin
```

---

## 📖 Recursos y Referencias

### Documentación Oficial
- Firebase: https://firebase.google.com/docs
- Firestore: https://firebase.google.com/docs/firestore
- Cloud Functions: https://firebase.google.com/docs/functions
- Materialize CSS: https://materializecss.com/
- Chart.js: https://www.chartjs.org/

### Tutoriales Útiles
- Firebase para principiantes: https://fireship.io/lessons/firebase-quickstart/
- Nodemailer: https://nodemailer.com/
- Arduino Oficial: https://www.arduino.cc/

### Comunidad
- Stack Overflow: https://stackoverflow.com/questions/tagged/firebase
- Reddit: r/Firebase
- Discord: Firebase Community

---

## 📝 Notas Finales

### Mantenimiento del Proyecto

#### Firestore
```
- Revisar reglas de seguridad cada mes
- Monitorear uso en Firebase Console
- Crear índices si queries son lentas
```

#### Cloud Functions
```
- Revisar logs: firebase functions:log
- Monitorear costos
- Actualizar dependencias: npm update
```

#### Seguridad
```
- No compartir serviceAccountKey.json
- Usar variables de entorno para secrets
- Actualizar reglas de Firestore:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /riegos/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /sensores/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

---

## ✅ Checklist para Nuevos Proyectos

- [ ] Crear proyecto en Firebase Console
- [ ] Configurar Firestore Database
- [ ] Actualizar al Plan Blaze (si necesitas Functions)
- [ ] Copiar firebaseConfig en frontend
- [ ] Crear contraseña de aplicación Gmail
- [ ] Configurar functions/index.js con email
- [ ] Instalar Firebase CLI
- [ ] firebase login
- [ ] firebase init functions
- [ ] npm install en carpeta functions
- [ ] firebase deploy --only functions
- [ ] Probar función testEmail
- [ ] Programar riego y verificar email
- [ ] (Opcional) Conectar Arduino
- [ ] (Opcional) Configurar hosting: firebase deploy

---

**Desarrollado con 💚 por Vicente Muñoz - 2025**

**Este documento es una guía completa para replicar y mejorar el Sistema de Orquídeas. ¡Buena suerte en tus futuros proyectos! 🌸**
