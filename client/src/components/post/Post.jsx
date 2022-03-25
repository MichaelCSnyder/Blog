import './post.css';
import { Link } from 'react-router-dom'; 

export default function Post({post}) {
    return (
        <div className="post">
            {/* <img className="postImg" src="https://images.unsplash.com/photo-1647248441644-7b4477d62c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8aG1lbnZRaFVteE18fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" /> */}
            <img className="postImg" src={post.photo} alt="" />
            <div className="postInfo">
                <div className="postCategories">
                    {/* <span className="postCategory">Movies</span>
                    <span className="postCategory">Lifestyle</span> */}
                    {post.tags.map((tag, index) => <span className="postCategory" key={index}>{tag}</span>)}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                <span className="postTitle">
                    {post.title}
                </span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.updatedAt).toDateString()}</span>
                <p className="postDescription">
                    {post.description}
                </p>
            </div>
        </div>
    )
}
