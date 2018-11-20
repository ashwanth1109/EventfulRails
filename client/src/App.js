import React, { Component } from "react";
import "./Custom.css";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import DashboardPage from "./pages/DashboardPage";

import { BrowserRouter as Router, Route } from "react-router-dom";

// const Page1 = (props) => (
//     <LandingPage />
// )
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: 0
        };
    }

    updateUser = userId => {
        console.log(`Entering update user`);
        this.setState({
            userId: userId
        });
    };

    getUserId = () => this.state.userId;

    render() {
        console.log(`App is being rendered`);
        return (
            <div className="white">
                <Router>
                    <div>
                        <Route
                            exact
                            path="/"
                            render={props => (
                                <LandingPage
                                    {...props}
                                    updateUser={userId =>
                                        this.updateUser(userId)
                                    }
                                />
                            )}
                        />
                        <Route
                            path="/category"
                            render={props => (
                                <CategoryPage
                                    {...props}
                                    getUserId={() => this.getUserId()}
                                    updateUser={userId =>
                                        this.updateUser(userId)
                                    }
                                />
                            )}
                        />
                        <Route
                            path="/dashboard"
                            render={props => <DashboardPage {...props} />}
                        />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;

//===========================================
// CODE GRAVEYARD
//===========================================

// const LoginButton = withRouter(({ history }) => (
//     <div
//         className="flex1 pink bRad10 flex center cPointer"
//         onClick={() => {
//             history.push("/category");
//         }}
//     >
//         <p className="fSize15 fQuicksand fWhite">LOGIN</p>
//     </div>
// ));

// const { page } = this.state;
// if (page === 1) {
//     return <LandingPage login={() => this.login()} />;
// } else if (page === 2) {
//     return <CategoryPage />;
// }

//===========================================
// HEADER FOR PROFILE
//===========================================
// {this.state.open ? (
//     <div className="black fQuicksand fWhite flex center jBetween height300 bg">
//         <Spacer w={40} />
//         <div className="profilePic" />
//         <Spacer h={20} />
//         <h1 className="fullW">
//             User Name
//             <Spacer h={75} />
//             <div className="flex row">
//                 <div className="savedE used">REACT</div>
//                 <Spacer w={10} />
//                 <div className="savedE used">UX/UI</div>
//                 <Spacer w={10} />
//                 <div className="savedE unused" />
//                 <Spacer w={10} />
//                 <div className="savedE unused" />
//             </div>
//         </h1>
//     </div>
// ) : (
//     ""
// )}
// <nav className="fQuicksand black height80 flex bg">
//     <img src={logo} alt="logo" className="height80" />
//     <Spacer h={20} />
//     <h1 className="fWhite fSize1 flex center">
//         USER
//         <Spacer w={10} />
//         {this.state.open ? (
//             <img
//                 src={pinkArrow}
//                 alt="arrow"
//                 className="height10 cPointer rotate"
//                 onClick={this.toggleModal}
//             />
//         ) : (
//             <img
//                 src={pinkArrow}
//                 alt="arrow"
//                 className="height10 cPointer"
//                 onClick={this.toggleModal}
//             />
//         )}
//     </h1>
//     <Spacer w={20} />
// </nav>

// constructor(props) {
//     super(props);
//     this.toggleModal = this.toggleModal.bind(this);
//     this.state = {
//         open: false
//     };
// }
// toggleModal() {
//     console.log("toggling profile");
//     this.setState({
//         open: !this.state.open
//     });
// }
