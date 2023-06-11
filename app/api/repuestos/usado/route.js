import RepuestoUsado from "@models/repuestoUsado";
import connectToDB from "@utils/database";

export const POST = async (request) => {
  const { idService, idRep, cantReps,nameRep } = await request.json();

  try {
    await connectToDB();

    //console.log(idService);
    //console.log(idRep);
    //console.log(cantReps);

    const result = await RepuestoUsado.findOne({ servicio: idService });

    if (result) {
      const rep = await RepuestoUsado.updateOne(
        { servicio: idService },
        {
          $push: {
            repuestos: {
              idRep,
              nameRep,
              cantReps,
            },
          },
        }
      );
      // Aquí puedes realizar alguna acción adicional si el registro ya existe
    } else {
      const nuevoRepuestoUsado = new RepuestoUsado({
        servicio: idService,
      });

      await nuevoRepuestoUsado.save();

      const rep = await RepuestoUsado.updateOne(
        { servicio: idService },
        {
          $push: {
            repuestos: {
              idRep,
              nameRep,
              cantReps,
            },
          },
        }
      );

      console.log("Registro de repuestos usados creado correctamente");
    }

    // Resto del código...

    return new Response(JSON.stringify({ result }), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};

export const GET = async (request) => {
  try {
    await connectToDB();

    const repuesto = await RepuestoUsado.find({});

    return new Response(JSON.stringify(repuesto), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
