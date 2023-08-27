import {
  googleAuth,
  loginWithCredentials,
} from "../../../services/authentication/credentialAuth.services";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import jwt_decode from "jwt-decode";

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
            return resp.data;
          } else {
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
          const userDecoded: any = await jwt_decode(String(account.id_token));
          const resp = await googleAuth({
            email: String(userDecoded.email),
            firstName: String(userDecoded.given_name),
            lastName: String(userDecoded.family_name),
            googleId: account.providerAccountId,
            avatar: String(userDecoded.picture),
          });

          const cookiesFromResponse = resp.headers["set-cookie"];

          if (cookiesFromResponse != undefined) {
            res.setHeader("Set-Cookie", cookiesFromResponse);
          }
          if (resp.status == 401) {
            return false;
          }
        }
        return true;
      },
    },
  };
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, nextAuthOptions(req, res));
};
