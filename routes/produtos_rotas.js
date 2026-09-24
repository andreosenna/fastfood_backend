import * as produtos_controller from '../controllers/produtos_controller.js'
import {Router} from 'express'

const router = Router()

router.get('/produtos', produtos_controller.getProdutos)
router.get('/produtos/:id', produtos_controller.getProdutosById)



export default router

