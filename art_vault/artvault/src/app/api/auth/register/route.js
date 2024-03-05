import { NextResponse } from "next/server"
import {hash} from 'bcrypt';
import prisma from 'lib/prisma.ts';

export async function POST(request){
    try {
        const {email, username, password} = await request.json()
        console.log({email, username, password})

        const hashedPassword = await hash(password, 10)

        const user = await prisma.user.create({
            data: {
              email: email,
              username: username,
              password: hashedPassword,
            },
        })

    } catch (e) {
        console.log({ e })
    }

    return NextResponse.json({ message: 'signup success' })
}
