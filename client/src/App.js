import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/navbar/Navbar.jsx'
import Home from './pages/home/Home.jsx';
import Single from './pages/single/Single.jsx';
import Write from './pages/write/Write.jsx';
import Settings from './pages/settings/Settings.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import { connect } from "react-redux";

const mapStateToProps = state => ({
    user: state.user.user,
})
// "1648233263509zoo_monkey-Isne1TFoI78-unsplash.jpg"
function App({user}) {
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
      }, [user]);
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={user ? Home : Login} />
                    <Route path="/register" component={user ? Home : Register} />
                    <Route path="/settings" component={user ? Settings : Register} />
                    <Route path="/post/:postId" component={Single}/>
                    <Route path="/write" component={user ? Write : Register} />
                </Switch>
            </div>
        </Router>
    )
};

export default connect(mapStateToProps, null)(App);