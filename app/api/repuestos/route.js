import Repuesto from "@models/repuesto";
import  connectToDB  from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const repuesto = await Repuesto.find({})

        return new Response(JSON.stringify(repuesto), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 


