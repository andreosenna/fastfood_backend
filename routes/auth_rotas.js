import { login, register, authcookie, logout } from '../controllers/auth_controller.js'
import {Router} from 'express'
import {authMiddleware} from '../middlewares/auth-middlewares.js'


const route = Router()

route.post('/auth/login', login)
route.post('/auth/register',register )
route.get('/me',authcookie)
route.post('/logout', authMiddleware, logout)




export default route
