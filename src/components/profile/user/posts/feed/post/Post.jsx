import React from 'react'
import c from './Post.module.css'

const Post = (props) => {
    return (
        <div className={c.post}>
            <div className={c.left}>
                
            </div>
            <img src="http://sun9-55.userapi.com/s/v1/if1/FdRS5WlC_YMr1Nkhk3XLx7gXiq9l9iyuAAkjdyrW-Q52quL-Zq9leO3Xzvm7KZTXTihSMmsN.jpg?size=200x0&quality=96&crop=82,0,494,494&ava=1" alt="ava"/>
            <div className={c.right}>
                <div className={c.text}>{props.text}</div>
            </div>
        </div>
    )
}

export default Post