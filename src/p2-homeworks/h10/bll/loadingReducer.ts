const initState = {
    isLoading: false
}

export type loadingType = {
    isLoading: boolean
}

type actionType = loadingACType
export const loadingReducer = (state: loadingType = initState, action: actionType): loadingType => { // fix any
    switch (action.type) {
        case "LOADING":
            return {...state, isLoading: action.loading}
        default:
            return state
    }
}

type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean) => {
    return {
        type: "LOADING",
        loading
    } as const
} // fix any