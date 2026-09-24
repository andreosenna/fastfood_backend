import BD from '../server/BD.js'

export const buscarUsuarioPorEmail = async (email)=>{
    const response = await BD.query("select * from usuarios where email=$1", [email])
    
    return response.rows[0]
}

export const inserirNovoUsuario = async (dados)=>{
const {usuario, senha, cep, email,cpf,telefone} = dados
const response = await BD.query(
   "INSERT INTO usuarios (usuario, senha, cep, telefone, email, cpf) VALUES ($1, $2, $3, $4, $5, $6) RETURNING usuario",
    [usuario, senha, cep, telefone, email, cpf])
return response.rows[0]
}
export const buscarUsuarioPorCPF = async (cpf)=>{
    const response = await BD.query("select * from usuarios where cpf=$1", [cpf])
    
    return response.rows[0]
}
