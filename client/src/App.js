import React, { Component } from "react";
import "./Custom.css";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
// import DashboardPage from "./pages/DashboardPage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        };
    }

    login = () => {
        console.log(`user should log in`);
        this.setState({
            page: 2
        });
    };
    render() {
        const { page } = this.state;
        if (page === 1) {
            return <LandingPage login={() => this.login()} />;
        } else if (page === 2) {
            return <CategoryPage />;
        }
    }
}

export default App;
