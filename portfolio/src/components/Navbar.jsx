import React from "react"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <h3>Placeholder</h3>
            <label for="check" class="bar">
                <input className="nav-menu" id="check" type="checkbox" />
                <span class="top"></span>
                <span class="middle"></span>
                <span class="bottom"></span>
            </label>
        </nav>
    )
}