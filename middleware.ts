import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
// Initializing NextAuth.js with the authConfig object and exporting the auth property
export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // Specify what path the middleware runs on
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
