import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, loadingType} from "./bll/loadingReducer";
import preloader from "./images/preloader.gif"
import style from "./HW10.module.css"

function HW10() {
    const state = useSelector<AppStoreType, loadingType>(state => state.loading)
    const dispatch = useDispatch()
    const loading = false

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(loading)), 3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {state.isLoading
                ? (
                    <div className={style.preloader}><img src={preloader}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
