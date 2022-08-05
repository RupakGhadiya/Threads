import React from "react"
import Home from "../compo/home/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Partner from '../compo/partner/Partner'
import User from "../user/User";
import Order from "../compo/Order/Order";
import Formpartner from "../compo/partner/partner form/Formpartner";
import Login from '../login/Login'
import Register from "../register/register";
const Homepage = ({ setLoginUser }) => {

    return (
        <div className="homepage">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/partner">
                        <Partner />
                    </Route>
                    <Route exact path="/user">
                        <User />
                    </Route>
                    <Route exact path="/order">
                        <Order />
                    </Route>
                    <Route exact path="/form">
                        <Formpartner />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}

export default Homepage