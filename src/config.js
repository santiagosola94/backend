const MYSQLDATABASE = "railway"
const MYSQLHOST = "containers-us-west-135.railway.app"
const MYSQLPASSWORD = "Ydp2KETOQhIkNBW02TwD"
const MYSQLPORT = 5981
const MYSQLUSER = "root"
const MYSQL_URL = `mysql://${{ MYSQLUSER }}:${{ MYSQLPASSWORD }}@${{ MYSQLHOST }}:${{ MYSQLPORT }}/${{ MYSQLDATABASE }}`

const Configuraciones = {
    fileSystem: {
        path: './db'
    },
    mySQL: {
        client: "mysql2",
        connection: {
            user: MYSQLUSER,
            password: MYSQLPASSWORD,
            host: MYSQLHOST,
            port: MYSQLPORT,
            database: MYSQLDATABASE
        }
    },
    sqliteConfig: {
        client: "sqlite3", 
        connection: {
            filename: "./sqlite3/db/ecommerce.sqlite",
        },
        useNullAsDefault: true
    }
}

export default Configuraciones