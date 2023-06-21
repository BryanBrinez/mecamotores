import Servicio from "@models/servicio";
import Cliente from "@models/cliente";

import connectToDB from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const client = await Cliente.findOne({ cedula: params._id });

    console.log(JSON.stringify(client));

    if (!client) {
      console.log("no esta");
      return new Response(new Error("Cliente no registrado"), { status: 200 });
    } 
    

    const mostrarMaquina = await Servicio.aggregate([
      {
        $lookup: {
          from: "maquinas",
          localField: "maquina",
          foreignField: "_id",
          as: "Maquina",
        },
      },
      {
        $unwind: "$Maquina",
      },
      {
        $lookup: {
          from: "clientes",
          localField: "Maquina.cliente",
          foreignField: "_id",
          as: "Cliente",
        },
      },
      {
        $unwind: "$Cliente",
      },
      { $match: { "Cliente.cedula": params._id } },
    ]);
    
    console.log(mostrarMaquina)

    return new Response(JSON.stringify(mostrarMaquina), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
