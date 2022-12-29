import mongoose from 'mongoose'
import logger from '../Loggers/loggers.js'

const MONGOHOST = "containers-us-west-123.railway.app"
const MONGOPASSWORD = "98hzEU3gAqUcRotku50M"
const MONGOPORT = 6465
const MONGOUSER = "mongo"
const MONGOURL = `mongodb://${ MONGOUSER }:${ MONGOPASSWORD }@${ MONGOHOST }:${ MONGOPORT }`

mongoose.connect(MONGOURL, (err)=>{
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