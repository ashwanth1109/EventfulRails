import React, { Component } from "react";
import bg from "../assets/backgroundOption3.png";
import logo from "../assets/eventfulLogo.png";
import Spacer from "../components/Spacer";

import { Route } from "react-router-dom";
// import TextInput from "../components/TextInput";

const LoginButton = props => (
    <Route
        render={({ history }) => (
            <div
                className="flex1 pink bRad10 flex center cPointer"
                onClick={() => props.onClick(history)}
            >
                <p className="fSize15 fQuicksand fWhite">LOGIN</p>
            </div>
        )}
    />
);

const SignUpButton = props => (
    <Route
        render={({ history }) => (
            <div
                className="flex1 pink bRad10 flex center cPointer"
                onClick={() => props.onClick()}
            >
                <p className="fSize15 fQuicksand fWhite">SIGN UP</p>
            </div>
        )}
    />
);

const SwitchText = props => {
    if (props.login) {
        return (
            <p className="fWhite fQuicksand">
                Need to create an account?{" "}
                <span
                    className="underline cPointer"
                    onClick={() => props.onClick()}
                >
                    Click here to Sign Up
                </span>
            </p>
        );
    } else {
        return (
            <p className="fWhite fQuicksand">
                Already have an account?{" "}
                <span
                    className="underline cPointer"
                    onClick={() => props.onClick()}
                >
                    Click here to Log In
                </span>
            </p>
        );
    }
};

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            users: []
        };
    }

    getUsers = () => {
        fetch("/users").then(res => {
            res.json().then(data => {
                this.setState({
                    users: data
                });
            });
        });
    };

    componentDidMount() {
        this.getUsers();
    }

    login = history => {
        const { users } = this.state;
        const { username, password } = this.refs;
        let userFound = false,
            passwordMismatch = false;
        users.forEach(user => {
            if (user.username === username.value) {
                console.log(`user found in database`);
                if (user.password === password.value) {
                    console.log(user.id);
                    console.log(this.props);
                    history.push("/category");
                    this.props.updateUser(user.id);
                    userFound = true;
                } else {
                    passwordMismatch = true;
                }
            }
        });
        if (passwordMismatch) {
            console.log(`password entered is incorrect`);
        } else if (!userFound) {
            console.log(`user not found in database`);
        }
    };

    signUp = () => {
        const { username, password, password2 } = this.refs;
        if (password.value === password2.value) {
            const user = {
                username: username.value,
                password: password.value
            };
            fetch("/users", {
                body: JSON.stringify(user),
                method: "POST",
                headers: {
                    //prettier-ignore
                    "Accept": "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            }).then(res => {
                res.json().then(data => {
                    console.log(data);
                    this.setState({
                        login: true
                    });
                    this.getUsers();
                });
            });
        } else {
            console.log(`passwords dont match`);
        }
    };

    render() {
        const { login } = this.state;
        // console.log(username, password);
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
                            className="width500 bRad10 height60 pad10 borderBox fSize15 fQuicksand fPink fWeight500 focusPink"
                            type="text"
                            placeholder="Username"
                            ref="username"
                        />
                        <Spacer h={20} />
                        <input
                            className="width500 bRad10 height60 pad10 borderBox fSize15 fQuicksand fPink fWeight500 focusPink"
                            type="password"
                            placeholder="Password"
                            ref="password"
                        />
                        <Spacer h={20} />
                        {!login ? (
                            <div>
                                <input
                                    className="width500 bRad10 height60 pad10 borderBox fSize15 fQuicksand fPink fWeight500 focusPink"
                                    type="password"
                                    placeholder="Re-enter Password"
                                    ref="password2"
                                />
                                <Spacer h={30} />
                            </div>
                        ) : (
                            <Spacer h={90} />
                        )}
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
                            {login ? (
                                <LoginButton
                                    onClick={history => this.login(history)}
                                />
                            ) : (
                                <SignUpButton onClick={() => this.signUp()} />
                            )}
                            <Spacer w={30} />
                        </div>
                        <SwitchText
                            login={login}
                            onClick={() => this.setState({ login: !login })}
                        />
                        <Spacer h={100} />
                    </div>
                </div>
            </div>
        );
    }
}
