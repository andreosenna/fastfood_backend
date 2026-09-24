import BD from '../server/BD.js'

export const getProdutos = async ()=>{

    const response = await BD.query("select * from produtos")
    return response.rows
}


export const getProdutosById = async (id)=>{
    const response = await BD.query("select * from produtos where id= $1",[id])
    return response.rows[0]
}
