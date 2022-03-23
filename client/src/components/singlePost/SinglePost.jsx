import { useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { setPostActionCreator } from '../../actions/actions';
import axios from 'axios';
import './singlePost.css';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  setPost: (post) => dispatch(setPostActionCreator(post))
});

const mapStateToProps = state => ({
  post: state.user.post,
});

function SinglePost({post, setPost}) {
  const params = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${params.postId}`)
    .then(res => {
      setPost(res.data);
    })
    .catch(error => console.log(error));
  }, [params])
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className="singlePostImg" src={post.photo} alt="" />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-pen"></i>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>{post.username}</b></span>
            <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostText">
          {post.description}
        </p>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);