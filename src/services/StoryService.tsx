import * as request from "../utils/HttpRequest";
export const createStory = async (data:FormData) => {
  try {
    const res = await request.POST(`story/create`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getListStories = async (page:number|1) => {
  try {
    const res = await request.GET(`story/list`, page);
    return res;
  } catch (error) {
    console.log(error);
  }
};

