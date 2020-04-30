import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { ROUTES } from './Routes/routes';
import { history } from './Components/HOC';
import { alertActions } from './Actions';
import { PrivateRoute } from './Routes'

import Header from "./Components/Header/header";
import MainContent from "./Components/Main/main-content";
import Footer from "./Components/Footer/footer";

import {
    AboutPage, CommentsPage, ProfilePage, RatingPage,
    VacanciesPage, StatsPage, SignInPage, RegistrationPage
} from './Components/Pages';

class App extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     history.listen((location, action) => {
    //         // clear alert on location change
    //         this.props.clearAlerts();
    //     });
    // }

    render() {
        const {location, alert} = this.props;
        const shouldShowHeaderAndFooter = location.pathname !== ROUTES.LOGIN && location.pathname !== ROUTES.REGISTRATION;

        return (
            <div className="app">
                {shouldShowHeaderAndFooter && <Header/>}
                {alert.message &&
                <div style={{marginBottom: 0}} className={`alert ${alert.type}`}>{alert.message}</div> }
                <Switch>
                    <PrivateRoute exact path={ROUTES.MAIN} component={MainContent}/>
                    <Route path={ROUTES.COMMENTS} component={CommentsPage}/>
                    <Route path={ROUTES.RATINGS} component={RatingPage}/>
                    <Route path={ROUTES.VACANCIES} component={VacanciesPage}/>
                    <Route path={ROUTES.STATS} component={StatsPage}/>
                    <Route path={ROUTES.ABOUT} component={AboutPage}/>
                    <Route path={ROUTES.LOGIN} render={() => {
                        return <SignInPage
                        />
                    }}/>
                    <Route path={ROUTES.PROFILE} render={() => {
                        return <ProfilePage

                        />
                    }}/>
                    <Route path={ROUTES.REGISTRATION} render={() => {
                        return <RegistrationPage
                        />
                    }}/>
                    <Redirect from="*" to="/"/>
                </Switch>
                {shouldShowHeaderAndFooter && <Footer/>}
            </div>
        )
    }
}

const mapStateToProps = ({alert}) => {
    return {alert};
};

const mapDispatchToProps = {
    clearAlerts: alertActions.clear
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(App));
