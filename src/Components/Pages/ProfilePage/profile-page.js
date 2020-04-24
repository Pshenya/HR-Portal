import React, { Component, useState } from "react";

import SocialDynamic from "./social-dynamic-form";
import JobDynamic from "./job-dynamic-form";

import { Form, Row, Col, Button } from "react-bootstrap";
import './profile-page.css';

import pavlik from '../../../assets/img/pavlik.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faGooglePlusSquare, faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import { Redirect } from "react-router-dom";
import { ROUTES } from "../../Routes/routes";

export default class ProfilePage extends Component {
    state = {
        showSocial: false,
        addJob: false
    };

    onSocial = () => {
        this.setState(prevState => ({
            showSocial: !prevState.showSocial
        }))
    };

    onAddJob = () => {
        this.setState({
            addJob: true
        })
    };

    render() {
        // const {isLoggedIn} = this.props;
        // if (isLoggedIn) {
        return (
            <div className="profile-content">
                <div className="profile-header">
                    <h1>Настройка аккаунта</h1>
                    <p>Просматривайте и обновляйте данные аккаунта, профиля и др.
                    </p>
                </div>
                <div className="profile-block">
                    <div className="profile-blockHeader">
                        <h3>Основная информация</h3>
                    </div>
                    <div className="profile-blockContent profile-flex">
                        <div className="profile-data">
                            <Form.Group as={Row} controlId="formHorizontalName">
                                <Form.Label column sm={2}>
                                    Имя
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalLastName">
                                <Form.Label column sm={2}>
                                    Фамилия
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalCompany">
                                <Form.Label column sm={2}>
                                    Название компании
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalExperience">
                                <Form.Label column sm={2}>Опыт работы</Form.Label>
                                <Col sm={10}>
                                    <Form.Control as="select" custom>
                                        <option> &lt;1 года</option>
                                        <option>1 год</option>
                                        <option>2 года</option>
                                        <option>3 года</option>
                                        <option>4 года</option>
                                        <option>5 лет</option>
                                        <option>6 лет</option>
                                        <option>7 лет</option>
                                        <option>8 лет</option>
                                        <option>9 лет</option>
                                        <option>10+ лет</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalCompany">
                                <Form.Label column sm={2}>
                                    Текущая ЗП ($)
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text"/>
                                    <span className="underinput-text">Информация является анонимной, и будет использоваться нами исключительно для статистики. Это поле является необязательным для заполнения.</span>
                                </Col>
                            </Form.Group>
                        </div>
                        <div className="profile-img">
                            <div className="img-content">
                                <p>Фото профиля</p>
                                <img src={pavlik} width={250} height={250}/>
                                <div className="profile-rating">
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        size="2x"
                                        style={{color: "#48478A"}}/>
                                    <span>9.5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-block">
                    <div className="profile-blockHeader">
                        <h3>Личные данные</h3>
                    </div>
                    <div className="profile-blockContent">
                        <div className="profile-data w-100">
                            <Form.Group as={Row} controlId="formHorizontalName">
                                <Form.Label column sm={4}>
                                    Телефон (в формате <strong><i>"+код страны"</i></strong> )
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control type="text"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalLastName">
                                <Form.Label column sm={4}>
                                    Эл. почта
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control type="text"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalCompany">
                                <Form.Label column sm={4}>
                                    Соц. сети
                                </Form.Label>
                                <Col sm={8}>
                                    <div className="social-flex">
                                        <div className="social-square">
                                            <FontAwesomeIcon icon={faFacebookSquare}
                                                             size="3x"
                                                             style={{color: "#4267B2", cursor: "pointer"}}
                                                             onClick={this.onSocial}/>
                                        </div>
                                        <div className="social-square">
                                            <FontAwesomeIcon icon={faLinkedin}
                                                             size="3x"
                                                             style={{color: "#0e76a8", cursor: "pointer"}}
                                                             onClick={this.onSocial}/>
                                        </div>
                                        <div className="social-square">
                                            <FontAwesomeIcon icon={faGithubSquare}
                                                             size="3x"
                                                             style={{color: "#24292e", cursor: "pointer"}}
                                                             onClick={this.onSocial}/>
                                        </div>
                                        <div className="social-square">
                                            <FontAwesomeIcon icon={faGooglePlusSquare}
                                                             size="3x"
                                                             style={{color: "#DB4437", cursor: "pointer"}}
                                                             onClick={this.onSocial}/>
                                        </div>
                                    </div>
                                </Col>
                            </Form.Group>
                            {this.state.showSocial ? <SocialDynamic/> : null}
                        </div>
                    </div>
                </div>
                <div className="profile-block">
                    <div className="profile-blockHeader">
                        <h3>Места работы</h3>
                    </div>
                    <div className="profile-blockContent">
                        <div className="profile-data w-100">
                            {this.state.addJob ? <JobDynamic/> : null}
                            <button className="add-job-btn"
                                    type="button"
                                    onClick={this.onAddJob}>Добавить</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    //     return <Redirect to={ROUTES.LOGIN}/>
    // }
}


