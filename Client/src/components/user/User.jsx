import React from 'react'
import "./User.css"
import Searchbar from '../compo/parts/Seachbar/Searchbar'
import Card2 from '../compo/parts/Cards/Userpage/Card2'
import Footer1 from '../compo/parts/footer/Footer1'
import img from './abc.jpg'
const User = () => {
    return (
        <div className="user">
        <div className='background_user'>
            <h1 className="User_heading">What We Provide <a href="/"><span className='location'>Back to Home Page</span></a></h1>
            <div className="carousel">
            <img className='carousel_img1' src={img} alt="" />
            </div>

            <Searchbar />
            <hr />
            <h1 className="User_heading"><span className='location'>Pune</span></h1>
            <div className="cards_user">
            <Card2 />
            <Card2 />
            <Card2 />
            </div>
            <Footer1 />
        </div>
        </div>
    )
}

export default User
