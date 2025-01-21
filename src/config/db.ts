import colors from 'colors'
import mongoose from 'mongoose'



export const connectDB = async() =>{
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_URL)
        const url2= `${connection.host}:${connection.port}`
     
        console.log(colors.cyan.bold(`Conectado MongoDB en ${url2}`))

    }catch(error){
        console.log(colors.red.bold(error.message))
    }
}