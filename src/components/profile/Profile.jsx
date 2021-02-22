import React from 'react'
import Row from './user/row/Row'
import NewPost from './user/posts/new_post/NewPost'
import Feed from './user/posts/feed/Feed'
import c from './Profile.module.css'

const Profile = () => {
    return (
        <div className={c.profile}>
            <Row />
            <NewPost />
            <Feed />
        </div>
    )
}

export default Profile