import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Header from "./Components/Header/header";
import MainContent from "./Components/Main/News/main-content";
import Footer from "./Components/Footer/footer";

import CommentsPage from "./Components/Pages/CommentsPage/comments-page";
import RatingPage from "./Components/Pages/RatingPage/rating-page";
import VacanciesPage from "./Components/Pages/VacanciesPage/vacancies-page";
import StatsPage from "./Components/Pages/StatsPage/stats-page";
import AboutPage from "./Components/Pages/AboutPage/about-page";
import CommercialPage from "./Components/Pages/CommercialPage/commercial-page";
import CoWorkingPage from "./Components/Pages/CoWorkingPage/coworking-page";
import LoginControl from "./Components/Pages/login-control";
import SignInPage from "./Components/Pages/SignInPage/signin-page";
import ProfilePage from "./Components/Pages/ProfilePage/profile-page";

class App extends Component {

    state = {
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };

    render() {
        const {isLoggedIn} = this.state;
        const shouldShow = this.props.location.pathname !== '/signin';

        return (
            <div className="app">
                {shouldShow && <Header isLoggedIn={isLoggedIn}/>}
                <Switch>
                    <Route exact path="/" component={MainContent}/>
                    <Route path="/comments/" component={CommentsPage}/>
                    <Route path="/ratings/" component={RatingPage}/>
                    <Route path="/vacancies/" component={VacanciesPage}/>
                    <Route path="/stats/" component={StatsPage}/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/commercial" component={CommercialPage}/>
                    <Route path="/co-working" component={CoWorkingPage}/>
                    }}/>
                    <Route path="/signin" render={() => {
                        return <SignInPage
                            isLoggedIn={isLoggedIn}
                            onLogin={this.onLogin}/>
                    }}/>
                    <Route path="/profile/" render={() => {
                        return <ProfilePage
                            isLoggedIn={isLoggedIn}
                        />
                    }}/>
                </Switch>
                {shouldShow && <Footer/>}
            </div>
        )
    }
}

export default withRouter(App);
