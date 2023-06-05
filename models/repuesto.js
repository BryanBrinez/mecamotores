import mongoose, { model, mongo } from "mongoose";

const repuestoSchema = new mongoose.Schema(
  {
    name: String,
    referencia: String,
    precio: String,
    marca: String,
  },
  {
    versionKey: false, // Desactivar el campo __v
  }
);

export default mongoose.models.Repuesto ||
  mongoose.model("Repuesto", repuestoSchema);
