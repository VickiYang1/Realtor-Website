import React from "react";
import './EditListing.css';

function EditListing(){
    return(
        <div>
            <div className="title-container">
                <div className="title">EDIT LISTINGS </div>
                <img src={require("./images/Edit-black.png")} height={40} width={40} alt="Logo" />
            </div>
            <hr/>
        </div>
    )
}

export default EditListing;
