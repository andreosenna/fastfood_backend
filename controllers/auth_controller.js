import * as auth_model from '../model/Auth_model.js'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"


export const login = async (req, res) => {
    try {
       const { email, senha } = req.body//|| {}

        if (!email || !senha) {
             res.status(400).json({ mensagem: 'email e/ou senha nao foram digitados' })
             return
        }
        const usuario = await auth_model.buscarUsuarioPorEmail(email)
        const match =  await bcrypt.compare(senha, usuario.senha)
        if (!match ){
            res.status(400).json({ mensagem: "senha incorreta" });
        return    
        }
        const infoUsuario = {
    id: usuario.id, 
    usuario:usuario.usuario,
    role: usuario.role, 
    email: usuario.email
};


const token = jwt.sign(infoUsuario, process.env.JWT_SECRET)
   res.cookie("cookieUsuario",token, {maxAge:300*1000})
    res.status(200).json({ mensagem: 'login realizado com sucesso', infoUsuario}
    
    )
      } catch (erro) {
        res.status(500).json({ mensagem: 'erro na pesquisa', erro: erro.message })
    }
}

export const register = async (req,res)=>{
   try{
    const {usuario, senha, cep, email, cpf, telefone} = req.body

       if (!usuario || !senha || !cep || !email || !cpf || !telefone) {
           return res.status(400).json({mensagem: 'Nao foram preenchidos  todos os campos'})
       }
    const buscaEmail = await auth_model.buscarUsuarioPorEmail(email)
       if(buscaEmail?.email){
        return res.status(409).json({mensagem: 'email já cadastrado'})
       }
    const buscaCPF = await auth_model.buscarUsuarioPorCPF(cpf)
    if(buscaCPF?.cpf){
        return res.status(409).json({mensagem:"CPF já cadastrado"})
    }
    const hashSenha = await  bcrypt.hash(senha, 10)
       await auth_model.inserirNovoUsuario({usuario, senha:hashSenha, cep, email, cpf, telefone})
       res.status(201).json({mensagem: 'usuario criado com sucesso'})
   }catch(error){
       console.error('Erro ao registrar usuário:', error)
       res.status(500).json({mensagem: 'erro ao criar usuário', erro: error.message})
   }
}

export const authcookie = async (req,res)=>{
    try{
    const userToken = req.cookies.cookieUsuario
    const decoded = jwt.verify(userToken,process.env.JWT_SECRET)
    res.status(200).json({decoded})
    if(!decoded){
        res.status(401).json({mensagem:"nao autenticado"})
    }
}catch(error){
res.status(500).json({mensagem:"erro no servidor de cookie"})
    console.log(error)
    return
}
}

export const logout = async (req, res) =>{
    try{
const {cookieUsuario} = req.cookies
console.log("user do logout: ",cookieUsuario)
if (cookieUsuario){
    res.clearCookie("cookieUsuario")//string com o nome do cookie
    res.json({menesagem:"Logout efetuado com sucesso!"})// precisa dar resposta json senao nao vai limparo cookie
}

    }catch(error){
        console.log(error)
    }
}