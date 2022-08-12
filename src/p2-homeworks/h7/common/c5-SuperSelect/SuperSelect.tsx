import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import style from "./SuperSelect.module.css"



type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options? options.map((el,index)=><option className={style.option} key={index} value={el} >{el}</option>):[]; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if(onChange){onChange(e)}
        if(onChangeOption) {onChangeOption(e.currentTarget.value)}
    }

    return (
        <select className={style.select} onChange={onChangeCallback} {...restProps}>
         {mappedOptions}
        </select>

    )
}

export default SuperSelect
