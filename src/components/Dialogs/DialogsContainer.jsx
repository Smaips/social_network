import React from 'react';
import { sendMessageActionCreator, upDateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';



const DialogsConteiner = () => {
    
    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState()

                let onSendMessageClick = () => store.dispatch(sendMessageActionCreator());

                let onMessageChange = (text) => {
                    let active = upDateNewMessageTextActionCreator(text)
                    store.dispatch(active);
                }

                return <Dialogs
                    sendMessage={onSendMessageClick}
                    upDateNewMessageText={onMessageChange}
                    dialogsPage={state.dialogReducer} />
            }
        }
        </StoreContext.Consumer>)
}

export default DialogsConteiner;