import webMethod from "../service/webMethod";
import apis from "../service/apis";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
export default function UserPosts(){
    let userData = useSelector(state=>state.userLoginStore.value)
    let commentBox = useRef()
    const [postlist,setpostlist] = useState([]);
    useEffect(()=>{
        posts()
    },[])
    let posts = async()=>{
        let response  = await webMethod.getapi(apis.POSTAPI,userData.token)
        console.log(response);
        {setpostlist(response.data.data)}
    }

    // comment
    let commet = async(index) =>{
        let obj = {
            "comment":commentBox.current.value,
            "post":index
        }
        let response = await webMethod.postapiwithtoken(apis.COMMENTSAVE,obj,userData.token)
        console.log(response)
    }

    return <>
            {postlist.map((obj)=>
            <div className="p-2">
                <div className="d-flex align-items-center justify-content-between">
                    <div>{obj.postBy.name}</div>
                    <div>{obj.postdate}</div>
                </div>
                <p>{obj.message}</p>
                {obj.postfile?
                <div style={{width:"300px",height:"200px",borderRadius:"10px"}} >
                    <img src={obj.postfile} className="w-100 h-100" style={{borderRadius:"10px"}}></img>
                </div>
                :
                ""
                }
                <div className="d-flex align-item-center justify-content-between">
                <input type = "text" ref={commentBox} placeholder = "Commet......." className="form-control my-2"></input>
                <button onClick={()=>commet(obj.id)}className="btn btn-danger">post</button>
                </div><hr></hr>
            </div>)}
    </>
}