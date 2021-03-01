import React from 'react'
import c from './NewPost.module.css'

const NewPost = (props) => {
    const newPost = React.createRef();

    const addPost = () => {
        props.addPost();
    }

    const upgradeNewPostText = () => {
        const text = newPost.current.value;
        props.upgradeNewPostText(text);
    }


    return (
        <div className={c.new_post_row}>
            <div className={c.tittle}>My Posts</div>
            <textarea onChange={upgradeNewPostText} ref={newPost} value={props.newPostText}/>
            <button onClick={addPost}>+</button>
        </div>
    )
}

export default NewPost