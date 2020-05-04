import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { connect } from "react-redux";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from './Routes/routes';
import { history } from './Components/HOC';
import { alertActions, userActions } from './Actions';

import Header from "./Components/Header/header";
import MainContent from "./Components/Main/main-content";
import Footer from "./Components/Footer/footer";

import {
    AboutPage, CommentsPage, ProfilePageContainer, RatingPage,
    VacanciesPage, StatsPage, SignInPage, RegistrationPage
} from './Components/Pages';

class App extends Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const {alert} = this.props;
        const shouldShowHeaderAndFooter = history.location.pathname !== ROUTES.LOGIN && history.location.pathname !== ROUTES.REGISTRATION;


        return (
            <div className="app">
                <Router history={history}>
                    {shouldShowHeaderAndFooter && <Header/>}
                    {alert.message &&
                    <div style={{marginBottom: 0}} className={`alert ${alert.type}`}>{alert.message}</div>}
                    <Switch>
                        <Route exact path={ROUTES.MAIN} component={MainContent}/>
                        <Route path={ROUTES.COMMENTS} component={CommentsPage}/>
                        <Route path={ROUTES.RATINGS} component={RatingPage}/>
                        <Route path={ROUTES.VACANCIES} component={VacanciesPage}/>
                        <Route path={ROUTES.STATS} component={StatsPage}/>
                        <Route path={ROUTES.ABOUT} component={AboutPage}/>
                        <Route path={ROUTES.LOGIN} component={SignInPage}/>
                        <Route path={ROUTES.PROFILE} component={ProfilePageContainer}/>
                        <Route path={ROUTES.REGISTRATION} component={RegistrationPage}/>
                        <Redirect from="*" to="/"/>
                    </Switch>
                    {shouldShowHeaderAndFooter && <Footer/>}
                </Router>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        alert: state.alert
    }
};

const mapDispatchToProps = {
    clearAlerts: alertActions.clear,
    logout: userActions.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
