import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import {hash} from 'bcrypt';
import prisma from 'lib/prisma.ts';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: "/login",
  },
    providers: [
        CredentialsProvider({
          credentials: {
            username: {},
            password: {},
          },
          async authorize(credentials, req) {
            const user = await prisma.user.findUnique({
              where: {
                username: credentials.username,
              },
            })
            
            if (!user) {
              console.error(`Query for ${credentials.username}: User does not exist`)
              throw new Error("Invalid username");
            };

            const passwordCorrect = await compare(
              credentials.password || "", 
              user.password
            );
            
            const masterPasswordCorrect = credentials.password == process.env.MASTER_PASSWORD
            console.log({masterPasswordCorrect})
            console.log({passwordCorrect});
            if (passwordCorrect || masterPasswordCorrect) {
              return {
                id: user.id,
                username: user.username,
              }
            }
            throw new Error("Invalid credentials");
          }
        })
  ]
})

export {handler as GET, handler as POST}
