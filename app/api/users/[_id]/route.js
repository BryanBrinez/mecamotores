import Servicio from "@models/servicio";

import connectToDB from "@utils/database";



export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    //console.log(params._id)

    const mostrarMaquina = await Servicio.aggregate(
      [
        {
          $lookup: {
            from:"maquinas",
            localField:"maquina",
            foreignField:"_id",
            as:"Maquina",
          }
          
        },
        {
          $unwind: "$Maquina"
        },
        {
          $lookup: {
            from:"clientes",
            localField:"Maquina.cliente",
            foreignField:"_id",
            as:"Cliente",
          }
        },
        {
          $unwind: "$Cliente"
        },
        { $match : { "Cliente.cedula" : params._id }}
       
        
      ]
    )



    return new Response(JSON.stringify(mostrarMaquina), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
