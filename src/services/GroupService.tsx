import { DataPost } from "../types/post";
import * as request from "../utils/HttpRequest";
export const createGroup = async (data:DataPost) => {
  try {
    const res = await request.POST(`group/create_group`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getGroupInfo = async (group_uuid:string) => {
  try {
    const res = await request.GET(`group/group_info/${group_uuid}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const saveChangeBgGroup = async (data:FormData) => {
  try {
    const res = await request.POST(`group/update_thumnail`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getMyGroups = async () => {
  try {
    const res = await request.GET(`group/my_groups`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getSuggestionGroups = async () => {
  try {
    const res = await request.GET(`group/suggestion_groups`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const joinGroup = async (group_id:number) => {
  try {
    const res = await request.GET(`group/join_group/${group_id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const leaveGroup = async (group_id:number) => {
  try {
    const res = await request.GET(`group/leave_group/${group_id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const groupJoined = async () => {
  try {
    const res = await request.GET(`group/group_joined`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getPostGroup = async (group_uuid:string) => {
  try {
    const res = await request.GET(`group/get_post_by_group/${group_uuid}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getImagesGroup = async (group_uuid:string) => {
  try {
    const res = await request.GET(`group/get_images_group/${group_uuid}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getPostFeed = async () => {
  try {
    const res = await request.GET(`group/get_post_feed`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const deleteGroup = async (group_uuid:string) => {
  try {
    const res = await request.GET(`group/delete_group/${group_uuid}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};



