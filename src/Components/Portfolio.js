import React from "react";
import './Portfolio.css';
import Video from './videos/Portfolio-background.mp4';

function Portfolio(){
    return(
        <div className="portfolio">
            <video autoPlay loop muted className="portfolio-video">
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="portfolio-header">
                <div className="portfolio-title">Portfolio</div>
                <div className="portfolio-subheading">A Collection of Jamie's Sold Homes</div>
            </div>
        </div>
    )
}

export default Portfolio;
