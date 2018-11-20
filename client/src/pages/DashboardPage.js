import React, { Component } from "react";
import Spacer from "../components/Spacer";
import Sidebar from "../components/Sidebar";
import Slideshow from "../components/Slideshow";
import EventCard from "../components/EventCard";
import "../dashboard.css";

export default class DashboardPage extends Component {
    render() {
        return (
            <div className="white screenW screenH flex row">
                <Sidebar />
                <div className="flex1 flex column">
                    <Slideshow />
                    <div className="flex1 flex center column jEvenly aStart">
                        <div className="flex row">
                            <Spacer w={80} />
                            <h1 className="fSize3 fQuicksand">
                                Upcoming Events for Gaming
                            </h1>
                        </div>
                        <div className="flex row jEvenly fullW fQuicksand fWhite">
                            <div className="flex center">
                                <div className="arrowLeft" />
                            </div>
                            <EventCard />
                            <EventCard />
                            <EventCard />
                            <div className="flex center">
                                <div className="arrowRight" />
                            </div>
                        </div>
                    </div>
                    <Spacer h={40} />
                </div>
            </div>
        );
    }
}
