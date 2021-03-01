import React from 'react'
import c from './NewPost.module.css'

const NewPost = (props) => {
    const newPost = React.createRef();

    return (
        <div className={c.new_post_row}>
            <div className={c.tittle}>My Posts</div>
            <textarea ref={newPost} />
            <button onClick={() => props.addPost(newPost.current.value)} type="button">+</button>
        </div>
    )
}

export default NewPost