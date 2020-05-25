import React from "react";
import pavlik from "../../../../assets/img/pavlik.jpg";
import {MDBBtn, MDBIcon, MDBInput} from "mdbreact";
import {formatDate} from '../../../Helpers/formatDate';

const Feedbacks = ({feedbacksList}) => {
    return (
        <div className="profile-block">
            <div className="users-profile-blockHeader">
                <h3>Лента отзывов</h3>
            </div>
            <div className="profile-comments-content">
                <div className="profile-comments-header">
                    <h3>{feedbacksList.length} отзывов</h3>
                </div>
                <div className="profile-comments-form">
                    <form className="user-feedback-form" name="form">
                        <img src={pavlik} width={50} height={50}/>
                        <MDBInput className="profile-comment-input" type="textarea" label="Оставьте комментарий"
                                  rows="1"/>
                        <MDBBtn className="profile-comments-btn" outline color="black">
                            Отправить
                            <MDBIcon far icon="paper-plane" className="ml-1"/>
                        </MDBBtn>
                    </form>
                </div>
            </div>
            <div>
                {feedbacksList.map(feedback => {
                    return <div key={feedback._id} className="profile-comments-content">
                        <div className="profile-feedback-block">
                            <MDBIcon icon="user-circle" size="3x"/>
                            <div className="feedback-content">
                                <span>{formatDate(feedback.createdAt)}</span>
                                <span>{feedback.text}</span>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
};

export default Feedbacks;
