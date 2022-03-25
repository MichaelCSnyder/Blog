import axios from 'axios';
import { useEffect, useState } from 'react';
import './write.css';

export default function Write() {
    const [photo, setPhoto] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);

    useEffect(() => {
        console.log('tags: ' + tags);
    }, [tags])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/posts/', {title: title, description: description, photo: "", username: 'Michael', tags: ["Movies", "Lifestyle"]})
        .then(res => window.location.replace(`post/${res.data._id}`))
        .catch(error => console.log(error));
    }
  return (
    <div className="write">
        <img className="writeImg" src="https://images.unsplash.com/photo-1647248441644-7b4477d62c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8aG1lbnZRaFVteE18fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        <form onSubmit={handleSubmit} className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="fileInput fa-solid fa-image"></i>
                </label>
                <input type="file" id='fileInput' style={{display: "none"}}/>
                <input className="writeInput" type="text" placeholder='Title' autoFocus={true} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div className="writeFormGroup">
                <textarea className="writeText writeInput" placeholder='What are you feeling?' type="text" onChange={(event) => setDescription(event.target.value)}></textarea>
            </div>
            <div className="writeSubmitWrapper">
                <button className="writeSubmit" type="submit">Post</button>
            </div>
            
        </form>
    </div>
  )
};
