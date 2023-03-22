import * as request from "./requester";

const url = 'http://localhost:3030/jsonstore/posts'

export const getAll = async () => {
    const result = await request.get(url)
    const posts = Object.values(result);

    return posts;
}