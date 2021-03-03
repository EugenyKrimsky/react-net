import React from 'react'
import { actionCreatorUpgradeNewText } from '../../../redux/state';
import c from './Chat.module.css'
import Message from './messages/Message'

const Chat = (props) => {
    const message = React.createRef();

    const updateNewMessage = () => {
        const text = message.current.value;
        props.dispatch(actionCreatorUpgradeNewText('message', text)); 
    }

    const sendMessage = () => {
        alert(message.current.value)
    }

    return (
        <div className={c.chat}>
            <div className={c.messages}></div>
            <div className={c.my_message}>
                <textarea onChange={updateNewMessage} ref={message} name="message" value={props.dialogsPage.newMessageText} />
                <button onClick={sendMessage}>+</button>
            </div>
            
        </div>
    )
}

export default Chat