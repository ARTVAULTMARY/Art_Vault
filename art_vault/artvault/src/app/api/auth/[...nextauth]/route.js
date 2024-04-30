import NextAuth from "next-auth";
import { authOptions } from "./options";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import prisma from 'lib/prisma.ts';
import PrismaAdapter from '@next-auth/prisma-adapter'

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}
