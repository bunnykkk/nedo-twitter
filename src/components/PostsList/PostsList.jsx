import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postsContext } from "../../postContext";

const PostsList = () => {
  const { getPosts, posts, deletePost } = useContext(postsContext);

  useEffect(() => {
    getPosts();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <h2 style={{ color: "deepskyblue" }}>Twitter List</h2>

      {posts.map(item => (
        <div style={{ marginBottom: "30px" }} key={item.id}>
          Post Name: {item.name} <br />
          About: {item.about} <br />
          <button
            style={{
              border: "3px solid",
              borderColor: "deepskyblue",
              borderRadius: "10% / 50%",
              margin: "5px",
            }}
            onClick={() => deletePost(item.id)}>
            Delete
          </button>
          <button
            style={{
              border: "3px solid",
              borderColor: "deepskyblue",
              borderRadius: "10% / 50%",
              margin: "5px",
            }}
            onClick={() => navigate(`/edit/${item.id}`)}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
