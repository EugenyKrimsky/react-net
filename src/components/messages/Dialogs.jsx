import React from 'react'
import c from './Dialogs.module.css'
import Dialog from './dialog/Dialog'
import Chat from './chat/Chat'
import Message from './chat/message/Message'

const Dialogs = (props) => {
	const dialogsElements = props.dialogsPage.dialogs.map(d => <Dialog id={d.id} name={d.name}/> );
	const messagesElements = props.dialogsPage.messages.map(m => <Message id={m.id} messages={m.text}/>);

	return (
		<div className={c.dialogs}>
			<Chat className={c.right} dispatch={props.dispatch} dialogsPage={props.dialogsPage} messages={messagesElements}/> 
			<div className={c.left}>
				{dialogsElements}
			</div>   
		</div>
	)
}

export default Dialogs