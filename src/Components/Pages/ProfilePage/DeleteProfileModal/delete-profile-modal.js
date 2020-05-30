import React, {Component} from 'react';
import {connect} from "react-redux";
import {MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon} from 'mdbreact';
import {userActions} from "../../../../Actions";

class DeleteProfileModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    delete = () => {
        console.log(this.props.userId);
        this.props.deleteProfile(this.props.userId);
        this.toggle();
    };

    render() {
        return (
            <div className="profile-save-data">
                <button className="profile-btn delete-btn" onClick={this.toggle}>Удалить</button>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>Удаление профиля</MDBModalHeader>
                    <MDBModalBody>
                        Ви действительно хотите удалить профиль?
                        <MDBIcon far icon="frown" style={{marginLeft: '10px'}}/> <br/>
                        Это действие приведет к необратимому удалению вашего аккаунта.
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn className="modal-delete-btn" onClick={this.delete}>Удалить</MDBBtn>
                        <MDBBtn className="modal-close-btn" onClick={this.toggle}>Закрыть</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

const mapStateToProps = ({users}) => {
    return{
        loading: users.loading,
        deleted: users.deleted,
        error: users.error
    }
};

const mapDispatchToProps = {
    deleteProfile: userActions.deleteProfileData
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProfileModal);