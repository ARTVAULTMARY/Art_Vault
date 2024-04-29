import { put } from "@vercel/blob";
import { customAlphabet } from "nanoid";
import { PrismaClient } from "@prisma/client";

const nanoid = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkimnopqrstuvwxyz", 7
)

export async function POST(request) {

    const searchParams = request.nextUrl.searchParams;
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    const userID = searchParams.get("userID");
    const galleryID = searchParams.get("galleryID");
    const file = request.body || '';
    const contentType = request.headers.get("content-type") || "text/plain";
    const filename = `${title}-${nanoid()}.${contentType.split('/')[1]}`;
    var returnMsg = "unsupported action";
    var status = 501;

    try {

        const prisma = new PrismaClient();

        const userFetch = await prisma.gallery.findUnique({
            where: { id: galleryID },
        });

        if (userFetch !== null && userFetch.userId === userID) {

            const blob = await put(filename, file, {
                contentType,
                access: "public",
            });
    
            await prisma.gallery.update({
                where: { id: galleryID },
                data: {
                    images: {
                        create: [
                        {
                            title: title?.replaceAll("_", " "),
                            description: description?.replaceAll("_", " "),
                            imageURL: blob.url,
                            downloadURL: blob.downloadUrl,
                            public: "false",
                        }
                    ]}
                },
            });

            returnMsg = "successful image upload";
        } else {
            returnMsg = "bad userID/galleryID";
        }

        await prisma.$disconnect();

    } catch (e) {
        returnMsg = "server side error";
        console.log(e);
    }

    return new Response(
        JSON.stringify({
            returnMsg: returnMsg,
        }),
        {
            headers: {
                "Content-Type": "application/json",
            },
            status: 200,
        }
    );
}