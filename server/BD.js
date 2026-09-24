import pkg from 'pg'
import dotenv from 'dotenv'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({path:path.resolve(__dirname,'../.env')})

const {Pool} =  pkg

const BD = new Pool({
    user:process.env.BD_USER,
    host:process.env.BD_HOST,
    database:process.env.BD_DATABASE,
    port: Number(process.env.BD_PORT),
    password:process.env.BD_PASSWORD,
})

export default BD