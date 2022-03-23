import axios from "axios";
import { useEffect, useState } from "react";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(false);
    axios.post('http://localhost:3000/authentication/register', {username, email, password})
    .then(res => {
      if (res.data) window.location.replace("/login");
    })
    .catch(error => setError(true));
  }

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          placeholder="enter your username..."
          required
        />
        <label>Email</label>
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="enter your email..."
          required
        />
        <label>Password</label>
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="enter your password..."
          required
        />
        <button className="registerSubmit">Register</button>
        {error ? <p style={{color: "red", marginBottom: "20px"}}>Something got squirrely... Please try again with different credentials</p> : null}
      </form>
    </div>
  );
}
