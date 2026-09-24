import * as produtos_model from '../model/produtos_model.js'

export const getProdutos = async (req, res)=>{
try{
const listaProdutos = await produtos_model.getProdutos()
return  res.json(listaProdutos)

}catch(e){
return res.status(500).json({mensagem: "erro buscar produtos"})    
}


}

export const getProdutosById = async (req, res)=>{
    try{
const {id} = req.params
const produto = await produtos_model.getProdutosById(id)

return res.json(produto)
    }catch(erro){
return res.status(500).json({mensagem:"Não foi encontrado produto com este id"})
    }
} 