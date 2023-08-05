import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginWithCredentials } from "../../../services/authentication/credentialAuth.services";
export const authOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "TeamWale Account",

      credentials: {},

      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const resp = await loginWithCredentials({ email, password });

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
const authHandler = NextAuth(authOptions);
export default async function handler(...params: any[]) {
  await authHandler(...params);
}
