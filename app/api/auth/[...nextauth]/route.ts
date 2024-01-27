import { comparePassword, getUser } from "@/lib/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

const credentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

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

const handler = NextAuth({
  providers: [
    credentialsProvider
  ],
  secret: process.env.NEXTAUTH_SECRET as string
});

export { handler as GET, handler as POST };