import React from 'react'
import c from './Chat.module.css'
import Message from './messages/Message'

const Chat = () => {
    let message = React.createRef();

    const send = () => {
        alert(message.current.value)
    }

    return (
        <div className={c.chat}>
            <div className={c.messages}></div>
            <div className={c.my_message}>
                <textarea ref={message} name="message"></textarea>
                <button onClick={send}>+</button>
            </div>
            
        </div>
    )
}

export default Chat