import { comparePassword, getUser } from "@/lib/auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import prisma from "@/db";
import { authConfig } from "./auth.config";

export const credentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

const passwordsMatchValidator = (data: { password: string; confirmPassword: string }) => {
  return data.password === data.confirmPassword;
};

const passwordsDontMatchParams = () => {
  return {
    message: "Passwords don't match.",
    path: ["confirmPassword"]
  }
};

const createUserCredentialsObject = credentialsValidator
  .extend({ confirmPassword: z.string() });

export const createUserCredentialsValidator = createUserCredentialsObject
  .refine(passwordsMatchValidator, passwordsDontMatchParams());

export const changePasswordCredentialsValidator = createUserCredentialsObject
  .omit({ email: true })
  .extend({ oldPassword: z.string().min(8) })
  .refine(passwordsMatchValidator, passwordsDontMatchParams());

const credentialsProvider = CredentialsProvider({
  name: "Credentials",
  credentials: {
    email: { label: "Email", type: "text", placeholder: "Enter Email" },
    password: { label: "Password", type: "password", placeholder: "Enter Password" }
  },
  async authorize(credentials, req) {
    const parsedCredentials = credentialsValidator.safeParse(credentials);
    
    if (parsedCredentials.success) {
      const { email, password } = parsedCredentials.data;
      const user = await getUser(email);
      if (!user || !user.password) {
        return null;
      }
      if (await comparePassword(password, user.password)) {
        return user;
      }
    }

    return null;
  }
});

const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    credentialsProvider
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: "jwt"
  },
  callbacks: {
    // https://logfetch.com/next-auth-get-user-database-id-from-session/
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub;
      }

      return session;
    }
  }
});

export { GET, POST, auth, signIn, signOut };