import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "This should change"
        };
    }
    componentDidMount() {
        fetch("/users")
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                // this.setState({
                //     test: data.message
                // });
            });
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>{this.state.test}</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
