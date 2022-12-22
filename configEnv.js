import * as dotenv from 'dotenv'
import logger from './src/Loggers/loggers.js'


const configEnv = ()=>{
    dotenv.config()
    
    logger.info({test: process.env.TEST})
}

export default configEnv
