import BD from '../server/BD.js'


export const getUsuarios = async ()=>{
const response = await BD.query("select * from usuarios")
return response.rows
}

export const buscarUsuariosPorId = async (id)=>{
    const response = await BD.query("select * from usuarios where id=$1", [id])
    return response.rows
}

export const buscarUsuarioPorEmail = async (email)=>{
    const response = await BD.query("select * from usuarios where email=$1", [email])
    
    return response.rows[0]
}


