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

    let sendMessage = () => {
        props.dispatch({type: 'SEND-MESSAGE'});
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch( {type: 'UPDATE-NEW-MESSAGE-TEXT',
                             newText: text});
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
                                  value={props.dialogsPage.newMessageText} name="" id="" cols="" rows=""></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send message</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;