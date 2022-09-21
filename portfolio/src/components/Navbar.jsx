import React from "react"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <h3>Placeholder</h3>
            <i className="fa-solid fa-bars" id="menu"></i>
            <div id="overlay">
            <i class="fa-solid fa-x"></i>
                <p>Home</p>
                <p>About Me</p>
                <p>My Projects</p>
                <p>My Blog</p>
                <p>Contact Me</p>
            </div>
        </nav>
    )
}
