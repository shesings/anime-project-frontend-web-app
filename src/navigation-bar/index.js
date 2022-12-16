import React from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import UserProfileLoad from "./userProfilerLoader";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../login/login-reducer";

const NavigationBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  console.log(user);

  const invalidateUserLogin = () => {
    localStorage.removeItem("currentUser");
    dispatch(logout);
    window.location.href = '/';
  }

  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container-fluid container">
        <a class="navbar-brand" href="#">
          Animate
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                Search
              </Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="navBtn btn btn-outline-success" type="submit">
              Search
            </button>
            {!user._id && (
              <>
                <button
                  onClick={() => navigate("/signup")}
                  class="navBtn btn btn-outline-warning"
                  type="button"
                >
                  Signup
                </button>
                <button
                  onClick={() => navigate("/login")}
                  class="navBtn btn btn-outline-primary"
                  type="button"
                >
                  Login
                </button>
              </>
            )}
            {user && user._id && (
              <div class="btn-group">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  Shakti
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <li>
                      <a class="dropdown-item" onClick={() => navigate("/profile")}>
                        Profile
                      </a>
                    </li>
                  </li>
                  <li>
                    <li>
                      <a class="dropdown-item" onClick={() => invalidateUserLogin()}>
                        Logout
                      </a>
                    </li>
                  </li>
                </ul>
              </div>
            )}
            <UserProfileLoad />
          </form>
        </div>
      </div>
    </nav>
  );
};
export default NavigationBar;
