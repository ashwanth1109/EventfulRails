import React, { Component } from "react";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }
    render() {
        const { expanded } = this.state;
        let profileDivH = "0px";
        let darkenColor = "";
        console.log(`Expanded is ${expanded}`);
        if (expanded) {
            profileDivH = "400px";
            darkenColor = "#000000AA";
        } else {
            profileDivH = "0px";
            darkenColor = "#00000000";
        }
        return (
            <div>
                <div
                    className="abs screenW screenH transitionBg1"
                    style={{ backgroundColor: darkenColor }}
                />
                <div className="abs fullW flex column">
                    <div
                        className="white fullW transitionH1"
                        style={{ height: profileDivH }}
                    />
                    <div
                        className="height80 cPointer blue"
                        onClick={e => {
                            e.stopPropagation();
                            this.setState({ expanded: !expanded });
                        }}
                    />
                </div>
            </div>
        );
    }
}
