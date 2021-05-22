import React, {Component} from "react";
import {connect} from 'react-redux';
import Feedbacks from "../Feedbacks/feedbacks";
import DeleteProfileModal from "./DeleteProfileModal/delete-profile-modal";

import {Col, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import SocialDynamic from "./DynamicHelpers/social-dynamic-form";
import {userActions} from "../../../../Actions";
import {MDBIcon} from "mdbreact";

class MyProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.userId,
            profile: {
                companyName: '',
                workExperience: '',
                jobPosition: '',
                salary: '',
                phone: '',
                rating: '',
                facebookLink: '',
                linkedinLink: '',
                githubLink: '',
                telegramLink: ''
            },
            modalOpen: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            profile: this.props.userData
        })
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

    handleSubmit(event) {
        const {profile, userId} = this.state;
        if (profile) {
            this.props.updateProfile(profile, userId);
        }

    }


    render() {
        const {userData, data, socials, userId, feedbacksList, loading} = this.props;
        const {profile} = this.state;
        const {user} = userData;
        const {facebookLink, linkedinLink, githubLink, telegramLink} = userData;
        const modal = this.state.modalOpen ? "" : <DeleteProfileModal/>;
        return (
            <div className="content-container">
                <div className="profile-content">
                    <Form name="form" onSubmit={this.handleSubmit}>
                        <div className="profile-header">
                            <h1>Настройка аккаунта</h1>
                            <p>Просматривайте и обновляйте данные аккаунта, профиля и др.</p>
                        </div>
                        <div className="profile-block">
                            <div className="profile-blockHeader">
                                <h3>Основная информация</h3>
                            </div>
                            <div className="profile-blockContent profile-flex">
                                <div className="profile-data">
                                    <Form.Group as={Row} controlid="formHorizontalName">
                                        <Form.Label column sm={2}>
                                            Имя
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="text" value={user.name} disabled/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlid="formHorizontalLastName">
                                        <Form.Label column sm={2}>
                                            Фамилия
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="text" value={user.lastName} disabled/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} conrolid="formHorizontalCompany">
                                        <Form.Label column sm={2}>
                                            Название компании
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control name="companyName" type="text" value={profile.companyName}
                                                          onChange={this.handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} conrolid="formHorizontalJobPosition">
                                        <Form.Label column sm={2}>
                                            Должность
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control name="jobPosition" type="text" value={profile.jobPosition}
                                                          onChange={this.handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={2}>Опыт работы</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control as="select" name="workExperience"
                                                          value={profile.workExperience}
                                                          onChange={this.handleChange} custom>
                                                <option value={'<1 года'}> &lt;1 года</option>
                                                <option value={'1 год'}>1 год</option>
                                                <option value={"2 года"}>2 года</option>
                                                <option value={"3 года"}>3 года</option>
                                                <option value={"4 года"}>4 года</option>
                                                <option value={"5 лет"}>5 лет</option>
                                                <option value={"6 лет"}>6 лет</option>
                                                <option value={"7 лет"}>7 лет</option>
                                                <option value={"8 лет"}>8 лет</option>
                                                <option value={"9 лет"}>9 лет</option>
                                                <option value={"10+ лле"}>10+ лет</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlid="formHorizontalSalary">
                                        <Form.Label column sm={2}>
                                            Текущая ЗП ($)
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control name="salary" type="text" value={profile.salary}
                                                          onChange={this.handleChange}/>
                                            <span className="underinput-text">Информация является анонимной, и будет использоваться нами исключительно для статистики. Это поле является необязательным для заполнения.</span>
                                        </Col>
                                    </Form.Group>
                                </div>
                                <div className="profile-img">
                                    <div className="img-content">
                                        <p>Фото профиля</p>
                                        <form method="post" action="api/upload" encType="multipart/form-data">
                                            <input type="file" name="wallpaper"/>
                                            <input type="submit"/>
                                        </form>
                                        {/*<Avatar*/}
                                        {/*    width={390}*/}
                                        {/*    height={295}*/}
                                        {/*    onCrop={this.onCrop}*/}
                                        {/*    onClose={this.onClose}*/}
                                        {/*    onBeforeFileLoad={this.onBeforeFileLoad}*/}
                                        {/*    src={this.state.src}*/}
                                        {/*/>*/}
                                        <FontAwesomeIcon icon={faUserCircle} size="10x" color="#2bbbad" alt="Profile"
                                                         width={250} height={250}/>
                                        <div className="profile-rating">
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                size="2x"
                                                style={{color: "#2bbbad"}}/>
                                            <span>{profile.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profile-block">
                            <div
                                className="profile-blockHeader">
                                <h3> Личные
                                    данные </h3>
                            </div>
                            <div className="profile-blockContent">
                                <div className="profile-data w-100">
                                    <Form.Group as={Row} controlid="formHorizontalPhone">
                                        <Form.Label column sm={4}>
                                            Контактный телефон (в формате <strong><i>"+код страны"</i></strong> )
                                        </Form.Label>
                                        <Col sm={8}>
                                            <Form.Control name="phone" type="text" value={profile.phone}
                                                          onChange={this.handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlid="formHorizontalEmail">
                                        <Form.Label column sm={4}>
                                            Эл. почта
                                        </Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="text" value={user.email} disabled/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlid="formHorizontalSocials">
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
                                        <SocialDynamic selectedSocial={data.Facebook} value={facebookLink}/>
                                    )}
                                    {data.LinkedIn && (
                                        <SocialDynamic selectedSocial={data.LinkedIn} value={linkedinLink}/>
                                    )}
                                    {data.Github && (
                                        <SocialDynamic selectedSocial={data.Github} value={githubLink}/>
                                    )}
                                    {data.Telegram && (
                                        <SocialDynamic selectedSocial={data.Telegram} value={telegramLink}/>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="profile-save-data">
                            <button className="profile-btn" type="submit">Сохранить</button>
                            {loading && <img
                                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                                alt="loading"/>
                            }
                            {!loading && <div>
                                <MDBIcon far icon="check-circle" size="2x"
                                         style={{margin: '10px 0 0 10px', color: 'limegreen'}}/>
                            </div>}
                        </div>
                    </Form>
                    <DeleteProfileModal userId={userId}/>
                    <Feedbacks userData={userData} userId={userId} feedbacksList={feedbacksList}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({users}) => {
    return {
        loading: users.loading,
        error: users.error
    }
};

const mapDispatchToProps = {
    updateProfile: userActions.updateProfileData,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
