import React, { useState } from "react";
import './Contact.css';

function Homepage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        //email message
        const emailMessage = "You have a new message from ${name} from your portfolio: \nMessage: ${message}\nYou can contact them at \nPhone: ${phone}\nEmail: ${email}"

        // Sending data to backend
        const formData = { name, email, phone, message };
        try {
            const response = await fetch('/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Message sent successfully!');
                // Clear the form inputs after successful submission
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message.');
        }
    };

    return (
        <div className="contact-tab">
            <div className="contact-left"> 
                <div className="contact-details">CONTACT DETAILS</div>
                <div className="name"> YAN MEI ZHENG (JAMIE)</div>

                <div className="contact-container">
                    <div className="images">
                        <img src={require("./images/phone-icon.png")} height={30} width={30} alt="phone-icon" />
                        <img src={require("./images/email-icon.png")} height={30} width={30} alt="email-icon" />
                        <img src={require("./images/address-icon.png")} height={30} width={30} alt="address-icon" />
                    </div>
                    <div className="text">
                        <div className="contact-info">PHONE <br/> </div>
                        <a className="contact-link " href="tel:+13472969166">(347)-296-9166</a>
                        <div className="contact-info">EMAIL</div>
                        <a className="contact-link " href="mailto:jamiemovesyou33@gmail.com">JAMIEMOVESYOU33@GMAIL.COM</a>
                        <div className="contact-info">ADDRESS</div>
                        <a className=" contact-link" href="https://www.google.com/maps/search/?api=1&query=1703+86th+Street,+Brooklyn,+NY+11214" target="_blank">
                            1703 86th STREET<br /> 
                            BROOKLYN, NY 11214
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact-right">
                <div className="contact-details">SUBMIT A MESSAGE</div>
                <p className="description">Whether you're ready to buy, sell, or simply curious about the Bay Area 
                    real estate market, use the form below to sign up for my monthly market 
                    updates or schedule a chat. I can't wait to hear from you and dive into 
                    the world of real estate together!</p>

                <form onSubmit={handleSubmit}>
                    <div>NAME</div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <div>EMAIL</div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div>PHONE</div>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <div>MESSAGE</div>
                    <textarea
                        className="large-text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <br/>
                    <button type="submit">SUBMIT</button>
                </form>
                
            </div>
        </div>
    );
}

export default Homepage;
