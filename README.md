# 🌺 Sistema de Monitoreo de Orquídeas

Un sistema web completo para el cuidado de orquídeas que combina datos meteorológicos reales con gestión inteligente de riego.

![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Status](https://img.shields.io/badge/Status-Funcionando%20100%25-brightgreen)

---

## 🎯 ¿Qué hace este sistema?

Este sistema te ayuda a **cuidar mejor tus orquídeas** proporcionando:

- **🌍 Datos climáticos reales** de 9 ubicaciones diferentes (desde Colombia hasta la Patagonia)
- **📊 Evaluación especializada** sobre qué tan bueno es cada clima para orquídeas
- **📅 Calendario inteligente** para programar riegos y nunca olvidarlos
- **📈 Gráficos en tiempo real** con la evolución de temperatura y humedad

## 🚀 Prueba el Sistema

### Opción 1: Descarga y Abre
```bash
# 1. Descarga o clona este repositorio
# 2. Abre el archivo: public/inicio.html
# 3. ¡Listo! Ya puedes usar el sistema
```

### Opción 2: Con Servidor Local
```bash
# En la carpeta del proyecto:
python -m http.server 8000
# Luego ve a: http://localhost:8000/public/inicio.html
```

## 🌟 Características Principales

### 📊 **Dashboard Interactivo**
- Ve la **temperatura y humedad actual** de diferentes ciudades
- **Gráficos históricos** para analizar tendencias
- **Cambio automático de ubicación** con un simple clic

### 🌍 **9 Ubicaciones Diferentes**
| 🇨🇴 Colombia | 🇨🇱 Chile | 🥶 Patagonia |
|---------------|------------|---------------|
| 🌸 Medellín *(Excelente)* | 🏙️ Santiago *(Regular)* | 🌬️ Punta Arenas *(Difícil)* |
| 🏔️ Bogotá *(Muy Buena)* | 🌊 Valparaíso *(Regular)* | 🧊 Ushuaia *(Extremo)* |
| ☀️ Cali *(Buena)* | 🌧️ Concepción *(Regular)* | |

### 📅 **Sistema de Riego Inteligente**
- **Programa riegos** con fecha y hora exacta
- **Notas personalizadas** para cada riego
- **Almacenamiento seguro** en la nube con Firebase
- **Visualización en calendario** fácil de entender

## 🖼️ Capturas de Pantalla

### Dashboard Principal
- 📊 Datos en tiempo real de temperatura y humedad
- 🌡️ Indicadores visuales de condiciones ideales
- 📈 Gráfico histórico interactivo

### Selector de Ubicaciones
- 🌍 9 ciudades diferentes para comparar
- 🌺 Evaluación específica para orquídeas
- ⚡ Cambio instantáneo de ubicación

### Calendario de Riego
- 📅 Interfaz tipo calendario intuitiva
- ✏️ Formulario simple para programar riegos
- 💾 Datos guardados automáticamente en Firebase

## 🛠️ ¿Cómo funciona?

### 1️⃣ **Datos Meteorológicos Reales**
El sistema se conecta automáticamente a:
- **OpenWeatherMap** - Para datos oficiales
- **WTTR.in** - Para información alternativa  
- **WeatherAPI** - Para datos complementarios

### 2️⃣ **Evaluación para Orquídeas**
Cada ubicación tiene una calificación especial:
- 🌸 **Muy Alta** - Colombia montañosa (¡Perfecto!)
- 🌿 **Alta/Media-Alta** - Colombia tropical
- ⚠️ **Media** - Chile central
- ❄️ **Baja/Muy Baja** - Patagonia (Desafiante)

### 3️⃣ **Almacenamiento Inteligente**
- **Firebase Firestore** guarda tus riegos programados
- **Cache local** para que los datos carguen rapidísimo
- **Sincronización automática** entre dispositivos

## 🎮 Funcionalidades en Acción

### 🌡️ **Monitoreo en Tiempo Real**
```
"Medellín: 24°C, 75% humedad - ¡Perfecto para orquídeas! 🌸"
"Punta Arenas: 8°C, 85% humedad - Muy desafiante para orquídeas 🥶"
```

### 📅 **Programación de Riego**
```
Fecha: 15 de Noviembre
Hora: 07:00 AM  
Planta: Orquídea Cattleya
Notas: "Riego post-fertilización"
✅ ¡Riego programado exitosamente!
```

### 🔄 **Auto-actualización**
- Los datos se actualizan **cada 2 minutos** automáticamente
- **Cache inteligente** evita consultas innecesarias
- **Sistema de respaldo** si alguna API falla

## 🏆 ¿Por qué usar este sistema?

### ✅ **Para Principiantes**
- **Interfaz súper simple** - Solo haz clic y ve los datos
- **Explicaciones claras** - Sabes exactamente qué significa cada número
- **Recomendaciones automáticas** - Te dice si las condiciones son buenas o no

### ✅ **Para Expertos**
- **Datos de múltiples fuentes** para máxima precisión
- **Comparación entre regiones** para elegir la mejor ubicación
- **Historial completo** para análisis de tendencias
- **Sistema programable** para automatizar cuidados

### ✅ **Para Desarrolladores**
- **Código limpio y bien documentado**
- **APIs modernas** (Firebase, REST APIs)
- **Sistema extensible** - Fácil agregar nuevas funciones
- **Documentación técnica completa** en archivos separados

## 🔧 Tecnologías Utilizadas

- **Frontend:** HTML5, JavaScript, Materialize CSS
- **Backend:** Firebase (Firestore, Functions, Hosting) 
- **APIs:** OpenWeatherMap, WTTR.in, WeatherAPI
- **Gráficos:** Chart.js para visualizaciones

## 📚 Documentación Adicional

¿Eres desarrollador y necesitas más detalles técnicos?

- 📖 **[README_INTEGRACION.md](README_INTEGRACION.md)** - Guía completa técnica
- ⚡ **[INTEGRATION_QUICKREF.md](INTEGRATION_QUICKREF.md)** - Referencia rápida
- 🔧 **[docs/](docs/)** - Documentación detallada paso a paso

## 🚀 Próximas Mejoras

- [ ] 📱 **App móvil** para Android e iOS
- [ ] 🔔 **Notificaciones push** para recordatorios
- [ ] 🤖 **Inteligencia artificial** para riego automático
- [ ] 📊 **Más tipos de gráficos** y estadísticas
- [ ] 🌱 **Base de datos** de especies de orquídeas

## 👨‍💻 Autor

**Vicente Muñoz** - Desarrollador especializado en sistemas IoT para agricultura

- 🌐 **GitHub:** [@Vicalex21](https://github.com/Vicalex21)
- 🎯 **Especialidad:** Sistemas inteligentes para cultivo de plantas

## 📝 Licencia

Este proyecto es de uso académico y está disponible para aprender y mejorar.

---

<div align="center">

### 🌺 ¡Haz que tus orquídeas prosperen con datos reales! 🌺

**¿Te gustó el proyecto?** [⭐ Dale una estrella](https://github.com/Vicalex21/Sistema-de-Orquideas/stargazers) | **¿Encontraste un problema?** [🐛 Repórtalo aquí](https://github.com/Vicalex21/Sistema-de-Orquideas/issues)

</div>