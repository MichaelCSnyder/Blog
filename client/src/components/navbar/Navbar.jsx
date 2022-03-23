import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutActionCreator } from "../../actions/actions";
import "./navbar.css";

const mapStateToProps = state => ({
  user: state.user.user,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutActionCreator())
})

function Navbar({user, logout}) {
  const handleLogout = () => {
    logout();
  }

  return (
    <div className="nav">
      <div className="navLeft">
        <i className="navIcon fa-brands fa-facebook-f"></i>
        <i className="navIcon fa-brands fa-twitter"></i>
        <i className="navIcon fa-brands fa-instagram"></i>
        <i className="navIcon fa-brands fa-tiktok"></i>
      </div>
      <div className="navCenter">
        <ul className="topList">
          <li className="navListItem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="navListItem">
            <Link to="" className="link">
              About
            </Link>
          </li>
          <li className="navListItem">
            <Link to="" className="link">
              Contact
            </Link>
          </li>
          <li className="navListItem">
            <Link to="/write" className="link">
              Create
            </Link>
          </li>
          <li className="navListItem" onClick={handleLogout}>{user ? "Logout" : null}</li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <Link to="/settings" className="link">
            <img
              className="navProfilePic"
              src="https://lh3.googleusercontent.com/a-/AOh14GjVnQz0atcL5zx8EeoxZQUKud_mRr5aFyFcpc_04gc=s360-p-rw-no"
              alt="profile picture"
              srcSet=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="navListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="navListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="navSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);