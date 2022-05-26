import React from 'react'
import Affair from './Affair'
import {AffairType} from './HW2'
import {FilterType} from "./HW2";
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void

}


function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a.id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const onClickHandler = (FilterType: FilterType) => {
        props.setFilter(FilterType)
    }

    return (
        <div>
            {mappedAffairs}
            <div className={s.button}>
                <SuperButton onClick={() => onClickHandler('all')}>All</SuperButton>
                <SuperButton onClick={() => onClickHandler('high')}>High</SuperButton>
                <SuperButton onClick={() => onClickHandler('middle')}>Middle</SuperButton>
                <SuperButton onClick={() => onClickHandler('low')}>Low</SuperButton>
            </div>

        </div>
    )
}

export default Affairs
