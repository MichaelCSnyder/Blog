import './sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <div className="sidebarTitle">ABOUT ME</div>
                <img className="sidebarPic" src="https://images.unsplash.com/photo-1637921884165-378fd6478914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime id itaque magnam autem, similique dolore eveniet. Veritatis, cum quasi hic possimus amet nesciunt ipsum consectetur deleniti temporibus esse, maiores animi.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">TAGS</span>
                <ul className="tags">
                    <li className="tag">
                        Cuisine
                    </li>
                    <li className="tag">
                        Money
                    </li>
                    <li className="tag">
                        Lifestyle
                    </li>
                    <li className="tag">
                        Movies
                    </li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Me</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-f"></i>
                    <i class="sidebarIcon fa-brands fa-twitter"></i>
                    <i class="sidebarIcon fa-brands fa-instagram"></i>
                    <i class="sidebarIcon fa-brands fa-tiktok"></i>
                </div>
            </div>
        </div>
    )
}
