import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: string) => void // need to fix any
    addUser: (name: string) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {


    const onEnterHandler = () => {
        if (name.trim() !== '') {
            addUser(name)
        } else {
            alert('введите текст...')
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNameCallback(event.currentTarget.value)
    }

    const onClickHandler = () => {
        addUser(name)

    }

    return (
        <div className={s.body}>
            <div className={s.transfer}><SuperInputText onEnter={onEnterHandler} value={name} onChange={onChangeHandler}
                                                        error={error}/></div>
            <SuperButton disabled={name.trim() === ''} onClick={onClickHandler}>add</SuperButton>
            <span className={s.total}>{totalUsers}</span>

        </div>
    )
}

export default Greeting
