import HttpService from "../http.service";

export class AuthHttpService extends HttpService {
  constructor() {
    super("http://localhost:3001");
  }
  getCurrentUser() {
    return this.get("/auth/users/current", { withCredentials: true });
  }
}
