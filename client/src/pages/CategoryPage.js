import React, { Component } from "react";
import "../App.css";
import "../animations.css";
import "../profile.css";
import gaming from "../assets/gamingCategory.png";
import coding from "../assets/codingCategory.png";
import photography from "../assets/photographyCategory.png";
import filming from "../assets/filmingCategory.png";
import cooking from "../assets/cookingCategory.png";
import books from "../assets/booksCategory.png";
import sports from "../assets/sportsCategory.png";
import health from "../assets/healthCategory.png";
import fashion from "../assets/fashionCategory.png";
import Spacer from "../components/Spacer";
import CategoryDiv from "../components/CategoryDiv";
import Header from "../components/Header";

class CategoryPage extends Component {
    render() {
        return (
            <div>
                <Header
                    userId={this.props.getUserId()}
                    updateUser={userId => this.props.updateUser(userId)}
                    history={this.props.history}
                />
                <Spacer h={150} />
                <div className="container">
                    {/* This is just placeholder divs until we populate the data properly */}
                    <CategoryDiv image={coding} categoryName="coding" />
                    <CategoryDiv image={gaming} categoryName="gaming" />
                    <CategoryDiv
                        image={photography}
                        categoryName="photography"
                    />
                    <CategoryDiv image={filming} categoryName="filming" />
                    <CategoryDiv image={books} categoryName="books" />
                    <CategoryDiv image={cooking} categoryName="cooking" />
                    <CategoryDiv image={sports} categoryName="sports" />
                    <CategoryDiv image={health} categoryName="health" />
                    <CategoryDiv image={fashion} categoryName="fashion" />
                </div>
                <Spacer h={80} />
            </div>
        );
    }
}

export default CategoryPage;
