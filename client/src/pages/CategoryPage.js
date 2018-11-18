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
import Spacer from "../components/Spacer";
import CategoryDiv from "../components/CategoryDiv";
import Header from "../components/Header";

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
                <Header />
                <Spacer h={100} />
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
                    <CategoryDiv image={coding} categoryName="coding" />
                    <CategoryDiv image={gaming} categoryName="gaming" />
                    <CategoryDiv
                        image={photography}
                        categoryName="photography"
                    />
                    <CategoryDiv image={filming} categoryName="filming" />
                    <CategoryDiv image={books} categoryName="books" />
                    <CategoryDiv image={cooking} categoryName="cooking" />
                </div>
            </div>
        );
    }
}

export default CategoryPage;
