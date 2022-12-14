import { Router } from "express";
import {cpus} from 'os'

const routerInfo = Router()
const cpu = cpus().length

routerInfo.get('/info', (req,res)=>{
    const data = {
        argumentosDeEntrada: process.argv.splice(2),
        sistemaOperativo: process.platform,
        versionDeNode: process.version,
        memoriaReservada: JSON.stringify(process.memoryUsage().rss),
        pathDeEjecucion: process.execPath,
        processId: process.pid,
        carpetaProyecto: process.cwd(),
        procesadores: cpu
    }
    if (req?.user?.username) {
        res.render('info', {
            layout: 'info',
            data: data,
            mostrarRegistro: false,
            usuario: req.user.username
        })
    } else {
        res.render('info', {
            layout: 'info',
            mostrarRegistro: true,
            data: data
        })
    }
})

export default routerInfo