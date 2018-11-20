import React, { Component } from "react";
import Spacer from "../components/Spacer";
import Sidebar from "../components/Sidebar";
import Slideshow from "../components/Slideshow";
import EventCard from "../components/EventCard";
import gameEvent from "../assets/compHardwareEvent.png";
import "../dashboard.css";

export default class DashboardPage extends Component {
    render() {
        return (
            <div className="white screenW screenH flex row">
                <Sidebar
                    goBack={() => {
                        console.log(this.props.route.history.push("/category"));
                    }}
                />
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
                            <EventCard
                                eventName="Computer Hardware"
                                date="20"
                                month="NOV"
                                location="Atlanta, Georgia"
                                startTime="07:00 PM"
                                endTime="10:00 PM"
                                hostedBy="EMILY RENO"
                                eventImage={gameEvent}
                            />
                            <EventCard
                                eventName="Switch It Up"
                                date="21"
                                month="NOV"
                                location="Bangalore, India"
                                startTime="07:00 PM"
                                endTime="10:00 PM"
                                hostedBy="ASHWANTH A R"
                                eventImage={gameEvent}
                            />
                            <EventCard
                                eventName="React, The Reaction"
                                date="22"
                                month="NOV"
                                location="Chennai, India"
                                startTime="07:00 PM"
                                endTime="10:00 PM"
                                hostedBy="ASHWANTH A R"
                                eventImage={gameEvent}
                            />
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
