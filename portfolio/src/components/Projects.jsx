import React from "react"
import Card from "./Card"
import "./Projects.css"
import data from "./data"

export default function Projects() {
    const dataElement = data.map (item => {
        return <Card 
                    key={item.id}
                    item={item}
        />
    })
    return (
        <section className="container">
            <h2 className="projects-h2">Projects</h2>
            <div className="grid-container">
                {dataElement}
            </div>
        </section>
    )
}