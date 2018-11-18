import React, { Component } from "react";
import logo from "../assets/eventfulCircleLogo.png";
import Spacer from "./Spacer";
import pinkArrow from "../assets/pinkArrow.png";
import Profile from "./Profile";
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }
    render() {
        const { expanded } = this.state;
        let darkenColor = "";
        let topOfHeader = "";
        let arrowClass = "";
        if (expanded) {
            darkenColor = "#000000AA";
            topOfHeader = "0px";
            arrowClass = "height10 cPointer transition1 rotate";
        } else {
            darkenColor = "#00000000";
            topOfHeader = "-520px";
            arrowClass = "height10 cPointer transition1";
        }
        let name = "Ashwanth";
        return (
            <div>
                <div
                    className="fixed screenW screenH transitionBg1 oHidden"
                    style={{ backgroundColor: darkenColor }}
                />
                <div
                    className="fixed bg fullW height600 transition1 flex column zIndex3 oHidden"
                    style={{ top: topOfHeader }}
                >
                    <Profile />
                    <div
                        className="height80 flex row aCenter cPointer blackO40"
                        onClick={() => this.setState({ expanded: !expanded })}
                    >
                        <Spacer w={40} />
                        <img src={logo} alt="logo" className="height60" />
                        <div className="flex1" />
                        <div className="fWhite fQuicksand fSize15 fWeight500">
                            {name.toUpperCase()}
                        </div>
                        <Spacer w={10} />
                        <img
                            src={pinkArrow}
                            alt="arrow"
                            className={arrowClass}
                            onClick={this.toggleModal}
                        />
                        <Spacer w={40} />
                    </div>
                </div>
            </div>
        );
    }
}
