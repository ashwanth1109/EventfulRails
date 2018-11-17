import React, { Component } from "react";
import "./Custom.css";
import LandingPage from "./pages/LandingPage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "This should change"
        };
    }
    componentDidMount() {
        // fetch("/users")
        //     .then(res => {
        //         console.log(res);
        //         return res.json();
        //     })
        //     .then(data => {
        //         this.setState({
        //             test: data[0].name
        //         });
        //     });
    }
    render() {
        return (
            <div>
                <LandingPage />
            </div>
        );
    }
}

export default App;
