import { UserModel } from "./post"

export interface StoryModel {
    id: number
    user_id: number
    story: string
    content: string
    type: string
    status: string
    likes: number
    comments: number
    created_at: string
    updated_at: string
    user: UserModel
  }
export interface FileType{
  file:string;
  type:string
}
export interface GroupModel {
  id: number
  uuid: string
  user_id: number
  avatar: string
  thumbnail: string
  description: string
  name: string
  location: string
  type: string
  is_private: number
  members: GroupMemberModel[]
  created_at: string
  updated_at: string
  user: UserModel
  is_joined:boolean
}
export interface GroupMemberModel {
  id: number
  user_id: number
  group_id: number
  created_at: string
  updated_at: string
  user: UserModel
}