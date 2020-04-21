import React, { Component } from 'react';

import '../SignInPage/signin-page.css';

import { Form, Button, Col, InputGroup } from 'react-bootstrap';
import { Formik } from "formik";
import * as yup from 'yup';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";


class RegistrationPage extends Component {
    render() {
        const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;


        const schema = yup.object({
            firstName: yup.string()
                .min(2, '* Поле должжно содержать более 2 символов')
                .max(50, '* Поле должно содержать менее 50 символов')
                .required('* Обязательное поле'),
            lastName: yup.string()
                .min(2, '* Поле должжно содержать более 2 символов')
                .max(50, '* Поле должно содержать менее 50 символов')
                .required('* Обязательное поле'),
            email: yup.string()
                .email('* Некорректный E-mail')
                .max(100, '* Поле должно содержать менее 100 символов')
                .required('* Обязательное поле'),
            phone: yup.string()
                .matches(phoneRegExp, '* Некорректный номер телефона')
                .required('* Обязательное поле'),
            city: yup.string().required(),
            terms: yup.bool().required(),
        });

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
                    <Formik
                        validationSchema={schema}
                        onSubmit={console.log}
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            phone: '',
                            city: ''
                        }}
                    >
                        {({
                              handleSubmit,
                              handleChange,
                              handleBlur,
                              values,
                              touched,
                              isValid,
                              errors,
                          }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} md="4" controlId="validationFormik01">
                                        <Form.Label>Имя</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="firstName"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={touched.firstName && errors.firstName ? "error" : null}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationFormik02">
                                        <Form.Label>Фамилия</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="lastName"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            isValid={touched.lastName && !errors.lastName}
                                        />

                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                                        <Form.Label>E-mail</Form.Label>
                                        <InputGroup>
                                            {/*<InputGroup.Prepend>*/}
                                            {/*    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>*/}
                                            {/*</InputGroup.Prepend>*/}
                                            <Form.Control
                                                type="text"
                                                placeholder="email"
                                                // aria-describedby="inputGroupPrepend"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                isInvalid={!errors.email}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.email}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} md="6" controlId="validationFormik03">
                                        <Form.Label>Телефон</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Телефон"
                                            name="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            isInvalid={!errors.phone}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.phone}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="validationFormik04">
                                        <Form.Label>Город</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Город"
                                            name="city"
                                            value={values.city}
                                            onChange={handleChange}
                                            isInvalid={!errors.city}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.city}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group>
                                    <Form.Check
                                        required
                                        name="terms"
                                        label="Agree to terms and conditions"
                                        onChange={handleChange}
                                        isInvalid={ !errors.terms}
                                        feedback={errors.terms}
                                        id="validationFormik0"
                                    />
                                </Form.Group>
                                <Button type="submit">Submit form</Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        );
    }
}

export default RegistrationPage;