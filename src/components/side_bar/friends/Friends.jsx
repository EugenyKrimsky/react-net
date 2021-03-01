import React from 'react'
import c from './Friends.module.css'
import Friend from './friend/Friend'

const Friends = (props) => {
    const friends = props.data.map(el => <Friend friend={el}/>)

    return (
        <div className={c.block}>
            <h5>Friends</h5>
            <div className={c.friends}> 
                {friends}
            </div>
        </div>
    )
}

export default Friends