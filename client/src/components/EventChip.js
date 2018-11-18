import React, { Component } from "react";

export default class EventChip extends Component {
    render() {
        const { name, date } = this.props;
        if (name) {
            return (
                <div className="used flex column bRad10 center width150 height80">
                    <div className="fSize15 fQuicksand fWeight500">{name}</div>
                    <div className="fQuicksand fPink">{date}</div>
                </div>
            );
        } else {
            return (
                <div className="unused flex column bRad10 center width150 height80" />
            );
        }
    }
}
