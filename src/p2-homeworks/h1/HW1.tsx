import React from 'react'
import {Message} from "./Message";


const messageData = {
    avatar: 'https://expari.com/uploads/profile/cc838/689a1/5e60f/649644dbd7cea598b_X_SMALL.jpg',
    name: 'Fail Ishniyazov',
    message: 'Ты сделал первое д/з Игната?',
    time: '22:00',
}

function HW1() {

    return (
        <div>
            <hr/>
            <h3>homeworks 1</h3>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
