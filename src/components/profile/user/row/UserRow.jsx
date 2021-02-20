import React from 'react'
import c from './UserRow.module.css'

const UserRow = () => {
    return (
        <div className={c.user_row}>
            <div className={c.left}>
                <img className={c.ava} src="http://sun9-55.userapi.com/s/v1/if1/FdRS5WlC_YMr1Nkhk3XLx7gXiq9l9iyuAAkjdyrW-Q52quL-Zq9leO3Xzvm7KZTXTihSMmsN.jpg?size=200x0&quality=96&crop=82,0,494,494&ava=1" alt="" />
            </div>
            <div className={c.right}>
                <div className={c.name}>Kirtr K.</div>
                <div className={c.stat}>
                    <div className={c.row_1}>Date:</div>
                    <div className={c.row_1}>City:</div>
                    <div className={c.row_1}>Education:</div>
                    <div className={c.row_1}>Site:</div>
                </div>
            </div>
        </div>
    )
}

export default UserRow