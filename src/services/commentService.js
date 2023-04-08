import { requestFactory } from "./requester";

const url = 'http://localhost:3030/data/comments';
const request = requestFactory();

export const getAll = async (postId) => {
    const searchQuery = encodeURIComponent(`postId="${postId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${url}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result)
    
    return comments;
};

export const create = async (postId, comment) => {
    const result = await request.post(url, { postId, comment })

    return result;
};