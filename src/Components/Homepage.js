import React from "react";
import './Homepage.css';

function Homepage() {
    return (
        <div>
            <div className="Homepage-container">
                <div className="right-column"></div>

                <div className="left-column">
                    <div className="locations"> Brooklyn & Staten Island</div>
                    <p className="about-me">As a Momentum Real Estate agent, I am dedicated to helping my clients find the home of their
                        dreams. Whether you are buying or selling a home or just curious about the local market, I would
                        love to offer my support and services. I know the local community, both as an agent and a neighbor,
                        and can help guide you through the nuances of our local market. With access to top listings, a
                        worldwide network, exceptional marketing strategies, and cutting-edge technology, I work hard to
                        make your real estate experience memorable and enjoyable. I look forward to the opportunity to
                        work with you. Please do not hesitate to contact me today!</p>
                </div>
            </div>

            <div className="page-break">
                <img src={require("./images/Name-Logo-Black.png")} height={150} width={150} />
                <br />
                <div className="text-content">
                    <p>Objective Advice & Guidance <br/>客观的建议与指导</p>
                    <p>Top Negotiation Skills to Get the Best Deal<br/>获得最佳交易的顶级谈判技巧</p>
                    <p>Familiarity With Our Local Neighborhoods<br/>熟悉我们当地的社区 </p>
                </div>
            </div>

            <div className="Note">
                <p>"I'm dedicated to your success. With a keen ability to decipher needs, I offer straightforward advice and precise home 
                    pricing insights. Whether you're buying or selling, maximizing profits is my goal. I cater to all budgets and consider 
                    it a privilege to welcome clients into my family. I'm excited to meet you and begin our journey together."</p>
            </div>
            <div className="medals">
                <p>Call Me Today for your free market analysis!<br/> The Next One Could Be Yours!</p>
                <br/>
                <div className="medal-images">
                    <img src={require("./images/Medal-1.png")} height={200} width={200} />
                    <img src={require("./images/Medal-2.png")} height={200} width={200} />
                    <img src={require("./images/Medal-3.png")} height={200} width={200} />
                </div>
            </div>
            <img className="quote" src={require("./images/AllowUs.png")} height={120} width={700} />
        </div>
    );
}

export default Homepage;
