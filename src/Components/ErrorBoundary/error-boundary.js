import React, { Component } from "react";
import ErrorIndicator from "../ErrorIndicator/error-indicator";

export default class ErrorBoundary extends Component {

    // Початвковий стан компоненту
    state = {
        hasError: false
    };

    // Метод, який відловлює помилку, та змінює стан компоненту
    componentDidCatch() {
        this.setState({ hasError: true });
    }

    // Рендер помилки, якщо вона існує
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        return this.props.children;
    }
}