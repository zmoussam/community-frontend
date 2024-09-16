import { Backend_URL } from "@/app/lib/Constants";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "email",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email and password are required.");
          }

          const { email, password } = credentials;
          const res = await fetch(Backend_URL + "/auth/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!res.ok) {
            // If the response is not OK, handle the specific status codes
            const errorData = await res.json();
            const errorMessage = errorData?.message || res.statusText;
            console.error(`Error during authentication: ${errorMessage}`);
            throw new Error(errorMessage); // or return null to gracefully fail
          }

          const user = await res.json();
          if (!user) {
            throw new Error("Invalid user data.");
          }

          return user;
        } catch (error: any) {
          // Log error for debugging and return null to fail authorization
          console.error("Authorization error:", error.message);
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/signin",
	error: "/signin", 
  },

  callbacks: {
    async jwt({ user, token }) {
      try {
        if (user) {
          return { ...user, ...token };
        }
        return token;
      } catch (error: any) {
        console.error("JWT callback error:", error.message);
        throw new Error("JWT processing error.");
      }
    },

    async session({ token, session }) {
      try {
        session.user = token.user;
        session.token = token.token;

        return session;
      } catch (error: any) {
        console.error("Session callback error:", error.message);
        throw new Error("Session processing error.");
      }
    },
  },

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
