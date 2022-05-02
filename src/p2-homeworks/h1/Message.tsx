import React from 'react'
import s from './Message.module.css'


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>

            <img src="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"
                 alt="ava"/>

            <div className={s.messageBlock}>
                <div className={s.nickName}>{props.name}</div>
                <div>{props.message}</div>
                <div className={s.messageTime}>{props.time}</div>
            </div>
            <div>
            </div>
        </div>
    )
}

