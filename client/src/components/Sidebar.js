import React, { Component } from "react";
import Spacer from "../components/Spacer";
import gaming from "../assets/gamingCategory.png";
import gamingLoc from "../assets/gamingLocation.png";
import sidebarBg from "../assets/blurBackground.png";

class Sidebar extends Component {
    render() {
        return (
            <div
                className="black fullH width300 fQuicksand fWhite flex center"
                style={{ backgroundImage: `url(${sidebarBg})` }}
            >
                <div
                    className="bRad100 abs gray zIndex2"
                    style={{
                        width: 200,
                        height: 200,
                        top: 50,
                        border: "solid #08a7d0 5px",
                        backgroundImage: `url(${gaming})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    <Spacer w={10} />
                    <h2 className="flex center">GAMING</h2>
                    <Spacer h={5} />
                    <p
                        className="width200"
                        style={{ fontSize: 15, textAlign: "center" }}
                    >
                        Are you a gamer looking for new games to play or people
                        who understand you? You've come to the right place!
                        Here, you can find countless events and meetups put
                        together by gamers alike!
                    </p>
                    <p
                        className="width200"
                        style={{ fontSize: 15, textAlign: "center" }}
                    >
                        Don't see an event in your area? Start one and make it
                        Eventful.
                    </p>
                    <Spacer h={5} />
                    <h4 className="flex center column">
                        FILTER BY:
                        <Spacer h={20} />
                        <img
                            src={gamingLoc}
                            style={{ width: 30 }}
                            className="cPointer"
                            alt="gaming"
                        />
                    </h4>
                    <Spacer h={20} />
                    <div className="width200 mAuto flex center pink height40 bRad10 cPointer">
                        Go Back
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
