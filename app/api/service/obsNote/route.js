import Servicio from "@models/servicio";
import connectToDB from "@utils/database";


export const PUT = async (request ) => {
    const {idService,manoDeObra } = await request.json();
    //console.log(idService, manoDeObra)
    //const { name, email, password } = await request.json();
  
    try {
      await connectToDB();
  
      const filter = { _id: idService };
      const update = { valorManoObra: manoDeObra };
  
      //console.log(filter)
  
      const newService = await Servicio.updateOne(filter,update)
      //console.log(newService)
  
      return new Response(JSON.stringify({ newService }), { status: 201 });
    } catch (error) {
      return new Response("Failed to create a new prompt", { status: 500 });
    }
  };