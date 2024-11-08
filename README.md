# Panadería MC

Aplicación web para la gestión integral de la panadería "Panadería MC". Este sistema permite gestionar usuarios, inventario de materias primas, producción diaria, recetas, existencias de productos elaborados, ventas y gastos. Incluye tanto una parte pública (landing page) visible para los clientes, como una parte privada para gestionar el negocio.

## Características

-   **Gestión de Usuarios**: Control de accesos según roles como Administrador, Encargado de Local, Operario, entre otros.
-   **Gestión de Recetas**: Control de ingredientes y cálculo de cantidades según la producción deseada.
-   **Inventario de Materias Primas**: Inventario con actualización automática tras realizar recetas.
-   **Ventas y Punto de Venta**: Gestión de ventas y control de productos.
-   **Landing Page**: Página pública para clientes, con información sobre los productos, contacto y opción de creación de cuenta.

## Tecnologías Utilizadas

-   **Frontend**: HTML, CSS, JavaScript
-   **Backend**: Node.js
-   **Base de Datos**: MySQL

## Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:
PanaderiaMC/
│
├── public/ # Archivos públicos
│ ├── js/ # Archivos JavaScript públicos
│ ├── images/ # Imágenes públicas
│ └── index.html # Página principal pública
│
├── src/ # Código fuente
│ ├── components/ # Componentes reutilizables
│ ├── pages/ # Páginas de la aplicación
│ │ ├── public/ # Páginas públicas
│ │ │ ├── products.html
│ │ │ ├── recipes.html
│ │ │ └── contact.html
│ │ └── private/ # Páginas privadas (gestión interna)
│ │ ├── dashboard.html
│ │ ├── users.html
│ │ ├── recipes.html
│ │ ├── production.html
│ │ ├── inventory.html
│ │ ├── sales.html
│ │ ├── purchases.html
│ │ └── expenses.html
│ │
│ ├── styles/ # Estilos específicos de la aplicación
│ └── scripts/ # Lógica del frontend
│
├── backend/ # Código backend
│ ├── routes/ # Rutas de la API
│ ├── controllers/ # Controladores de backend
│ ├── models/ # Modelos de base de datos
│ ├── middleware/ # Middlewares (autenticación, etc.)
│ └── server.js # Archivo principal del servidor
│
├── config/ # Archivos de configuración
│ ├── db.js # Configuración de la base de datos
│ └── app.js # Configuración de la aplicación
│
├── .gitignore # Archivos y carpetas a ignorar por Git
├── package.json # Información y dependencias del proyecto
└── README.md # Documentación del proyecto

## Instalacíon

1. Clonar el Repositorio:
   git clone https://github.com/usuario/panaderia-mc.git

2. Instalar Dependencias:
   Navega a la carpeta del proyecto e instala las dependencias de Node.js con:
   npm install

3. Configurar la Base de Datos:
   Crea una base de datos en MySQL y configura la conexión en config/db.js.

4. Iniciar la Aplicación:
   Ejecuta el servidor con:
   npm start
   La aplicación estará disponible en http://localhost:3000.

## Guía de uso

_Parte Pública:_ La landing page, accesible en http://localhost:3000, permite a los clientes explorar productos, servicios y opciones de contacto, además de crear una cuenta.

_Parte Privada:_ El acceso a la gestión interna requiere credenciales. Esta sección permite: - Administrar Usuarios - Gestionar Inventario - Actualizar Recetas - Realizar Ventas y consultar historial

## Contribución

Contribuciones son bienvenidas. Para colaborar, abre un "pull request" o crea un "issue" en el repositorio.

## Lincecia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
