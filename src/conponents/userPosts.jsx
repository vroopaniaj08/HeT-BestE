import webMethod from "../service/webMethod";
import apis from "../service/apis";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function UserPosts(){
    let userData = useSelector(state=>state.userLoginStore.value)
    const [postlist,setpostlist] = useState([]);
    useEffect(()=>{
        posts()
    },[])
    let posts = async()=>{
        let response  = await webMethod.getapi(apis.POSTAPI,userData.token)
        console.log(response);
        {setpostlist(response.data.data)}
    }
    let commet = async() =>{

    }
    return <>
            {postlist.map(obj=>
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
                <input type = "text" placeholder = "Commet......." className="form-control my-2"></input>
                <button onClick={commet}className="btn btn-danger">post</button>
                </div><hr></hr>
            </div>)}
    </>
}