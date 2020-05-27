import React from "react";

import './users-profile.css'

import Feedbacks from "../Feedbacks/feedbacks";

import pavlik from "../../../../assets/img/pavlik.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const UsersProfile = ({userData, feedbacksList, userId}) => {
    const {user} = userData;
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
                                <span>{userData.rating}</span>
                            </div>
                        </div>
                    </div>
                    <div className="users-profile-content">
                        <div className="users-profile-name">
                            <h3>{user.name} {user.lastName}</h3>
                        </div>
                        <div className="users-profile-info">
                            <div className="users-profile-common">
                                <p className="users-profile-field">Компания: <span>{userData.companyName}</span>
                                </p>
                                <p className="users-profile-field">Опыт
                                    работы: <span>{userData.workExperience} года</span></p>
                                <p className="users-profile-field">Текущая ЗП ($): <span>{userData.salary}</span>
                                </p>
                                <p className="users-profile-field">Контактный
                                    телефон: <span>+{userData.phone}</span></p>
                                <p className="users-profile-field">Эл. почта: <span>{user.email}</span></p>
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
            <Feedbacks userData={userData} userId={userId} feedbacksList={feedbacksList}/>
        </div>
    )
};

export default UsersProfile;