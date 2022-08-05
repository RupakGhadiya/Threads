import Homepage from "./components/homepage/Homepage"
import Login from "./components/login/Login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import User from './components/user/User';
import Home from './components/compo/home/Home';
import Partner from './components/compo/partner/Partner';
import Order from './components/compo/Order/Order';
import Contact from "./components/compo/parts/contact/Contact";
import Formpartner from "./components/compo/partner/partner form/Formpartner"; 



function App() {

  const [user, setLoginUser] = useState({})
  return (
    <div>
      {/* <Partner /> */}
      {/* <Contact /> */}
      {/* <Order /> */}
      {/* <Homepage /> */}
      {/* <User /> */}
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>





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
  );
}

export default App;