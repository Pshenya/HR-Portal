import React, { Component } from 'react';

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from '../../../../Actions';

import '../login.css';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { ROUTES } from "../../../../Routes/routes";
import { Form } from "react-bootstrap";

class RegistrationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
                lastName: '',
                email: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({submitted: true});
        const {user} = this.state;
        if (user.name && user.lastName && user.email && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const {registering} = this.props;
        const {user, submitted} = this.state;

        return (
            <div className="signIn-content">
                <div className="signIn-header register-header">
                    <h1 className="signIn-logo">
                        <Link to="/">LOGO</Link>
                    </h1>
                    <Link className="x-class" aria-label="back to HR's" to={ROUTES.MAIN}>
                        <FontAwesomeIcon icon={faTimesCircle} size="2x"/>
                    </Link>
                </div>
                <div className="signIn-main register-header">
                    <h1 className="signIn-title">Новый аккаунт</h1>
                    <div className="new-user">
                        <h3>У вас уже есть аккаунт? <Link to={ROUTES.LOGIN}>Войти</Link></h3>
                    </div>
                    <div className="login-content">
                        <div className="left-content">
                            <Form className="common-form mx-auto" name="form" onSubmit={this.handleSubmit}>
                                <Form.Group className={(submitted && !user.name ? ' has-error' : '')}>
                                    <Form.Label htmlFor="name">Имя</Form.Label>
                                    <Form.Control type="text" name="name" value={user.name} onChange={this.handleChange} />
                                    {submitted && !user.name &&
                                    <div className="help-block">* Это обязательное поле</div>
                                    }
                                </Form.Group>
                                <Form.Group className={(submitted && !user.lastName ? ' has-error' : '')}>
                                    <Form.Label htmlFor="name">Фамилия</Form.Label>
                                    <Form.Control type="text" name="lastName" value={user.lastName} onChange={this.handleChange} />
                                    {submitted && !user.lastName &&
                                    <div className="help-block">* Это обязательное поле</div>
                                    }
                                </Form.Group>
                                <Form.Group className={(submitted && !user.email ? ' has-error' : '')}>
                                    <Form.Label htmlFor="email">Эл. почта</Form.Label>
                                    <Form.Control type="email" className="form-control" name="email" value={user.username} onChange={this.handleChange} />
                                    {submitted && !user.email &&
                                    <div className="help-block">* Это обязательное поле</div>
                                    }
                                </Form.Group>
                                <Form.Group className={(submitted && !user.password ? ' has-error' : '')}>
                                    <Form.Label htmlFor="password">Пароль</Form.Label>
                                    <Form.Control type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                                    {submitted && !user.password &&
                                    <div className="help-block">* Это обязательное поле</div>
                                    }
                                </Form.Group>
                                <Form.Group className="btn-group">
                                    <button className="form-btn">Создать</button>
                                    {registering &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="loading" />
                                    }
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                    <div className="terms-of-use">
                        <p>Входя в аккаунт, вы соглашаетесь с <a href="/">пользовательским соглашением</a> и,
                            подтверждаете,
                            что ознакомились с <a href="/">политикой конфиденциальности</a>.</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {registering} = state.registration;
    return {registering};
};

const mapDispatchToProps = {
    register: userActions.register
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
