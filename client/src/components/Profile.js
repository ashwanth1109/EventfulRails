import React, { Component } from "react";
import Spacer from "./Spacer";
import EventChip from "./EventChip";

export default class Profile extends Component {
    render() {
        return (
            <div className="flex1 flex column">
                <div className="flex3 flex row aCenter jAround">
                    <Spacer w={40} />
                    <div className="width200 height200 bRad100 white" />
                    <div className="width600 fullH flex column jCenter">
                        <div className="fSize4 fQuicksand fWhite">
                            Ashwanth A R
                        </div>
                        <div className="fSize2 fQuicksand fWhite">
                            Javascript Developer
                        </div>
                    </div>
                    <Spacer w={40} />
                </div>
                <div className="flex2 flex column">
                    <div className="fQuicksand fSize2 fWhite tAlignCenter">
                        UPCOMING EVENTS FOR YOU:
                    </div>
                    <Spacer h={20} />
                    <div className="flex row aCenter jAround">
                        <Spacer w={40} />
                        <div className="flex row jAround">
                            <EventChip name="REACT" date="19 NOV" />
                            <Spacer w={20} />
                            <EventChip name="UI/UX" date="23 NOV" />
                            <Spacer w={20} />
                            <EventChip />
                            <Spacer w={20} />
                            <EventChip />
                            <Spacer w={20} />
                            <EventChip />
                        </div>
                        <Spacer w={40} />
                    </div>
                </div>
            </div>
        );
    }
}
