import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './loginSlice'

const store = configureStore({
    reducer:{
        userLoginStore:loginSlice
    }
})

store.subscribe(()=>{
    let obj = store.getState().userLoginStore.value
    console.log("from store",obj)

    localStorage.setItem("loginObj",JSON.stringify(obj))
})
export default store;