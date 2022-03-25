import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import { connect } from "react-redux";
import axios from "axios";

const mapStateToProps = state => ({
  user: state.user.user,
});

function Settings({user}) {
  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`http://localhost:3000/users/${user._id}`)
    .then(res => window.location.replace('/'))
    .catch(error => console.log(error));
  }
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Edit Profile Settings</span>
          <span className="settingsDeleteTitle" onClick={handleDelete}>Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfilePicture">
            <img
              src={user.profilePicture}
              alt=""
            />
            <label htmlFor="fileInput">
            <i class="fa-solid fa-image"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
            <label>Username</label>
            <input type="text" placeholder={user.username}/>
            <label>Email</label>
            <input type="text" placeholder={user.email}/>
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update Profile</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default connect(mapStateToProps, null)(Settings);