import * as usuarios_Model from '../model/Usuarios_model.js'

export const getUsuarios = async (req,res)=>{
try{
const listaUsuarios = await usuarios_Model.getUsuarios()
res.json(listaUsuarios)
    
}catch(erro){ 
res.status(500).json({mensagem:'erro ao buscar usuários', erro: erro.message})
}
}

export const buscarUsuarioPorId = async (req,res)=>{
try{
const {id} = req.params
const usuario = await usuarios_Model.buscarUsuariosPorId(id)
res.json(usuario)
    
}catch(erro){ 
res.status(500).json({mensagem:'erro ao buscar usuário por id', erro: erro.message})
}
}


