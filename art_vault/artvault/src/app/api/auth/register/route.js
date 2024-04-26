import { NextResponse } from "next/server"
import {hash} from 'bcrypt';
import prisma from 'lib/prisma.ts';

export async function POST(request){
    try {
        const {email, username, password} = await request.json()
        console.log({email, username, password})

        const hashedPassword = await hash(password, 10)
        
        // const checkname = await prisma.user.findUnique({
        //     where: {
        //       username: username,
        //     }
        // })
        const checkemail = await prisma.user.findUnique({
            where: {
              email: email,
            }
        })

        // if (checkname) {
        //     return NextResponse.json({ message: "Username Already Exists" }, { status: 400 });
        // };
        if (checkemail) {
            return NextResponse.json({ message: "Email Already Exists" }, { status: 400 });
        };
        
        const user = await prisma.user.create({
            data: {
              email: email,
              username: username,
              hashedPassword: hashedPassword,
            },
        })

        const gallery = await prisma.gallery.create({
            data: {
              user_id: user.id,
              name: username,
              title: "Default Gallery",
            },
        })
        return NextResponse.json({ message: 'signup success' })
        
    } catch (e) {
        // console.log({ e })
        return NextResponse.json({ message: `${e}` }, { status: 400 });
    }
}
