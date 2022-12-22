import mongoose from 'mongoose'
import logger from '../Loggers/loggers.js'

mongoose.connect('mongodb+srv://coderAdministrador:estrella1724@cluster0.egttbnl.mongodb.net/usuarios', (err)=>{
    if (err) {
        logger.error(`No se pudo conectar a mongo Atlas ${err}`)
        throw new Error(err)
    } else{
        return logger.info('Conectado a Mongo')
    }
})

const users = mongoose.model('usuarios', {
    username: String,
    password: String
})

export default users