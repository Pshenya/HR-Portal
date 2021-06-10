import React, {Component} from "react";

import 'font-awesome/css/font-awesome.min.css'
import './profile-helper.css'

import {connect} from 'react-redux';
import {userActions} from "../../../../Actions";
import {MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBSelect} from "mdbreact";

class ProfileHelper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {
                userId: localStorage.getItem('userId'),
                companyName: '',
                jobPosition: '',
                workExperience: '',
                salary: '',
                phone: '',
                rating: '',
                ratingCount: '',
                facebookLink: '',
                linkedinLink: '',
                githubLink: '',
                telegramLink: '',
                approvedBy: [],
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        event.preventDefault();

        this.setState({submitted: true});
        const {profile} = this.state;
        if (profile) {
            this.props.postProfileData(profile);
            console.log('POSTED')
        }
    }

    render() {
        const {isSending} = this.props;
        const {profile, submitted} = this.state;

        return (
            <div className="profreg-content">
                <div className="profreg-header">
                    <h3>Заповніть інформацію про себе (не обов'язково)</h3>
                </div>
                <div className="profreg-block">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                                <div className="profile-helper">
                                    <form className="common-form" name="form" onSubmit={this.handleSubmit}>
                                        <div className={submitted && !profile.companyName ? ' has-error' : ''}>
                                            <MDBInput name="companyName" label="Компанія" icon="briefcase" group
                                                      type="text"
                                                      validate
                                                      error="wrong" value={profile.companyName}
                                                      onChange={this.handleChange}
                                                      success="right"/>
                                        </div>
                                        <div className={submitted && !profile.jobPosition ? ' has-error' : ''}>
                                            <MDBInput name="jobPosition" label="Посада" fab icon="user-secret" group
                                                      type="text"
                                                      validate
                                                      error="wrong" value={profile.jobPosition}
                                                      onChange={this.handleChange}
                                                      success="right"/>
                                        </div>
                                        <div className={submitted && !profile.workExperience ? ' has-error' : ''}>
                                            <MDBInput name="workExperience" label="Досвід роботи" fab icon="grav" group
                                                      type="text"
                                                      validate
                                                      error="wrong" value={profile.workExperience}
                                                      onChange={this.handleChange}
                                                      success="right"/>
                                        </div>
                                        <div className={submitted && !profile.salary ? ' has-error' : ''}>
                                            <MDBInput name="salary" label="Зарплата ($)" icon="dollar-sign" group
                                                      type="text"
                                                      validate
                                                      error="wrong" value={profile.salary} onChange={this.handleChange}
                                                      success="right"/>
                                        </div>
                                        <div className={submitted && !profile.phone ? ' has-error' : ''}>
                                            <MDBInput name="phone" label="Контактний номер" icon="phone" group
                                                      type="text" validate value={profile.phone}
                                                      onChange={this.handleChange}/>
                                        </div>
                                        <div className={submitted && !profile.facebookLink ? ' has-error' : ''}>
                                            <MDBInput name="facebookLink" label="Facebook" fab icon="facebook-f" group
                                                      type="text" validate value={profile.facebookLink}
                                                      onChange={this.handleChange}/>
                                        </div>
                                        <div className={submitted && !profile.linkedinLink ? ' has-error' : ''}>
                                            <MDBInput name="linkedinLink" label="LinkedIn" fab icon="linkedin" group
                                                      type="text" validate value={profile.linkedinLink}
                                                      onChange={this.handleChange}/>
                                        </div>
                                        <div className={submitted && !profile.githubLink ? ' has-error' : ''}>
                                            <MDBInput name="githubLink" label="GitHub" fab icon="github" group
                                                      type="text" validate value={profile.githubLink}
                                                      onChange={this.handleChange}/>
                                        </div>
                                        <div className={submitted && !profile.telegramLink ? ' has-error' : ''}>
                                            <MDBInput name="telegramLink" label="Telegram" fab icon="telegram" group
                                                      type="text" validate value={profile.telegramLink}
                                                      onChange={this.handleChange}/>
                                        </div>
                                        <div className="btn-group">
                                            <MDBBtn type="submit" className="form-btn" color="0">Зареєструватися</MDBBtn>
                                            {isSending &&
                                            <img
                                                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                                                alt="loading"/>
                                            }
                                        </div>
                                    </form>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {isSending} = state.users;
    return {isSending};
};

const mapDispatchToProps = {
    postProfileData: userActions.postProfileData
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHelper);

