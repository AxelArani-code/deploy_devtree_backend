import express from 'express'
import 'dotenv/config'
import router from './router'
import cors from 'cors'
import { connectDB } from './config/db'
import { corsConfig } from './config/cors'
//Conectar BD 
connectDB()

const app  = express()
//Cors
app.use(cors(corsConfig))


//Leer datos de formulario 
app.use(express.json())

//lleva la propiedad router "Eso  va hacer que cuando visite la paguina va entrar al router y va entrar al router y busque la palabra "
app.use('/', router )

export default app