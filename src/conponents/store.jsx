import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './loginSlice'
import useridInfo  from './useridSlice'

const store = configureStore({
    reducer:{
        userLoginStore:loginSlice,
        userIdStore:useridInfo
    }
})

store.subscribe(()=>{
    let obj1 = store.getState().userLoginStore.value
    let obj2 = store.getState().userIdStore.value
    console.log("from store",obj1)
    localStorage.setItem("id",JSON.stringify(obj2))

    localStorage.setItem("loginObj",JSON.stringify(obj1))
})
export default store;