import React, {useEffect, useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestsAPI} from "./api/RequestsAPI";
import style from "./Request.module.css"

export const Request = () => {
    const [status, setStatus] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('Смотреть результат здесь')
    const [error, setError] = useState<boolean>(false)

    const onClickHandler = () => {
        RequestsAPI.getRequest(status).then(res => {
            setTitle(res.data.errorText)
            setError(false)

        })
            .catch((error) => {
                setTitle(error.response ? error.response.data.errorText : error.message);
                setError(true)
            })
    }
    return (
        <div>
            <div className={error ? style.red : style.blue}>{title} </div>

            <SuperCheckbox onChange={(e) => setStatus(e.currentTarget.checked)}/>
            <SuperButton onClick={onClickHandler}>Отправить запрос</SuperButton>
        </div>
    );
};

