import React, { Component } from "react";

import './profile-page.css';

import SocialDynamic from "./DynamicHelpers/social-dynamic-form";
import JobDynamic from "./DynamicHelpers/job-dynamic-form";

import { Form, Row, Col } from "react-bootstrap";

import pavlik from '../../../assets/img/pavlik.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Avatar from "react-avatar-edit";

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {
                companyName: '',
                workExperience: '',
                salary: '',
                phone: '',
                facebookLink: '',
                linkedinLink: '',
                githubLink: '',
                googleLink: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {profile} = this.state;
        this.setState({
            profile: {
                ...profile,
                [name]: value
            }
        });
    }



    render() {
        const {profile, data, socials} = this.props;
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
                            <Form name="form">
                                <Form.Group as={Row} controlId="formHorizontalName">
                                    <Form.Label column sm={2}>
                                        Имя
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" value={profile.name}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalLastName">
                                    <Form.Label column sm={2}>
                                        Фамилия
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" value={profile.lastName}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalCompany">
                                    <Form.Label htmlFor="companyName" column sm={2}>
                                        Название компании
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" value={profile.profile.companyName}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalExperience">
                                    <Form.Label column sm={2}>Опыт работы</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control as="select" value={profile.profile.workExperience} custom>
                                            <option value={0.5}> &lt;1 года</option>
                                            <option value={1}>1 год</option>
                                            <option value={2}>2 года</option>
                                            <option value={3}>3 года</option>
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
                                <Form.Group as={Row} controlId="formHorizontalSalary">
                                    <Form.Label column sm={2}>
                                        Текущая ЗП ($)
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text"/>
                                        <span className="underinput-text">Информация является анонимной, и будет использоваться нами исключительно для статистики. Это поле является необязательным для заполнения.</span>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </div>
                        <div className="profile-img">
                            <div className="img-content">
                                <p>Фото профиля</p>
                                {/*<Avatar*/}
                                {/*    width={390}*/}
                                {/*    height={295}*/}
                                {/*    onCrop={this.onCrop}*/}
                                {/*    onClose={this.onClose}*/}
                                {/*    onBeforeFileLoad={this.onBeforeFileLoad}*/}
                                {/*    src={this.state.src}*/}
                                {/*/>*/}
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
                            <Form>
                                <Form.Group as={Row} controlId="formHorizontalPhone">
                                    <Form.Label column sm={4}>
                                        Телефон (в формате <strong><i>"+код страны"</i></strong> )
                                    </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="text" value={profile.profile.phone}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Form.Label column sm={4}>
                                        Эл. почта
                                    </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="text" value={profile.email}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalSocials">
                                    <Form.Label column sm={4}>
                                        Соц. сети
                                    </Form.Label>
                                    <Col sm={8}>
                                        <div className="social-flex">
                                            {socials}
                                        </div>
                                    </Col>
                                </Form.Group>
                                {data.Facebook && (
                                    <SocialDynamic selectedSocial={data.Facebook}/>
                                )}
                                {data.LinkedIn && (
                                    <SocialDynamic selectedSocial={data.LinkedIn}/>
                                )}
                                {data.Github && (
                                    <SocialDynamic selectedSocial={data.Github}/>
                                )}
                                {data.Google && (
                                    <SocialDynamic selectedSocial={data.Google}/>
                                )}
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="profile-save-data">
                    <button className="profile-btn" type="button">Сохранить</button>
                </div>
            </div>
        )
    }
}

export default ProfilePage;