import React, { useState } from "react";
import axios from "axios";

export const postsContext = React.createContext();

const PostsContextProvider = ({ children }) => {
  const API = "http://localhost:8001/posts";

  const [posts, setPosts] = useState([]);

  const [onePost, setOnePost] = useState(null);

  async function addPost(newPost) {
    await axios.post(API, newPost);
    getPosts();
  }

  async function getPosts() {
    let res = await axios(API);

    setPosts(res.data);
  }

  async function deletePost(id) {
    await axios.delete(`${API}/${id}`);
    getPosts();
  }

  async function getOnePost(id) {
    let res = await axios(`${API}/${id}`);
    setOnePost(res.data);
  }

  async function updatePost(id, editedPost) {
    await axios.patch(`${API}/${id}`, editedPost);
  }

  return (
    <postsContext.Provider
      value={{
        posts,
        onePost,

        addPost,
        getPosts,
        deletePost,
        getOnePost,
        updatePost,
      }}>
      {children}
    </postsContext.Provider>
  );
};

export default PostsContextProvider;
