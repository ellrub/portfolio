import React from "react"
import "./About.css"

export default function About() {
    return (
        <section className="about-me">
            <h2 className="about-h2">About me</h2>
            <p className="about-p">I've been in construction my whole life, so when i lost my job as a project manager in december 2021, 
                i decided to finally pursue my passion for technology. So after a few months of looking at different jobs and 
                languages, i decided that frontend development was the thing for me. I first started learning web development 
                at <span className="resource">freeCodeCamp.com</span>, and after a little while i 
                discovered <span className="resource">scrimba.com</span>. For me scrimba has
                been a fantastic resource to learn everything from responsive webdesign and UI design, to advanced React.
            </p>
        </section>
    )
}