import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
    
    const prisma = new PrismaClient();
    var status = 501;
    var fetchData = [];

    try {
        status = 200;

        if (params.type === "Users") {
            fetchData = await prisma.user.findMany();
        } else if (params.type === "Galleries") {
            fetchData = await prisma.gallery.findMany();
        } else {
            fetchData = await prisma.image.findMany();
        }
    } catch (e) {
        status = 500;
        console.log(e);
    }

    await prisma.$disconnect();

    return new Response(
        JSON.stringify({
            "adminData": fetchData,
        }),
        {
            headers: {
                "Content-Type": "application/json",
            },
            status: status,
        }
    );
}
