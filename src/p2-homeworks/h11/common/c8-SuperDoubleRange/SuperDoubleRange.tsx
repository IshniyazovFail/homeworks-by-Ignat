import React, {ChangeEvent} from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange: (value: number[]) => void
    value: [number, number]
    min:number
    max:number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,value,min, max,

        // min, max, step, disable, ...
    }
) => {
    const minDistance = 10;
    // сделать самому, можно подключать библиотеки
    const [value1, setValue1] = React.useState<number[]>([min, max]);
    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);

        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
        onChangeRange(value1)
    };

    function valuetext(value: number) {
        return `${value}`;
    }
    return (
         <Box sx={{ width: 150}}>
            <Slider
                getAriaLabel={() => 'Range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disabled={min>=max}
            />
        </Box>
    )
}

export default SuperDoubleRange
