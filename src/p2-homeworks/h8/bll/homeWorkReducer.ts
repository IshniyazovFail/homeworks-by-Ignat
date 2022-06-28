import {UserType} from "../HW8";

type actionType = SortUpACType|SortDownACType|checkACType
export const homeWorkReducer = (state: UserType[], action: actionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if(action.payload==='up'){
                return [...state.sort((a,b)=>a.name. localeCompare(b.name))]
            }
            if(action.payload==='down'){
                return[...state.sort((a,b)=>b.name. localeCompare(a.name))]
            }
            return state
        }
        case'check':{
                // need to fix
                return state.filter(s=>s.age>18)
            }
        default:
            return state
        }
    }


    type SortUpACType=ReturnType<typeof SortUpAC>
    export const SortUpAC=()=>{
      return {
          type:"sort",
          payload:"up"
      } as const
}


type SortDownACType=ReturnType<typeof SortDownAC>
export const SortDownAC=()=>{
    return {
        type:"sort",
        payload:"down"
    } as const
}


type checkACType=ReturnType<typeof checkAC>
export const checkAC=()=>{
    return {
        type:"check",
        payload:18
    } as const
}