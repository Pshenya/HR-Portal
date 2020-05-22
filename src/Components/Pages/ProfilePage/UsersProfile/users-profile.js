import React from "react";
import './users-profile.css'
import pavlik from "../../../../assets/img/pavlik.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import { MDBBtn, MDBInput, MDBIcon} from 'mdbreact';
import Button from "@material-ui/core/Button";


const UsersProfile = ({profile}) => {
    return (
        <div className="profile-content">
            <div className="profile-header">
                <h1>Профиль</h1>
            </div>
            <div className="profile-block">
                <div className="users-profile-blockHeader">
                    <h3>Основная информация</h3>
                </div>
                <div className="users-profile">
                    <div className="profile-img">
                        <div className="img-content">
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
                    <div className="users-profile-content">
                        <div className="users-profile-name">
                            <h3>{profile.name} {profile.lastName}</h3>
                        </div>
                        <div className="users-profile-info">
                            <div className="users-profile-common">
                                <p className="users-profile-field">Компания: <span>{profile.profile.companyName}</span>
                                </p>
                                <p className="users-profile-field">Опыт
                                    работы: <span>{profile.profile.workExperience} года</span></p>
                                <p className="users-profile-field">Текущая ЗП ($): <span>{profile.profile.salary}</span>
                                </p>
                                <p className="users-profile-field">Контактный
                                    телефон: <span>+{profile.profile.phone}</span></p>
                                <p className="users-profile-field">Эл. почта: <span>{profile.email}</span></p>
                            </div>
                            <div className="users-profile-socials">
                                <p className="users-profile-field">Facebook:</p>
                                <p className="users-profile-field">LinkedIn:</p>
                                <p className="users-profile-field">GitHub:</p>
                                <p className="users-profile-field">Telegram:</p>
                            </div>
                        </div>
                        <div className="users-profile-about">
                            <p>О себе: <br/><span>Меня зовут аоаовллаоа оаваолуолвтсл. аршоаушовшвтмш тООо оашуошьшьшсуштмштмшвоаш. аоушаоушшатмсльсшошпмо. мткошоа. Меня зовут аоаовллаоа оаваолуолвтсл. аршоаушовшвтмш тООо оашуошьшьшсуштмштмшвоаш. аоушаоушшатмсльсшошпмо. мткошоа</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-block">
                <div className="users-profile-blockHeader">
                    <h3>Лента отзывов</h3>
                </div>
                <div className="profile-comments-content">
                    <div className="profile-comments-header">
                        <h3>300 отзывов</h3>
                    </div>
                    <div className="profile-comments-form">
                        <form className="user-feedback-form" name="form">
                            <img src={pavlik} width={50} height={50}/>
                            <MDBInput className="profile-comment-input" type="textarea" label="Оставьте комментарий" rows="1"/>
                            <MDBBtn className="profile-comments-btn" outline color="black">
                                Отправить
                                <MDBIcon far icon="paper-plane" className="ml-1" />
                            </MDBBtn>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UsersProfile;