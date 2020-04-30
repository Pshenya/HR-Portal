import React, { Component } from 'react';

import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { userActions } from '../../../../Actions';

import '../login.css';

import validationSchema from "../forms-validation";

import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { ROUTES } from "../../../../Routes/routes";
import { faFacebook, faGithub, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class RegistrationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
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
        if (user.name && user.email && user.password) {
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
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className={'form-group' + (submitted && !user.name ? ' has-error' : '')}>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" name="name" value={user.name} onChange={this.handleChange} />
                                    {submitted && !user.name &&
                                    <div className="help-block">First Name is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                                    {submitted && !user.email &&
                                    <div className="help-block">Username is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                                    {submitted && !user.password &&
                                    <div className="help-block">Password is required</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">Register</button>
                                    {registering}
                                    }
                                    <Link to="/login" className="btn btn-link">Cancel</Link>
                                </div>
                            </form>
                            {/*<Formik*/}
                            {/*    initialValues={{name: "", email: "", password: ""}}*/}
                            {/*    validationSchema={validationSchema}*/}
                            {/*    onSubmit={values => {*/}
                            {/*        debugger*/}
                            {/*        this.props.register(values);*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    {({*/}
                            {/*          values,*/}
                            {/*          errors,*/}
                            {/*          touched,*/}
                            {/*          handleChange,*/}
                            {/*          handleBlur,*/}
                            {/*          handleSubmit,*/}
                            {/*          isSubmitting*/}
                            {/*      }) => (*/}
                            {/*        <Form className="common-form mx-auto" onSubmit={handleSubmit}>*/}
                            {/*            <Form.Group controlId="formConfirmPassword">*/}
                            {/*                <Form.Label>Имя:</Form.Label>*/}
                            {/*                <Form.Control*/}
                            {/*                    type="name"*/}
                            {/*                    name="name"*/}
                            {/*                    onChange={handleChange}*/}
                            {/*                    onBlur={handleBlur}*/}
                            {/*                    value={values.name}*/}
                            {/*                    className={touched.name && errors.name ? "error" : null}*/}
                            {/*                />*/}
                            {/*                {touched.name && errors.name ? (*/}
                            {/*                    <div className="error-message">{errors.name}</div>*/}
                            {/*                ) : null}*/}
                            {/*            </Form.Group>*/}
                            {/*            <Form.Group controlId="formEmail">*/}
                            {/*                <Form.Label>Эл. почта:</Form.Label>*/}
                            {/*                <Form.Control*/}
                            {/*                    type="text"*/}
                            {/*                    name="email"*/}
                            {/*                    onChange={handleChange}*/}
                            {/*                    onBlur={handleBlur}*/}
                            {/*                    value={values.email}*/}
                            {/*                    className={touched.email && errors.email ? "error" : null}*/}
                            {/*                />*/}
                            {/*                {touched.email && errors.email ? (*/}
                            {/*                    <div className="error-message">{errors.email}</div>*/}
                            {/*                ) : null}*/}
                            {/*            </Form.Group>*/}
                            {/*            <Form.Group controlId="formPassword">*/}
                            {/*                <Form.Label>Придумайте пароль:</Form.Label>*/}
                            {/*                <Form.Control*/}
                            {/*                    type="password"*/}
                            {/*                    name="password"*/}
                            {/*                    onChange={handleChange}*/}
                            {/*                    onBlur={handleBlur}*/}
                            {/*                    value={values.password}*/}
                            {/*                    className={touched.password && errors.password ? "error" : null}*/}
                            {/*                />*/}
                            {/*                {touched.password && errors.password ? (*/}
                            {/*                    <div className="error-message">{errors.password}</div>*/}
                            {/*                ) : null}*/}
                            {/*            </Form.Group>*/}
                            {/*            <Button className="form-btn" variant="primary" type="submit"*/}
                            {/*                    disabled={isSubmitting}>*/}
                            {/*                Создать*/}
                            {/*            </Button>*/}
                            {/*        </Form>*/}
                            {/*    )}*/}
                            {/*</Formik>*/}
                        </div>
                        <div className="divider"></div>
                        <div className="right-content">
                            <a className="btn btn-block btn-social btn-google">
                                <FontAwesomeIcon className="google-icon" icon={faGoogle}/>
                                Sign in with Google
                            </a>
                            <a className="btn btn-block btn-social btn-facebook">
                                <FontAwesomeIcon className="google-icon" icon={faFacebook}/>
                                Sign in with Facebook
                            </a>
                            <a className="btn btn-block btn-social btn-linkedin">
                                <FontAwesomeIcon className="google-icon" icon={faLinkedin}/>
                                Sign in with LinkedIn
                            </a>
                            <a className="btn btn-block btn-social btn-github">
                                <FontAwesomeIcon className="google-icon" icon={faGithub}/>
                                Sign in with Github
                            </a>
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
