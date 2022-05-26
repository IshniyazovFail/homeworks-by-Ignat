import React, {useState} from 'react'
import {GreetingContainer} from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
export const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([
        {_id: v1(), name: "Vitaliy"},
        {_id: v1(), name: "Roman"},
        {_id: v1(), name: "Alex"},
        {_id: v1(), name: "Vladislav"},
    ]) // need to fix any
    console.log(users)

    const addUserCallback = (name: string) => { // need to fix any
        const NewName = {_id: v1(), name: name.trim()}
        setUsers([NewName, ...users]) // need to fix
    }

    return (
        <div>
            <hr/>
            <h3>homeworks 3</h3>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}


