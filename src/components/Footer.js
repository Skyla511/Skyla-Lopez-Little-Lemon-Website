import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
    return (
        <div>
            <div className="footer-background">
                <img src="logo.jpg" alt="Little Lemon Logo" />
                <p>Little Lemon is a family-friendly restaurant that serves a variety of deliciousness! Great customer service and phenomenal food all for a great price.</p>
                <div className="footer-content">
                    <div className="locations">
                        <h5>LOCATIONS</h5>
                        <ul>
                            <li>Los Angeles</li>
                            <li>New York City</li>
                            <li>Miami</li>
                            <li>Houston</li>
                        </ul>
                    </div>
                    <div className="opening-times">
                        <h5>OPENING TIMES</h5>
                        <ul>
                            <li>Mon-Thurs: 9:00am-11:00pm</li>
                            <li>Fri: 9:00am-12:00am</li>
                            <li>Sat: 9:00am-2:30am</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>Tel: 123 879 564</li>
                            <li>Email: info@littlelemon.com</li>
                            <li>678 Old Bridge Drive, Houston, TX</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                        <p> Little Lemon Ltd. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
