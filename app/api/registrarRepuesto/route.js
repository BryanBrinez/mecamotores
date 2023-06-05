import Repuesto from "@models/repuesto";
import  connectToDB  from "@utils/database";

export const POST = async (request) => {
    const data = await request.json();
    //const { name, email, password } = await request.json();

    try {
        await connectToDB();

        const repuesto = new Repuesto(data)
        //const user = await User.create( name, email, password );
        await repuesto.save();
        
        return new Response(JSON.stringify({ repuesto }), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}