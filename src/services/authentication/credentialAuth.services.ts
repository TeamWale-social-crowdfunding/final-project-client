import axios from "axios";

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
