# Sistema de Monitoreo de Orquídeas# 🌸 Sistema de Monitoreo de Orquídeas# 🌸 Sistema de Monitoreo de Orquídeas



> Sistema completo de gestión para calendario de riego con notificaciones automáticas y visualización de datos en tiempo real.



[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)](https://firebase.google.com/)Sistema completo para calendario de riego con notificaciones automáticas por email y visualización de datos de sensores.Sistema completo de monitoreo con calendario de riego, notificaciones por email y visualización de datos de sensores.

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[![License](https://img.shields.io/badge/License-Academic-blue.svg)](LICENSE)



------## � Documentación



## Tabla de Contenidos



- [Descripción](#descripción)## ✅ Estado del Proyecto- **[DOCUMENTACION_COMPLETA.md](DOCUMENTACION_COMPLETA.md)** ← 📖 **DOCUMENTACIÓN TÉCNICA COMPLETA**

- [Características](#características)

- [Tecnologías](#tecnologías)  - Todos los pasos realizados

- [Inicio Rápido](#inicio-rápido)

- [Estructura del Proyecto](#estructura-del-proyecto)**🎉 100% Funcional**  - Firebase vs MySQL/MariaDB

- [Documentación](#documentación)

- [Próximos Pasos](#próximos-pasos)  - Cómo iniciar de cero

- [Autor](#autor)

- ✅ Calendario de riego con Firebase Firestore  - Integración con Arduino

---

- ✅ Notificaciones automáticas por email  

## Descripción

- ✅ Dashboard de sensores con gráficos- **[CONFIGURACION_RAPIDA.md](CONFIGURACION_RAPIDA.md)** ← ⚡ Configurar Firebase (5 min)

**Sistema de Monitoreo de Orquídeas** es una plataforma web desarrollada para la gestión inteligente del cuidado de orquídeas. Permite programar calendarios de riego con notificaciones automáticas por correo electrónico y visualizar datos de sensores ambientales en tiempo real.

- ✅ Cloud Functions desplegadas- **[CONFIGURACION_EMAIL.md](CONFIGURACION_EMAIL.md)** ← 📧 Configurar emails automáticos

El sistema está construido completamente en la nube utilizando Firebase, eliminando la necesidad de servidores locales o bases de datos tradicionales.

- ✅ Sin necesidad de backend local- **[COMO_ABRIR.md](COMO_ABRIR.md)** ← 🚀 Cómo ejecutar el proyecto

### Estado del Proyecto

- **[RESUMEN_FINAL.md](RESUMEN_FINAL.md)** ← ✅ Estado del proyecto

**Versión:** 1.0.0  

**Estado:** Completado y funcional  ---

**Última actualización:** Octubre 2025

## 🚀 Inicio Rápido

---

## 🚀 Inicio Rápido

## Características

### 1. Configura Firebase (5 minutos)

### Calendario de Riego

- Programación de riegos con fecha específica y destinatario### 1. Abre la aplicaciónSigue: **[CONFIGURACION_RAPIDA.md](CONFIGURACION_RAPIDA.md)**

- Almacenamiento persistente en Firebase Firestore

- Visualización de lista completa de riegos programados```

- Interfaz intuitiva con Materialize CSS

Doble click en: public/inicio.html### 2. Configura emails automáticos

### Notificaciones Automáticas

- Envío automático de emails al programar riegos```Sigue: **[CONFIGURACION_EMAIL.md](CONFIGURACION_EMAIL.md)**

- Templates HTML personalizados y responsivos

- Integración con Gmail SMTP mediante Nodemailer

- Acceso multiplataforma (PC, móvil, tablet)

### 2. ¿Primera vez con Firebase?### 3. Ejecuta el proyecto

### Dashboard de Sensores

- Visualización gráfica de temperatura y humedad```Abre `public/inicio.html` en tu navegador

- Gráficos interactivos con Chart.js

- Simulación de datos (preparado para integración con Arduino)Lee: docs/CONFIGURACION_RAPIDA.md

- Persistencia de datos con localStorage

```## 📁 Estructura del Proyecto

---



## Tecnologías

### 3. ¿Quieres activar emails?```

### Frontend

- **HTML5** - Estructura semántica```Sistema de Orquideas/

- **CSS3** - Estilos y diseño responsivo

- **JavaScript ES6+** - Lógica de aplicaciónLee: docs/CONFIGURACION_EMAIL.md├── public/

- **Materialize CSS** - Framework UI

- **Chart.js** - Visualización de datos```│   ├── inicio.html          # Página principal



### Backend & Base de Datos│   ├── calendario.html      # Calendario de riego (Firebase)

- **Firebase Firestore** - Base de datos NoSQL en tiempo real

- **Firebase Cloud Functions** - Funciones serverless---│   └── dashboard.html       # Dashboard de sensores

- **Node.js** - Runtime para Cloud Functions

- **Nodemailer** - Servicio de envío de emails├── CONFIGURACION_RAPIDA.md  # Guía paso a paso



### Herramientas## 📚 Documentación├── README_FIREBASE.md       # Documentación completa

- **Firebase CLI** - Deployment y gestión

- **Git** - Control de versiones└── firebaseConfig.ejemplo.js # Ejemplo de configuración

- **VS Code** - Entorno de desarrollo

Toda la documentación está en la carpeta **`docs/`**:```

---



## Inicio Rápido

### 📖 Para Empezar:## 🎯 Funcionalidades

### Prerrequisitos

- Navegador web moderno (Chrome, Firefox, Edge)- **[INDICE_DOCUMENTACION.md](docs/INDICE_DOCUMENTACION.md)** ← 🗺️ Mapa de toda la documentación

- Cuenta de Firebase (gratuita)

- Cuenta de Gmail (para notificaciones)- **[CONFIGURACION_RAPIDA.md](docs/CONFIGURACION_RAPIDA.md)** ← ⚡ Setup Firebase (5 min)✅ **Calendario de Riego** - Programa riegos con notificaciones por email (fecha + correo)



### Instalación- **[COMO_ABRIR.md](docs/COMO_ABRIR.md)** ← 🚀 Cómo ejecutar el proyecto✅ **Dashboard de Sensores** - Visualización en tiempo real de temperatura/humedad



1. **Clonar el repositorio**✅ **Sin Backend** - 100% frontend con Firebase Firestore

   ```bash

   git clone https://github.com/Vicalex21/Sistema-de-Orqu-deas.git### 📧 Configuración Avanzada:✅ **Sin XAMPP/MySQL** - Base de datos en la nube

   cd Sistema-de-Orqu-deas

   ```- **[CONFIGURACION_EMAIL.md](docs/CONFIGURACION_EMAIL.md)** ← 📬 Notificaciones automáticas



2. **Configurar Firebase**- **[README_FIREBASE.md](docs/README_FIREBASE.md)** ← 🔥 Introducción a Firebase## 🔧 Tecnologías

   - Consulta la guía: [`docs/CONFIGURACION_RAPIDA.md`](docs/CONFIGURACION_RAPIDA.md)

   - Tiempo estimado: 5 minutos



3. **Ejecutar la aplicación**### 🎓 Documentación Técnica:- **Frontend:** HTML5, CSS3, JavaScript (ES6+)

   ```bash

   # Opción 1: Abrir directamente- **[DOCUMENTACION_COMPLETA.md](docs/DOCUMENTACION_COMPLETA.md)** ← 📚 **GUÍA COMPLETA**- **Base de Datos:** Firebase Firestore

   open public/inicio.html

     - Todos los pasos realizados- **UI Framework:** Materialize CSS

   # Opción 2: Con Live Server (VS Code)

   # Click derecho en inicio.html > "Open with Live Server"  - Firebase vs MySQL/MariaDB- **Gráficos:** Chart.js

   ```

  - Cómo iniciar de cero- **Almacenamiento Local:** localStorage API

4. **Configurar notificaciones (opcional)**

   - Consulta la guía: [`docs/CONFIGURACION_EMAIL.md`](docs/CONFIGURACION_EMAIL.md)  - Integración con Arduino

   - Tiempo estimado: 15 minutos

  - Código y ejemplos## 📖 Documentación

---

  

## Estructura del Proyecto

- **[RESUMEN_FINAL.md](docs/RESUMEN_FINAL.md)** ← ✅ Estado del proyecto- **Guía Rápida:** [CONFIGURACION_RAPIDA.md](CONFIGURACION_RAPIDA.md) ← **Empieza aquí**

```

Sistema-de-Orquideas/- **Documentación Completa:** [README_FIREBASE.md](README_FIREBASE.md)

│

├── public/                     # Aplicación web---

│   ├── inicio.html            # Página principal

│   ├── calendario.html        # Módulo de calendario## 🎓 Proyecto Académico

│   └── dashboard.html         # Dashboard de sensores

│## 📁 Estructura del Proyecto

├── functions/                  # Cloud Functions

│   ├── index.js               # Lógica de notificacionesDesarrollado para presentación académica - Sistema enfocado en:

│   └── package.json           # Dependencias

│```1. Establecer calendario de riego

├── docs/                       # Documentación

│   ├── DOCUMENTACION_COMPLETA.mdSistema de Orquideas/2. Notificar hora de riego

│   ├── CONFIGURACION_RAPIDA.md

│   ├── CONFIGURACION_EMAIL.md├── 📁 public/              # Aplicación web3. Visualización de datos de sensores

│   ├── INDICE_DOCUMENTACION.md

│   ├── COMO_ABRIR.md│   ├── inicio.html         # Página principal ← ABRE ESTE

│   ├── RESUMEN_FINAL.md

│   └── README_FIREBASE.md│   ├── calendario.html     # Calendario de riego---

│

├── firebase.json              # Configuración de Firebase│   └── dashboard.html      # Dashboard de sensores

├── .firebaserc                # Proyecto activo

└── README.md                  # Este archivo│**Desarrollado por Vicente Muñoz - 2025**

```

├── 📁 functions/           # Cloud Functions (Firebase)

---│   ├── index.js            # Función de emails

│   └── package.json        # Dependencias

## Documentación│

├── 📁 docs/                # 📚 Documentación completa

### Guías de Inicio│   ├── INDICE_DOCUMENTACION.md      # Mapa de docs

| Documento | Descripción | Tiempo |│   ├── DOCUMENTACION_COMPLETA.md    # Guía técnica completa

|-----------|-------------|--------|│   ├── CONFIGURACION_RAPIDA.md      # Setup rápido

| [Índice de Documentación](docs/INDICE_DOCUMENTACION.md) | Mapa completo de la documentación | 2 min |│   ├── CONFIGURACION_EMAIL.md       # Setup emails

| [Configuración Rápida](docs/CONFIGURACION_RAPIDA.md) | Setup inicial de Firebase | 5 min |│   ├── COMO_ABRIR.md                # Cómo ejecutar

| [Cómo Abrir](docs/COMO_ABRIR.md) | Guía de ejecución del proyecto | 2 min |│   ├── RESUMEN_FINAL.md             # Estado actual

│   └── README_FIREBASE.md           # Intro Firebase

### Configuración Avanzada│

| Documento | Descripción | Tiempo |├── firebase.json           # Configuración Firebase

|-----------|-------------|--------|├── .firebaserc             # Proyecto Firebase

| [Configuración de Email](docs/CONFIGURACION_EMAIL.md) | Setup de notificaciones automáticas | 15 min |└── README.md               # Este archivo

| [Firebase README](docs/README_FIREBASE.md) | Introducción detallada a Firebase | 5 min |```



### Documentación Técnica---

| Documento | Descripción | Tiempo |

|-----------|-------------|--------|## 🎯 Funcionalidades

| [Documentación Completa](docs/DOCUMENTACION_COMPLETA.md) | Guía técnica exhaustiva (26 KB) | 30 min |

| [Resumen Final](docs/RESUMEN_FINAL.md) | Estado y características del proyecto | 5 min |### ✅ Calendario de Riego

- Programar riegos con fecha y email

---- Almacenamiento en Firebase Firestore

- Lista de riegos programados

## Próximos Pasos- Interfaz con Materialize CSS



### Integración con Hardware (Arduino)### ✅ Notificaciones por Email

- Email automático al programar riego

El sistema está preparado para integración con sensores físicos. La documentación incluye:- Diseño bonito con HTML/CSS

- Usando Gmail SMTP + Nodemailer

- **3 métodos de conexión**: USB/Serial, WiFi (ESP8266/ESP32), Node.js Bridge- Llega a PC y teléfono 📱💻

- **Código completo**: Implementación para sensores DHT11/DHT22

- **Lista de materiales**: Componentes necesarios con precios estimados### ✅ Dashboard de Sensores

- **Roadmap de implementación**: Plan de 5 fases para integración completa- Gráficos de temperatura y humedad

- Simulación de datos (listo para Arduino)

**Consultar:** [`docs/DOCUMENTACION_COMPLETA.md`](docs/DOCUMENTACION_COMPLETA.md) - Sección "Próximos Pasos: Integración con Arduino"- Chart.js para visualización

- Almacenamiento local con localStorage

### Funcionalidades Planificadas

---

- [ ] Autenticación de usuarios

- [ ] Múltiples perfiles de plantas## 🔧 Tecnologías

- [ ] Histórico de riegos realizados

- [ ] Alertas por umbrales de sensores- **Frontend:** HTML5, CSS3, JavaScript (ES6+)

- [ ] App móvil nativa (React Native)- **Base de Datos:** Firebase Firestore (NoSQL en la nube)

- **Backend:** Firebase Cloud Functions (Serverless)

---- **Email:** Nodemailer + Gmail SMTP

- **UI Framework:** Materialize CSS v1.0.0

## Ventajas del Sistema- **Gráficos:** Chart.js (CDN)



### Arquitectura Moderna---

- **Serverless**: Sin necesidad de mantener servidores

- **Escalable**: Firebase maneja automáticamente el crecimiento## 🎓 Proyecto Académico

- **En tiempo real**: Sincronización instantánea de datos

- **Costo-efectivo**: Capa gratuita generosa de Firebase**Objetivo:** Sistema de monitoreo enfocado en:

1. ✅ Establecer calendario de riego

### Facilidad de Uso2. ✅ Notificar hora de riego por email

- **Setup rápido**: 5 minutos para estar operativo3. ✅ Visualización de datos de sensores

- **Sin instalaciones**: Todo funciona en el navegador

- **Multiplataforma**: Accesible desde cualquier dispositivo**Estado:** Completado y funcional

- **Open Source**: Código disponible para estudio y mejora

---

---

## 🔮 Próximos Pasos (Opcional)

## Soporte

### Integración con Arduino

### Preguntas FrecuentesLee: **[docs/DOCUMENTACION_COMPLETA.md](docs/DOCUMENTACION_COMPLETA.md)** 

→ Sección "Próximos Pasos: Integración con Arduino"

**¿Cómo ejecuto el proyecto?**  

→ Abre `public/inicio.html` en tu navegador o consulta [`docs/COMO_ABRIR.md`](docs/COMO_ABRIR.md)**Incluye:**

- 3 métodos de conexión (USB, WiFi, Node.js)

**¿Cómo configuro Firebase?**  - Código completo para DHT11/DHT22

→ Sigue la guía paso a paso en [`docs/CONFIGURACION_RAPIDA.md`](docs/CONFIGURACION_RAPIDA.md)- Lista de materiales (~$15-$50)

- Roadmap de implementación

**¿Cómo funcionan las notificaciones?**  

→ Revisa la documentación en [`docs/CONFIGURACION_EMAIL.md`](docs/CONFIGURACION_EMAIL.md)---



**¿Dónde está la documentación completa?**  ## 📞 Ayuda

→ Consulta [`docs/DOCUMENTACION_COMPLETA.md`](docs/DOCUMENTACION_COMPLETA.md) para información exhaustiva

### "¿Cómo ejecuto el proyecto?"

---→ Abre `public/inicio.html` o lee `docs/COMO_ABRIR.md`



## Comparación de Tecnologías### "¿Cómo configuro Firebase?"

→ Lee `docs/CONFIGURACION_RAPIDA.md`

### Firebase vs Bases de Datos Tradicionales

### "¿Cómo funcionan los emails?"

| Característica | Firebase | MySQL/MariaDB |→ Lee `docs/CONFIGURACION_EMAIL.md`

|----------------|----------|---------------|

| Configuración | 5 minutos | 30+ minutos |### "¿Quiero entender TODO?"

| Escalabilidad | Automática | Manual |→ Lee `docs/DOCUMENTACION_COMPLETA.md`

| Tiempo real | Nativo | Requiere implementación |

| Mantenimiento | Ninguno | Regular |### "¿Dónde está X?"

| Costo inicial | $0 | $0 (local) |→ Lee `docs/INDICE_DOCUMENTACION.md`

| Backend | Opcional | Requerido |

---

*Para análisis completo, consultar [`docs/DOCUMENTACION_COMPLETA.md`](docs/DOCUMENTACION_COMPLETA.md) - Sección "Firebase vs MySQL/MariaDB"*

## 📄 Licencia

---

Proyecto académico desarrollado por **Vicente Muñoz - 2025**

## Licencia

---

Este proyecto es de naturaleza académica y fue desarrollado para fines educativos.  

**Autor:** Vicente Muñoz  ## 🌟 Características Destacadas

**Año:** 2025  

**Institución:** Proyecto de Integración- 🚀 **Sin backend local** - No necesitas XAMPP, MySQL ni Node.js corriendo

- ☁️ **100% en la nube** - Firebase maneja todo

---- 📧 **Emails automáticos** - Notificaciones reales por Gmail

- 📊 **Dashboard interactivo** - Gráficos con Chart.js

## Reconocimientos- 🔥 **Firebase Firestore** - Base de datos NoSQL escalable

- 💰 **Gratis** - Sin costos (hasta límites generosos)

- Firebase Team por la plataforma de desarrollo- 🌐 **Publicable** - Puede estar online en minutos

- Comunidad de Materialize CSS

- Chart.js contributors---

- Stack Overflow community

**¿Listo para empezar? Abre `public/inicio.html` 🌸**

---

## Contacto

**Desarrollador:** Vicente Muñoz  
**GitHub:** [@Vicalex21](https://github.com/Vicalex21)  
**Proyecto:** [Sistema-de-Orqu-deas](https://github.com/Vicalex21/Sistema-de-Orqu-deas)

---

<div align="center">

**Desarrollado con dedicación para el cuidado de orquídeas**

[Documentación](docs/) • [Reportar Bug](https://github.com/Vicalex21/Sistema-de-Orqu-deas/issues) • [Solicitar Feature](https://github.com/Vicalex21/Sistema-de-Orqu-deas/issues)

</div>
