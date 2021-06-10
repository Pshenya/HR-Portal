import React, {Component} from "react";

import FroalaEditorComponent from 'react-froala-wysiwyg';

// Froala imports
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/colors.min.js';
import 'froala-editor/js/plugins/font_family.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/line_height.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/link.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';
import 'froala-editor/js/languages/uk.js';
import 'froala-editor/css/plugins/image.min.css';
import 'froala-editor/css/plugins/colors.min.css';

import 'font-awesome/css/font-awesome.min.css'
import './create-vacancy.css'

// Functional imports
import {connect} from 'react-redux';
import {assetsActions, userActions} from "../../../Actions";
import {MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBSelect} from "mdbreact";
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Checkbox from 'muicss/lib/react/checkbox';
import {Link} from "react-router-dom";
import {ROUTES} from "../../../Routes/routes";



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
                email: '',
                site: '',
                contactMore: '',
                description: '',
                salary: '',
                salaryCurrency: '$',
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
    }

    handleChange(event) {
        const {name, value} = event.target;
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

    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({submitted: true});
        const {vacancy} = this.state;
        if (vacancy) {
            this.props.postVacancy(vacancy);
        }
    }

    render() {
        const {loading, vacancySended} = this.props;
        const {vacancy, submitted} = this.state;

        const config = {
            placeholderText: 'Опишіть вашу вакансію тут',
            'moreText': {
                'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
            },
            'moreParagraph': {
                'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
            },
            'moreRich': {
                'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR']
            },
            'moreMisc': {
                'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
                'align': 'right',
                'buttonsVisible': 2,
            },
            fontFamily: {
                'Arial,Helvetica,sans-serif': 'Arial',
                'Georgia,serif': 'Georgia',
                'Impact,Charcoal,sans-serif': 'Impact',
                'Tahoma,Geneva,sans-serif': 'Tahoma',
                "'Times New Roman',Times,serif": 'Times New Roman',
                'Verdana,Geneva,sans-serif': 'Verdana',
                'Roboto-Condensed Regular, sans-serif': 'Roboto',
            },
            fontSize: ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '30'],
            language: 'uk',
            attribution: false
        };

        return (
            <div className="create-vac-container">
                <div className="create-vac-nav">
                    <div className="create-vac-link-back">
                    <span>
                        <Link to={ROUTES.VACANCIES} className="disable-link-styles vac-back-link">
                        <MDBIcon icon="arrow-circle-left" style={{marginRight: '5px'}}/>
                        До списку вакансій
                        </Link>
                    </span>
                    </div>
                    <div className="create-vac-link-next">
                    <span>
                        <Link to={ROUTES.MYRESUMES} className="disable-link-styles vac-back-link">
                        <MDBIcon icon="arrow-circle-right" style={{marginRight: '5px'}}/>
                        Мої вакансії
                        </Link>
                    </span>
                    </div>
                </div>
                {!vacancySended ?
                    <form className="common-form" name="form" onSubmit={this.handleSubmit}>
                        <div className="create-vac-block">
                            <div className="create-vac-content">
                                <div className="vac-create-header">
                                    Назва вакансії <span style={{color: "#DD3500"}}>*</span>
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
                                                        <Option value="Київ" label="Київ"/>
                                                        <Option value="Харків" label="Харків"/>
                                                        <Option value="Дніпро" label="Дніпро"/>
                                                        <Option value="Львів" label="Львів"/>
                                                        <Option value="Одеса" label="Одеса"/>
                                                        <Option value="Запоріжжя" label="Запоріжжя"/>
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
                                    <span>Тип зайнятості <span style={{color: "#DD3500"}}>*</span></span>
                                    <MDBContainer>
                                        <MDBRow>
                                            <MDBCol>
                                                <div className="create-vac">
                                                    <div className="create-vac-checkbox-l">
                                                        <Checkbox name="employment" value="Повна" label="Повна"
                                                                  onChange={this.handleEmploymentChange}/>
                                                        <Checkbox name="employment" value="Часткова" label="Часткова"
                                                                  onChange={this.handleEmploymentChange}/>
                                                    </div>
                                                    <div className="create-vac-checkbox-r">
                                                        <Checkbox name="employment" value="Проектна" label="Проектна"
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
                                                        <Checkbox name="workType" value="Віддалена" label="Віддалена"
                                                                  onChange={this.handleWorkTypeChange}/>
                                                        <Checkbox name="workType" value="Стажування" label="Стажування"
                                                                  onChange={this.handleWorkTypeChange}/>
                                                    </div>
                                                    <div className="create-vac-checkbox-r">
                                                        <Checkbox name="workType" value="Позмінна" label="Позмінна"
                                                                  onChange={this.handleWorkTypeChange}/>
                                                        <Checkbox name="workType" value="Офісна" label="Офісна"
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
                                    Опис вакансії <span style={{color: "#DD3500"}}>*</span>
                                </div>
                                <MDBContainer>
                                    <MDBRow>
                                        <MDBCol>
                                            <div className="create-vac">
                                                <div className={submitted && !vacancy.description ? ' has-error' : ''}>
                                                    <FroalaEditorComponent config={config} tag='textarea' model={vacancy.description}
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
                                                        <Option value="$" label="$"/>
                                                        <Option value="грн" label="₴"/>
                                                        <Option value="€" label="€"/>
                                                    </Select>
                                                </div>
                                                <Select name="category" value={vacancy.category}
                                                        onChange={this.handleChange} style={{marginBottom: '40px'}}>
                                                    <Option value="" label="Оберіть категорію"/>
                                                    <Option value="IT" label="ІТ"/>
                                                    <Option value="HR/Рекрутинг" label="HR/Рекрутинг"/>
                                                    <Option value="Готелі - Ресторани - Кафе"
                                                            label="Готелі - Ресторани - Кафе"/>
                                                    <Option value="Дизайн - Фото - Графіка" label="Дизайн - Фото - Графіка"/>
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
                                                <div
                                                    className={submitted && !vacancy.contactPerson ? ' has-error' : ''}>
                                                    <MDBInput name="contactPerson" label="Контактна особа" group
                                                              type="text"
                                                              validate
                                                              error="wrong" value={vacancy.contactPerson}
                                                              onChange={this.handleChange}
                                                              success="right"/>
                                                </div>
                                                <div
                                                    className={submitted && !vacancy.contactNumber ? ' has-error' : ''}>
                                                    <MDBInput name="contactNumber" label="Контактний номер" group
                                                              type="text"
                                                              validate
                                                              error="wrong" value={vacancy.contactNumber}
                                                              onChange={this.handleChange}
                                                              success="right"/>
                                                </div>
                                                <div
                                                    className={submitted && !vacancy.email ? ' has-error' : ''}>
                                                    <MDBInput name="email" label="Ел. пошта" group
                                                              type="text"
                                                              validate
                                                              error="wrong" value={vacancy.email}
                                                              onChange={this.handleChange}
                                                              success="right"/>
                                                </div>
                                                <div
                                                    className={submitted && !vacancy.site ? ' has-error' : ''}>
                                                    <MDBInput name="site" label="Сайт" group
                                                              type="text"
                                                              validate
                                                              error="wrong" value={vacancy.site}
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
                            <MDBBtn type="submit" className="form-btn send-vac-btn" color="0">Опублікувати</MDBBtn>
                            {loading &&
                            <img
                                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                                alt="loading"/>
                            }
                        </div>
                    </form> :
                    <div className="done-container">
                        <div className="done-icon">
                            <i style={{color: '#2bbbad', fontSize: '120px'}} className="far fa-check-circle"></i>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <span
                                style={{color: '#2bbbad', fontSize: '30px'}}>Ваша вакансія успішно опублікована!</span>
                        </div>
                        <div className="btn-group">
                            <MDBBtn as={Link} to={ROUTES.CREATEVACANCY} className="form-btn more-vac-btn" color="0">Cтворити ще одну вакансію</MDBBtn>
                        </div>
                    </div>
                }
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

