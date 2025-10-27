# 🌸 Sistema de Monitoreo de Orquídeas# 🌸 Sistema de Monitoreo de Orquídeas



Sistema completo para calendario de riego con notificaciones automáticas por email y visualización de datos de sensores.Sistema completo de monitoreo con calendario de riego, notificaciones por email y visualización de datos de sensores.



---## � Documentación



## ✅ Estado del Proyecto- **[DOCUMENTACION_COMPLETA.md](DOCUMENTACION_COMPLETA.md)** ← 📖 **DOCUMENTACIÓN TÉCNICA COMPLETA**

  - Todos los pasos realizados

**🎉 100% Funcional**  - Firebase vs MySQL/MariaDB

  - Cómo iniciar de cero

- ✅ Calendario de riego con Firebase Firestore  - Integración con Arduino

- ✅ Notificaciones automáticas por email  

- ✅ Dashboard de sensores con gráficos- **[CONFIGURACION_RAPIDA.md](CONFIGURACION_RAPIDA.md)** ← ⚡ Configurar Firebase (5 min)

- ✅ Cloud Functions desplegadas- **[CONFIGURACION_EMAIL.md](CONFIGURACION_EMAIL.md)** ← 📧 Configurar emails automáticos

- ✅ Sin necesidad de backend local- **[COMO_ABRIR.md](COMO_ABRIR.md)** ← 🚀 Cómo ejecutar el proyecto

- **[RESUMEN_FINAL.md](RESUMEN_FINAL.md)** ← ✅ Estado del proyecto

---

## 🚀 Inicio Rápido

## 🚀 Inicio Rápido

### 1. Configura Firebase (5 minutos)

### 1. Abre la aplicaciónSigue: **[CONFIGURACION_RAPIDA.md](CONFIGURACION_RAPIDA.md)**

```

Doble click en: public/inicio.html### 2. Configura emails automáticos

```Sigue: **[CONFIGURACION_EMAIL.md](CONFIGURACION_EMAIL.md)**



### 2. ¿Primera vez con Firebase?### 3. Ejecuta el proyecto

```Abre `public/inicio.html` en tu navegador

Lee: docs/CONFIGURACION_RAPIDA.md

```## 📁 Estructura del Proyecto



### 3. ¿Quieres activar emails?```

```Sistema de Orquideas/

Lee: docs/CONFIGURACION_EMAIL.md├── public/

```│   ├── inicio.html          # Página principal

│   ├── calendario.html      # Calendario de riego (Firebase)

---│   └── dashboard.html       # Dashboard de sensores

├── CONFIGURACION_RAPIDA.md  # Guía paso a paso

## 📚 Documentación├── README_FIREBASE.md       # Documentación completa

└── firebaseConfig.ejemplo.js # Ejemplo de configuración

Toda la documentación está en la carpeta **`docs/`**:```



### 📖 Para Empezar:## 🎯 Funcionalidades

- **[INDICE_DOCUMENTACION.md](docs/INDICE_DOCUMENTACION.md)** ← 🗺️ Mapa de toda la documentación

- **[CONFIGURACION_RAPIDA.md](docs/CONFIGURACION_RAPIDA.md)** ← ⚡ Setup Firebase (5 min)✅ **Calendario de Riego** - Programa riegos con notificaciones por email (fecha + correo)

- **[COMO_ABRIR.md](docs/COMO_ABRIR.md)** ← 🚀 Cómo ejecutar el proyecto✅ **Dashboard de Sensores** - Visualización en tiempo real de temperatura/humedad

✅ **Sin Backend** - 100% frontend con Firebase Firestore

### 📧 Configuración Avanzada:✅ **Sin XAMPP/MySQL** - Base de datos en la nube

- **[CONFIGURACION_EMAIL.md](docs/CONFIGURACION_EMAIL.md)** ← 📬 Notificaciones automáticas

- **[README_FIREBASE.md](docs/README_FIREBASE.md)** ← 🔥 Introducción a Firebase## 🔧 Tecnologías



### 🎓 Documentación Técnica:- **Frontend:** HTML5, CSS3, JavaScript (ES6+)

- **[DOCUMENTACION_COMPLETA.md](docs/DOCUMENTACION_COMPLETA.md)** ← 📚 **GUÍA COMPLETA**- **Base de Datos:** Firebase Firestore

  - Todos los pasos realizados- **UI Framework:** Materialize CSS

  - Firebase vs MySQL/MariaDB- **Gráficos:** Chart.js

  - Cómo iniciar de cero- **Almacenamiento Local:** localStorage API

  - Integración con Arduino

  - Código y ejemplos## 📖 Documentación

  

- **[RESUMEN_FINAL.md](docs/RESUMEN_FINAL.md)** ← ✅ Estado del proyecto- **Guía Rápida:** [CONFIGURACION_RAPIDA.md](CONFIGURACION_RAPIDA.md) ← **Empieza aquí**

- **Documentación Completa:** [README_FIREBASE.md](README_FIREBASE.md)

---

## 🎓 Proyecto Académico

## 📁 Estructura del Proyecto

Desarrollado para presentación académica - Sistema enfocado en:

```1. Establecer calendario de riego

Sistema de Orquideas/2. Notificar hora de riego

├── 📁 public/              # Aplicación web3. Visualización de datos de sensores

│   ├── inicio.html         # Página principal ← ABRE ESTE

│   ├── calendario.html     # Calendario de riego---

│   └── dashboard.html      # Dashboard de sensores

│**Desarrollado por Vicente Muñoz - 2025**

├── 📁 functions/           # Cloud Functions (Firebase)
│   ├── index.js            # Función de emails
│   └── package.json        # Dependencias
│
├── 📁 docs/                # 📚 Documentación completa
│   ├── INDICE_DOCUMENTACION.md      # Mapa de docs
│   ├── DOCUMENTACION_COMPLETA.md    # Guía técnica completa
│   ├── CONFIGURACION_RAPIDA.md      # Setup rápido
│   ├── CONFIGURACION_EMAIL.md       # Setup emails
│   ├── COMO_ABRIR.md                # Cómo ejecutar
│   ├── RESUMEN_FINAL.md             # Estado actual
│   └── README_FIREBASE.md           # Intro Firebase
│
├── firebase.json           # Configuración Firebase
├── .firebaserc             # Proyecto Firebase
└── README.md               # Este archivo
```

---

## 🎯 Funcionalidades

### ✅ Calendario de Riego
- Programar riegos con fecha y email
- Almacenamiento en Firebase Firestore
- Lista de riegos programados
- Interfaz con Materialize CSS

### ✅ Notificaciones por Email
- Email automático al programar riego
- Diseño bonito con HTML/CSS
- Usando Gmail SMTP + Nodemailer
- Llega a PC y teléfono 📱💻

### ✅ Dashboard de Sensores
- Gráficos de temperatura y humedad
- Simulación de datos (listo para Arduino)
- Chart.js para visualización
- Almacenamiento local con localStorage

---

## 🔧 Tecnologías

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Base de Datos:** Firebase Firestore (NoSQL en la nube)
- **Backend:** Firebase Cloud Functions (Serverless)
- **Email:** Nodemailer + Gmail SMTP
- **UI Framework:** Materialize CSS v1.0.0
- **Gráficos:** Chart.js (CDN)

---

## 🎓 Proyecto Académico

**Objetivo:** Sistema de monitoreo enfocado en:
1. ✅ Establecer calendario de riego
2. ✅ Notificar hora de riego por email
3. ✅ Visualización de datos de sensores

**Estado:** Completado y funcional

---

## 🔮 Próximos Pasos (Opcional)

### Integración con Arduino
Lee: **[docs/DOCUMENTACION_COMPLETA.md](docs/DOCUMENTACION_COMPLETA.md)** 
→ Sección "Próximos Pasos: Integración con Arduino"

**Incluye:**
- 3 métodos de conexión (USB, WiFi, Node.js)
- Código completo para DHT11/DHT22
- Lista de materiales (~$15-$50)
- Roadmap de implementación

---

## 📞 Ayuda

### "¿Cómo ejecuto el proyecto?"
→ Abre `public/inicio.html` o lee `docs/COMO_ABRIR.md`

### "¿Cómo configuro Firebase?"
→ Lee `docs/CONFIGURACION_RAPIDA.md`

### "¿Cómo funcionan los emails?"
→ Lee `docs/CONFIGURACION_EMAIL.md`

### "¿Quiero entender TODO?"
→ Lee `docs/DOCUMENTACION_COMPLETA.md`

### "¿Dónde está X?"
→ Lee `docs/INDICE_DOCUMENTACION.md`

---

## 📄 Licencia

Proyecto académico desarrollado por **Vicente Muñoz - 2025**

---

## 🌟 Características Destacadas

- 🚀 **Sin backend local** - No necesitas XAMPP, MySQL ni Node.js corriendo
- ☁️ **100% en la nube** - Firebase maneja todo
- 📧 **Emails automáticos** - Notificaciones reales por Gmail
- 📊 **Dashboard interactivo** - Gráficos con Chart.js
- 🔥 **Firebase Firestore** - Base de datos NoSQL escalable
- 💰 **Gratis** - Sin costos (hasta límites generosos)
- 🌐 **Publicable** - Puede estar online en minutos

---

**¿Listo para empezar? Abre `public/inicio.html` 🌸**
