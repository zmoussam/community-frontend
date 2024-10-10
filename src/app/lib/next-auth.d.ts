import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      email: string;
	  firstName: string | null | undefined;
	  lastName: string | null | undefined;
      fullName: string;
    };

    token: string;
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: number;
      email: string;
      fullName: string;
    };

    token: string;
  }
}
