import React, { Component } from "react";
import gameEvent from "../assets/compHardwareEvent.png";
import clock from "../assets/clock.png";
import location from "../assets/location.png";
import Spacer from "../components/Spacer";

class EventCard extends Component {
  render() {
    return(
      <div className="black flex jCenter width300 height350 bRad10 borderBottom">
          <img src={gameEvent} className="fullW bRadTop10" style={{height: 175}}/>
          <div className="abs">
          <Spacer h={10}/>
          <Spacer w={275}/>
              <div className="date bRad10 fQuicksand">
                  <h1>
                      20
                      NOV
                  </h1>
              </div>
              <Spacer h={50}/>
              <h3 className="width200">
                COMPUTER HARDWARE
              </h3>
              <img src={location} style={{width: 30}}/>
              <Spacer h={15}/>
              <img src={clock} style={{width: 30}}/>
          </div>
      </div>
    )
  }
}

export default EventCard;
