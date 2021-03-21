import React, {Component} from 'react';

import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {userActions} from '../../../../Actions';

import '../login.css';


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import {ROUTES} from "../../../../Routes/routes";
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";
import Logo from "../../../../assets/img/MIIIIIIIIIIII.jpg";

class RegistrationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
                lastName: '',
                email: '',
                password: '',
                role: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target)
        const {name, value} = event.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({submitted: true});
        const {user} = this.state;
        if (user.name && user.lastName && user.email && user.password && user.role) {
            this.props.register(user);
        }
    }

    render() {
        const {registering} = this.props;
        const {user, submitted} = this.state;
        console.log(this.state)

        return (
            <div className="signIn-content">
                <div className="signIn-header register-header">
                    <div className="signIn-logo">
                        <Link to="/">
                            <img style={{paddingTop: "8px"}} src={Logo} alt="logo" width={200} height={75}/>
                        </Link>
                    </div>
                    <Link className="x-class" aria-label="back to HR's" to={ROUTES.MAIN}>
                        <FontAwesomeIcon icon={faTimesCircle} size="2x"/>
                    </Link>
                </div>
                <div className="signIn-main register-header">
                    <h1 className="signIn-title">Новий акаунт</h1>
                    <div className="new-user">
                        <h3>У вас вже є акаунт? <Link to={ROUTES.LOGIN}>Увійти</Link></h3>
                    </div>
                    <div className="login-content">
                        <div className="left-content">
                            <MDBContainer>
                                <MDBRow>
                                    <MDBCol>
                                        <form className="common-form" name="form" onSubmit={this.handleSubmit}>
                                            <div className={submitted && !user.name ? ' has-error' : ''}>
                                                <MDBInput name="name" label="Ім'я" icon="user-circle" group type="text"
                                                          validate
                                                          error="wrong" value={user.name} onChange={this.handleChange}
                                                          success="right"/>
                                                {submitted && !user.name &&
                                                <div className="help-block">* Це обов'язкове поле</div>
                                                }
                                            </div>
                                            <div className={submitted && !user.lastName ? ' has-error' : ''}>
                                                <MDBInput name="lastName" label="Прізвище" icon="user-circle" group
                                                          type="text" validate
                                                          error="wrong" value={user.lastName}
                                                          onChange={this.handleChange}
                                                          success="right"/>
                                                {submitted && !user.lastName &&
                                                <div className="help-block">* Це обов'язкове поле</div>
                                                }
                                            </div>
                                            <div className={submitted && !user.email ? ' has-error' : ''}>
                                                <MDBInput name="email" label="Эл. пошта" icon="envelope" group
                                                          type="email" validate
                                                          error="wrong" value={user.email} onChange={this.handleChange}
                                                          success="right"/>
                                                {submitted && !user.email &&
                                                <div className="help-block">* Це обов'язкове поле</div>
                                                }
                                            </div>
                                            <div className={submitted && !user.password ? ' has-error' : ''}>
                                                <MDBInput name="password" label="Пароль" icon="lock" group
                                                          type="password" validate value={user.password}
                                                          onChange={this.handleChange}/>
                                                {submitted && !user.password &&
                                                <div className="help-block">* Це обов'язкове поле</div>
                                                }
                                            </div>
                                            <div className={submitted && !user.role ? ' has-error' : ''}>
                                                {/*<MDBInput name="role" label="Имя" icon="user-circle" group type="text"*/}
                                                {/*          error="wrong" value={user.role} onChange={this.handleChange}*/}
                                                {/*          success="right"/>*/}
                                                <div className="roleCheck">
                                                    <div>
                                                        <input type="radio" name="role" id="roleChoice"
                                                               value="Worker" onChange={this.handleChange}
                                                               checked={user.role === "Worker"}/>
                                                        <label htmlFor="roleChoice">Шукаю роботу</label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" name="role" id="roleChoice2"
                                                               value="HR" onChange={this.handleChange}
                                                               checked={user.role === "HR"}/>
                                                        <label htmlFor="roleChoice2">HR/Рекрутер</label>
                                                    </div>
                                                </div>
                                                {submitted && !user.role &&
                                                <div className="help-block">* Це обов'язкове поле</div>
                                                }
                                            </div>
                                            <div className="btn-group">
                                                <MDBBtn type="submit" className="form-btn" color="0">Створити акаунт</MDBBtn>
                                                {registering &&
                                                <img
                                                    src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                                                    alt="loading"/>
                                                }
                                            </div>
                                        </form>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>
                    </div>
                    <div className="terms-of-use">
                        <p>Входячи в акаунт, вы погоджуєтесь з <a href="/">користувачою угодою</a> і,
                            підтверджуєте,
                            що ознайомились з <a href="/">політикою конфіденційності</a>.</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {registering} = state.registration;
    return {registering};
};

const mapDispatchToProps = {
    register: userActions.register
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
