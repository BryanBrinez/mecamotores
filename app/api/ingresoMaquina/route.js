import Cliente from "@models/cliente";
import Maquina from "@models/maquina";
import Servicio from "@models/servicio";

import connectToDB from "@utils/database";

export const POST = async (request) => {
  //const data = await request.json();
  const {
    name,
    cedula,
    tel,
    email,
    direccion,
    serial,
    tipo,
    marca,
    modelo,
    tServicio,
    fallas,
    obsRecibido,
  } = await request.json();

  try {
    await connectToDB();

    const client = new Cliente({
      name: name,
      cedula: cedula,
      tel: tel,
      email: email,
      direccion: direccion,
    });

    //*const idLastCliente = lastClient.

    //const user = new User(data);//
    //const user = await User.create( name, email, password );
    await client.save();

    const lastClient = await Cliente.find().sort({ $natural: -1 }).limit(1);
    const idLastCliente = await lastClient[0]._id;

    const maquina = new Maquina({
      cliente: idLastCliente,
      serial: serial,
      marca: marca,
      tipo: tipo,
      modelo: modelo,
    });

    await maquina.save();

    const lastMaquina = await Maquina.find().sort({ $natural: -1 }).limit(1);
    const idLastMaquina = await lastMaquina[0]._id;

    const arra = await Maquina.find();
    //console.log(arra[0]._id);

    //console.log(await Servicio.findOne({ maquina: arra[0]._id }));

    const servicio = new Servicio({
      maquina: idLastMaquina,
      tServicio: tServicio,
      fallas: fallas,
      obsRecibido: obsRecibido,
    });

    await servicio.save();

    return new Response(JSON.stringify({ client }), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};

export const GET = async (request) => {
  try {
    await connectToDB();

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
        
       
        
      ]
    )



    return new Response(JSON.stringify(mostrarMaquina), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
