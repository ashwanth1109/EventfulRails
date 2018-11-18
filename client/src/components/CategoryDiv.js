import React, { Component } from "react";
import "../Custom.css";
import { Route } from "react-router-dom";
import Spacer from "../components/Spacer";

export default class CategoryDiv extends Component {
    render() {
        const { image, categoryName } = this.props;
        return (
            <div className="flex column">
                <Spacer h={10} />
                <div className="flex row">
                    <Spacer w={10} />
                    <Route
                        render={({ history }) => (
                            <div>
                                <div
                                    className="fQuicksand fade fade:hover width400 height245 flex center abs fWhite bRad10 cPointer"
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
                    <Spacer w={10} />
                </div>
                <Spacer h={10} />
            </div>
        );
    }
}
