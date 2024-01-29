import React from 'react'
import "../components/styles/SpecialsCard.css"
import Dessert1 from "../components/assets/cheesecake.jpg"
import Dessert2 from "../components/assets/cannoli.jpg"
import Dessert3 from "../components/assets/creme.jpg"
import { MdDeliveryDining } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const SpecialsCard = () => {
    const specialMenus = [
        {
            image: Dessert1,
            title: "Cheesecake",
            price: "$10.99",
            description: "Right out of NYC, we have a savoury cheescake that can go with any meal!"
        },
        {
            image: Dessert2,
            title: "Cannoli",
            price: "$6.99",
            description: "Enjoy an Italian favorite! Creamy filling with a fried outside that hugs the filling in tight!"
        },
        {
            image: Dessert3,
            title: "Lemon Dessert",
            price: "$3.00",
            description: "Our very first dessert menu option! Enjoy our lemon-crazed dessert that will leave you begging for more!"
        }
    ]

    const specialMenusItems = specialMenus.map(menu => {
        const image = menu.image;
        const title = menu.title;
        const price = menu.price;
        const description = menu.description;
        const order = menu.order;

        return (
            <div>
                <div className="special-card-container">
                    <div className="image-container">
                        <img src= "strawberryshortcake.jpg" alt="Special dessert" />
                     </div>
                     <div className="special-card-text">
                        <div className="special-card-title">
                            <h3>Strawberry Shortcake</h3>
                            <h3 className="price-tag">$6.99</h3>
                        </div>
                        <p>Our special item on the menu is our fresh Strawberry Shortcake! A home-made recipe that has been a part of Little Lemon for the last 50 years!</p>
                        <NavLink to="#">
                            <h4>
                                Order it now to experience a staple!
                                { <MdDelivery Dining size={30} style={{color: "#333333", marginLeft: "10px,"}}/>}
                            </h4>
                        </NavLink>
                     </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="special-card">
                {specialMenusItems}
            </div>
        </div>
    )
}

export default SpecialsCard
