import { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const loggedIn = !!auth?.user;
      return loggedIn;
    }
  },
  providers: [],
  debug: process.env.NODE_ENV !== "production"
} satisfies NextAuthConfig;