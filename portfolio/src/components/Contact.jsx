import React from "react"
import "./Contact.css"

export default function Contact() {
    return (
        <section className="contact-me">
            <h2 className="contact-h2">Contact Me</h2>
            <div className="contact-card group">
                <div className="input-group">
                    <label for="text">Your Full Name</label>
                    <input required="" type="text" id="text" placeholder="Your Full Name"/>
                </div>
                <div className="input-group">
                    <label for="email">Your Email</label>
                    <input required="" type="email" id="email" placeholder="Your Email"/>
                </div>
                <div className="input-group">
                    <label for="subject">Subject</label>
                    <input required="" type="subject" id="subject" placeholder="Subject"/>
                </div>
                <div className="input-group">
                    <label for="text">Message</label>
                    <textarea name="" id="" cols="30" rows="5" placeholder="Hey, what's on your mind?"></textarea>
                </div>
            </div>
        </section>
    )
}
