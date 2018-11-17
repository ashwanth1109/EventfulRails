import React, { Component } from "react";
import "./Custom.css";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import DashboardPage from "./pages/DashboardPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={LandingPage} />
            <Route path="/about" component={CategoryPage} />
            <Route path="/topics" component={DashboardPage} />
        </div>
    </Router>
);

const Header = () => (
    <ul>
        <li>
            <Link to="/">LandingPage</Link>
        </li>
        <li>
            <Link to="/about">CategoryPage</Link>
        </li>
        <li>
            <Link to="/topics">DashboardPage</Link>
        </li>
    </ul>
);

export default App;
