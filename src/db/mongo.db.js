const mongoose = require('mongoose')
//constante para la cadena de conexion (url de mongo)  //usuario:password@servidor:puerto/nombre
const MONGO_URL = 
    process.env.MONGO_URL ?? 
    "mongodb://admin:admin1234@localhost:27017/libro?authSource=admin"; 

async function connectToDatabase() {
    try{
        await mongoose.connect(MONGO_URL);
        console.log("Conexion a mongo realizada con exito")
    } catch (err){
        console.error('Error al conectarse a mongo', err.message)
    }
}

module.exports = {mongoose, connectToDatabase}