import React from 'react';

import '../login.css';

import validationSchema from "../forms-validation";

import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';

import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { ROUTES } from "../../../Routes/routes";
import { faFacebook, faGithub, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const RegistrationPage = ({isRegistered, onRegister}) => {
    if (isRegistered) {
        return <Redirect to={ROUTES.LOGIN}/>
    }
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
                        <Formik
                            initialValues={{email: "",password: "", passwordConfirmation: ""}}
                            validationSchema={validationSchema}
                            onSubmit={(values, {setSubmitting, resetForm}) => {
                                // When button submits form and form is in the process of submitting, submit button is disabled
                                setSubmitting(true);

                                // Simulate submitting to database, shows us values submitted, resets form
                                setTimeout(() => {
                                    alert("Вы успешно зарегестрировались");
                                    resetForm();
                                    setSubmitting(false);
                                }, 200);
                            }}
                        >
                            {/* Callback function containing Formik state and helpers that handle common form actions */}
                            {({
                                  values,
                                  errors,
                                  touched,
                                  handleChange,
                                  handleBlur,
                                  handleSubmit,
                                  isSubmitting
                              }) => (
                                <Form className="common-form mx-auto" onSubmit={handleSubmit}>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Эл. почта:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            className={touched.email && errors.email ? "error" : null}
                                        />
                                        {touched.email && errors.email ? (
                                            <div className="error-message">{errors.email}</div>
                                        ) : null}
                                    </Form.Group>
                                    <Form.Group controlId="formPassword">
                                        <Form.Label>Придумайте пароль:</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            className={touched.password && errors.password ? "error" : null}
                                        />
                                        {touched.password && errors.password ? (
                                            <div className="error-message">{errors.password}</div>
                                        ) : null}
                                    </Form.Group>
                                    <Form.Group controlId="formConfirmPassword">
                                        <Form.Label>Подтвердите пароль:</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="confirmPassword"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confirmPassword}
                                            className={touched.confirmPassword && errors.confirmPassword ? "error" : null}
                                        />
                                        {touched.confirmPassword && errors.confirmPassword ? (
                                            <div className="error-message">{errors.confirmPassword}</div>
                                        ) : null}
                                    </Form.Group>
                                    <Button onClick={onRegister} className="form-btn" variant="primary" type="submit"
                                            disabled={isSubmitting}>
                                        Создать
                                    </Button>
                                </Form>
                            )}
                        </Formik>
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
};

export default RegistrationPage;