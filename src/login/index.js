import React, { useEffect } from "react";
import "./index.css";
import { useLogin } from "./useLogin";

const Login = () => {
  const { userName, password, setPassword, setUserName, onSubmit } = useLogin();

  useEffect(() => {
  }, [userName, password]);

  return (
    <div className="login-card w-100 m-auto">
      <h3>Signin</h3>
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
        <button onClick={onSubmit} className="w-75 btn btn-med btn-primary" type="button">
          Sign in
        </button>
      </form>
    </div>
  );
};
export default Login;
