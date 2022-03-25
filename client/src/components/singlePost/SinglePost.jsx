import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { setPostActionCreator } from "../../actions/actions";
import axios from "axios";
import "./singlePost.css";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  setPost: (post) => dispatch(setPostActionCreator(post)),
});

const mapStateToProps = (state) => ({
  post: state.user.post,
  user: state.user.user,
});

function SinglePost({ post, setPost, user }) {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const handleEdit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3000/posts/${post._id}`, { title, description })
      .then((res) => {
        window.location.replace(`post/${res.data._id}`)
        console.log(res);
      })
      .catch(error => console.log(error));
  };

  const handleDelete = (event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:3000/posts/${post._id}`)
      .then((res) => {
        console.log(res);
        window.location.replace("/");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${params.postId}`)
      .then((res) => {
        setPost(res.data);
      })
      .then(() => {
        setTitle(post.title);
        setDescription(post.description);
      })
      .catch((error) => console.log(error));
  }, [params]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={'http://localhost:3000/images/' + post.photo} alt="" />
        {updateMode ? (
          <input
            type="text"
            defaultValue={post.title}
            className="singlePostTitleInput"
            autoFocus={true}
            onChange={(event) => setTitle(event.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
            {user?.username === "Michael" ? (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-solid fa-pen"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fa-solid fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            ) : null}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>{post.username}</b>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <>
            <textarea
              type="text"
              defaultValue={post.description}
              className="singlePostTextInput"
              onChange={(event) => setDescription(event.target.value)}
            />
            <div className="singlePostUpdateButtons">
              <button
                className="singlePostCancel"
                onClick={() => setUpdateMode(false)}
              >
                Cancel
              </button>
              <button className="singlePostSubmit" onClick={handleEdit}>
                Save
              </button>
            </div>
          </>
        ) : (
          <p className="singlePostText">{post.description}</p>
        )}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
