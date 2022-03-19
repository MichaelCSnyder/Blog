import './post.css';

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.unsplash.com/photo-1647248441644-7b4477d62c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8aG1lbnZRaFVteE18fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategory">Movies</span>
                    <span className="postCategory">Lifestyle</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet consectetur
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
                <p className="postDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, tenetur saepe. Sed excepturi, in eaque sequi odit fugiat labore sapiente quam quaerat eum perferendis numquam nisi a officiis hic recusandae?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, tenetur saepe. Sed excepturi, in eaque sequi odit fugiat labore sapiente quam quaerat eum perferendis numquam nisi a officiis hic recusandae?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, tenetur saepe. Sed excepturi, in eaque sequi odit fugiat labore sapiente quam quaerat eum perferendis numquam nisi a officiis hic recusandae?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, tenetur saepe. Sed excepturi, in eaque sequi odit fugiat labore sapiente quam quaerat eum perferendis numquam nisi a officiis hic recusandae?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, tenetur saepe. Sed excepturi, in eaque sequi odit fugiat labore sapiente quam quaerat eum perferendis numquam nisi a officiis hic recusandae?

                </p>
            </div>
        </div>
    )
}
