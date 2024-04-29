import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

export async function POST(request) {
    const data = await request.json();

    const prisma = new PrismaClient();
    var returnMsg = "null";
    var status = 501;

    try {
        const userFetch = await prisma.user.findUnique({
            where: { id: data.userID },
        });

        if (userFetch !== null) {
            await prisma.user.update({
                where: { id: data.userID },
                data: {
                    galleries: {
                        create: [{
                            title: data.title,
                            description: data.description,
                        }]
                    }
                }
            });

            returnMsg = "gallery created successfully";
            status = 201;

        } else {
            
        }
    } catch (e) {
        returnMsg = "server side error";
        status = 500;
        console.log(e);
    }

    await prisma.$disconnect();

    return new Response(
        JSON.stringify({
            returnMsg: returnMsg,
        }),
        {
            headers: {
                "Content-Type": "application/json",
            },
            status: status,
        }
    );
}
