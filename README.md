# Enviar CSV por email
Script de NodeJs para enviar un archivo .CSV por correo electrónico

### Pre-requisitos 📋

_Antes que continúes debes tener instalado:_

* [NodeJS](https://nodejs.org) - _v12.6.2 o superior_
* [npm](https://www.npmjs.com/) - _v6.14.4 o superior_

## Instalación 🔧
Sigue estos pasos:

### Dependencias
Instala las dependencias con el siguiente comando
```sh
npm install
```

### Variables de entorno
Crea un archivo **_.env_** y agrega los datos de la BBDD y el corre electrónico a utilizar
```
DB_HOST="IP de la BBDD"
DB_PORT="Puerto"
DB_DATABASE="Nombre de la BBDD"
DB_USERNAME="Tu usuario"
DB_PASSWORD="Tu contraseña"

MAIL_FROM="tucorreo@ejemplo.com"
MAIL_PASS="Tu contraseña"
MAIL_CC="concopiacorreo@ejemplo.com"
MAIL_TOSENT="destino@ejemplo.com"
```

NOTA:
* **MAIL_CC** puede estar vacío. Agrega el correo solo si necesitas enviar copia a otro correo.
* **MAIL_TOSENT** puede ser un solo correo o si enviarás a varios agregalos separados por coma ","

## Ejecutando Script ⚙️
Para ejecutar el script ingresa el siguiente comando:
```
node src/index.js
```

¡LISTO!

## Paquetes 🛠️
Los paquetes que utiliza
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Fast-csv](https://c2fo.github.io/fast-csv/docs/introduction/getting-started)
* [Nodemailer](https://nodemailer.com/about/)
* [Postgresql](https://node-postgres.com/)