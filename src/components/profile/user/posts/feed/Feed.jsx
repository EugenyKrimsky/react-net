import React from 'react'
import Post from './post/Post'
import c from './Feed.module.css'

const Feed = (props) => {
    const feed = props.posts.map(p => <Post text={p.text} />)

    return (
        <div className={c.posts_feed}>
            {feed.reverse()}
        </div>
    )
}

export default Feed