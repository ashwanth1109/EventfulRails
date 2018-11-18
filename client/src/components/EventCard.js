import React, { Component } from "react";
import gameEvent from "../assets/compHardwareEvent.png";
import Spacer from "../components/Spacer";

class EventCard extends Component {
  render() {
    return(
      <div className="black flex jCenter width300 height350 bRad10 borderBottom">
          <img src={gameEvent} className="fullW bRadTop10" style={{height: 175}}/>
          <div className="abs">
          <Spacer h={10}/>
          <Spacer w={260}/>
              <div className="date bRad10 fQuicksand">
                  <h1>
                      20
                      NOV
                  </h1>
              </div>
          </div>
      </div>
    )
  }
}

export default EventCard;
