import axios from "axios";
import { useEffect, useState } from "react";
import "./write.css";

export default function Write() {
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title,
      description,
      username: "Michael",
    };
    if (photo) {
      const data = new FormData();
      const filename = Date.now() + photo.name;
      data.append("name", filename);
      data.append("image", photo);
      newPost.photo = filename;

      axios
        .post("http://localhost:3000/upload", data)
        .catch((error) => console.log("error: " + error));
    }

    axios
      .post("http://localhost:3000/posts/", newPost)
      .then((res) => window.location.replace(`post/${res.data._id}`))
      .catch((error) => console.log(error));
  };

  return (
    <div className="write">
      {photo ? (
        <img className="writeImg" src={URL.createObjectURL(photo)} alt="" />
      ) : null}
      <form onSubmit={handleSubmit} className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="fileInput fa-solid fa-image"></i>
          </label>
          <input
            onChange={(event) => setPhoto(event.target.files[0])}
            type="file"
            name="image"
            id="fileInput"
            style={{ display: "none" }}
          />
          <input
            className="writeInput"
            type="text"
            placeholder="Title"
            autoFocus={true}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeText writeInput"
            placeholder="What are you feeling?"
            type="text"
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <div className="writeSubmitWrapper">
          <button className="writeSubmit" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
