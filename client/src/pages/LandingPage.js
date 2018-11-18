import React, { Component } from "react";
import bg from "../assets/backgroundOption3.png";
import logo from "../assets/eventfulLogo.png";
import Spacer from "../components/Spacer";

import { Route } from "react-router-dom";
import TextInput from "../components/TextInput";

const Login = () => (
    <Route
        render={({ history }) => (
            <div
                className="flex1 pink bRad10 flex center cPointer"
                onClick={() => {
                    history.push("/category");
                }}
            >
                <p className="fSize15 fQuicksand fWhite">LOGIN</p>
            </div>
        )}
    />
);

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signUp: false
        };
    }
    render() {
        return (
            <div>
                <img
                    src={bg}
                    alt="Eventful Background"
                    className="screenW screenH abs imgCover"
                />
                <div className="screenW screenH abs flex row">
                    <div className="flex1">
                        <div />
                    </div>
                    <div className="blackO70 width700 fullH flex center column">
                        <img
                            src={logo}
                            alt="logo"
                            className="imgContain width500"
                        />
                        <h1 className="fSize15 fQuicksand fWhite fWeight300">
                            EVENT BOOKING MADE EASY
                        </h1>
                        <Spacer h={50} />
                        <TextInput
                            type="email"
                            styleClass="width500"
                            placeholder="Username"
                        />
                        <Spacer h={20} />
                        <TextInput
                            type="password"
                            styleClass="width500"
                            placeholder="Password"
                        />
                        <Spacer h={30} />
                        <div className="width500 height60 flex row">
                            <Spacer w={30} />
                            {/* ADD LOGIN BUTTON HERE */}
                            <div
                                className="flex1 white bRad10 flex center cPointer bPink"
                                onClick={() => {
                                    console.log("Clear the fields");
                                }}
                            >
                                <p className="fSize15 fQuicksand fPink">
                                    CLEAR
                                </p>
                            </div>
                            <Spacer w={10} />
                            <Login />
                            <Spacer w={30} />
                        </div>
                        <p className="fWhite fQuicksand">
                            Need to create an account?{" "}
                            <span
                                className="underline cPointer"
                                onClick={() => {
                                    this.setState({ signUp: true });
                                    console.log("Show sign up page");
                                }}
                            >
                                Click here
                            </span>
                        </p>
                        <Spacer h={100} />
                    </div>
                </div>
            </div>
        );
    }
}
