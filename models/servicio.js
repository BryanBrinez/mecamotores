import mongoose, { model } from "mongoose";


const servicioSchema = new mongoose.Schema({
  maquina: mongoose.Types.ObjectId,
  tServicio: String,
  fallas: String,
  obsRecibido: String,
  estado:{
    type: String,
    default: "Por revisar"
  },
  notaMecanico:{
    type: String,
    default: "Sin ingresar"
  },
  valorRepuestos:{
    type: String,
    default: "0"
  },
  valorManoObra:{
    type: String,
    default: "0"
  },
},
{
    timestamps:true
},
{
  versionKey: false // Desactivar el campo __v
});



export default mongoose.models.Servicio || mongoose.model("Servicio", servicioSchema);