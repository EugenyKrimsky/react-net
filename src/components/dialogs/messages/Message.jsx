import React from 'react'
import c from './Message.module.css'

const Message = (props) => {
    return (
        <div className={c.dialog}>{props.messages}</div>
    )
}

export default Message