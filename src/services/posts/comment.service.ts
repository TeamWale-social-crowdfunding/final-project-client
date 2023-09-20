import { Observable } from "rxjs";
import HttpService from "../http.service";



export class CommentHttpService extends HttpService {
  constructor() {
    super("http://localhost:3005");
  }

  getPublicPosts(page: number, size: number): Observable<any> {
    return this.get(`posts/public-posts?page=${page}&size=${size}`);
  }

  postComment(dataComment:{
    content: string,
    postId: string
  } ): Observable<any>{
    return this.post('/comments',{...dataComment}, { withCredentials: true });
  }
}
