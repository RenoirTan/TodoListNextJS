import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // matches everything except
  //  - /
  //  - /api/...
  //  - /register
  //  - /_next/static/...
  //  - /_next/image/...
  //  - /favicon.ico/...
  //  - /{...}.png
  matcher: ["/((?!api|register|_next/static|_next/image|favicon\\.ico|.*\\.png$).*){1}"],
};