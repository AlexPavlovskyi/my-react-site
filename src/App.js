import React from 'react';
import Header from "./components/Header";
import './App.scss';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
    return (
        <Router>
            <div>
                <Header/>
                <div class="wrapper">
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route component={PageNotFound}/>
                        </Switch>
                </div>
                <Footer/>
            </div>

        </Router>

    )
}

export default App;
