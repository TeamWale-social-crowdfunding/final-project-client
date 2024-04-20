// export interface PostPropI {
//   _id: string;

//   user_id: {
//     firstName: string;
//     lastName: string;
//     _id: string;
//     avatar: string;
//   };

//   content: string;

//   likes?: any[];

//   comments?: any[];

//   media?: {
//     type: string;
//     url: string;
//     key: string;
//   }[];

//   users_tag?: string[];

//   location?: {
//     latitude: number;
//     longitude: number;
//   };

//   public: boolean;

//   published: boolean;

//   isDeleted: boolean;

//   updatedAt: string;

//   createdAt: string;

//   __v: number;
// }

export interface PostPropI {
  _id: string;
  comments: {
    _id: string;
    author_id: string;
    content: string;
    createdAt: string;
    isDeleted: boolean;
    like_id: string[];
    postId: string;
    replies: string[];
    updatedAt: string;
  }[];
  content: string;
  createdAt: string;
  isDeleted: boolean;
  likes: {
    author_id: string;
    createdAt: string;
    isDeleted: boolean;
    post_id: string;
    unliked: boolean;
    updatedAt: string;
    _id: string;
  }[];
  media?: {
    type: string;
    url: string;
    key: string;
  }[];
  public: boolean;
  published: boolean;
  updatedAt: string;
  user_id: {
    avatar: string;
    firstName: string;
    lastName: string;
    _id: string;
  };
  users_tag: string[];
}

export interface PostPropDisplayI {
  _id: string;
  comments: {
    _id: string;
    author_id: string;
    content: string;
    createdAt: string;
    isDeleted: boolean;
    like_id: string[];
    postId: string;
    replies: string[];
    updatedAt: string;
  }[];
  content: string;
  createdAt: string;
  isDeleted: boolean;
  likes: {
    author_id: string;
    createdAt: string;
    isDeleted: boolean;
    post_id: string;
    unliked: boolean;
    updatedAt: string;
    _id: string;
  }[];
  isLiked: boolean;
  likeCount: number;
  media?: {
    type: string;
    url: string;
    key: string;
  }[];
  public: boolean;
  published: boolean;
  updatedAt: string;
  user_id: {
    avatar: string;
    firstName: string;
    lastName: string;
    _id: string;
  };
  users_tag: string[];
}
