import { useEffect, useState } from "react"
import webMethod from "../service/webMethod";
import apis from "../service/apis";
import { useSelector } from "react-redux";
import Uploadsitemap from "./usersitemap";
import UserPosts from "./userPosts";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default function UserList(){
    const [userlist,setList] = useState([]);
    let userData = useSelector(state=>state.userLoginStore.value)
    useEffect(()=>{
        // posts()
        // userList()
    },[])
    let userList = async()=>{
        let response = await webMethod.getapi(apis.USERLIST,userData.token)
        console.log(response);
        {setList(response.data.data)}
    }
    return <>
        <div className="container-fluid">
        <div className="row" style={{
            marginTop:"130px"
        }}>
            <div className="col-md-2">
                <Uploadsitemap></Uploadsitemap>
            </div>
            <div className="col-md-5 bg-secondary mx-5" style={{maxHeight:"85vh",overflowY:"scroll",border:"1px solid black"}}>
                <UserPosts></UserPosts>
            </div>
            <div className="col-md-3 bg-danger mx-5" style={{maxHeight:"45vh"}}>
                <textarea  className = "form-control" placeholder="text here..." cols={"70"}>

                </textarea>
            </div>
        </div>
        </div>
        {/* <table class="table table-dark table-hover">

</table> */}
    </>
}