import React, { Component } from "react";
import "../Custom.css";
import { Route } from "react-router-dom";
import Spacer from "../components/Spacer";

export default class CategoryDiv extends Component {
    render() {
        const { image, categoryName } = this.props;
        let divClasses = `fQuicksand fade fade:hover cPointer width400 height245 flex center abs fSize15 fWhite bRad10`;
        return (
            <div className="flex column">
                <Spacer h={3} />
                <Route
                    render={({ history }) => (
                        <div>
                            <div
                                className={divClasses}
                                onClick={() => {
                                    history.push("/dashboard");
                                }}
                            >
                                {categoryName.toUpperCase()}
                            </div>
                            <img
                                src={image}
                                alt={categoryName}
                                className="width400 bRad10"
                            />
                        </div>
                    )}
                />
                <Spacer h={3} />
            </div>
        );
    }
}
