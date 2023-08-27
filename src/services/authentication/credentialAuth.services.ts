import axios from "axios";
import { GoogleAuthDto } from "./httpAuth.service.i";

const authApi = axios.create({ baseURL: process.env.AUTH_API as string });

export const loginWithCredentials = async (data: {
  email: string | undefined;
  password: string | undefined;
}) => {
  const res = await authApi.post(
    "/auth/login",
    {
      email: data.email,
      password: data.password,
    },
    { withCredentials: true }
  );
  return res;
};

export const googleAuth = async (data: GoogleAuthDto) => {
  const res = await authApi.post(
    "/auth/google-auth",
    { ...data },
    { withCredentials: true }
  );
  return res;
};
