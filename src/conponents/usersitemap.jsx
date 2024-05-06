import { useEffect, useState } from "react";
import webMethod from "../service/webMethod";
import apis from "../service/apis";
import { useDispatch, useSelector } from "react-redux";
import { useridInfo } from "./useridSlice";
export default function Uploadsitemap(){
    let userData = useSelector(state=>state.userLoginStore.value)
    let dispatch = useDispatch()
    const [userlist,setList] = useState([]);
    useEffect(()=>{
        userList()
    },[])
    let userList = async()=>{
        let response = await webMethod.getapi(apis.USERLIST,userData.token)
        console.log(response);
        {setList(response.data.data)}
    }
    let specificUserPost = async(id) =>{
        let response = await webMethod.getapi(apis.SPECIFICUSERPOSTLIST + id,userData.token)
        console.log(response.data.data)
        dispatch(useridInfo({id:id}))
    }
    return <>
        <button className="btn btn-danger" onClick={userList}>Show All</button>
        <ul style={{listStyle:"none",maxHeight:"82vh",overflowY:"scroll",border:"1px solid black"}}>
            {userlist.map(obj=><li onClick={()=>specificUserPost(obj.id)}>{obj.name}</li>)}
        </ul>
    </>
}