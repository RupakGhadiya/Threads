import React from 'react'
import './Partner.css'
import img1 from './bg1.png';
import img2 from './customer.png';
import img3 from './Com.png';
import img4 from './pickup.png';
import img5 from './reli.jpg';
import img6 from './brand.jpg';

import Footer1 from '../parts/footer/Footer1';
const Partner = () => {
    return (
        <div className="partner">
            <div>
                <div className="nav">
                    <a href="/">
                        <button className="btn_partner">Back to Homepage</button>
                    </a>
                </div>

                <div className="hero">
                    <div className="left">
                        <h1 className='partner_title'>Be Our Partner</h1>
                        <p className='partner_tag'>Join hands with THREADS to get an exposure like never before and experience immensely brand value and growth by playing by the rules of the game</p>
                        <div className="button_group_partner">
                            <a href="/form">
                                <button className="button_parter">Register Your Service</button>
                            </a>
                            <a href="/user">
                                <button className="button1">User Services</button>
                            </a>

                        </div>
                    </div>
                    <div className="right">
                        <img src={img1} class="card_img_partner" alt="..." />
                    </div>
                </div>
                <div className='why'>
                    <h1 className="User_heading">Why to choose us?</h1>
                    <div className="cards_partner1">
                        <div className="img_con">
                            <img src={img2} class="card_img10" alt="..." />
                        </div>
                        <div>
                            <p className='text_partner'>Increase in customer base</p>
                            <p className='para_partner'>Along with your regular customers who are normally homemakers who need help, THREADS will help you reach a larger section of society, working couples who do not have time to drop off their laundry and will always prefer saving time and also the students away from home will look forward to engaging in your service</p>
                        </div>
                    </div>

                    <div className="cards_partner2">
                        <div>
                            <p className='text_partner'>Reduction in Communication Gap</p>
                            <p className='para_partner'>Earlier it was easier to remember the smallest of the details by word of mouth without noting anything but with the increase in number this task has increased its complexity. An online portal always makes it easy to ensure that one doesn't miss out on smaller details</p>
                        </div>
                        <div className="img_con_right">
                            <img src={img3} class="card_img10" alt="..." />
                        </div>

                    </div>

                    <div className="cards_partner3">
                        <div className="img_con">
                            <img src={img4} class="card_img10" alt="..." />
                        </div>
                        <div>
                            <p className='text_partner'>Pick-Up Drop Service</p>
                            <p className='para_partner'>The pick up drop service not only saves time of the customer but also of the service provider. One can avoid sending a staff member from door to door to locality to locality, nothing down details of each customer and other points. The online portal makes it easier to refer to details and also keep a record of all orders</p>
                        </div>
                    </div>

                    <div className="cards_partner4">
                        <div>
                            <p className='text_partner'>Increasing Reliability</p>
                            <p className='para_partner'>Growth in business also means the growth of trust between the customer and service provider. This ensures that a symbiotic relationship is built between them. With a hectic and busy life it is difficult to keep in mind things that have been conveyed verbally to which no one is to blame. Hence the online portal ensures that the details are not missed out on and the trust is kept safe</p>
                        </div>
                        <div className="img_con_right">
                            <img src={img5} class="card_img10" alt="..." />
                        </div>

                    </div>

                    <div className="cards_partner5">
                        <div className="img_con">
                            <img src={img6} class="card_img10" alt="..." />
                        </div>
                        <div>
                            <p className='text_partner'>Increase in Brand Value</p>
                            <p className='para_partner'>Increase in customer base and rise in the number of orders results in being able to establish yourself in the given location. This comes with the responsibility of being the upmarket Brand that you have become and keep proving services as promised over and over again</p>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
                <Footer1 />
            </div>
        </div>
    )
}

export default Partner
