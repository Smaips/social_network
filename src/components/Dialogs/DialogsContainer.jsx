import React from 'react';
import { sendMessageActionCreator, upDateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



const DialogsConteiner = (props) => {
    let onSendMessageClick = () => props.dispatch(sendMessageActionCreator());

    let onMessageChange = (text) => {
        let active = upDateNewMessageTextActionCreator(text)
        props.dispatch(active);
    }

    return (<Dialogs sendMessage={onSendMessageClick}
                     upDateNewMessageText={onMessageChange}
                     dialogsPage={props.dialogsPage} />)
}

export default DialogsConteiner;