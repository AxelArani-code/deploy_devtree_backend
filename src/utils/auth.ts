//Este archivo hace para comparar los password
//npm i bcrypt y.. npm i --save-dev @types/bcrypt
import bcrypt from 'bcrypt'

export const hashPassword = async(password:string)=>{
    const salt = await bcrypt.genSalt(10)//generar numero de caracteries al password
    return await bcrypt.hash(password,salt)
}

export const checkPassword= async (enterdPassword: string, hash:string)=>{
    //Comparar password con hash 
    return await bcrypt.compare(enterdPassword,hash)
   
}   