import './write.css';

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://images.unsplash.com/photo-1647248441644-7b4477d62c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8aG1lbnZRaFVteE18fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        <form action="" className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="fileInput fa-solid fa-image"></i>
                </label>
                <input type="file" id='fileInput' style={{display: "none"}}/>
                <input className="writeInput" type="text" placeholder='Title' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea className="writeText writeInput" placeholder='What are you feeling?' type="text"></textarea>
            </div>
            <div className="writeSubmitWrapper">
                <button className="writeSubmit">Post</button>
            </div>
        </form>
    </div>
  )
};
