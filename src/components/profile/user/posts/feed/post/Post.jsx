import React from 'react'
import c from './Post.module.css'

const Post = (props) => {
    return (
        <div className={c.post}>
            <div className={c.left}>
            </div>
            <div className={c.right}>
                <div className={c.text}>{props.text}</div>
            </div>
        </div>
    )
}

export default Post