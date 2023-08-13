import { Observable } from "rxjs";
import HttpService from "../http.service";

export class FeedHttpService extends HttpService {
  constructor() {
    super("http://localhost:3002");
  }

  getPublicPosts(page: number, size: number): Observable<any> {
    return this.get(`posts/public-posts?page=${page}&size=${size}`);
  }
}
