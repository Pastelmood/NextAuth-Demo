import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize(credentials) {
        const user: User = {
          email: credentials?.email as string,
          name: credentials?.name as string,
          image: credentials?.image as string,
        };

        return user;
      },
    }),
  ],
});
