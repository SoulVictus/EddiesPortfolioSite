import React from 'react';
import "./Navbar.css";
import InstaIcon from "./icons/InstaIcon";
import FaceIcon from "./icons/FaceIcon";
import LinkeIcon from "./icons/LinkeIcon";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <InstaIcon />
                <FaceIcon />
                <LinkeIcon />
            </div>
        </div>
    )
}

export default Navbar
