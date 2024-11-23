# Desktop Widget App

Este proyecto es un **widget para escritorio** desarrollado con **Electron** y **JavaScript**. Actualmente, se encuentra en **proceso de desarrollo**, y tiene como objetivo proporcionar una interfaz compacta y personalizable para mostrar información clave directamente en el escritorio.

## 🚀 Características (en desarrollo)

- **Interfaz compacta y atractiva**: diseño minimalista pensado para integrarse visualmente con el escritorio.
- **Información personalizada**: la intención es ir mostrando estado de procesador, memoria, tiempo...
- **Configuración flexible**: opciones para personalizar la apariencia y la funcionalidad del widget.
- **Compatibilidad multiplataforma**: posible ejecutable en sistemas Windows, macOS y Linux.

## 🛠️ Tecnologías utilizadas

- **Electron**: para la creación de la aplicación de escritorio.
- **JavaScript**: lógica de la aplicación y funcionalidades dinámicas.
- **HTML/CSS**: para la interfaz de usuario y el diseño visual.

## 📂 Estructura del proyecto

````plaintext
PROWIDGET2/
├── main.js          # Archivo principal de Electron
├── src/
│   ├── renderer.js  # Lógica de la interfaz del widget
├── index.html       # Archivo HTML principal
├── public/
│   └── styles/
│       └── main.css # Estilos del widget
├── package.json     # Configuración del proyecto y dependencias
├── preload.js       # Ejecutar script en el contexto de la app y cargar contenido en la misma.
│                    # Exposición de API de forma segura hacia el renderizado.
└── README.md        # Documentación del proyecto


## 🚧 Estado del desarrollo

- [x] Configuración inicial del proyecto.
- [x] Configuración básica de Electron.
- [-] Diseño inicial del widget.
- [ ] Integración de funcionalidades básicas.
- [ ] Optimización y empaquetado para producción.

## 💡 Cómo ejecutar el proyecto

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/desktop-widget.git
````
