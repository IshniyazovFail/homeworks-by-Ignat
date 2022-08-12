const initState = {
    theme:""
};
export type initStateType={
    theme:string
}

export const themeReducer = (state:initStateType = initState, action: changeThemeCType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE_COLOR":return{...state,theme:action.value}
        default: return state;
    }
};


type changeThemeCType =ReturnType<typeof changeThemeC>
export const changeThemeC = (value:string) => {
    return{
        type:"CHANGE_COLOR",
        value
    } as const
};