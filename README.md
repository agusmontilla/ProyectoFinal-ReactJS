## Game STORagE
Este proyecto es un eCommerce de videojuegos online. Esta aplicacion te permitira ver la lista de videojuegos, separarlos por categoria y realizar la compra online.

## Tecnologias usadas
Las principales tecnologías utilizadas en este proyecto son:

Vite
React
React Router
Firebase (Firebase Authentication, Firestore)

## Funcionalidades
- Registro de usuarios con Firebase Authentication.
- Exploración de catálogo de videojuegos.
- Detalles de los videojuegos, incluyendo descripción, precio, imágenes, etc.
- Filtrado de videojuegos.
- Carrito de compras para agregar y eliminar artículos.
- Panel de administración para gestionar productos y pedidos (acceso restringido).

## Instalacion

Pasos para instalar:
1-Clona este repositorio en tu máquina local
2-Abri la terminal en el directorio del proyecto
3-Ejecuta el comando npm install para instalar las dependencias
4-Para ejecutar el proyecto en un entorno de desarrollo, utiliza el siguiente comando: npm run dev
5-Abri el navegador y navega a http://localhost:5173 para ver la aplicacion

## Configuracion firebase
1-Crea un proyecto en Firebase Console si aún no tienes uno.
2-Habilita la autenticación con correo electrónico y contraseña en la sección "Authentication" de tu proyecto Firebase.
3-Crea una base de datos Firestore en modo de prueba o producción en la sección "Firestore Database" de tu proyecto Firebase.
4   -Copia la configuración de tu proyecto Firebase (apiKey, authDomain, projectId, etc.) desde la sección "Configuración del SDK" y reemplaza las variables en el archivo src/firebaseConfig.js.

## Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.