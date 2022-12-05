import React from "react";
const NavigationBar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">Home</a>
            <a className="list-group-item">Explore</a>
            <a className="list-group-item">Profile</a>
        </div>
    );
};
export default NavigationBar;