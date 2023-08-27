import HttpService from "../http.service";
import { GoogleAuthDto } from "./httpAuth.service.i";

export class AuthHttpService extends HttpService {
  constructor() {
    super("http://localhost:3001");
  }

  googleAuth(data: GoogleAuthDto) {
    return this.post("auth/google-auth", { data }, { withCredentials: true });
  }

  getCurrentUser() {
    return this.get("/auth/users/current", { withCredentials: true });
  }
}
