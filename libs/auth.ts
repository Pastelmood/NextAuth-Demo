import NextAuth, { DefaultSession, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

// JSDoc: Extend next-auth types to include custom user/session fields
/**
 * Extends the next-auth User interface to include custom fields: role and userId.
 * Extends the next-auth Session interface to include user object with custom fields.
 */
declare module "next-auth" {
  interface User {
    role?: string;
    userId?: string;
  }

  interface Session {
    user: {
      role?: string;
      userId?: string;
    } & DefaultSession["user"];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize(credentials) {
        const user: User = {
          email: credentials?.email as string,
          name: credentials?.name as string,
          image: credentials?.image as string,
          role: credentials?.role as string,
          userId: credentials?.userId as string,
        };

        return user;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.userId = user.userId;
      }
      return token;
    },
    session({ session, token}) {
      if (session.user) {
        session.user.role = typeof token.role === "string" ? token.role : undefined;
        session.user.userId = typeof token.userId === "string" ? token.userId : undefined;
      }
      return session;
    },
  },
});
