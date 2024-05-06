import { createSlice } from "@reduxjs/toolkit";

const slice =  createSlice({
    name:"userId",
    initialState:{
        value:{id:undefined}
    },
    reducers:{
        useridInfo:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const { useridInfo } = slice.actions
export default slice.reducer