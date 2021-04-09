import React, {Component} from "react";

import './feedbacks.css';

import {connect} from 'react-redux';
import {formatDate, formatCounts} from '../../../Helpers';
import {assetsActions} from "../../../../Actions";

import pavlik from "../../../../assets/img/pavlik.jpg";
import {MDBBtn, MDBIcon, MDBInput} from "mdbreact";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../Routes/routes";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class Feedbacks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.userId,
            from: localStorage.getItem('userId'),
            text: '',
            feedbackSended: this.props.feedbackSended
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {value} = e.target;
        this.setState({text: value});
    }

    handleSubmit(e) {
        const {userId, from, text} = this.state;
        if (userId && from && text) {
            this.props.sendFeedback(userId,from,text);
        }
    }

    render() {
        const {feedbacksList, userData, loggedIn} = this.props;
        const {text} = this.state;

        return (
            <div className="profile-block">
                <div className="users-profile-blockHeader">
                    <h3>Лента отзывов</h3>
                </div>
                <div className="profile-comments-content">
                    {!loggedIn &&
                    <div className="feedback-not-authorized">
                        <Link to={ROUTES.LOGIN}>Авторизуйтесь</Link> , что бы оставить отзыв.
                    </div>
                    }
                    <div className="profile-comments-header">
                        <h3>{feedbacksList.length} {formatCounts(feedbacksList.length, ['отзыв', 'отзыва','отзывов'])}</h3>
                    </div>
                </div>
                <div>
                    {feedbacksList.map(feedback => {
                        const isOwnerFeedback = (userData.user.name === feedback.from.userData.name) && (userData.user.lastName === feedback.from.userData.lastName);
                        return <div key={feedback._id} className="profile-comments-content">
                            <div className="profile-feedback-block">
                                <MDBIcon icon="user-circle" size="3x"/>
                                <div className="feedback-content">
                                    <div className="d-flex feedback-info">
                                    <span
                                        className={(isOwnerFeedback ? 'owner-feedback' : 'feedback-user')}>{feedback.from.userData.name} {feedback.from.userData.lastName}</span>
                                        <span className="feedback-date">{formatDate(feedback.createdAt)}</span>
                                    </div>
                                    <span style={{marginTop: '5px'}}>{feedback.text}</span>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({auth, assets}) => {
    return {
        loggedIn: auth.loggedIn,
        feedbackSended: assets.feedbackSended
    }
};

const mapDispatchToProps = {
    sendFeedback: assetsActions.sendFeedback
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedbacks);
