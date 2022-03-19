import './navbar.css'

export default function Navbar() {
    return (
        <div className="nav">
            <div className="navLeft">
                <i className="navIcon fa-brands fa-facebook-f"></i>
                <i class="navIcon fa-brands fa-twitter"></i>
                <i class="navIcon fa-brands fa-instagram"></i>
                <i class="navIcon fa-brands fa-tiktok"></i>
            </div>
            <div className="navCenter">
                <ul className="topList">
                    <li className="navListItem">Home</li>
                    <li className="navListItem">About</li>
                    <li className="navListItem">Contact</li>
                    <li className="navListItem">Create</li>
                    <li className="navListItem">Logout</li>
                </ul>
            </div>
            <div className="navRight">
                <img className="navProfilePic" src="https://lh3.googleusercontent.com/a-/AOh14GjVnQz0atcL5zx8EeoxZQUKud_mRr5aFyFcpc_04gc=s360-p-rw-no" alt="profile picture" srcset="" />
                <i class="navSearch fa-solid fa-magnifying-glass"></i>
            </div>
        </div >
    )
};
