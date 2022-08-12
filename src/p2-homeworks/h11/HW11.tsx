import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import style from "./HW11.module.css"

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (value: number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={style.SuperRange}>
                <div className={style.value1}>{value1}</div>
                <SuperRange
                    value={value1}
                    max={value2}
                    onChangeRange={(value: number) => {
                        setValue1(value)
                    }}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={style.SuperDoubleRange}>
                <div className={style.value1}>{value1}</div>
                <SuperDoubleRange
                    min={value1}
                    max={value2}
                    onChangeRange={onChangeRange}
                    value={[value1, value2]}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <div className={style.value2}>{value2}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
