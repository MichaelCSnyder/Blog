import Header from '../../components/header/Header.jsx';
import Posts from '../../components/posts/Posts.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import './home.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {setPostsActionCreator} from '../../actions/actions.js'
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    setPosts: (postsArray) => dispatch(setPostsActionCreator(postsArray))
});

const mapStateToProps = state => ({
    posts: state.user.posts,
});


function Home(props) {
    useEffect(() => {
        axios.get('http://localhost:3000/posts/all')
        .then(res => {
            props.setPosts(res.data);
        })
        .catch(error => console.log(error));
    }, []);
    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={props.posts}/>
                <Sidebar />
            </div>
            {/* {props.posts.map((post, index) => <p key={index}>{post.description}</p>)} */}
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);