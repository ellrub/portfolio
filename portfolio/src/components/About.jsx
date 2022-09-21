import React from "react"
import "./About.css"

export default function About() {
    return (
        <section className="container">
            <h2 className="about-h2">About me</h2>
            <p className="about-p">I've been in construction my whole life, so when i lost my job as a project manager in december 2021, 
                i decided to finally pursue my passion for technology. So after a few months of looking at different jobs and 
                languages, i decided that frontend development was the thing for me. I first started learning web development 
                at <span className="resource"><a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp.com</a></span>, 
                and after a little while i discovered <span className="resource"><a href="https://scrimba.com/" target="_blank">scrimba.com</a></span>. 
                For me scrimba has been a fantastic resource to learn everything from responsive webdesign and UI design, 
                to advanced React.
            </p>
        </section>
    )
}