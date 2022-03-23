import Post from '../post/Post.jsx';
import './posts.css';

export default function Posts(props) {
    return (
        <div className="posts">
            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
            {props.posts.map((post, index) => <Post post={post} key={index}/>)}
        </div>
    )
}
