import React, {Component} from "react";

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.min.css'
import './create-vacancy.css'

import {connect} from 'react-redux';
import {assetsActions, userActions} from "../../../Actions";
import {MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBSelect} from "mdbreact";
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Checkbox from 'muicss/lib/react/checkbox';
import {Link} from "react-router-dom";
import {ROUTES} from "../../../Routes/routes";

import FroalaEditorComponent from 'react-froala-wysiwyg';


class CreateVacancy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vacancy: {
                userId: localStorage.getItem('userId'),
                heading: '',
                company: '',
                contactNumber: '',
                contactPerson: '',
                contactMore: '',
                description: '',
                salary: '',
                salaryCurrency: 'Dollar',
                category: '',
                employment: [],
                workType: [],
                region: '',
                address: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmploymentChange = this.handleEmploymentChange.bind(this);
        this.handleWorkTypeChange = this.handleWorkTypeChange.bind(this);
        this.modelChange = this.modelChange.bind(this);
        this.fixedBtn = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll(event){
        // if(window.pageYOffset > 1390){
        //     console.log("YESSS")
        //     this.fixedBtn.current;
        // }
        console.log(this.fixedBtn)
        console.log(window.pageYOffset)
    }

    handleChange(event) {
        const {name, value} = event.target;
        console.log(this.state)
        console.log("NAME ", name);
        console.log("VALUE ", value)
        const {vacancy} = this.state;
        this.setState({
            vacancy: {
                ...vacancy,
                [name]: value
            }
        });
    }

    modelChange(model) {
        console.log(this.state)
        console.log("VALUE ", model)
        const {vacancy} = this.state;
        this.setState({
            vacancy: {
                ...vacancy,
                description: model
            }
        });
    }

    handleEmploymentChange(event) {
        const {value} = event.target;
        const {vacancy} = this.state;
        const {employment} = this.state.vacancy;
        this.setState({
            vacancy: {
                ...vacancy,
                employment: [...employment, value]
            }
        });
    }

    handleWorkTypeChange(event) {
        const {value} = event.target;
        const {vacancy} = this.state;
        const {workType} = this.state.vacancy;
        this.setState({
            vacancy: {
                ...vacancy,
                workType: [...workType, value]
            }
        });

        console.log(this.state)

    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({submitted: true});
        const {vacancy} = this.state;
        console.log("VACAN = ", vacancy)
        if (vacancy) {
            // this.props.postVacancy(vacancy);
            console.log('POSTED')
        }
    }

    render() {
        const {loading} = this.props;
        console.log("PROPS", loading)
        const {vacancy, submitted} = this.state;

        return (
            <div className="create-vac-container">
                <div className="create-vac-link-back">
                    <span>
                        <Link to={ROUTES.VACANCIES} className="disable-link-styles vac-back-link">
                        <MDBIcon icon="arrow-circle-left" style={{marginRight: '5px'}}/>
                        До списку вакансій
                        </Link>
                    </span>
                </div>
                <form className="common-form" name="form" onSubmit={this.handleSubmit}>
                    <div className="create-vac-block">
                        <div className="create-vac-content">
                            <div className="vac-create-header">
                                Назва вакансії
                                <MDBContainer>
                                    <MDBRow>
                                        <MDBCol>
                                            <div className="create-vac">
                                                <div className={submitted && !vacancy.heading ? ' has-error' : ''}>
                                                    <MDBInput name="heading" label="Кого ви шукаєте?" group
                                                              type="text"
                                                              validate
                                                              error="wrong" value={vacancy.heading}
                                                              onChange={this.handleChange}
                                                              success="right"/>
                                                </div>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </div>
                        </div>
                    </div>
                    <div className="create-vac-block">
                        <div className="create-vac-content">
                            <div className="vac-create-header">
                                Адреса
                                <MDBContainer>
                                    <MDBRow>
                                        <MDBCol>
                                            <div className="create-vac">
                                                <Select name="region" value={vacancy.region}
                                                        onChange={this.handleChange}>
                                                    <Option value="" label="Оберіть регіон"/>
                                                    <Option value="Kiev" label="Київ"/>
                                                    <Option value="Kharkiv" label="Харків"/>
                                                    <Option value="Dnipro" label="Дніпро"/>
                                                    <Option value="Lviv" label="Львів"/>
                                                    <Option value="Odessa" label="Одеса"/>
                                                    <Option value="Zaporizhzhia" label="Запоріжжя"/>
                                                </Select>
                                                <div className={submitted && !vacancy.address ? ' has-error' : ''}>
                                                    <MDBInput name="address" label="Адреса офісу" group
                                                              type="text"
                                                              validate
                                                              error="wrong" value={vacancy.address}
                                                              onChange={this.handleChange}
                                                              success="right"/>
                                                </div>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </div>
                        </div>
                    </div>
                    <div className="create-vac-block">
                        <div className="create-vac-content">
                            <div className="vac-create-header">
                                <span>Тип зайнятості</span>
                                <MDBContainer>
                                    <MDBRow>
                                        <MDBCol>
                                            <div className="create-vac">
                                                <div className="create-vac-checkbox-l">
                                                    <Checkbox name="employment" value="Full" label="Повна"
                                                              onChange={this.handleEmploymentChange}/>
                                                    <Checkbox name="employment" value="Semi" label="Частична"
                                                              onChange={this.handleEmploymentChange}/>
                                                </div>
                                                <div className="create-vac-checkbox-r">
                                                    <Checkbox name="employment" value="Project" label="Проектна"
                                                              onChange={this.handleEmploymentChange}/>
                                                </div>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </div>
                        </div>
                        <div className="create-vac-content">
                            <div className="vac-create-header">
                                <span>Характер роботи</span>
                                <MDBContainer>
                                    <MDBRow>
                                        <MDBCol>
                                            <div className="create-vac">
                                                <div className="create-vac-checkbox-l">
                                                    <Checkbox name="workType" value="Remote" label="Віддалена"
                                                              onChange={this.handleWorkTypeChange}/>
                                                    <Checkbox name="workType" value="Trainee" label="Стажування"
                                                              onChange={this.handleWorkTypeChange}/>
                                                </div>
                                                <div className="create-vac-checkbox-r">
                                                    <Checkbox name="workType" value="Shift" label="Позмінна"
                                                              onChange={this.handleWorkTypeChange}/>
                                                    <Checkbox name="workType" value="Office" label="Офісна"
                                                              onChange={this.handleEmploymentChange}/>
                                                </div>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </div>
                        </div>
                    </div>
                    <div className="create-vac-block">
                        <div className="create-vac-content">
                            <div className="vac-create-header">
                                Опис вакансії
                            </div>
                            <MDBContainer>
                                <MDBRow>
                                    <MDBCol>
                                        <div className="create-vac">
                                            <div className={submitted && !vacancy.description ? ' has-error' : ''}>
                                                <FroalaEditorComponent tag='textarea' model={vacancy.description}
                                                                       onModelChange={this.modelChange}/>
                                            </div>
                                            <div className="salary-block">
                                                <div className={submitted && !vacancy.salary ? ' has-error' : ''}>
                                                    <MDBInput name="salary" label="Зарплата" group
                                                              type="text"
                                                              className="salaryInput"
                                                              validate
                                                              error="wrong" value={vacancy.salary}
                                                              onChange={this.handleChange}
                                                              success="right"/>
                                                </div>
                                                <Select name="salaryCurrency" value={vacancy.salaryCurrency}
                                                        onChange={this.handleChange}>
                                                    <Option value="Dollar" label="$"/>
                                                    <Option value="Hryvnia" label="₴"/>
                                                    <Option value="Euro" label="€"/>
                                                </Select>
                                            </div>
                                            <Select name="category" value={vacancy.category}
                                                    onChange={this.handleChange}>
                                                <Option value="" label="Оберіть категорію"/>
                                                <Option value="IT" label="ІТ"/>
                                                <Option value="HR" label="HR/Рекрутинг"/>
                                                <Option value="Hotels/Cafe/Restaurants"
                                                        label="Готелі - Ресторани - Кафе"/>
                                                <Option value="Graphics/Design" label="Дизайн - Фото - Графіка"/>
                                            </Select>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>
                    </div>
                    <div className="create-vac-block">
                        <div className="create-vac-content">
                            <div className="vac-create-header">
                                Контактні дані
                            </div>
                            <MDBContainer>
                                <MDBRow>
                                    <MDBCol>
                                        <div className="create-vac">
                                            <div className={submitted && !vacancy.company ? ' has-error' : ''}>
                                                <MDBInput name="company" label="Назва компанії" group
                                                          type="text"
                                                          validate
                                                          error="wrong" value={vacancy.company}
                                                          onChange={this.handleChange}
                                                          success="right"/>
                                            </div>
                                            <div className={submitted && !vacancy.contactNumber ? ' has-error' : ''}>
                                                <MDBInput name="contactNumber" label="Контактна особа" group
                                                          type="text"
                                                          validate
                                                          error="wrong" value={vacancy.contactNumber}
                                                          onChange={this.handleChange}
                                                          success="right"/>
                                            </div>
                                            <div className={submitted && !vacancy.contactPerson ? ' has-error' : ''}>
                                                <MDBInput name="contactPerson" label="Контактний номер" group
                                                          type="text"
                                                          validate
                                                          error="wrong" value={vacancy.contactPerson}
                                                          onChange={this.handleChange}
                                                          success="right"/>
                                            </div>
                                            <div className={submitted && !vacancy.contactMore ? ' has-error' : ''}>
                                                <MDBInput name="contactMore"
                                                          label="Доп. контакт (skype, telegram і т.д)" group
                                                          type="text"
                                                          validate
                                                          error="wrong" value={vacancy.contactMore}
                                                          onChange={this.handleChange}
                                                          success="right"/>
                                            </div>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>
                    </div>
                    <div className="btn-group">
                        <MDBBtn ref={this.fixedBtn} type="submit" className="form-btn" color="0">Готово</MDBBtn>
                        {loading &&
                        <img
                            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                            alt="loading"/>
                        }
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {loading, vacancySended} = state.assets;
    return {loading, vacancySended};
};

const mapDispatchToProps = {
    postVacancy: assetsActions.postVacancy
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateVacancy);

