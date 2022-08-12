import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, initStateType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some','blue','pink'];

function HW12() {
    const theme = useSelector<AppStoreType, initStateType>(state => state.theme);
    const dispatch = useDispatch();
    const onChangeCallback = (value: string) => {
        dispatch(changeThemeC(value))
    }
    return (
        <div className={s[theme.theme]}>
            <hr/>
            <div className={s[theme.theme + '-text']}>
                homeworks 12
            </div>
            <SuperSelect onChangeOption={onChangeCallback} options={themes}/>
            <hr/>
        </div>
    );
}

export default HW12;
