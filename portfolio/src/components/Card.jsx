import React from "react"
import "./Card.css"

export default function Card(props) {
        return (
        <section className="card">
            <h3 className="card-h3">{props.item.title}</h3>
            <h4 className="card-h4">{props.item.subtitle}</h4>
            <img className="card-img" src={`./${props.item.cardImg}`}/>
            <p className="card-p">{props.item.description}</p>
            <div className="link-container">
                <p className="card-link">
                    <a href={props.item.livelink} target="_blank">
                    <i class="fa-solid fa-link"></i>View Project</a></p>
                <p className="card-link">
                    <a href={props.item.github} target="_blank">
                    <i class="fa-brands fa-square-github"></i>View Code</a></p>
            </div>
        </section>
    )
}