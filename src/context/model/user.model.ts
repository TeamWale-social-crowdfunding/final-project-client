export interface UserPropI {
  _id: string;
  isDeleted: boolean;
  email?: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  roles?: string[];
  authenticate?: any[];
  follower?: any[];
  following?: any[];
  createdAt: string;
  updatedAt: string;
  __v: 0;
}
