import React, { Component } from "react";
import "../Custom.css";
import bg from "../assets/backgroundOption3.png";
import logo from "../assets/eventfulLogo.png";
import Spacer from "../components/Spacer";

export default class LandingPage extends Component {
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
                        <input
                            type="email"
                            className="bRad10 width500 height60"
                            placeholder="Username"
                        />
                        <Spacer h={20} />
                        <input
                            type="password"
                            className="bRad10 width500 height60"
                            placeholder="Password"
                        />
                        <Spacer h={30} />
                        <div className="width500 height60 flex row">
                            <Spacer w={30} />
                            <div
                                className="flex1 pink bRad10 flex center cPointer"
                                onClick={() => this.props.login()}
                            >
                                <p className="fSize15 fQuicksand fWhite">
                                    LOGIN
                                </p>
                            </div>
                            <Spacer w={10} />
                            <div
                                className="flex1 pink bRad10 flex center cPointer"
                                onClick={() => this.signUp()}
                            >
                                <p className="fSize15 fQuicksand fWhite">
                                    SIGN UP
                                </p>
                            </div>
                            <Spacer w={30} />
                        </div>
                        <Spacer h={100} />
                    </div>
                </div>
            </div>
        );
    }
}
