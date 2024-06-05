import { UserModel } from "./post";

export interface CommentModel {
  id: number;
  post_id: number;
  user_id: number;
  comment: string;
  status: string;
  created_at: string;
  updated_at: string;
  user: UserModel;
}
