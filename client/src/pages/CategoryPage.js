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
    render() {
        return (
            <div>
                <Header />
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
                <Spacer h={80} />
            </div>
        );
    }
}

export default CategoryPage;
