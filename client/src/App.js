import React, { Component } from "react";
import "./Custom.css";
// import LandingPage from "./pages/LandingPage";
// import CategoryPage from "./pages/CategoryPage";
// import DashboardPage from "./pages/DashboardPage";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

const AuthExample = () => (
    <Router>
        <div>
            <AuthButton />
            <ul>
                <li>
                    <Link to="/public">Public Page</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
            </ul>
            <Route path="/public" component={Public} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/protected" component={Protected} />
        </div>
    </Router>
);

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const AuthButton = withRouter(({ history }) =>
    fakeAuth.isAuthenticated ? (
        <p>
            Welcome!{" "}
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/"));
                }}
            >
                Sign Out
            </button>
        </p>
    ) : (
        <p>You are not logged in</p>
    )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: "/login", state: { from: props.location } }}
                />
            )
        }
    />
);

const Public = () => <h3>Public</h3>;

const Protected = () => <h3>Protected</h3>;

class Login extends Component {
    state = {
        redirectToReferrer: false
    };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;

        if (redirectToReferrer) return <Redirect to={from} />;
        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log In</button>
            </div>
        );
    }
}

export default AuthExample;

// const App = () => (
//     <Router>
//         <div>
//             <Route exact path="/" component={LandingPage} />
//             <Route path="/about" component={CategoryPage} />
//             <Route path="/topics" component={DashboardPage} />
//         </div>
//     </Router>
// );

// const Header = () => (
//     <ul>
//         <li>
//             <Link to="/">LandingPage</Link>
//         </li>
//         <li>
//             <Link to="/about">CategoryPage</Link>
//         </li>
//         <li>
//             <Link to="/topics">DashboardPage</Link>
//         </li>
//     </ul>
// );

// export default App;
