import { Observable } from "rxjs";
import HttpService from "../http.service";

export class FeedHttpService extends HttpService {
  constructor() {
    super("http://localhost:3002");
  }

  getPublicPosts(page: number, size: number): Observable<any> {
    return this.get(`posts/public-posts?page=${page}&size=${size}`);
  }

  getPost(postId?: string): Observable<any> {
    return this.get(`posts/get-post?postId=${postId}`);
  }

  getAllPostCommets(postId?: string):Observable<any>{
    return this.get(`comments/all-post-comments?postId=${postId}`);
  }

  getProfilePosts(userId?: string):Observable<any>{
    return this.get(`posts/profile-posts?userId=${userId}`);
  }
}
