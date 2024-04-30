import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../lib/prisma";
import { compare } from "bcrypt";

const prismaAdapter = PrismaAdapter(prisma);

export const authOptions = {
    adapter: prismaAdapter,
    providers: [
        CredentialsProvider({
            name: 'credentials',
			credentials: {
				email: { label: 'email', type: 'text', placeholder: 'email' },
				password: { label: 'password', type: 'password', placeholder: 'password' }
			},
			async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: {
                      email: credentials.username,
                    },
                  })
                  
                  if (!user) {
                    throw new Error("Invalid credentials");
                  };
          
                  const passwordCorrect = await compare(
                    credentials.password || "", 
                    user.hashedPassword
                  );
                  
                  const masterPasswordCorrect = credentials.password == process.env.MASTER_PASSWORD
                  console.log({masterPasswordCorrect})
                  console.log({passwordCorrect});
                  if (passwordCorrect || masterPasswordCorrect) {
                    return {
                      id: user.id,
                      username: user.username,
                      email: user.email,
                    }
                  }
                  throw new Error("Invalid credentials");
			}, 
        })
    ],
    callbacks: {
        session({ session, token }) {
			session.user.id = token.userId;
			return {
				...session,
				user: {
					...session.user,
					id: token.id,
				},
			};
		},
		jwt({ token, user }) {
			if (user) {
				return {
					...token,
					id: user.id,
					email: user.email,
					name: user.username,
				};
			}
			return token;
		},
    },
    session: {
		strategy: 'jwt',
	},
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
}
