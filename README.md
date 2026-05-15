# Azure AI Services Explorer

Este proyecto integra los servicios de Inteligencia Artificial de **Microsoft Azure** para realizar análisis de sentimientos en textos y extracción de texto de imágenes (OCR).

## Características

- **Análisis de Sentimientos:** Identifica si un texto es positivo, negativo o neutral, mostrando los niveles de confianza exactos devueltos por Azure Language Service.
- **Lectura de Imágenes (OCR):** Extrae texto de cualquier imagen mediante una URL utilizando Azure Computer Vision.

## Tecnologías Utilizadas

- **Backend:** Node.js, Express.js.
- **Frontend:** HTML5, CSS3 (Gradients, Glassmorphism, Animations), JavaScript Vanilla.
- **IA:** Azure AI Language, Azure AI Vision.
- **Herramientas:** Dotenv (variables de entorno), Cors.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada).
- Una cuenta de [Azure](https://portal.azure.com/) con recursos de **Language Service** y **Computer Vision** creados.

## Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/sandro060606/AZURE_Tarea07.git
   ```

2. **Instalar dependencias:**
   ```bash
   npm install -y
   ```

   ```bash
   npm install express
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto y añade tus credenciales de Azure:
   ```env
   # Azure Language Service
   AZURE_L_KEY=tu_clave_aqui
   AZURE_L_ENDPOINT=tu_endpoint_aqui

   # Azure Computer Vision (OCR)
   AZURE_CV_KEY=tu_clave_aqui
   AZURE_CV_ENDPOINT=tu_endpoint_aqui

   # Configuración Servidor
   PORT=3000
   ```

4. **Iniciar el servidor:**
   ```bash
   node server
   ```

5. **Acceder a la aplicación:**
   Abre tu navegador en [http://localhost:3000](http://localhost:3000).

## Estructura del Proyecto

```text
├── controllers/    # Lógica de manejo de peticiones
├── public/         # Archivos estáticos (HTML, CSS, JS)
├── routes/         # Definición de endpoints de la API
├── services/       # Integración directa con las APIs de Azure
├── .env            # Variables sensibles (no subir a git)
└── Server.js       # Punto de entrada de la aplicación
```