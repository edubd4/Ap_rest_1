const mongoose = require ('mongoose');
const dbconnect = () => {
    mongoose.set('strictQuery',true)
    mongoose.connect("mongodb://127.0.0.1:27017/user_prueba",{})
    .then((res)=>{
        console.log("Conexion correcta");
    })
    .catch((err)=>{
        console.log("Error de conexion")
    });
};

module.exports = dbconnect;