# 🔧 Firebase & APIs Integration - Quick Reference

## 🚀 Quick Setup

### Firebase Configuration
```javascript
// 1. Copy your Firebase config to firebaseConfig.ejemplo.js
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    // ... rest of config
};

// 2. Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
```

### API Endpoints
```javascript
// Weather APIs integrated:
const APIS = {
    openweather: "https://api.openweathermap.org/data/2.5/weather",
    wttr: "https://wttr.in/{city}?format=j1", 
    weatherapi: "http://api.weatherapi.com/v1/current.json"
};
```

## 📊 Data Flow Architecture

```
Frontend → Location Selector → API Manager → Cache → Firebase → UI Update
```

### Core Functions
```javascript
// Get weather data
async function getRealIoTData()

// Firebase operations
async function programarRiego(datos)
async function obtenerRiegos()
async function actualizarRiego(id, datos)
async function eliminarRiego(id)

// UI updates
function updateRealDataUI(temp, hum, timestamp, condition)
function changeDataSource(sourceId)
```

## 🌍 Location Classification

| Region | Climate | Orchid Suitability | APIs Used |
|--------|---------|-------------------|-----------|
| 🇨🇴 Colombia | tropical-montano | muy-alta (🌸) | OpenWeather, WeatherAPI |
| 🇨🇱 Chile Central | mediterraneo | media (⚠️) | OpenWeather, WTTR |
| 🇨🇱 Patagonia | subpolar | muy-baja (🧊) | WTTR |

## 📱 Component Structure

```
public/
├── inicio.html          # Landing page
├── dashboard.html       # Main app (weather + charts)
└── calendario.html      # Firebase integration (CRUD)

Key JavaScript modules:
- Weather API manager
- Firebase Firestore operations  
- Cache management (15min TTL)
- UI state management
```

## 🔧 Debug Commands

```javascript
// Check Firebase connection
console.log("Firebase:", firebase.app().name);

// Clear cache
dataCache = {};

// Test API
await getRealIoTData();

// Check Firestore
db.collection('riegos').get().then(snap => console.log(snap.size));
```

## ⚡ Performance Features

- **Smart Caching:** 15-minute TTL for weather data
- **Fallback System:** 3-tier API redundancy  
- **Lazy Loading:** Materialize components initialized on demand
- **Batch Operations:** Firebase writes optimized

## 🛡️ Security Notes

```javascript
// Firestore rules (development mode):
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true; // Change for production!
    }
  }
}
```

**⚠️ Production TODO:**
- [ ] Implement proper Firestore security rules
- [ ] Add Firebase Auth
- [ ] Use environment variables for API keys
- [ ] Add rate limiting

---

**Quick Start:** Open `public/inicio.html` in browser or run `python -m http.server 8000`