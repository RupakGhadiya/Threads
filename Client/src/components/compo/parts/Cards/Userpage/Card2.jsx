import React from 'react'
import img1 from './first choice.jpg'
import img2 from './tidy.png'
import img3 from './kfk.jpg'
import "../Card.css"
import Footer from '../../footer/Footer1'
// import { useNavigate } from "react-router-dom"


const Card2 = () => {

    
    return (
        <div className="container">
            <div className="card1">
                <img src={img1} class="card_img" alt="..." />
                <div className="card_body">
                    <p className="service">First choice</p>
                    <p className="para">8140154644</p>
                    <p className="para">Shaniwar Wada, Pune, 415001</p>
                    <p className="para">Rating <span></span></p>
                    <a href='/order'><button className="button3" >Book Service</button></a>
                    <span className="price">Avg 80 per kg</span>
                </div>
            </div>
            <div className="card2">
                <img src={img2} class="card_img" alt="..." />
                <div className="card_body">
                    <p className="service">Tidy Laundary Services</p>
                    <p className="para">8140154644</p>
                    <p className="para">Shaniwar Wada, Pune, 415001</p>
                    <p className="para">Rating <span></span></p>
                    <a href='/order'><button className="button3" >Book Service</button></a>
                    <span className="price">Avg 80 per kg</span>
                </div>
            </div>
            <div className="card3">
                <img src={img3} class="card_img" alt="..." />
                <div className="card_body">
                    <p className="service">KFK Dry cleaning</p>
                    <p className="para">8140154644</p>
                    <p className="para">Shaniwar Wada, Pune, 415001</p>
                    <p className="para">Rating <span></span></p>
                    <a href='/order'><button className="button3">Book Service</button></a>
                    <span className="price">Avg 80 per kg</span>
                </div>
            </div>
        </div>
    )
}

export default Card2
