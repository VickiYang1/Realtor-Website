import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <img src={require("./images/Name-Logo.png")} height={200} width={200} alt="Logo" />
                    <span className="navbar-name"> Yan Mei Zheng (Jamie)</span>
                    <Link to="/" className="navbar-links">Home</Link>
                    <Link to="Portfolio" className="navbar-links">Portfolio</Link>
                    <Link to="/Listings" className="navbar-links">Listings</Link>
                    <Link to="/Contact" className="navbar-links">Contact</Link>
                    <Link to="/Login" className="navbar-login">Login</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
