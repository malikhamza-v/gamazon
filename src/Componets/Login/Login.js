import React, { useState } from "react";
import "./login.css";
import Logo from "../../Assets/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
function Login() {
  //programatically redirection
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //firebase login

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history("/");
      })
      .catch((error) => error.message);
  };
  const register = (e) => {
    e.preventDefault();
    //firebase registeration
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // alert("Your account has been created please Login now");
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img src={Logo} alt="Gamazon" className="login__image" />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" className="button" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to <strong>GAMAZON's</strong> Conditions of
          Use & Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice
        </p>
        <button className="button" onClick={register}>
          Create your Gamazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
