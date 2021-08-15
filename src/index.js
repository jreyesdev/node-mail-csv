const dotenv = require('dotenv').config()

if(dotenv.error) throw dotenv.error

const c = con => console.log(con)

const pool = require('./database')

// Obtiene usuarios de BBDD para datos del archivo
const getUsers = async () => {
    c('Consultando datos...')
    const { rows } = await pool.query('SELECT * FROM auth.users')
    c(`Consulta exitosa con ${rows.length} filas`)
    pool.end()
    return rows
}

(async () => {
    const users = await getUsers()
})()
