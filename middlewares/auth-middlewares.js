import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next)=>{
const {cookieUsuario} = req.cookies
if(process.env.JWT_SECRET){
const decoded = jwt.verify(cookieUsuario,process.env.JWT_SECRET)
if(!decoded){
    res.status(401).json({mensagem:"erro no decoded do authmiddleware usuario nao atenticado"})
    return
}
next()

}else{
    return res.status(500).json({mensagem:'erro no env para authmiddleware'})
}
}