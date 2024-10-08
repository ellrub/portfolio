import React from "react"
import "./Contact.css"

export default function Contact() {
    return (
        <section className="contact-me">
            <h2 className="contact-h2">Contact Me</h2>
            <p>If you came all this way, i would love to hear from you. 
                Use the form and i will get back to you as quickly as possible, or use one of my other channels below.</p>
            <div className="contact-card group">
                <form action="https://formsubmit.co/ef4dd30446c32a85bf7ebbdf31bc7e2d" method="POST" autoComplete="off">
                        {/* -- Honeypot -- */}
                        <input type="text" name="_honey" className="honeypot"/>

                        {/* -- Disable Captcha -- */}
                        <input type="hidden" name="_captcha" value="false"/>

                        <input type="hidden" name="_next" value="https://portfolio-seven-puce-51.vercel.app/" />
                    <div className="input-fields">
                        <div className="input-group">
                            <label for="text">Your Full Name</label>
                            <input className="name" name="Name" required="" type="text" id="text" 
                                    placeholder="Your Full Name" autoComplete="off"/>
                        </div>
                        <div className="input-group">
                            <label for="email">Your Email</label>
                            <input required="" type="email" id="email" name="Email" 
                                    placeholder="Your Email" autoComplete="off"/>
                        </div>
                        <div className="input-group">
                            <label for="subject">Subject</label>
                            <input className="subject" required="" name="Subject" type="text" id="subject" 
                                    placeholder="Subject" autoComplete="off"/>
                        </div>
                    </div>
                        <div className="input-group text-area">
                            <label for="text">Message</label>
                            <textarea name="Comment" id="" cols="30" rows="5" placeholder="Hey, what's on your mind?" autoComplete="off"></textarea>
                        </div>
                        <button className="contact-btn">Send</button>
                </form>
            </div>
        </section>
    )
}
