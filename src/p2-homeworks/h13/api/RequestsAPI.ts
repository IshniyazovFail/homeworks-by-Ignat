import axios from "axios";


export const RequestsAPI={
    getRequest:(checked:boolean)=>{
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test',{success: checked} )
    },

}