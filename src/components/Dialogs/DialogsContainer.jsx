import React from 'react';
import { connect } from 'react-redux';
import { sendMessageActionCreator, upDateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => dispatch(sendMessageActionCreator()),

        upDateNewMessageText: (text) => {
            dispatch(upDateNewMessageTextActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;