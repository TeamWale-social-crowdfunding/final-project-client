import { Observable } from "rxjs";
import HttpService from "../http.service";

export class PostHttpService extends HttpService {
  constructor() {
    super("http://localhost:3005");
  }

  createPost(): Observable<any> {
    return this.post(`/`, {}, { withCredentials: true });
  }

  likePost(postId: string): Observable<any> {
    return this.patch(`/like`, { post_id: postId }, { withCredentials: true });
  }
}
