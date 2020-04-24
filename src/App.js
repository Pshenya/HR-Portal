import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ROUTES } from './Components/Routes/routes';

import Header from "./Components/Header/header";
import MainContent from "./Components/Main/main-content";
import Footer from "./Components/Footer/footer";

import {
    AboutPage, CommentsPage, ProfilePage, RatingPage,
    VacanciesPage, StatsPage, SignInPage, RegistrationPage
} from './Components/Pages/exports';

class App extends Component {

    state = {
        isLoggedIn: false,
        isRegistered: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };

    onRegister = () => {
        setTimeout(() => {
            this.setState({
                isRegistered: true
            })
        }, 500)
    };

    render() {
        const {location} = this.props;
        const {isLoggedIn, isRegistered} = this.state;
        const shouldShowHeaderAndFooter = location.pathname !== ROUTES.LOGIN && location.pathname !== ROUTES.REGISTRATION;

        return (
            <div className="app">
                {shouldShowHeaderAndFooter && <Header isLoggedIn={isLoggedIn}/>}
                <Switch>
                    <Route exact path={ROUTES.MAIN} component={MainContent}/>
                    <Route path={ROUTES.COMMENTS} component={CommentsPage}/>
                    <Route path={ROUTES.RATINGS} component={RatingPage}/>
                    <Route path={ROUTES.VACANCIES} component={VacanciesPage}/>
                    <Route path={ROUTES.STATS} component={StatsPage}/>
                    <Route path={ROUTES.ABOUT} component={AboutPage}/>
                    <Route path={ROUTES.LOGIN} render={() => {
                        return <SignInPage
                            isLoggedIn={isLoggedIn}
                            onLogin={this.onLogin}/>
                    }}/>
                    <Route path={ROUTES.PROFILE} render={() => {
                        return <ProfilePage
                            isLoggedIn={isLoggedIn}
                        />
                    }}/>
                    <Route path={ROUTES.REGISTRATION} render={() => {
                        return <RegistrationPage
                            isRegistered={isRegistered}
                            onRegister={this.onRegister}
                        />
                    }}/>
                </Switch>
                {shouldShowHeaderAndFooter && <Footer/>}
            </div>
        )
    }
}

export default withRouter(App);
