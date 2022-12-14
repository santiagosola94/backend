import parseArgs from "minimist";

const options = {
    alias: {
        p: "PORT",
        m: "MODO"
    },
    default: {
        p: 8080,
        m: 'FORK'
    }
}

const argumentos = parseArgs(process.argv.slice(2), options)

export default argumentos