import React, { Component } from "react";
import "./Custom.css";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import DashboardPage from "./pages/DashboardPage";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        };
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/category" component={CategoryPage} />
                    <Route path="/dashboard" component={DashboardPage} />
                </div>
            </Router>
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
