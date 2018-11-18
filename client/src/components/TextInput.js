import React, { Component } from "react";

export default class TextInput extends Component {
    render() {
        const { styleClass, type, placeholder } = this.props;
        return (
            <input
                className={`${styleClass} bRad10 height60 pad10 borderBox fSize15 fQuicksand fPink fWeight500 focusPink`}
                type={type}
                placeholder={placeholder}
            />
        );
    }
}
