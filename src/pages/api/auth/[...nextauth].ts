import { loginWithCredentials } from "../../../services/authentication/credentialAuth.services";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

type NextAuthOptionsCallback = (
  req: NextApiRequest,
  res: NextApiResponse
) => NextAuthOptions;

const nextAuthOptions: NextAuthOptionsCallback = (req, res) => {
  return {
    providers: [
      CredentialsProvider({
        type: "credentials",
        name: "TeamWale Account",

        credentials: {},

        async authorize(credentials) {
          const { email, password } = credentials as {
            email: string;
            password: string;
          };

          const resp = await loginWithCredentials({ email, password });

          const cookiesFromResponse = resp.headers["set-cookie"];

          if (cookiesFromResponse != undefined) {
            res.setHeader("Set-Cookie", cookiesFromResponse);
          }

          if ((resp.status = 201)) {
            console.log("success");
            return resp.data;
          } else {
            console.log("check your credentials");
            return null;
          }
        },
      }),
      GoogleProvider({
        name: "google",
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string,
      }),
    ],
    pages: {
      signIn: "../../login",
    },
    events: {
      async signOut({ token, session }) {
        res.setHeader("Set-Cookie", [
          "Authentication=deleted;Max-Age=0;path=/;",
          "RefreshToken=deleted;Max-Age=0;path=/;",
          "Roles=deleted;Max-Age=0;path=/;",
        ]);
      },
    },
    callbacks: {
      async signIn({ account, profile }) {
        if (account?.provider === "google") {
          console.log(account);
          console.log(profile);
          if (profile?.email !== "quocldgcd191316@fpt.edu.vn") {
            return false;
          }
        }
        return true; // Do different verification for other providers that don't have `email_verified`
      },
    },
  };
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, nextAuthOptions(req, res));
};
