import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from './store';

import './index.css';

import App from './App';
import ErrorBoundary from "./Components/ErrorBoundary/error-boundary";

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
