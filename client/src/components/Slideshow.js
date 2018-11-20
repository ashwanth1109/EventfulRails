import React, { Component } from "react";
// import Spacer from "../components/Spacer";

class Slide extends Component {
    render() {
        const {
            slidePosition,
            slideNumber,
            slideColor,
            slideZValue
        } = this.props;
        return (
            <div
                className={`abs ${slideColor} fullW fullH ${slideZValue} fQuicksand fWhite flex center transition1 fSize2`}
                style={{ left: slidePosition }}
            >
                SLIDE {slideNumber}
            </div>
        );
    }
}

const slides = [1, 2, 3, 4];
const slideColors = ["gray1", "gray2", "gray1", "gray2"];

class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevSlide: {
                position: "0px",
                color: "",
                number: 1,
                zIndex: "zIndex1"
            },
            nextSlide: {
                position: "calc(100vw - 300px)",
                color: "",
                number: 2,
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
                color: "gray1",
                number: 1,
                zIndex: "zIndex1"
            },
            nextSlide: {
                position: "calc(100vw - 300px)",
                color: "gray2",
                number: 2,
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
        setTimeout(() => {
            this.setState({
                prevSlide: {
                    position: "calc(-100vw + 300px)",
                    color: this.state.prevSlide.color,
                    number: this.state.prevSlide.number,
                    zIndex: "zIndex1"
                },
                nextSlide: {
                    position: "0px",
                    color: this.state.nextSlide.color,
                    number: this.state.nextSlide.number,
                    zIndex: "zIndex2"
                }
            });
            this.swapSlides();
        }, 3000);
    };

    swapSlides = () => {
        console.log(`slides should be swapped`);
        let newSlideArrayIndex;
        if (this.state.currentSlideArrayIndex === slides.length - 1) {
            newSlideArrayIndex = 0;
        } else {
            newSlideArrayIndex = this.state.currentSlideArrayIndex + 1;
        }
        setTimeout(() => {
            // SLIDE IS MOVING UNDERNEATH SLIDE TO SAME POSITION
            this.setState({
                prevSlide: {
                    position: "0px",
                    color: this.state.nextSlide.color,
                    number: this.state.nextSlide.number,
                    zIndex: "zIndex1"
                },
                currentSlideArrayIndex: newSlideArrayIndex
            });
        }, 1000);
        // BRING SLIDE 1 FORWARD AND MOVE SLIDE 2 BACKWARDS
        setTimeout(() => {
            this.setState({
                prevSlide: {
                    position: "0px",
                    color: this.state.prevSlide.color,
                    number: this.state.prevSlide.number,
                    zIndex: "zIndex2"
                },
                nextSlide: {
                    position: "0px",
                    color: this.state.nextSlide.color,
                    number: this.state.nextSlide.number,
                    zIndex: "zIndex1"
                }
            });
        }, 2000);
        // MOVE SLIDE 2 OUT OF THE SCREEN
        setTimeout(() => {
            this.setState({
                prevSlide: {
                    position: "0px",
                    color: this.state.prevSlide.color,
                    number: this.state.prevSlide.number,
                    zIndex: "zIndex2"
                },
                nextSlide: {
                    position: "calc(100vw - 300px)",
                    color: slideColors[this.state.currentSlideArrayIndex],
                    number: slides[this.state.currentSlideArrayIndex],
                    zIndex: "zIndex1"
                }
            });
            if (this.state !== null) {
                this.transitionSlides();
            }
        }, 3000);
    };

    render() {
        const { prevSlide, nextSlide } = this.state;
        return (
            <div>
                <Slide
                    slidePosition={prevSlide.position}
                    slideColor={prevSlide.color}
                    slideNumber={prevSlide.number}
                    slideZValue={prevSlide.zIndex}
                />
                <Slide
                    slidePosition={nextSlide.position}
                    slideColor={nextSlide.color}
                    slideNumber={nextSlide.number}
                    slideZValue={nextSlide.zIndex}
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
