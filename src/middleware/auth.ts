//Protege el endPoint de usuario para que solo usuario autenticado acedan
import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import User, {IUser} from "../models/User"

// de esta formar se puede comunicar del Middleware asi el otro User
declare global{
    namespace Express{
        interface Request{
            user?: IUser
        }
    }
}

export const authenticate = async( req: Request, res:Response, next:NextFunction ) =>{
    //validacion de acceso a la View 
  const bearer = req.headers.authorization
  if(!bearer){
    const error = new Error('No Autorizado')
    res.status(401).json({error : error.message})
    return
  }
  const [, token] = bearer.split(' ')
  if(!token){
    const error = new Error('No Autorizado')
    res.status(401).json({error: error.message})
    return
  }
  //Verificar El Token 
  try {
    const result = jwt.verify(token, process.env.JWT_SECRET)
    if(typeof result === 'object' && result.id){
      const user = await User.findById(result.id).select('-password')
      if(!user){
        const error = new Error('El Usuario No Existe')
        res.status(404).json({error: error.message})
        return
      }
      req.user = user
      next()
    }
  } catch (error) {
    res.status(500).json({error: 'Token No Valido'})
    
  }
}