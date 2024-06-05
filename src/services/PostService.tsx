import { DataPost } from "../types/post";
import * as request from "../utils/HttpRequest";
export const createPost = async (data:FormData) => {
  try {
    const res = await request.POST(`post/create`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getList = async (page:number) => {
  try {
    const res = await request.GET(`post/list`, page);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getUserStory = async (uuid:string) => {
  try {
    const res = await request.GET(`story/get_story_user/`+uuid);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const likePost = async (post_id:number) => {
  try {
    const res = await request.GET(`post/like_post/?post_id=`+post_id);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const commentPost = async (data:DataPost) => {
  try {
    const res = await request.POST(`post/comment`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getListComment = async (post_id:number) => {
  try {
    const res = await request.GET(`post/get_list_comment/`+post_id);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getPostMedia = async (post_media_id:string) => {
  try {
    const res = await request.GET(`post/get_post_media_detail/`+post_media_id);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getPostDetailByPostMediaMedia = async (post_media_id:string) => {
  try {
    const res = await request.GET(`post/get_post_detail_by_post_media/`+post_media_id);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getPostUser = async (user_uuid:string) => {
  try {
    const res = await request.GET(`post/list_post_user/`+user_uuid);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePost = async (post_uuid:string) => {
  try {
    const res = await request.GET(`post/get_single_post/`+post_uuid);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const savePost = async (post_uuid:string) => {
  try {
    const res = await request.GET(`post/save_post/`+post_uuid);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = async (post_uuid:string) => {
  try {
    const res = await request.GET(`post/delete_post/`+post_uuid);
    return res;
  } catch (error) {
    console.log(error);
  }
};



