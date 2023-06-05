import User from "@models/user";
import Maquina from "@models/maquina";
import  connectToDB  from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const user = await Maquina.findOne({_id : params._id})

        return new Response(JSON.stringify(user), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 