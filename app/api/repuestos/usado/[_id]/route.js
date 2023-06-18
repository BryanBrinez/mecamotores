import RepuestoUsado from "@models/repuestoUsado";
import connectToDB from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    // console.log(params)

    const repUsed = await RepuestoUsado.findOne({ servicio: params._id });

    return new Response(JSON.stringify(repUsed), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const { index } = await request.json();

  try {
    await connectToDB();

    const filter = { servicio: params._id };
    const update = {
      $unset: { [`repuestos.${index}`]: null },
    };

    const newHerramientaUsada = await RepuestoUsado.updateOne(
      filter,
      update
    );

    const update2 = {
      $pull: { repuestos: null },
    };
    
    await RepuestoUsado.updateOne(filter, update2);

    return new Response(JSON.stringify({ newHerramientaUsada }), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};

