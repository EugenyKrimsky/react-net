import React from 'react'
import Row from './user/row/UserRow'
import NewPost from './user/posts/new_post/NewPost'
import Feed from './user/posts/feed/Feed'
import c from './Profile.module.css'

const Profile = () => {
    return (
        <div className={c.profile}>
            <img className={c.panorama} src="http://www.fotoman.name/wp-content/gallery/panorams/group-2-img_3603_img_3606-3-imag.jpg" alt="" />
            <div className={c.user}>
                <Row />
                <NewPost />
                <Feed />
            </div>
        </div>
    )
}

export default Profile