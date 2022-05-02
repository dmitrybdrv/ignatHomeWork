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
            <div className={s.window}>
                <div>{props.name}</div>
                <div>{props.message}</div>
                <span className={s.time}>{props.time}</span>
            </div>
            <div>
                <img src="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"
                     alt="ava"/>
            </div>
        </div>
    )
}

