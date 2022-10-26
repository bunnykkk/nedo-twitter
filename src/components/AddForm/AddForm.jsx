import React, { useContext, useState } from "react";
import { postsContext } from "../../postContext";

const AddForm = () => {
  const { addPost } = useContext(postsContext);

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  function createPost() {
    if (!name || !about) {
      alert("Some inputs are empty!");
      return;
    }

    let newPost = {
      name,
      about,
    };

    addPost(newPost);

    setName("");
    setAbout("");
  }

  return (
    <div>
      <h2 style={{ color: "deepskyblue" }}>Twitter</h2>

      <input
        style={{ margin: "4px" }}
        type="text"
        placeholder="Name Post"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        style={{ margin: "4px" }}
        type="text"
        placeholder="Your Post"
        value={about}
        onChange={e => setAbout(e.target.value)}
      />
      <button
        style={{
          border: "3px solid",
          borderColor: "deepskyblue",
          borderRadius: "10px 100px / 120px",
          margin: "4px",
        }}
        onClick={createPost}>
        Create Post
      </button>
    </div>
  );
};

export default AddForm;
