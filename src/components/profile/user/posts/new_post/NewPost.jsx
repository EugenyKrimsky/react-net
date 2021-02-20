import React from 'react'
import c from './NewPost.module.css'

const NewPost = () => {
    return (
        <div className={c.new_post_row}>
            <div className={c.tittle}>My Posts</div>
            <textarea />
            <button type="submit">Send</button>
        </div>
    )
}

export default NewPost