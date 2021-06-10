import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import './users-profile.css';

import Feedbacks from '../Feedbacks/feedbacks';

import pavlik from '../../../../assets/img/pavlik.jpg';

import {Link} from 'react-router-dom';
import {ROUTES} from '../../../../Routes/routes';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import RateCommentModal from '../../RateСommentModal/rate-comment-modal';

import CloseIcon from '@material-ui/icons/Close';
import {userActions} from '../../../../Actions';
import {MDBBtn} from 'mdbreact';

const UsersProfile = ({userData, myProfileData, feedbacksList, userId, authorizedUserId, approveSended, updateProfile,}) => {
	const {user} = userData;
	const [toApprove] = useState({
		...userData,
		approvedBy: [...userData.approvedBy, authorizedUserId],
	});

	const handleClose = (ev) => {
		let el = document.getElementById('approve');
		console.log(el);
		ReactDOM.findDOMNode(el).style.display = 'none';
	};

	const handleApprove = (ev) => {
		ev.preventDefault();
		updateProfile(toApprove, userId);
    };

	let approvedBy = [];
	myProfileData
		.map((el) => el.approvedBy)
        .forEach((el) => el.forEach((elem) => approvedBy.push(elem)));

    console.log(approvedBy)

	return (
		<div className="content-container">
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
								<FontAwesomeIcon
									icon={faUserCircle}
									size="10x"
									color="#2bbbad"
									alt="Profile"
									width={250}
									height={250}
								/>
								<div className="profile-rating">
									<FontAwesomeIcon icon={faStar} size="2x" style={{color: '#2bbbad'}} />
									<span>{Math.round(userData.rating * 10) / 10}</span>
								</div>
							</div>
						</div>
						<div className="users-profile-content">
							<div className="users-profile-name">
								<h3>
									{user.name} {user.lastName}
								</h3>
							</div>
							<div className="users-profile-info">
								<div className="users-profile-common">
									<p className="users-profile-field">
										Компания: <span>{userData.companyName}</span>
									</p>
									<p className="users-profile-field">
										Должность: <span>{userData.jobPosition}</span>
									</p>
									<p className="users-profile-field">
										Опыт работы: <span>{userData.workExperience} года</span>
									</p>
									<p className="users-profile-field">
										Текущая ЗП ($): <span>{userData.salary}</span>
									</p>
									<p className="users-profile-field">
										Контактный телефон: <span>+{userData.phone}</span>
									</p>
									<p className="users-profile-field">
										Эл. почта: <span>{user.email}</span>
									</p>
								</div>
								<div className="users-profile-socials">
									<p className="users-profile-field">Facebook:</p>
									<p className="users-profile-field">LinkedIn:</p>
									<p className="users-profile-field">GitHub:</p>
									<p className="users-profile-field">Telegram:</p>
								</div>
							</div>
							<div className="users-profile-about">
								<p>
									О себе: <br />
									<span>
										Меня зовут аоаовллаоа оаваолуолвтсл. аршоаушовшвтмш тООо
										оашуошьшьшсуштмштмшвоаш. аоушаоушшатмсльсшошпмо. мткошоа. Меня зовут аоаовллаоа
										оаваолуолвтсл. аршоаушовшвтмш тООо оашуошьшьшсуштмштмшвоаш.
										аоушаоушшатмсльсшошпмо. мткошоа
									</span>
								</p>
							</div>
						</div>
					</div>
					{user.role === 'HR' && (
						<div>
							{approvedBy.includes(userId) ? (
								<div className="rate-comment-container">
									<div className="rate-btn-container">
										<RateCommentModal userId={userId} />
									</div>
								</div>
							) : (
								<div className="rate-comment-container">
									<div className="rate-btn-container">
										<button className="rate-btn disabled-btn" disabled>
											Ваш акаунт ще не був підтверджений користувачем для залишення рейтингового
											відгуку
										</button>
									</div>
								</div>
							)}
						</div>
					)}
				</div>
				{user.role !== 'HR' && !userData.approvedBy.includes(authorizedUserId) && (
					<div id="approve" className="approve-btn-block">
						{!approveSended ? (
							<div>
								<div className="approve-content">
									<div>Підтвердіть, що {user.name} відгукнувся на вашу вакансію</div>
									<div className="approve-btn-close">
										<CloseIcon onClick={handleClose} />
									</div>
								</div>
								<div className="approve-btn">
									<button className="vac-btn" onClick={handleApprove}>
										Підтвердити
									</button>
								</div>
							</div>
						) : (
							<div className="approve-content done">
								<div className="done-container">
									<div className="done-icon">
										<i
											style={{color: '#2bbbad', fontSize: '75px'}}
											className="far fa-check-circle"
										></i>
									</div>
									<div style={{display: 'flex', justifyContent: 'center'}}>
										<div style={{color: '#2bbbad', fontSize: '16px'}}>Підтвреджено!</div>
									</div>
								</div>
								<div className="approve-btn-close">
									<CloseIcon onClick={handleClose} />
								</div>
							</div>
						)}
					</div>
				)}
				<Feedbacks userData={userData} userId={userId} feedbacksList={feedbacksList} />
			</div>
		</div>
	);
};

const mapStateToProps = ({users}) => {
	return {
		approveSended: users.approveSended,
	};
};

const mapDispatchToProps = {
	updateProfile: userActions.updateProfileData,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersProfile);
