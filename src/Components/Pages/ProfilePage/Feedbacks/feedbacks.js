import React, {Component} from "react";

import './feedbacks.css';

import {connect} from 'react-redux';
import pavlik from "../../../../assets/img/pavlik.jpg";
import {MDBBtn, MDBIcon, MDBInput} from "mdbreact";
import {formatDate} from '../../../Helpers/formatDate';
import {assetsActions} from "../../../../Actions";

class Feedbacks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.userId,
            from: localStorage.getItem('userId'),
            text: '',
            sended: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {value} = e.target;
        this.setState({text: value});
    }

    handleSubmit(e) {
        this.setState({submitted: true});
        const {userId, from, text} = this.state;
        if (userId && from && text) {
            this.props.sendFeedback(userId,from,text);
        }
    }

    render() {
        const {feedbacksList} = this.props;
        const {text} = this.state;
        function num2str(n, text_forms) {
            n = Math.abs(n) % 100; var n1 = n % 10;
            if (n > 10 && n < 20) { return text_forms[2]; }
            if (n1 > 1 && n1 < 5) { return text_forms[1]; }
            if (n1 == 1) { return text_forms[0]; }
            return text_forms[2];
        }
        return (
            <div className="profile-block">
                <div className="users-profile-blockHeader">
                    <h3>Лента отзывов</h3>
                </div>
                <div className="profile-comments-content">
                    <div className="profile-comments-header">
                        <h3>{feedbacksList.length} {num2str(feedbacksList.length, ['отзыв', 'отзыва','отзывов'])}</h3>
                    </div>
                    <div className="profile-comments-form">
                        <form className="user-feedback-form" name="form" onSubmit={this.handleSubmit}>
                            <img src={pavlik} width={50} height={50}/>
                            <MDBInput className="profile-comment-input" name="text" value={text} type="textarea" label="Оставьте отзыв"
                                      rows="1" onChange={this.handleChange}/>
                            <MDBBtn className="profile-comments-btn" outline color="black" type="submit">
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
                                    <div className="d-flex feedback-info">
                                    <span
                                        className="feedback-user">{feedback.from.userData.name} {feedback.from.userData.lastName}</span>
                                        <span className="feedback-date">{formatDate(feedback.createdAt)}</span>
                                    </div>
                                    <span>{feedback.text}</span>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({assets}) => {
    return {
        postedMsg: assets.postedMsg
    }
};

const mapDispatchToProps = {
    sendFeedback: assetsActions.sendFeedback
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedbacks);
