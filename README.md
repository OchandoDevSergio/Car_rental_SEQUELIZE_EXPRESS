# CAR RENTAL - Backend App - Compañía alquiler de automóviles.
![image](https://i.ibb.co/4VrXmfC/logoCR.jpg)

## Datos generales :paperclip:
**El presente repositorio funciona en conjunto con el repositorio "car_rental_REACT"

Acceso administrador: 
Correo: sergmar@mail.com  Contraseña: Bb1234

Acceso cliente:
Correo: alcast@mail.com  Contraseña: Aa1234

## Tecnologías utilizadas
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![NodeJS](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Web/API/Node) [![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat)](https://sequelize.org/) [![ExpressJS](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat)](https://expressjs.com/) [![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat)](https://dev.mysql.com/doc/) [![JWT](https://img.shields.io/badge/JSON%20Web%20Tokens-000?logo=jsonwebtokens&logoColor=fff&style=flat)](https://jwt.io/introduction) [![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Glossary/Git)

## Indice 

- [Descripción general del proyecto :speech_balloon:](#descripción-general-del-proyecto)

- [Diagrama entidad relación :computer:](#diagrama-entidad-relación) 

- [Funcionamiento :arrow_forward:](#funcionamiento) 

- [Endpoints :end:](#endpoints) 

- [Recursos alternativos y fuentes :art:](#recursos-alternativos-y-fuentes)  

#

### Descripción general del proyecto

Propuesto el proyecto de desarrollar una aplicación web para la gestión de una compañía de alquiler de automóviles, el presente repositorio supone la sección backend del mismo. Esta sección habrá de desarrollarse con un esquema modelo vista controllador, generando una API funcional que permita hacer distintas llamadas discriminando los privilegios de usuario en función de su rol.

### Diagrama entidad relación

<p align="center">
<img src="https://i.ibb.co/s2YJjYW/diagrama-entidad-relaci-n.jpg"  width="800" height="400"></p>

### Funcionamiento

A través de las tecnologías Sequelize y MySQL, se genera una base de datos mediante un proceso de migration y seed de los modelos de sus tablas.

Se levanta el servidor de la aplicación a través de las tecnologías Node.JS y Express.

Siguiendo un esquema modelo vista controlador, la aplicación enruta las peticiones que puedan llegar al servidor, para interactuar con las diferentes funciones que contienen los controladores.

La aplicación dispone además, tanto de un controlador que autentifique si la llamada al servidor ha sido hecha por un usuario registrado, como de un middleware que discriminaría el rol asignado al mismo para determinar que clase de interacciones tiene permiso para llevar a cabo con la base de datos y cuales no. Estos elementos de seguridad se han implementado con las tecnologías Bcrypt y JsonWebToken.

### Endpoints

**Registro de usuario:** POST, http://localhost:5000/users

**Inicio de sesión:** POST, http://localhost:5000/auth/login

**Modificar usuario:** PUT, http://localhost:5000/users

**Mostrar todos los usuarios:** GET, http://localhost:5000/users

**Registrar vehículo:** POST, http://localhost:5000/cars

**Mostrar todos los vehículos:** GET, http://localhost:5000/cars

**Mostrar coches por búsqueda:** GET, http://localhost:5000/cars/${criterio de búsqueda}

### Recursos alternativos y fuentes

https://tutorialmarkdown.com/emojis

https://badges.pages.dev/

https://imgbb.com/
