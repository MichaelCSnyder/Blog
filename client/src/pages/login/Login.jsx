import { Link } from "react-router-dom";
import {
  loginFailureActionCreator,
  loginStartActionCreator,
  loginSuccessActionCreator,
} from "../../actions/actions";
import axios from "axios";
import "./login.css";
import { useEffect, useRef } from "react";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  loginStart: () => dispatch(loginStartActionCreator()),
  loginSuccess: (user) => dispatch(loginSuccessActionCreator(user)),
  loginFailure: () => dispatch(loginFailureActionCreator()),
});

const mapStateToProps = (state) => ({
  isFetching: state.user.isFetching,
  user: state.user.user,
  error: state.user.error
});

function Login({
  loginStart,
  loginSuccess,
  loginFailure,
  user,
  isFetching,
  error,
}) {
  const userRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    loginStart();
    axios
      .post("http://localhost:3000/authentication/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        loginSuccess(res.data);
      })
      .catch((error) => loginFailure());
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form onSubmit={handleSubmit} className="loginForm">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username..."
          autoFocus={true}
          ref={userRef}
          required
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
          required
        />
        <button type="submit" className="loginButton" disabled={isFetching}>
          Login
        </button>
        {error ? <p style={{color: "red"}}>Incorrect username or password...</p> : null}
        <button className="registerButton">
          <Link to="/register" className="link">
            Register
          </Link>
        </button>
      </form>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
