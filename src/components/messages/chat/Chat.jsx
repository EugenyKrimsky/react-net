import React from 'react'
import { actionCreatorSendMessage, actionCreatorUpgradeNewText } from '../../../redux/dialogsReducer';
import c from './Chat.module.css'
import Message from './message/Message'

const Chat = (props) => {
  const message = React.createRef();

  const updateNewMessage = () => {
    const text = message.current.value;
    props.dispatch(actionCreatorUpgradeNewText('message', text)); 
  }

  const sendMessage = () => {
    props.dispatch(actionCreatorSendMessage());
  }

  return (
    <div className={c.chat}>
        <div className={c.messages}>
					{props.messages}
				</div>
        <div className={c.my_message}>
          <textarea onChange={updateNewMessage} ref={message} name="message" value={props.dialogsPage.newMessageText} />
          <button onClick={sendMessage}>+</button>
        </div>
          
      </div>
  )
}

export default Chat