import { useState, useEffect, createContext, useContext } from "react";
import { postServiceFactory } from "../services/postService";
import { useNavigate } from "react-router-dom";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {

  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const postService = postServiceFactory();

  useEffect(() => {
    postService.getAll().then(result => {
      setPosts(result);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCreateSubmit = async (data) => {
    
    const newPost = await postService.create(data);

    setPosts(state => [...state, newPost]);
    navigate("/catalog");
  };

  const onEditSubmit = async (values) => {
    const editedPost = await postService.edit(values._id, values);

    setPosts(state =>
      state.map(x => x._id === values._id ? editedPost : x))

    navigate(`/catalog/${values._id}`);
  };

  const deletePost = (postId) => {
    setPosts(state => state.filter(post => post._id !== postId));
  };

  const getPost = (postId) => {
    return posts.find(post => post._id === postId)
  }

  const context = {
    posts,
    onCreateSubmit,
    onEditSubmit,
    deletePost,
    getPost,

  };

  return (
    <PostContext.Provider value={context}>
        {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  const context = useContext(PostContext);

  return context;
};
