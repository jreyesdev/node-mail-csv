const path = require('path')
const fs = require('fs')
const csv = require('fast-csv')

// Archivo a enviar
const creaArchivo = async (c,data) => {
    const dirFile = path.resolve(__dirname,'../public'),
        nameFile = 'usuarios_' + new Date().toLocaleDateString() + '.csv'
        pathFile = dirFile + '/' + nameFile
    let file
    c('Creando archivo...')
    fs.createWriteStream(pathFile).close()
    c('Archivo creado: ' + nameFile)
    c('Escribiendo datos...')
    file = await csv.writeToPath(pathFile, data, { headers: true })
    file.close()
    c('Archivo guardado exitosamente')
    c('Ubicación: ' + pathFile)
    return { pathFile, nameFile }
}

module.exports = creaArchivo