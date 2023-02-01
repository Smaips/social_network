import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';



const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
    .map(d => <DialogItem name = {d.name} id = {d.id} img = {d.img}/> )

    let messageElements = props.dialogsPage.messages
    .map(m => <Message message = {m.message} id = {m.id} />)

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => props.sendMessage();

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.upDateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>

            <div className={s.messages}>

                {messageElements}

                <div>
                    <div>
                        <textarea onChange={onMessageChange} 
                                  ref={newMessageElement}
                                  value={props.dialogsPage.newMessageText} />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send message</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;