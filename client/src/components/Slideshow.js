import React, { Component } from "react";
import Spacer from "../components/Spacer";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";

class Slide extends Component {
    render() {
        const {
            slidePosition,
            slideTitle,
            slideImage,
            slideZValue,
            slideIndex
        } = this.props;
        let dotTransparency = ["whiteO50", "whiteO50", "whiteO50", "whiteO50"];
        dotTransparency[slideIndex] = "white";
        return (
            <div>
                <div
                    className={`abs fullW fullH ${slideZValue} fQuicksand fWhite flex center transition1 fSize2`}
                    style={{ left: slidePosition }}
                >
                    <img
                        src={slideImage}
                        alt={`Slide ${slideTitle}`}
                        className="fullH fullW imgCover"
                    />
                    <div className="abs fullH fullW flex column jEnd aCenter">
                        <div className="blackO70 fullW flex center">
                            {slideTitle}
                        </div>
                        <Spacer h={40} />
                    </div>
                </div>
                <div className="abs fullH fullW flex column jEnd aCenter zIndex3">
                    <div className="fullW flex row center">
                        <div
                            className={`width10 height10 bRad5 transition1 ${
                                dotTransparency[1]
                            }`}
                        />
                        <Spacer w={10} />
                        <div
                            className={`width10 height10 bRad5 transition1 ${
                                dotTransparency[2]
                            }`}
                        />
                        <Spacer w={10} />
                        <div
                            className={`width10 height10 bRad5 transition1 ${
                                dotTransparency[3]
                            }`}
                        />
                        <Spacer w={10} />
                        <div
                            className={`width10 height10 bRad5 transition1 ${
                                dotTransparency[0]
                            }`}
                        />
                    </div>
                    <Spacer h={15} />
                </div>
            </div>
        );
    }
}

const slides = [
    "PC VS CONSOLE",
    "PLAYSTATION",
    "HOW TO ESPORTS",
    "OLD GOODIES"
];
const slideImages = [slide1, slide2, slide3, slide4];

class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevSlide: {
                position: "0px",
                image: "",
                title: "",
                zIndex: "zIndex1"
            },
            nextSlide: {
                position: "calc(100vw - 300px)",
                image: "",
                title: "",
                zIndex: "zIndex2"
            },
            currentSlideArrayIndex: 1,
            slideshow: true
        };
    }

    componentDidMount() {
        this.setState({
            prevSlide: {
                position: "0px",
                image: slideImages[0],
                title: slides[0],
                zIndex: "zIndex1"
            },
            nextSlide: {
                position: "calc(100vw - 300px)",
                image: slideImages[1],
                title: slides[1],
                zIndex: "zIndex2"
            }
        });
        this.transitionSlides();
    }

    componentWillUnmount() {
        this.setState({
            slideshow: false
        });
    }

    transitionSlides = () => {
        let newSlideArrayIndex;
        if (this.state.currentSlideArrayIndex === slides.length - 1) {
            newSlideArrayIndex = 0;
        } else {
            newSlideArrayIndex = this.state.currentSlideArrayIndex + 1;
        }
        setTimeout(() => {
            this.setState({
                prevSlide: {
                    position: "calc(-100vw + 300px)",
                    image: this.state.prevSlide.image,
                    title: this.state.prevSlide.title,
                    zIndex: "zIndex1"
                },
                nextSlide: {
                    position: "0px",
                    image: this.state.nextSlide.image,
                    title: this.state.nextSlide.title,
                    zIndex: "zIndex2"
                },
                currentSlideArrayIndex: newSlideArrayIndex
            });
            this.swapSlides();
        }, 3000);
    };

    swapSlides = () => {
        console.log(`slides should be swapped`);
        setTimeout(() => {
            // SLIDE IS MOVING UNDERNEATH SLIDE TO SAME POSITION
            this.setState({
                prevSlide: {
                    position: "0px",
                    image: this.state.nextSlide.image,
                    title: this.state.nextSlide.title,
                    zIndex: "zIndex1"
                }
            });
        }, 1000);
        // BRING SLIDE 1 FORWARD AND MOVE SLIDE 2 BACKWARDS
        setTimeout(() => {
            this.setState({
                prevSlide: {
                    position: "0px",
                    image: this.state.prevSlide.image,
                    title: this.state.prevSlide.title,
                    zIndex: "zIndex2"
                },
                nextSlide: {
                    position: "0px",
                    image: this.state.nextSlide.image,
                    title: this.state.nextSlide.title,
                    zIndex: "zIndex1"
                }
            });
        }, 2000);
        // MOVE SLIDE 2 OUT OF THE SCREEN
        setTimeout(() => {
            this.setState({
                prevSlide: {
                    position: "0px",
                    image: this.state.prevSlide.image,
                    title: this.state.prevSlide.title,
                    zIndex: "zIndex2"
                },
                nextSlide: {
                    position: "calc(100vw - 300px)",
                    image: slideImages[this.state.currentSlideArrayIndex],
                    title: slides[this.state.currentSlideArrayIndex],
                    zIndex: "zIndex1"
                }
            });
            if (this.state !== null) {
                this.transitionSlides();
            }
        }, 3000);
    };

    render() {
        const { prevSlide, nextSlide, currentSlideArrayIndex } = this.state;
        return (
            <div>
                <Slide
                    slidePosition={prevSlide.position}
                    slideImage={prevSlide.image}
                    slideTitle={prevSlide.title}
                    slideZValue={prevSlide.zIndex}
                    slideIndex={currentSlideArrayIndex}
                />
                <Slide
                    slidePosition={nextSlide.position}
                    slideImage={nextSlide.image}
                    slideTitle={nextSlide.title}
                    slideZValue={nextSlide.zIndex}
                    slideIndex={currentSlideArrayIndex}
                />
            </div>
        );
    }
}

export default Slideshow;

// nextSlide: {
//     position: "calc(100vw - 300px)",
//     color: slideColors[this.state.currentSlideArrayIndex],
//     number: slides[this.state.currentSlideArrayIndex],
//     zIndex: "zIndex1"
// }

// setTimeout(() => {
//     this.setState({
//         prevSlide: {
//             position: "0px",
//             color: this.state.nextSlide.color,
//             number: this.state.nextSlide.number,
//             zIndex: "zIndex2"
//         },
//         nextSlide: {
//             position: "calc(100vw-300px)",
//             color: "gray1",
//             number: 1,
//             zIndex: "zIndex1"
//         }
//     });
//     // MOVE SLIDE 1 BACKWARDS AND MOVE SLIDE 2 FORWARDS OFF SCREEN
//     setTimeout(() => {
//         this.setState({
//             prevSlide: {
//                 position: "0px",
//                 color: this.state.nextSlide.color,
//                 number: this.state.nextSlide.number,
//                 zIndex: "zIndex1"
//             },
//             nextSlide: {
//                 position: "0px",
//                 //prettier-ignore
//                 color: slideColors[this.state.currentSlideArrayIndex],
//                 number: slides[this.state.currentSlideArrayIndex],
//                 zIndex: "zIndex2"
//             }
//         });
//     }, 1000);
// }, 1000);
