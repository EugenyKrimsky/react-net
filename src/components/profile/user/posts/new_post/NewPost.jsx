import React from 'react'
import { actionCreatorAddPost, actionCreatorUpgradeNewText } from '../../../../../redux/state';
import c from './NewPost.module.css'

const NewPost = (props) => {
    const newPost = React.createRef();

    const addPost = () => {
        props.dispatch(actionCreatorAddPost());
    }

    const upgradeNewPostText = () => {
        const text = newPost.current.value;
        props.dispatch(actionCreatorUpgradeNewText('post', text));
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