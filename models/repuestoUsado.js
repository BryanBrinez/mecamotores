import mongoose, { model, mongo } from "mongoose";

const repuestoUsadoSchema = new mongoose.Schema(
  {
    repuesto: mongoose.Types.ObjectId,
    servicio: mongoose.Types.ObjectId,
  },
  {
    versionKey: false, // Desactivar el campo __v
  }
);

export default mongoose.models.RepuestoUsado ||
  mongoose.model("RepuestoUsado", repuestoUsadoSchema);
