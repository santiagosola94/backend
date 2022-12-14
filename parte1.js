import cluster from 'cluster'
import argumentos from './src/minimist/minimist.js'
import {cpus} from 'os'
import server from './server.js'


const cpu = cpus().length

// Funcion que inicializa el servidor

if (cluster.isPrimary) {
    console.log(`Primario con pid: ${process.pid}`)
    if(argumentos.MODO == "FORK") {
        server()
    } else {
        for (let index = 0; index < cpu; index++) {
            cluster.fork()
        }
    
        cluster.on("exit", (worker, code, signal) => {
            console.log(`Se ha cerrado el worker con id: ${worker.process.pid}`)
            //cluster.fork()
        })
    }
} else {
    if (argumentos.MODO == "CLUSTER") {
        server()
    }
}

