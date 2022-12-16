import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
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
            <button class="navBtn btn btn-outline-warning" type="submit">
              Signup
            </button>
            <button class="navBtn btn btn-outline-primary" type="submit">
              Login
            </button>
        
          </form>
          
        </div>
      </div>
    </nav>
  );
};
export default NavigationBar;
