import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div>
            <div className="footer-container">
                <div className="footer-left">
                    <div className="footer-name">Yan Mei Zheng (Jamie), Realtor</div>
                    <div className="address">1703 86th Street<br /> Brooklyn, NY 11214</div>
                </div>

                <div className="footer-middle">
                    <a href="https://www.momentummovesyou.com/" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={require("./images/Momentum-Logo.png")} alt="Momentum Logo" height={100} width={400} />
                    </a>
                </div>

                <div className="footer-right">
                    <div className="contact">Contact</div>
                    <a className="footer-email" href="mailto:jamiemovesyou33@gmail.com">E: jamiemovesyou33@gmail.com</a>
                    <a className="footer-number" href="tel:+13472969166" >C: (347) 296-9166</a>
                </div>

            </div>
            <div className="disclaimer-container">
                <p className="disclaimer">Yan Mei Zheng is a real estate salesperson licensed by the state of New York affiliated with Momentum. 
                    Momentum is a real estate broker licensed by the state of New York and abides by equal housing opportunity 
                    laws. All material presented herein is intended for informational purposes only. 
                    Information is compiled from sources deemed reliable but is subject to errors, omissions, changes in price, 
                    condition, sale, or withdrawal without notice. No statement is made as to accuracy of any description. 
                    All measurements and sq ft are approximate. This is not intended to solicit property already listed. 
                    Nothing herein shall be construed as legal, accounting or other professional advice outside of a real estate brokerage.
                </p>
                <img src={require("./images/Name-Logo-Black.png")} height={80} width={80} alt="Logo" />
                <a href="https://www.momentummovesyou.com/" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={require("./images/Momentum-Logo.png")} alt="Momentum Logo" height={50} width={200} />
                    </a>
            </div>
        </div>

    );
}

export default Footer;
