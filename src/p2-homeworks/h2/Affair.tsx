import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = (id: number) => {
        props.deleteAffairCallback(id);

    }// need to fix

    return (
        <div className={s.body}>

            <div className={s.item}>
                <div className={s.Name}>{props.affair.name}</div>
                <div className={s.Priority}>{props.affair.priority}</div>
                <SuperButton red onClick={() => deleteCallback(props.affair.id)}>X</SuperButton>
            </div>

        </div>
    )
}

export default Affair
