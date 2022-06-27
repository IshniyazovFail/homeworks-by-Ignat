import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.error}>
            <div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            {/*<img className={s.img} src="https://i.gifer.com/1bpS.gif"/>*/}
            <img className={s.img} src="https://i.gifer.com/EyoD.gif"/>
        </div>
    )
}

export default Error404
