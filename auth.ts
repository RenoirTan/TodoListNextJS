import { comparePassword, getUserByEmail, getUser } from "@/lib/users";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { z } from "zod";
import prisma from "@/db";
import { authConfig } from "./auth.config";
import { JWT } from "next-auth/jwt";

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
      const user = await getUserByEmail(email);
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

const githubProvider = GithubProvider({
  clientId: process.env.GITHUB_ID,
  clientSecret: process.env.GITHUB_SECRET
});

const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    credentialsProvider,
    githubProvider
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: "jwt"
  },
  callbacks: {
    // https://logfetch.com/next-auth-get-user-database-id-from-session/
    // type annotation is temporary
    // current issue: https://github.com/nextauthjs/next-auth/issues/9633#issuecomment-1900085171
    async session({ session, token, trigger }: { session: Session; token?: JWT; trigger?: "update"}) {
      if (session?.user && token?.sub) {
        session.user.id = token.sub;
        if (trigger === "update" && session.user.id) {
          const user = await getUser(session.user.id);
          if (user) {
            session.user.name = user.name;
          }
        }
      }

      return session;
    }
  }
});

export { GET, POST, auth, signIn, signOut };