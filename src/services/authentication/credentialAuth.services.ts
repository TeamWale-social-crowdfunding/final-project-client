import axios from "axios";

export const loginWithCredentials = async (data: {
  email: string | undefined;
  password: string | undefined;
}) => {
  const res = await axios.post(
    "http://localhost:3001/auth/login",
    {
      email: data.email,
      password: data.password,
    },
    { withCredentials: true }
  );

  console.log(res);

  return res;
};
