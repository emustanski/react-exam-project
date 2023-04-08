import { requestFactory } from "./requester";

const url = "http://localhost:3030/data/posts";

export const postServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const result = await request.get(url);
    const posts = Object.values(result);

    return posts;
  };

  const create = async (postData) => {
    const result = await request.post(url, postData);

    return result;
  };

  const getOne = async (postId) => {
    const result = await request.get(`${url}/${postId}`);

    return result;
  };

  const edit = (postId, data) => request.put(`${url}/${postId}`, data)
  
  const deletePost = (postId) => request.delete(`${url}/${postId}`);

  const getUserPosts = async (userId) => {
    const encodedUrl = encodeURIComponent(`="${userId}"`)
    const result = await request.get(`${url}?where=_ownerId${encodedUrl}`)
    return result;
  }

  return {
    getAll,
    create,
    getOne,
    edit,
    delete: deletePost,
    getUserPosts
  }
};
