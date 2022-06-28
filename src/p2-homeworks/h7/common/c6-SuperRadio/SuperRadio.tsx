import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import style from "./SuperRadio.module.css"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if(onChange){onChange(e)}
        if(onChangeOption){
            onChangeOption(e.currentTarget.value)
        }
    }

// map options with key
    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label className={style.label} key={name + '-' + i}>
            <input
                type={'radio'}
                name={'superRadio'}
                value={o}
                onChange={onChangeCallback}
                checked={value===o}

            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
