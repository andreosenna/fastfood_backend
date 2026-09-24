
import express from 'express'
import cors from 'cors'
import usuarios_rotas from '../routes/usuarios_rotas.js'
import auth_rotas from '../routes/auth_rotas.js'
import produtos_rotas from '../routes/produtos_rotas.js'
import cookieParser from 'cookie-parser' // lib especifica do express

const app = express()
const PORT = 3001

app.use(cors({origin:"http://localhost:5173", 
    credentials: true,
    
}))
app.use(express.json())
app.use(cookieParser())

app.use('/api',usuarios_rotas)
app.use('/api',auth_rotas)
app.use('/api', produtos_rotas)

app.listen(PORT, ()=>{console.log("rodando porta"+PORT )})
