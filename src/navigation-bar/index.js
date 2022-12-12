import React from "react";
import './index.css';
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <nav className="navbar navigation-style navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Animate</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/login'>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/profile'>Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/search'>Search</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default NavigationBar;