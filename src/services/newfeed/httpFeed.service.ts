import HttpService from "../http.service";

export class FeedHttpService extends HttpService {
  constructor() {
    super(process.env.FEED_API as string);
  }

  fetchNewFeed() {
    return this.get("");
  }
}
