import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import prisma from 'lib/prisma.ts';
import PrismaAdapter from '@next-auth/prisma-adapter'

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
				email: { label: 'email', type: 'text', placeholder: 'email' },
				password: { label: 'password', type: 'password', placeholder: 'password' }
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username,
          },
        })
        
        if (!user) {
          throw new Error("Invalid credentials");
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
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session(session, user) {
      session.user.id = user.id;
      return session;
    },
    async jwt(token, user, account) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  }
})

export {handler as GET, handler as POST}
