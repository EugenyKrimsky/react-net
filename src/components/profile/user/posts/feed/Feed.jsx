import React from 'react'
import Post from './post/Post'
import c from './Feed.module.css'

const Feed = () => {
    return (
        <div className={c.posts_feed}>
            <Post name='dora'/>
            <Post />
            <Post />
        </div>
    )
}

export default Feed