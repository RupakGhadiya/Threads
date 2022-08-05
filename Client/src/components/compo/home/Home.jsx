import React from "react"
import "./Home.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import img1 from './cs.svg';
import img2 from './frame.jpg';
// import Contact from "../parts/contact/Contactus"
// import User from "../user/User"
import Card from '../parts/Cards/Homepage cards/Card'
import Contact from "../parts/contact/Contact";
import Footer1 from "../parts/footer/Footer1"
import { useHistory } from "react-router-dom"



const Home = ({ setLoginUser }) => {

    const history = useHistory()

    return (
        <div className="homepage">
            <div>
                <div className="nav">
                    <h6 className="logo">Threads</h6>
                    <button className="btn" onClick={() => setLoginUser({})}>Logout</button>
                </div>

                <div className="hero">
                    <div className="left">
                        <h1 className="home_title">One Stop solution for all Your needs</h1>
                        <p className="home_tag" >From tightening your loose shirt to getting it crease free and from picking up your soiled clothes to delivering your clothes fresher than ever, we've got it all covered</p>
                        <div className="button_group">
                            <a href="/partner">
                                <button className="button1">Service Provider</button>
                            </a>
                            <a href="/user">
                                <button className="button1">User</button>
                            </a>

                        </div>
                    </div>
                    <div className="right_home">
                        <img src={img1} class="card_img_home" alt="..." />
                    </div>
                </div>

                <div className="cards_home">
                    <br />
                    <br />
                    <h1 className="User_heading">How do we Operate</h1>
                    <img src={img2} class="card_img2" alt="..." />
                    <br /><br />
                </div>

                <div className="cards_home">
                    <h1 className="User_heading">What We Provide</h1>
                    <Card />
                    <Card />
                </div>


                <div className="Home_con">
                    <br /><br /><br />
                    <Contact />
                    <br /><br /><br />
                </div>
                <Footer1 />
            </div>
        </div>
    )
}

export default Home