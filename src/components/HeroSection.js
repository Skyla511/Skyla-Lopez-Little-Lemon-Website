import React from 'react';
import "../components/styles/HeroSection.css";
import { NavLink } from 'react-router-dom';
import HeroImage from "../components/assets/gourmet.jpg"

const HeroSection = () => {
    return (
        <div className="hero-section-background">
            <div className="section-left">
                <h1>Little Lemon</h1>
                <h2>Miami</h2>
                <p>We are a local restaurant that serves authentic Latin food! Savor every bite by ordering the various items on our menu.</p>
                <NavLink to="/reservations"><button className="btn">Reserve a Table</button></NavLink>
            </div>
            <div className="section-right">
                <div className="image-box">
                    <img src="gourmet.jpg" alt="Serving delicious dish" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
