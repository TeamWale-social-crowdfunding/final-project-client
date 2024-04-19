import axios from "axios";
import { GoogleAuthDto } from "./httpAuth.service.i";

const authApi = axios.create({ baseURL: "http://localhost:3001" });

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

export interface RegisterArgs {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const register = async (data: RegisterArgs) => {
  const res = await authApi.post(
    "auth/users/register",
    { ...data },
    { withCredentials: true }
  );
  return res;
};
