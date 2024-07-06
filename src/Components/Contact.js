import React from "react";
import './Contact.css';

function Homepage() {
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
                <div>NAME</div>
                <input type="text" ></input>
                <div>EMAIL</div>
                <input type="email" ></input>
                <div>PHONE</div>
                <input type="tel" ></input>
                <div>MESSAGE</div>
                <textarea className="large-text" type="text" ></textarea>
                <button> SUBMIT</button>
            </div>
        </div>
    );
}

export default Homepage;
