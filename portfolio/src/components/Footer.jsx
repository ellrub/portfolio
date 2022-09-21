import React from "react"
import "./Footer.css"

export default function Footer() {
    return (
        <footer>
            <h5>Here are my other channels</h5>
            <div className="social-media">
                <a href="https://github.com/ellrub" target="_blank"><i className="fa-brands fa-square-github icon"></i></a>
                <a href="https://www.linkedin.com/in/ruben-ellefsen/?locale=en_US" target="_blank"><i className="fa-brands fa-linkedin icon"></i></a>
                <a href="https://discord.com/users/116322935739908097" target="_blank"><i className="fa-brands fa-discord icon"></i></a>
            </div>
            <p>©2022 Ruben Ellefsen</p>
        </footer>
    )
}