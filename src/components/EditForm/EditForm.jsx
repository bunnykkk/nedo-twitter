import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postsContext } from "../../postContext";

const EditForm = () => {
  const { getOnePost, onePost, updatePost } = useContext(postsContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    getOnePost(id);
  }, []);

  useEffect(() => {
    if (onePost) {
      setName(onePost.name);
      setAbout(onePost.about);
    }
  }, [onePost]);

  function saveChanges() {
    if (!name || !about) {
      alert("Some inputs are empty!");
      return;
    }

    let newPost = {
      name,
      about,
    };

    updatePost(id, newPost);

    setName("");
    setAbout("");

    navigate("/posts");
  }

  return onePost ? (
    <div>
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
        onClick={saveChanges}>
        Save Changes
      </button>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default EditForm;
