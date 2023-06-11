import User from "@models/user";
import Servicio from "@models/servicio";
import connectToDB from "@utils/database";

export const PUT = async (request) => {
  const { id, selectedButton } = await request.json();
  //const { name, email, password } = await request.json();

  try {
    await connectToDB();

    const filter = { maquina: id };
    const update = { estado: selectedButton };

    const newService = await Servicio.updateOne(filter,update)
    //const user = new User(data);
    //const user = await User.create( name, email, password );
    //await user.save();
    //console.log(newService)

    return new Response(JSON.stringify({ newService }), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
