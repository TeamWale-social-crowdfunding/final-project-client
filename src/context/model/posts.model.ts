export interface PostPropI {
  _id: string;

  user_id: {
    firstName: string;
    lastName: string;
    _id: string;
    avatar: string;
  };

  content: string;

  likes?: any[];

  comments?: any[];

  media?: {
    type: string;
    url: string;
    key: string;
  }[];

  users_tag?: string[];

  location?: {
    latitude: number;
    longitude: number;
  };

  public: boolean;

  published: boolean;

  isDeleted: boolean;

  updatedAt: string;

  createdAt: string;

  __v: number;
}
