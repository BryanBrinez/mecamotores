import mongoose, { model, mongo } from "mongoose";

const repuestoUsadoSchema = new mongoose.Schema(
  {
    servicio: mongoose.Types.ObjectId,
    repuestos: Array,
  },
  {
    versionKey: false, // Desactivar el campo __v
  }
);

export default mongoose.models.RepuestoUsado ||
  mongoose.model("RepuestoUsado", repuestoUsadoSchema);
