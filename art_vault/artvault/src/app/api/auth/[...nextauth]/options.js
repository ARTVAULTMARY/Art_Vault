import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../lib/prisma";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'credentials',
			credentials: {
				email: { label: 'email', type: 'text', placeholder: 'email' },
				password: { label: 'password', type: 'password', placeholder: 'password' }
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) return null;

				const user = await prisma.user.findUnique({
					where: { email: credentials?.email },
				});
				if (!user || !user.hashedPassword) return null;

				const passwordMatch = await bcrypt.compare(
					credentials.password,
					user.hashedPassword
				);
				if (!passwordMatch) throw new Error('Invalid credentials');

				return {
					id: user.id,
					name: user.name,
					email: user.email,
				};
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
				const u = user as User;
				return {
					...token,
					id: u.id,
					email: u.email,
					name: u.name,
				};
			}
			return token;
		},
    },
    session: {
		strategy: 'jwt',
	},
    secret: process.env.NEXTAUTH_SECRET,,
    debug: process.env.NODE_ENV === 'development',
}
