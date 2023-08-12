import axios from "axios";
import { from, of } from "rxjs";

const gatewayApi = axios.create({ baseURL: process.env.GATEWAY_API as string });

export const getPostDetailsById = async () => {
  return of(
    gatewayApi.post("/auth/login", {}, { withCredentials: true })
  ).subscribe((post) => post);
};
