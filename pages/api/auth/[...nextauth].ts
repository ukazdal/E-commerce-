import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/libs/prismadb";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

export const authOptions :   AuthOptions = { 
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            credentials: {
              email: { label: "E-mail",  type: "text", placeholder: "E-maail" },
              password: { label: "Password", type: "password" , placeholder: "Password" },
            },
            async authorize( credentials, req ) {
              if(!credentials?.email || !credentials?.password){
                throw new Error("Incomplete login information.");
              }
              const user = await prisma.user.findUnique({
                where: {
                    email: credentials.email
                }
              })
              if(!user || !user.hashedPassword){
                throw new Error("Invalid login information.");
              }
              const comparePassord = await bcrypt.compare(credentials.password, user.hashedPassword);
              if(!comparePassord){
                throw new Error("Invalid password.");
              }

              return user;
            },
        }),
    ],
    pages: {
        signIn:"/login"
    },
    debug: process.env.NODE_ENV === "development",
    session: {
        strategy: "jwt",
    }, 
    secret: process.env.NEXTAUTH_SECRET,
}


export default NextAuth(authOptions)