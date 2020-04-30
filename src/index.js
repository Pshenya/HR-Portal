import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';

import App from './App';
import AuthService from "./Services/auth-service";
import { AuthServiceProvider } from "./Services/auth-service-context";
import {store} from './store';

const authService = new AuthService();

ReactDOM.render(
    <Provider store={store}>
        <AuthServiceProvider value={authService}>
            <Router>
                <App/>
            </Router>
        </AuthServiceProvider>
    </Provider>,
    document.getElementById('root')
);
