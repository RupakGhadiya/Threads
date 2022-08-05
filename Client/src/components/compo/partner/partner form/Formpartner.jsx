import React from 'react'
import './Form.css'


const Formpartner = () => {


    const handleRegister=()=>{
        alert('Register Successfully')
    }

    return (
        <div>
            <div className="form">
                <div className='main'>
                    <div className='bottom_right'>
                        <h1 className="login_title">RegisterYour Service </h1>
                        <input className="input_login_forml" type="text" name="name" placeholder="Your Name"></input>
                        <input className="input_login_form" type="text" name="email" placeholder="Brand Name"></input>
                        <input className="input_login_forml" type="password" name="password" placeholder="Service Catogary"></input>
                        <input className="input_login_form" type="password" name="reEnterPassword" placeholder="Phone number"></input>
                        <input className="input_login_forml" type="password" name="reEnterPassword" placeholder="E-mail id"></input>
                        <input className="input_login_form" type="password" name="reEnterPassword" placeholder="GST Number"></input>
                        <input className="input_login_forml" type="text" name="name" placeholder="Address"></input>
                        <input className="input_login_form" type="text" name="email" placeholder="City,State"></input>
                        <input className="input_login_forml" type="password" name="password" placeholder="Avg Prices"></input>



                        <div class="dropdown color-white">
                            <select class="yn">
                                <option selected>Want Pickup & Drop Services</option>
                                <option value="1">Yes</option>
                                <div class="dropdown-divider"></div>
                                <option value="2">No</option>
                            </select>
                        </div>

                        <div class="file-upload-wrapper" data-text="Select your file!">
                            <input name="file-upload-field" type="file" class="file-upload-field" value="" />
                        </div>
                        <br /><br />
                        <a href="/partner"><button className="button_form" onClick={handleRegister}>Register</button></a>
                        <a href="/partner" className='back'>--- Back ---</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formpartner