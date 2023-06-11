
import RepuestoUsado from "@models/repuestoUsado";
import  connectToDB  from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

       // console.log(params)

        const repUsed = await RepuestoUsado.findOne({servicio : params._id})

        return new Response(JSON.stringify(repUsed), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 

