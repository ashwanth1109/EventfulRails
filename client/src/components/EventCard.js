import React, { Component } from "react";
import gameEvent from "../assets/compHardwareEvent.png";
import clock from "../assets/clock.png";
import locationIcon from "../assets/location.png";
import Spacer from "../components/Spacer";

class EventCard extends Component {
    render() {
        const {
            eventName,
            date,
            month,
            location,
            startTime,
            endTime,
            hostedBy
        } = this.props;
        return (
            <div className="black flex jCenter width300 height350 bRad10 borderBottom column">
                <div style={{ height: 175 }} className="fullW relative">
                    <img
                        src={gameEvent}
                        className="bRadTop10 fullW fullH abs"
                        alt="gamingEvent"
                    />
                    <div className="abs fullW fullH flex column jEnd">
                        <div className="fQuicksand fWeight700 fSize12 fWhite flex row">
                            <Spacer w={10} />
                            {eventName}
                            <Spacer w={10} />
                        </div>
                    </div>
                    <div className="date bRad10 fQuicksand abs">
                        <h1>
                            {date} {month}
                        </h1>
                    </div>
                </div>
                <div className="flex1 flex row">
                    <div className="width80 fullH flex column">
                        <div className="flex1 flex center">
                            <img
                                src={locationIcon}
                                style={{ width: 30 }}
                                alt="location"
                            />
                        </div>
                        <div className="flex1 flex center">
                            <img
                                src={clock}
                                style={{ width: 30 }}
                                alt="location"
                            />
                        </div>
                        <div className="flex1 flex center">
                            <div className="width50 height50 bRad25 white" />
                        </div>
                    </div>
                    <div className="flex1 flex column">
                        <div className="flex1 flex column jCenter">
                            <div className="fQuicksand fSize1 fWeight500 fWhite">
                                {location}
                            </div>
                        </div>
                        <div className="flex1 flex column jCenter">
                            <div className="fQuicksand fSize1 fWeight500 fWhite">
                                {startTime} - {endTime}
                            </div>
                        </div>
                        <div className="flex1 flex column jCenter">
                            <div className="fQuicksand fSize1 fWeight500 fWhite flex column">
                                <div className="fSize12">HOSTED BY:</div>
                                <div>{hostedBy}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Spacer h={10} />
            </div>
        );
    }
}

// class EventCard extends Component {
//     render() {
//         return (
//             <div className="black flex jCenter width300 height350 bRad10 borderBottom">
//                 <img
//                     src={gameEvent}
//                     className="fullW bRadTop10"
//                     style={{ height: 175 }}
//                     alt="gamingEvent"
//                 />
//                 <div className="abs">
//                     <Spacer h={10} />
//                     <Spacer w={275} />
//                     <div className="date bRad10 fQuicksand">
//                         <h1>20 NOV</h1>
//                     </div>
//                     <Spacer h={50} />
//                     <h3 className="width200">COMPUTER HARDWARE</h3>
//                     <img
//                         src={location}
//                         style={{ width: 30 }}
//                         alt="location"
//                     />{" "}
//                     Atlanta, Georgia
//                     <Spacer h={15} />
//                     <img src={clock} style={{ width: 30 }} alt="time" /> 07:30
//                     PM - 10:30 PM
//                     <Spacer h={10} />
//                     <div
//                         className="bRad100 white flex"
//                         style={{ width: 50, height: 50 }}
//                     >
//                         <span className="abs flex center">
//                             <Spacer w={55} />
//                             Hosted By:
//                             <br />
//                             Emily Reno
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default EventCard;
