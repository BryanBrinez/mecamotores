import Servicio from "@models/servicio";

import connectToDB from "@utils/database";



export const GET = async (request, { params } ) => {
  try {
    await connectToDB();

    const service = await Servicio.findOne({_id : params._id})


    return new Response(JSON.stringify(service), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
