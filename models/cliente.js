import mongoose, { model } from "mongoose";


const clienteSchema = new mongoose.Schema({
  name: String,
  cedula: String,
  tel: String,
  email: String,
  direccion: String,
},
{
  versionKey: false // Desactivar el campo __v
});



export default mongoose.models.Cliente || mongoose.model("Cliente", clienteSchema);