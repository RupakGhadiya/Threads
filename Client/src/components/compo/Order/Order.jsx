import React from 'react'
import { useState } from 'react';
import img1 from './bg.jpg';
import './Order.css'




function ButtonIncrement(props) {

    return (
        <button style={{ marginLeft: '.5rem' }} onClick={props.onClickFunc}>
            +1
        </button>
    )
}
function ButtonDecrement(props) {

    return (
        <button style={{ marginLeft: '.5rem' }} onClick={props.onClickFunc}>
            -1
        </button>
    )
}
function Display(props) {
    return (
        <label style={{ marginLeft: '.5rem' }} >{props.message}</label>
    )
}


const Order = () => {

    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }

    const [counter1, setCounter1] = useState(1);
    const incrementCounter1 = () => setCounter1(counter1 + 1);
    let decrementCounter1 = () => setCounter1(counter1 - 1);
    if (counter1 <= 1) {
        decrementCounter1 = () => setCounter1(1);
    }

    const [counter2, setCounter2] = useState(1);
    const incrementCounter2 = () => setCounter2(counter2 + 1);
    let decrementCounter2 = () => setCounter2(counter2 - 1);
    if (counter2 <= 1) {
        decrementCounter2 = () => setCounter2(1);
    }






    const handleRegister = () => {
        alert('Order Cancel')
    }

    const handleRegister1 = () => {
        alert('Order Place Successfully')
    }

    return (
        <div className='order'>
            <div className='main_card'>
                <div className='top'>
                    <p className='top_txt'>Name:- Rupak Ghadiya</p>
                    <p className='top_txt'>Email:- rupakghadiya@gmail.com</p>
                    <a href="/login">
                    <p className='top_link'>Switch Account</p>
                    </a>
                </div>
                <hr />
                <hr />
                <div className='bottom'>

                    <div className='bottom_left'>

                        <img src={img1} class="card_img_order" alt="..." />
                    </div>

                    <div className='bottom_right'>
                        <p className='title'>Service Type:- Dry Cleaning</p>
                        <p className='title'>Service Provider:- First Choice</p>
                        <div className='bars'>
                            <div className='incbar'>
                                <p id='title'>Top wear</p>
                                <ButtonIncrement className='inc_btn' onClickFunc={incrementCounter} />
                                <Display className='display' message={counter} />
                                <ButtonDecrement className='dec_btn' onClickFunc={decrementCounter} />
                            </div>
                            <div className='incbar'>
                                <p id='title'>bottom</p>
                                <ButtonIncrement className='inc_btn' onClickFunc={incrementCounter1} />
                                <Display className='display' message={counter1} />
                                <ButtonDecrement className='dec_btn' onClickFunc={decrementCounter1} />
                            </div>
                            <div className='incbar'>
                                <p id='title'>Others</p>
                                <ButtonIncrement className='inc_btn' onClickFunc={incrementCounter2} />
                                <Display className='display' message={counter2} />
                                <ButtonDecrement className='dec_btn' onClickFunc={decrementCounter2} />
                            </div>
                        </div>
                        <div className="button_group_or">
                            <a href="/user">
                                <button className="button1_or" onClick={handleRegister}>Cancel Order</button>
                            </a>
                            <a href="">
                                <button className="button1_or" onClick={handleRegister1}>Confirm Order</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Order