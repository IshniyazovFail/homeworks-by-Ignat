import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string

}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.body}>
            <img className={s.avatar} src={props.avatar}/>
            <div className={s.container}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}


