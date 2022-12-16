import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./index.css";
import { loginThunk, signupThunk } from "./login-thunks";
import { useLogin } from "./useLogin";

const Login = ({ isLogin = false }) => {
  const { userName, password, setPassword, setUserName } = useLogin();
  const [login, setLogin] = useState(isLogin);
  const dispatch = useDispatch();
  // useEffect(() => {
  // }, [userName, password]);

  const onSubmit = () => {
    const loginCredentials ={
      username: userName,
      password: password,
      email: userName
    }
    if(login) {
      dispatch(loginThunk(loginCredentials))
    } else {
      dispatch(signupThunk(loginCredentials));
    }
  };

  function renderLogin() {
    return (
      <div className="login-card w-100 m-auto">
        <h3>Login</h3>
        <form>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="name@example.com"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={userName}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button
            onClick={onSubmit}
            className="w-75 btn btn-med btn-primary"
            type="button"
          >
            Sign in
          </button>
        </form>
        <div>
          <i>Don't have an account yet?</i>
          <button className="btn btn-secondary" onClick={() => setLogin(false)}>Create acccount</button>
        </div>
      </div>
    );
  }

  function renderSignup() {
    return (
      <div className="login-card w-100 m-auto">
        <h3>Signup</h3>
        <form>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="name@example.com"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={userName}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          
          <button
            onClick={onSubmit}
            className="w-75 btn btn-med btn-primary"
            type="button"
          >
            Sign Up!
          </button>
        </form>
        <div>
          <i>Already have an account?</i>
          <button className="btn btn-secondary" onClick={() => setLogin(true)}>Login</button>
        </div>
      </div>
    );
  }

  return <>{login ? renderLogin() : renderSignup()}</>;
};
export default Login;
