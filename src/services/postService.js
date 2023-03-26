import * as request from "./requester";

const url = "http://localhost:3030/jsonstore/posts";

export const getAll = async () => {
  const result = await request.get(url);
  const posts = Object.values(result);

  return posts;
};

export const create = async (postData) => {
  const result = await request.post(url, postData);

  return result;
};

export const getOne = async (postId) => {
  const result = await request.get(`${url}/${postId}`);

  return result;
};
