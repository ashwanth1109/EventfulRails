import React, { Component } from "react";
import Spacer from "../components/Spacer";
import Sidebar from "../components/Sidebar";
import Slideshow from "../components/Slideshow";
import EventCard from "../components/EventCard";
import "../dashboard.css";

export default class DashboardPage extends Component {
    render() {
        return (
            <div style={{background: '#111'}}>
                <Sidebar />
                <Slideshow />
                <Spacer h={25}/>
                <h1 className="fWhite abs fullW flex center fSize3 fQuicksand" style={{left: -200, fontStyle: 'italic'}}>
                    Upcoming Events
                </h1>
                <Spacer h={100}/>
                <div className="events fWhite abs fullW flex center row">
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
