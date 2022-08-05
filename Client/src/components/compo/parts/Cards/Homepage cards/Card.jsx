import React from 'react'
import img1 from './laundry.jpeg'
import img2 from './iron.jpg'
import img3 from './fafu.jpg'
import img4 from './dryclining.jpg'
import img5 from './tailer.jpg'
import img6 from './print.jpg'

import "../Card.css"

const Card = () => {
    return (
        <div className="container">
            <div className="card1">
                <img src={img1} class="card_img1" alt="..." />
                <div className="card_body">
                    <p className="service">Laundary Services</p>
                    <p className="para">Get your Laundary done at your door steps with us, Click below to know more about this service</p>
                    <a href=""><button className="button3">Explore More</button></a>
                </div>
            </div>

            <div className="card2">
                <img src={img1} class="card_img1" alt="..." />
                <div className="card_body">
                    <p className="service">Tailoring</p>
                    <p className="para">Get your Laundary done at your door steps with us, Click below to know more about this service</p>
                    <button className="button3">Explore More</button>
                </div>
            </div>

            <div className="card3">
                <img src={img1} class="card_img1" alt="..." />
                <div className="card_body">
                    <p className="service">Ironing</p>
                    <p className="para">Get your Laundary done at your door steps with us, Click below to know more about this service</p>
                    <button className="button3">Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default Card
