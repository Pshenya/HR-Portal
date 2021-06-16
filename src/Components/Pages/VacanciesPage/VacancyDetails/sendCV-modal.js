import React, {useState} from "react";

import './sendCV-modal.css'

import {MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../Routes/routes";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {send, sendForm} from "emailjs-com";
import emailkey from "../../../Helpers/emailkey";
import {assetsActions} from "../../../../Actions";
import {connect} from 'react-redux';

const SendCVModal = ({loggedIn, vacancyID, postVacancyRespond, respondSended}) => {
    const [toSend, setToSend] = useState({
        from_name: 'Pavel',
        to_name: 'Sveta',
        message: 'RESUME',
        reply_to: 'pashapshenishnyuk@gmail.com',
        file: '',
    });

    const [toSendRespond] = useState({
        from: localStorage.getItem('userId'),
        vacancyID: vacancyID
    });

    const [modal, setModal] = useState(false);

    const onSubmit = (e) => {
        console.log("SUBMIT");

        e.preventDefault();
        send(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, toSend, emailkey.USER_ID)
            .then((res) => {
                console.log("SUCCES!", res.status, res.text)
            })
            .catch((err) => {
                console.log("FAILED...", err)
            })

        postVacancyRespond(toSendRespond);

    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setToSend({...toSend, [name]: value});
    };

    const handleFileChange = (e) => {
        const {name, files} = e.target;

        setToSend({...toSend, [name]: files[0]})
    }

    const toggle = () => {
        setModal(!modal)
    };

    console.log({toSend})
    console.log("MODAL = ", {modal});
    console.log("LOGGED = ", loggedIn)
    console.log("VACAN = ", vacancyID)
    console.log("RESPOND = ", respondSended)

    return (
        <div className="sendCV-data">
            <button className="vac-btn" onClick={toggle}>Відправити резюме</button>
            <MDBModal isOpen={modal} toggle={toggle}>
                <MDBModalHeader toggle={toggle}>Відправка резюме на вакансію</MDBModalHeader>

                <MDBModalBody>
                    {!loggedIn &&
                    <div className="feedback-not-authorized">
                        <Link to={ROUTES.LOGIN}>Авторизуйтесь</Link> , щоб відправити вакансію.
                    </div>
                    }
                    {loggedIn && <div className="send-comments-form">
                        <form encType="multipart/form-data" method="post" className="sendCV-form" onSubmit={onSubmit}>
                            <input type="file" name="file"/>
                            <input className="vac-btn" type="submit" value="Відправити"/>
                        </form>
                    </div>}
                    {/*{loggedIn && <div className="done-container">*/}
                    {/*    <div className="done-icon">*/}
                    {/*        <i style={{color: '#2bbbad', fontSize: '65px'}} className="far fa-check-circle"></i>*/}
                    {/*    </div>*/}
                    {/*    <div style={{display: "flex", justifyContent: "center"}}>*/}
                    {/*        <span style={{color: '#2bbbad'}}>Ваш відгук був успішно відправлений!</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*}*/}
                </MDBModalBody>
                <MDBModalFooter>
                    {/*<MDBBtn className="modal-send-btn" type="submit">Отправить</MDBBtn>*/}
                    <MDBBtn className="modal-close-btn" onClick={toggle}>Закрити</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </div>
    )
}

const mapStateToProps = (state) => {
    const {loading, respondSended} = state.assets;
    return {loading, respondSended};
};

const mapDispatchToProps = {
    postVacancyRespond: assetsActions.postVacancyRespond
};

export default connect(mapStateToProps, mapDispatchToProps)(SendCVModal);
