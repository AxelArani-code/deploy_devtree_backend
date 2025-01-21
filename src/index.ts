import colors from 'colors'
import server from './server'
//process.env.PROT (Es para el deployment en donde obtiene cualquier pueto)
const port = process.env.PROT || 4000

server.listen(port,() =>{
    console.log(colors.magenta.bold(`Servidor Funcionando, puerto: ${port}`))
})