import React, { Component } from "react";
import "../App.css";
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
import CategoryDiv from "../components/CategoryDiv";
import Header from "../components/Header";

class CategoryPage extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            open: false,
            headerExpanded: false
        };
    }
    toggleModal() {
        console.log("toggling profile");
        this.setState({
            open: !this.state.open
        });
    }
    render() {
        let hover = false;
        const { headerExpanded } = this.state;
        if (!headerExpanded) {
            hover = true;
        }
        return (
            <div>
                <Header
                    headerState={state => {
                        this.setState({ headerExpanded: state });
                    }}
                />
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
                <div className="container">
                    {/* This is just placeholder divs until we populate the data properly */}
                    <CategoryDiv
                        hover={hover}
                        image={coding}
                        categoryName="coding"
                    />
                    <CategoryDiv
                        hover={hover}
                        image={gaming}
                        categoryName="gaming"
                    />
                    <CategoryDiv
                        hover={hover}
                        image={photography}
                        categoryName="photography"
                    />
                    <CategoryDiv
                        hover={hover}
                        image={filming}
                        categoryName="filming"
                    />
                    <CategoryDiv
                        hover={hover}
                        image={books}
                        categoryName="books"
                    />
                    <CategoryDiv
                        hover={hover}
                        image={cooking}
                        categoryName="cooking"
                    />
                </div>
            </div>
        );
    }
}

export default CategoryPage;
