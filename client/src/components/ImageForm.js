import React, { Component } from "react";
import Spacer from "./Spacer";

export default class ImageForm extends Component {
    updateImageForUser = (e) => {
        console.log(`update users image url in db`);
        e.preventDefault();
        this.props.toggleImageForm();
    };
    render() {
        return (
            <div className="abs fullH fullW flex center blackO70">
                <div className="width600 height200 bg flex center">
                    <form className="flex column" onSubmit={(e)=>this.updateImageForUser(e)}>
                        <input
                            type="text"
                            className=" width500 height40 white pad10 fQuicksand fSize2 fPink bPinkFocus bRad10"
                            placeholder="Enter your image url here"
                        />
                        <Spacer h={20} />
                        <input type="submit" className=" width500 height40 fQuicksand fSize2 pink fWhite mAuto fWeight500"/>
                    </form>
                </div>
            </div>
        );
    }
}
