import { loginWithCredentials } from "../../../services/authentication/credentialAuth.services";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
    ],
    pages: {
      signIn: "../../login",
    },
  };
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, nextAuthOptions(req, res));
};
