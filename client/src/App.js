import React, { Component } from "react";
import "./Custom.css";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/categories" component={CategoryPage} />
        </div>
    </Router>
);

export default App;
