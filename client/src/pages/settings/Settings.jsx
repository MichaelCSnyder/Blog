import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Edit Profile Settings</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfilePicture">
            <img
              src="https://lh3.googleusercontent.com/a-/AOh14GjVnQz0atcL5zx8EeoxZQUKud_mRr5aFyFcpc_04gc=s360-p-rw-no"
              alt=""
            />
            <label htmlFor="fileInput">
            <i class="fa-solid fa-image"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
            <label>Username</label>
            <input type="text" placeholder="Michael"/>
            <label>Email</label>
            <input type="text" placeholder="michaelsnyder14@yahoo.com"/>
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update Profile</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
