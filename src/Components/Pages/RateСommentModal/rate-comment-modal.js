import React, {Component} from 'react';
import {connect} from "react-redux";
import {MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBInput} from 'mdbreact';
import {userActions} from "../../../Actions/user-actions";

import './rate-comment-modal.css';
import '../../Pages/ProfilePage/UsersProfile/users-profile.css'
import '../ProfilePage/Feedbacks/feedbacks.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../Routes/routes";
import {assetsActions} from "../../../Actions";

import { Rating } from '@material-ui/lab';


class RateCommentModal extends Component{
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            userId: this.props.userId,
            from: localStorage.getItem('userId'),
            text: '',
            rate: null,
            feedbackSended: this.props.feedbackSended
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleTextChange(e) {
        const {value} = e.target;
        this.setState({text: value});
    }

    handleRateChange(e){
        const {value} = e.target;
        this.setState({rate: value});
    }

    handleSubmit(e) {
        const {userId, from, text, rate} = this.state;
        if (userId && from && text && rate) {
            this.props.sendFeedback(userId, from, text, rate);
            this.toggle();
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    render() {
        const {loggedIn} = this.props;
        const {text, rate} = this.state;

        console.log(this.state)

        return (
            <div className="profile-save-data">
                <button className="rate-btn" onClick={this.toggle}>Рейтинговий відгук</button>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>Рейтинговий відгук</MDBModalHeader>
                    <MDBModalBody>
                        {!loggedIn &&
                        <div className="feedback-not-authorized">
                            <Link to={ROUTES.LOGIN}>Авторизуйтесь</Link> , что бы оставить отзыв.
                        </div>
                        }
                        {loggedIn && <div className="profile-comments-form">
                            <form className="rate-comment-form" name="form" onSubmit={this.handleSubmit}>
                                <div className="d-flex">
                                    <FontAwesomeIcon icon={faUserCircle} size="3x" color="#2bbbad" style={{marginTop: '20px'}} alt="Profile"/>
                                    <MDBInput className="rate-comment-input" name="text" value={text} type="textarea"
                                              label="Коментар"
                                              rows="4" onChange={this.handleTextChange}/>
                                </div>
                                <div className="d-flex">
                                    <label className="rate-label">Оцінка:</label>
                                    <Rating name="hover-feedback"precision={0.5} value={rate} max={10}
                                            onChange={this.handleRateChange} size="large"
                                    />
                                </div>
                                <div className="rate-span-container">
                                    <div className={"rate-span"}>
                                        {rate !== null && <span >{rate}</span>}
                                    </div>
                                </div>
                            </form>
                        </div>
                        }
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn className="modal-send-btn" onClick={this.handleSubmit}>Удалить</MDBBtn>
                        <MDBBtn className="modal-close-btn" onClick={this.toggle}>Закрыть</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        )
    }
};

const mapStateToProps = ({auth, assets}) => {
    return {
        loggedIn: auth.loggedIn,
        feedbackSended: assets.feedbackSended
    }
};

const mapDispatchToProps = {
    sendFeedback: assetsActions.sendFeedback
};

export default connect(mapStateToProps, mapDispatchToProps)(RateCommentModal);
