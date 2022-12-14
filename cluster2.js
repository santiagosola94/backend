import express from 'express'
import cluster from 'cluster'
import {cpus} from 'os'
import {fork} from 'child_process'

const app = express()
const PORT = process.argv[2] || 8080
const MODO = process.argv[3] || "FORK"
console.log('hola')

const cpu = cpus().length
const forked = fork('./child.js')

if (cluster.isPrimary) {
    if (MODO == "FORK") {
        cluster.fork()
    }
    if (MODO == "CLUSTER") {
        for (let index = 0; index < cpu; index++) {
            cluster.fork()
        }
    }
} else {
    console.log(`Fork creado con id ${process.pid}`)
    app.get('/', (req,res)=>{
        res.send(`Servidor levantado en ${PORT}, con nginx. pid: ${process.pid}`)
    })

    app.get('/api/randoms', (req,res)=>{
        let {cant} = req.query
        forked.send({mensaje: 'inicio', cant})
    
        forked.on('message', msg =>{
            console.log(msg)
        } )
        
        res.send(`Servidor levantado en ${PORT}, con nginx. <br> pid: ${process.pid}`)
    })
    
    app.listen(PORT, ()=>{
        console.log(`conectado en el puerto ${PORT}`)
    })
}