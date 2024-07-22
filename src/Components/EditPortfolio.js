import React from "react";
import './EditPortfolio.css';

function EditPortfolio(){
    return(
        <div>
            <div className="title-container">
                <div className="title">EDIT PORTFOLIO </div>
                <img src={require("./images/Edit-black.png")} height={40} width={40} alt="Logo" />
            </div>
            <hr/>
        </div>
    )
}

export default EditPortfolio;
