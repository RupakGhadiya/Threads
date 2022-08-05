import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import img1 from './log.svg'

const Login = ({ setLoginUser }) => {

    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })


    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                history.push("/")
            })
    }

    return (
        <div className="login">

            <div className='bottom'>
                <div className='bottom_left'>
                    <img src={img1} class="card_img_or" alt="..." />
                </div>

                <div className='bottom_right'>
                    <h1 className="login_title">Login</h1>
                    <input className="input_login" type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                    <input className="input_login" type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
                    <button className="button" onClick={login}>Login</button>
                    <div className="or">or</div>
                    <button className="button" onClick={() => history.push("/register")}>Register</button>
                </div>
            </div>

        </div>
    )
}

export default Login