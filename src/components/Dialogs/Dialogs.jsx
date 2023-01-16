import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
    .map(d => <DialogItem name = {d.name} id = {d.id} img = {d.img}/> )

    let messageElements = props.state.messages
    .map(m => <Message message = {m.message} id = {m.id} />)

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
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
                        <textarea ref={newMessageElement} name="" id="" cols="" rows=""></textarea>
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