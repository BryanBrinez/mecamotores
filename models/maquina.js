import mongoose, { model, mongo } from "mongoose";

const maquinaSchema = new mongoose.Schema(
  {
    cliente: mongoose.Types.ObjectId,
    serial: String,
    tipo: String,
    marca: String,
    modelo: String,
  },
  {
    versionKey: false, // Desactivar el campo __v
  }
);

export default mongoose.models.Maquina ||
  mongoose.model("Maquina", maquinaSchema);
