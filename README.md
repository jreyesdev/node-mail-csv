# Enviar CSV por email
Scrip de NodeJs para enviar un archivo .CSV por correo electrónico

### Pre-requisitos 📋

_Antes que continúes debes tener instalado:_

* [NodeJS](https://nodejs.org)
* [npm](https://www.npmjs.com/)

## Instalación 🔧
Sigue estos pasos:

### Dependencias
Instala las dependencias con el siguiente comando
```sh
npm install
```
### Variables de entorno
Crea un archivo _.env_ y agrega los datos de la BBDD y el corre electrónico a utilizar
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
*MAIL_CC* puede estar vacío, solo si vas a enviar copia a otro correo
*MAIL_TOSENT* puede ser un solo correo o si enviarás a varios agregalos separados por coma ","

