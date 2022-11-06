# Diego Mariano Tur 
## Proyecto E-Commerce - REACTJS para CODERHOUSE

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/PlayStation_4_-_Logo.svg/1280px-PlayStation_4_-_Logo.svg.png)

Este sitio web fue creado con React, HTML5, Firebase y las librerias SweetAlert2, Bootstrap y Toastify. 

This website is powered by React, HTML5, Firebase and SweetAlert2, Bootstrap y Toastify libraries. 

Cómo se inicializa la app?
Podés descargar la carpeta del proyecto o bien, clonarla desde la terminal. Para realizar la clonacion del proyecto, ejecutar en la consola: git clone https://github.com/constanzabravi/ProyectoReact
Instalar NPM usando el comando npm i en la ruta donde se encuentra "package.json" desde la terminal.
La App se inicia a través de la terminal con el comando npm start, luego de haber instalado las dependencias del node-module correspondiente, que se especifican en el siguiente apartado.
¿Qué tecnologías y dependencias usé para realizar la app?
Tecnologías
HTML CSS JAVASCRIPT FIREBASE REACTJS GIT

Dependencias
🔹 "@emotion/react": "^11.10.5",

🔹 "@emotion/styled": "^11.10.5",

🔹 "@testing-library/jest-dom": "^5.16.5",

🔹 "@testing-library/react": "^13.4.0",

🔹 "@testing-library/user-event": "^13.5.0",

🔹 "@uiball/loaders": "^1.2.6",

🔹 "animate.css": "^4.1.1",

🔹 "babel-plugin-macros": "^3.1.0",

🔹 "bootstrap": "^5.2.1",

🔹 "firebase": "^9.12.1",

🔹 "react": "^18.2.0",

🔹 "react-bootstrap": "^2.5.0",

🔹 "react-dom": "^18.2.0",

🔹 "react-hook-form": "^7.39.1",

🔹 "react-router-dom": "^6.4.2",

🔹 "react-scripts": "5.0.1",

🔹 "react-toastify": "^9.1.1",

🔹 "sweetalert2": "^11.6.5",

🔹 "sweetalert2-react-content": "^5.0.7",

🔹 "web-vitals": "^2.1.4"

Utilización de Firebase
Para conectar tu proyecto con firestore, completá tus datos siguiendo el ejemplo de variables de entorno respetando los datos de la colección de productos.

-REACT_APP_apiKey=

-REACT_APP_authDomain=

-REACT_APP_projectId=

-REACT_APP_storageBucket=

-REACT_APP_messagingSenderId=

-REACT_APP_appId=

Componentes utilizados
🔹 NavBar

Contiene el logo de la tienda, las categorías y el carrito con los productos agregados y el precio total.

🔹 ItemListContainer

Contiene imagen presentanción, los productos y filtrado por categoría.

🔹 ItemList

Contiene el mapeado de los productos necesarios.

🔹 ItemDetailContainer

Contiene el detalle del producto seleccionado.

🔹 ItemDetail

Contiene un detalle mas especifico del producto seleccionado como el nombre, la descripción, el stock, la categoría, permite seleccionar la cantidad del producto para comprar mediante ItemCount, agregarlo al carrito y finalizar la compra.

🔹 Item

Contiene la visualización del producto con sus detalles y un botón de "Ver Detalle" que redirige a ItemDetail.

🔹 Cart

Contiene el resumen de la compra.

🔹 CartWidget

Visualiza la cantidad de productos en el carrito y el precio total.

🔹 Form

Contiene un formulario con nombre y apellido, dirección, numero de teléfono y doble correo electrónico con la finalidad de verificar si coinciden.

🔹 ItemCart

Contiene un detalle de los productos seleccionados en el carrito por separado mas una botón por cada uno para poder los.

🔹 ItemCount

Permite seleccionar la cantidad del producto.

Versionado
Se utilizó Git para el sistema de versionado. Para seguir sus actualizaciones, se usó y usará [GitHub].