const mailer = require('nodemailer')
const file = require('./file')

const subject = 'Listado de usuarios hasta la fecha ' + new Date().toLocaleDateString()

const html = 'Mensaje...';

const confTransp = {
    host: 'smtp.gmail.com',
    port: 465,
    service: 'gmail',
    secure: true,
    auth: {
        user: process.env.MAIL_FROM,
        pass: process.env.MAIL_PASS
    }
}

let options = {
    from: process.env.MAIL_FROM,
    cc: process.env.MAIL_CC,
    to: process.env.MAIL_TOSENT,
    subject,
    html,
    attachments: [
        {
            path: '',
            filename: '',
        }
    ]
}

// Envia email
const enviaEmail = async (c,data) => {
    
    const transport = mailer.createTransport(confTransp)

    c('Validando datos...')
    
    if(!data.length){
        options.attachments = null
        options.cc = null
        options.to = options.from
        options.subject = 'Error en consulta de usuarios'
        options.html = `Es probable que la lista esté vacía o error al ejecutar la consulta`
        c(`${options.subject}. ${options.html}`)
    }else{
        // Crea archivo
        const { pathFile, nameFile } = await file(c,data)
        options.attachments[0].path = pathFile
        options.attachments[0].filename = nameFile
    }

    c('Enviando correo electronico...')
    
    const resp = await transport.sendMail(options,(err,info)=>{
        if(err){
            c('Error al enviar correo:')
            return console.error(err.message)
        }
        c('Archivo enviado existosamente')
        c(info.messageId)
    })

    return resp
}

module.exports = enviaEmail