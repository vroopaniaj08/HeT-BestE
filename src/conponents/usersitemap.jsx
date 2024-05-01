import { useEffect, useState } from "react";
import webMethod from "../service/webMethod";
import apis from "../service/apis";
import { useSelector } from "react-redux";
export default function Uploadsitemap(){
    let userData = useSelector(state=>state.userLoginStore.value)
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
        {setList(response.data.data)}
    }
    return <>
        <button className="btn btn-danger" onClick={userList}>Show All</button>
        <ul style={{listStyle:"none",maxHeight:"82vh",overflowY:"scroll",border:"1px solid black"}}>
            {userlist.map(obj=><li onClick={()=>specificUserPost(obj.id)}>{obj.name}</li>)}
        </ul>
    </>
}