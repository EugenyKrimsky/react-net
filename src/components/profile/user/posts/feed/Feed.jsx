import React from 'react'
import Post from './post/Post'
import c from './Feed.module.css'

const Feed = (props) => {
    // const feedData = [
    //     {id: 0, likesCount: 12, text: 'why dora doesn\'t love me'},
    //     {id: 0, likesCount: 16, text: 'why avril lavigne doesn\'t love me'},
    //     {id: 0, likesCount: 19, text: 'why helly williams doesn\'t love me'},
    //     {id: 0, likesCount: 22, text: 'why helly williams doesn\'t love me'},
    // ]

    const feed = props.posts.map(p => <Post text={p.text} />)

    return (
        <div className={c.posts_feed}>
            {feed}
        </div>
    )
}

export default Feed