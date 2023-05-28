import User from "@models/user";
import  connectToDB  from "@utils/database";

export const POST = async (request) => {
    const data = await request.json();
    //const { name, email, password } = await request.json();

    try {
        await connectToDB();

        const user = new User(data)
        //const user = await User.create( name, email, password );
        await user.save();
        
        return new Response(JSON.stringify({ user }), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}