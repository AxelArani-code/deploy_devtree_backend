//Confirguracion de los Cors 
import { CorsOptions } from "cors";


//Debemos tener la URL del front donde quien pide la peticion
export const corsConfig : CorsOptions ={
    origin: function(origin,callback){
        const whiteList =[process.env.FRONTEND_URL]

        if(process.argv[2] === '--api'){
            whiteList.push(undefined)
        }

        if(whiteList.includes(origin)){
            console.log("aceptada")
            callback(null, true)
        }else{
            callback(new Error('Error de CORS'))
        }
    }
}