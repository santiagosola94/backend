import log4js from "log4js";

log4js.configure({
    appenders: {
        consola: {type: "console"},

        loggerFileWarning: {type: "file", filename: "./logs/warn.log"},
        loggerFileError: {type: "file", filename: "./logs/error.log"},

        
        loggerWarning: {
            appender: "loggerFileWarning",
            type: "logLevelFilter",
            level: "warn",
            maxLevel: "warn"
        },
        loggerError: {
            appender: "loggerFileError",
            type: "logLevelFilter",
            level: "error",
            maxLevel: "error"
        },
        loggerConsole: {
            appender: "consola",
            type: "logLevelFilter",
            level: "info"
        }
    },
    categories: {
        default: {
            appenders: ["loggerConsole", "loggerWarning", "loggerError"],
            level: "all"
        },
        soloError: {
            appenders: ["loggerError"],
            level: "all"
        },
        soloWarn: {
            appenders: ["loggerWarning"],
            level: "all"
        }
    }
})

const logger = log4js.getLogger()
export default logger

