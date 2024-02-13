import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // matches everything except
  //  - /
  //  - /api/...
  //  - /login
  //  - /register
  //  - /_next/static/...
  //  - /_next/image/...
  //  - /favicon.ico
  //  - /{...}.png
  // equivalent to `/^\/((?!api|register$|_next\/static|_next\/image|favicon\.ico$|.*\.png$).+)/g`
  matcher: ["/((?!api|login$|register$|_next/static|_next/image|favicon\\.ico$|.*\\.png$).+)"],
};