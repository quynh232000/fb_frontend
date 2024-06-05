import { GroupModel } from "./app";
import { CommentModel } from "./comment";

export interface FormDataPost {
  [key: string]: string | FileList | null|File|number;
}
export interface DataPost {
  [key: string]: string |number;
}
export interface PostModel {
  id: number;
  uuid: string;
  user_id: number;
  content: string;
  is_public: number;
  status: string;
  is_post_page: number;
  page_id: string;
  likes_count:number;
  comments_count:number;
  isLikePost:boolean;
  is_group_post: number;
  group_id: string;
  created_at: string;
  updated_at: string;
  user: UserModel;
  post_media: PostMedumModel[];
  comments: CommentModel[];
  group:GroupModel;
  type:string;
  is_saved:boolean;

}

export interface UserModel {
  id: number;
  uuid: string;
  first_name: string;
  last_name: string;
  birthday: string;
  email: string;
  email_verified_at: string;
  avatar: string;
  thumbnail: string;
  gender: string;
  phone_number: string;
  relationship: string;
  location: string;
  address: string;
  description: string;
  is_private: number;
  is_banned: number;
  created_at: string;
  updated_at: string;
  is_friend:string;
  mutual_friends:number;
  friends_count:number;
}

export interface PostMedumModel {
  id: number;
  uuid: string;
  post_id: number;
  file_type: string;
  file: string;
  position: string;
  created_at: string;
  updated_at: string;
}
export interface PostMediaModel {
  id: number;
  uuid: string;
  post_id: number;
  file_type: string;
  file: string;
  position: string;
  created_at: string;
  updated_at: string;
}
