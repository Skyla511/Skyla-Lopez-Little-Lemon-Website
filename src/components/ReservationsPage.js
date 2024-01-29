import React from 'react';
import "./styles/ReservationsContent.css";
import For from './Form';

function ReservationsPage () {

    return (
        <div className="res-content-wrapper">
            <div className = "res-content-container">
                <div className="text">
                    <h2>Experience only the best service!</h2>
                    <p>At Little Lemon, we want our customers to feel welcomed and relaxed as you enjoy our delicious food options.</p>
                    <p>Book a table with us to experience all that we have to offer!</p>
                </div>
                <div className="form">
                    <h1>Reserve a Table</h1>
                    <p>Please fill in and submit form to book your reservation at Little Lemon</p>
                    < Form />
                </div>
            </div>
        </div>
    )
}

export default ReservationsPage
