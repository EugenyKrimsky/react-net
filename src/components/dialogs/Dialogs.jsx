import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './Dialogs.module.css'
import Dialog from './dialog/Dialog'
import Message from './messages/Message'

const Dialogs = (props) => {
    const dialogsElements = props.dialogs.map( d => <Dialog id={d.id} name={d.name}/> );
    const messagesElements = props.messages.map( m => <Message id={m.id} messages={m.message} />);

    return (
        <div className={c.dialogs}>
            <div className={c.left}>
                {dialogsElements}
            </div>
            <div className={c.right}> 
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs