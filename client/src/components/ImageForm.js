import React, { Component } from "react";
import Spacer from "./Spacer";

export default class ImageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageurl: "Enter your image url here"
        };
    }
    componentDidMount() {
        const { imageurl } = this.props;
        console.log(`imageurl inside lifecycle method is ${imageurl}`);
        if (imageurl) {
            this.setState({
                imageurl: imageurl
            });
        }
    }

    handleUrlChange = () => {
        this.setState({
            imageurl: this.refs.imageurl.value
        });
    };

    render() {
        console.log(`Image URL inside imageform is ${this.props.imageurl}`);
        return (
            <div className="abs fullH fullW flex center blackO70">
                <div className="width600 height200 bg flex center">
                    <form
                        className="flex column"
                        onSubmit={e =>
                            this.props.updateImageForUser(
                                e,
                                this.refs.imageurl.value
                            )
                        }
                    >
                        <input
                            type="text"
                            className=" width500 height40 white pad10 fQuicksand fSize2 fPink bPinkFocus bRad10"
                            ref="imageurl"
                            value={this.state.imageurl}
                            onChange={() => this.handleUrlChange()}
                        />
                        <Spacer h={20} />
                        <input
                            type="submit"
                            className=" width500 height40 fQuicksand fSize2 pink fWhite mAuto fWeight500"
                        />
                    </form>
                </div>
            </div>
        );
    }
}
