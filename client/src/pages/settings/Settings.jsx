import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import { connect } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import {updateUserActionCreator} from '../../actions/actions.js';

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
  updateUser: (username, email, profilePicture) => dispatch(updateUserActionCreator(username, email, profilePicture))
})

function Settings({ user, updateUser }) {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [edited, setEdited] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    let filename;
    const newUser = {
      username,
      email,
    };

    if (password) newUser.password = password;
    if (photo) {
      const data = new FormData();
      filename = Date.now() + photo.name;
      data.append('name', filename);
      data.append('image', photo);
      newUser.profilePicture = filename;
      
      axios.post('http://localhost:3000/upload', data)
      .catch(error => console.log(error));
    }

    axios
      .put(`http://localhost:3000/users/${user._id}`, newUser)
      .then((res) => {
        setEdited(true);
        setTimeout(() => setEdited(false), 2000);
        updateUser(res.data.username, res.data.email, filename || user.profilePicture);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:3000/users/${user._id}`)
      .then(res => {localStorage.setItem("user", null)})
      .then(() => window.location.replace("/"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Edit Profile Settings</span>
          <span className="settingsDeleteTitle" onClick={handleDelete}>
            Delete Account
          </span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsProfilePicture">
            {photo ? (
              <img
              src={URL.createObjectURL(photo)}
              alt=""
            />
            ) : (
              <img
                src={"http://localhost:3000/images/" + user.profilePicture}
                alt=""
              />
            )}
            <label htmlFor="fileInput">
              <i className="fa-solid fa-image"></i>
            </label>
            <input type="file" id="fileInput" name="image" style={{ display: "none" }} onChange={event => setPhoto(event.target.files[0])}/>
          </div>
          <label>Username</label>
          <input
            type="text"
            defaultValue={user.username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            defaultValue={user.email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update Profile
          </button>
        </form>
        {edited ? (
          <p className="settingsEditSuccess">Your account has been successfully updated!</p>
        ) : null}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
