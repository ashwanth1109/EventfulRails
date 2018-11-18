import React, { Component } from "react";
import Spacer from "../components/Spacer";
import EventCard from "../components/EventCard";
import "../dashboard.css";
import gaming from "../assets/gamingCategory.png";
import gamingLoc from "../assets/gamingLocation.png";
import sidebarBg from "../assets/blurBackground.png";

export default class DashboardPage extends Component {
    render() {
        return (
            <div style={{background: '#111'}}>
                <div className="black fullH width300 fQuicksand fWhite abs flex center" style={{backgroundImage: `url(${sidebarBg})`}}>
                    <div
                      className="bRad100 abs gray"
                      style={{width: 200, height: 200, top: 50, border: 'solid #08a7d0 5px', backgroundImage:`url(${gaming})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <Spacer w={10}/>
                        <h3 className="flex center">
                            GAMING
                        </h3>
                        <Spacer h={5}/>
                        <p
                          className="width200" style={{fontSize: 15, textAlign: 'center'}}>
                            Are you a gamer looking for new games to play or people who understand you? You've come to the right place! Here, you can find countless events and meetups put together by gamers alike! Don't see an event in your area? Start one and make it Eventful.
                        </p>
                        <h5 className="flex center column">
                            FILTER BY:
                            <Spacer h={20}/>
                            <img src={gamingLoc} style={{width: 30}} className="cPointer"/>
                        </h5>
                    </div>
                </div>
                <div className="gray fullW height350 fQuicksand fWhite flex center">
                <Spacer w={300}/>
                    featured events
                </div>
                <Spacer h={100}/>
                <div className="events fWhite abs zIndex2 fullW flex row">
                    <EventCard/>
                      <Spacer w={10}/>
                    <EventCard/>
                      <Spacer w={10}/>
                    <EventCard/>
                </div>
            </div>
        );
    }
}
