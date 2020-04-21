import React from 'react';
import { Link, Redirect } from "react-router-dom";

import './signin-page.css';
import './forms.css';

import 'bootstrap-social';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faGoogle, faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Form from "react-bootstrap/Form";

const SignInPage = ({isLoggedIn, onLogin}) => {
    if (isLoggedIn){
        return <Redirect to="/"/>;
    }
    return (
        <div className="signIn-content">
            <div className="signIn-header">
                <h1 className="signIn-logo">
                    <Link to="/">LOGO</Link>
                </h1>
                <a className="x-class" aria-label="back to HR's" href="/">
                    <FontAwesomeIcon icon={faTimesCircle} size="2x"/>
                </a>
            </div>
            <div className="signIn-main">
                <h1 className="signIn-title">Вход</h1>
                <div className="new-user">
                    <h3>У вас ещё нет аккаунта? <a href="/">Создать</a></h3>
                </div>
                <div className="login-content">
                    <div className="left-content">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Эл. почта"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Пароль"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Запомнить меня"/>
                            </Form.Group>
                            <button onClick={onLogin} className="form-btn">Войти</button>
                        </Form>
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
                    <p>Входя в аккаунт, вы соглашаетесь с <a href="/">пользовательским соглашением</a> и, подтверждаете,
                        что ознакомились с <a href="/">политикой конфиденциальности</a>.</p>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;