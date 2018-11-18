import React, { Component } from "react";
import "../Custom.css";
import "../animations.css";
import "../profile.css";
import logo from "../assets/eventfulCircleLogo.png";
import pinkArrow from "../assets/pinkArrow.png";
import gaming from "../assets/gamingCategory.png";
import coding from "../assets/codingCategory.png";
import photography from "../assets/photographyCategory.png";
import filming from "../assets/filmingCategory.png";
import cooking from "../assets/cookingCategory.png";
import books from "../assets/booksCategory.png";
import Spacer from "../components/Spacer";

import { Route } from "react-router-dom";

class CategoryPage extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            open: false
        };
    }
    toggleModal() {
        console.log("toggling profile");
        this.setState({
            open: !this.state.open
        });
    }
    render() {
        return (
            <div>
                {this.state.open ? (
                    <div className="black fQuicksand fWhite flex center jBetween height300 bg">
                        <Spacer w={40} />
                        <div className="profilePic" />
                        <Spacer h={20} />
                        <h1 className="fullW">
                            User Name
                            <Spacer h={75} />
                            <div className="flex row">
                                <div className="savedE used">REACT</div>
                                <Spacer w={10} />
                                <div className="savedE used">UX/UI</div>
                                <Spacer w={10} />
                                <div className="savedE unused" />
                                <Spacer w={10} />
                                <div className="savedE unused" />
                            </div>
                        </h1>
                    </div>
                ) : (
                    ""
                )}
                <nav className="fQuicksand black height80 flex bg">
                    <img src={logo} alt="logo" className="height80" />
                    <Spacer h={20} />
                    <h1 className="fWhite fSize1 flex center">
                        USER
                        <Spacer w={10} />
                        {this.state.open ? (
                            <img
                                src={pinkArrow}
                                alt="arrow"
                                className="height10 cPointer rotate"
                                onClick={this.toggleModal}
                            />
                        ) : (
                            <img
                                src={pinkArrow}
                                alt="arrow"
                                className="height10 cPointer"
                                onClick={this.toggleModal}
                            />
                        )}
                    </h1>
                    <Spacer w={20} />
                </nav>
                <Spacer h={20} />
                <div className="flex row wrap center screenW">
                    {/* This is just placeholder divs until we populate the data properly */}
                    <div>
                        <div className="fQuicksand fade fade:hover width400 height245 flex center abs fWhite bRad10 cPointer">
                            CODING
                        </div>
                        <img
                            src={coding}
                            alt="coding"
                            className="width400 bRad10"
                        />
                    </div>
                    <Spacer w={10} />
                    <div>
                        <Route
                            render={({ history }) => (
                                <div>
                                    <div
                                        className="fQuicksand fade fade:hover width400 height245 flex center abs fWhite bRad10 cPointer"
                                        onClick={() => {
                                            history.push("/dashboard");
                                        }}
                                    >
                                        GAMING
                                    </div>
                                    <img
                                        src={gaming}
                                        alt="gaming"
                                        className="width400 bRad10"
                                    />
                                </div>
                            )}
                        />
                    </div>
                    <Spacer w={10} />
                    <div>
                        <div className="fQuicksand fade fade:hover width400 height245 flex center abs fWhite bRad10 cPointer">
                            PHOTOGRAPHY
                        </div>
                        <img
                            src={photography}
                            alt="photography"
                            className="width400 bRad10"
                        />
                    </div>
                    <Spacer w={10} />
                    <div>
                        <div className="fQuicksand fade fade:hover width400 height245 flex center abs fWhite bRad10 cPointer">
                            FILMING
                        </div>
                        <img
                            src={filming}
                            alt="filming"
                            className="width400 bRad10"
                        />
                    </div>
                    <Spacer w={10} />
                    <div>
                        <div className="fQuicksand fade fade:hover width400 height245 flex center abs fWhite bRad10 cPointer">
                            BOOKS
                        </div>
                        <img
                            src={books}
                            alt="books"
                            className="width400 bRad10"
                        />
                    </div>
                    <Spacer w={10} />
                    <div>
                        <div className="fQuicksand fade fade:hover width400 height245 flex center abs fWhite bRad10 cPointer">
                            COOKING
                        </div>
                        <img
                            src={cooking}
                            alt="cooking"
                            className="width400 bRad10"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryPage;
