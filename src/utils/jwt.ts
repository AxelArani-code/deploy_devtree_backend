import jwt, {JwtPayload} from "jsonwebtoken"

export const generateJWT = (payload : JwtPayload)=>{
    //Nos permite crear y validar JsonWebToken

    const token = jwt.sign(payload, process.env.JWT_SECRET,{
        //Esto para definir la duracion del token 
        expiresIn:'180d'
    })
    return token

}