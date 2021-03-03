import React from 'react'
import c from './Dialogs.module.css'
import Dialog from './dialog/Dialog'
import Chat from './chat/Chat'

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <Dialog id={d.id} name={d.name}/> );
    // const messagesElements = props.state.messages.map(m => <Message id={m.id} messages={m.message}/>);

    return (
        <div className={c.dialogs}>
            <Chat className={c.right} dispatch={props.dispatch} dialogsPage={props.dialogsPage}/> 
            <div className={c.left}>
                {dialogsElements}
            </div>   
        </div>
    )
}

export default Dialogs