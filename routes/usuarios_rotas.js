import * as Usuarios_Controller from '../controllers/usuarios_controller.js'

import {Router} from 'express'

const router = Router()

router.get('/usuarios', Usuarios_Controller.getUsuarios)

router.get('/usuarios/:id', Usuarios_Controller.buscarUsuarioPorId)

export default router