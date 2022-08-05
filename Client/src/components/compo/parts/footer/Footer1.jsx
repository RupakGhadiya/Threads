import React from 'react'
import "./Footer.css"
const Footer1 = () => {
    return (
        <div className='footer_container'>
            <div className="first_part">
                <h1 className='footer_brand_name'> Threads</h1>
                <p className='footer_text'>We are what you need, a One Stop solution to all clothing related services. With our pick-up/drop support we're here to save your precious time.
Trust us with your clothing as we're here to give you nothing but the best</p>
                <div className='social_container'>
                    <i className="social_media">I</i>
                    <i className="social_media">F</i>
                    <i className="social_media">L</i>
                    <i className="social_media">Y</i>
                </div>
            </div>

            <div className="second_part">
                <h1 className='part_title'>About</h1>
                <ul>
                    <li>Services</li>
                    <li>Payment</li>
                    <li>Reviews</li>
                </ul>
            </div>
            <div className="third_part">
                <h1 className='part_title'>Help</h1>
                <li>Contact us</li>
                <li>FAQs</li>
            </div>
            <div className="forth_part">
                <h1 className='part_title'>Policy</h1>
                <li>Cancellation</li>
                <li>Terms & Condition</li>
            </div>

        </div>
    )
}

export default Footer1
