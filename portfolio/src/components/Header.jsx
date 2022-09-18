import React from "react"
import "./Header.css"
import "./ArrowAni.css"
import Typewriter from "typewriter-effect"

export default function Header() {
    return (
        <header>
            <img src="./rubba.jpg" className="header-portrait" alt="Picture of this websites developer"/>
            <h2 className="header-h2">Hey, My name is Ruben. <br></br>I'm a construction engineer turned developer. 
                                        I love making frontend websites and applications.</h2>
            <div className="header-typewriter">
                <Typewriter options={{loop:true,}}
                    onInit={(typewriter) => {
                        typewriter
                        
                        .typeString("HTML & CSS")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("JavaScript")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("React")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Responsive Design")
                        .pauseFor(1000)
                        .start();
                    }}
                />
            </div>
            <div className="arrow">
                <span className="arrow-one"></span>
                <span className="arrow-two"></span>
                <span className="arrow-three"></span>
            </div>
        </header>
    )
}