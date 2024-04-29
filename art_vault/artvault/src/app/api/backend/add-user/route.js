import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

export async function POST(request) {
    const data = await request.json();

    const prisma = new PrismaClient();
    var returnMsg = "null";
    var status = 501;

    try {
        const userFetch = await prisma.user.findFirst({
            where: { email: data.email },
        });

        if (userFetch !== null) {
            if (userFetch.password === data.password) {
                returnMsg = "successful log in";
                status = 202;
            } else {
                returnMsg = "failed log in";
                status = 200;
            }
        } else {
            returnMsg = "account created successfully";
            status = 201;

            await prisma.user.create({
                data: {
                    email: data.email,
                    username: data.username,
                    password: data.password,
                },
            });
        }
    } catch (e) {
        returnMsg = "server side error";
        status = 500;
        console.log(e);
    }

    await prisma.$disconnect();

    console.log(data);
    console.log(returnMsg, status);

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
