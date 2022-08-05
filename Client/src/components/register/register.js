import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import img1 from './log.svg'

const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message)
                    history.push("/login")
                })
        } else {
            alert("invlid input")
        }

    }

    return (
        <div className="register">
            {console.log("User", user)}
            <div className='bottom'>
                
                <div className='bottom_right'>
                    <h1 className="login_title">Register</h1>
                    <input className="input_login_r" type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
                    <input className="input_login_r" type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
                    <input className="input_login_r" type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
                    <input className="input_login_r" type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
                    <button className="button" onClick={register} >Register</button>
                    <div className="or">or</div>
                    <button className="button" onClick={() => history.push("/login")}>Login</button>
                </div>

                <div className='bottom_left_r'>
                    <img src={img1} class="card_img_or" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Register