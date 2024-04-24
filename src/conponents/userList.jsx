import { useEffect, useState } from "react"
import webMethod from "../service/webMethod";
import apis from "../service/apis";
import { useSelector } from "react-redux";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default function UserList(){
    const [userlist,setList] = useState([]);
    let userData = useSelector(state=>state.userLoginStore.value)
    useEffect(()=>{
        userList()
    },[])
    let userList = async()=>{
        let response = await webMethod.getapi(apis.USERLIST,userData.token)
        console.log(response);
        {setList(response.data.data)}
    }
    return <>
        <div className="container-fluid" style={{maxHeight:"95vh",overflowY:"scroll"}}>
        <div className="row" style={{
            marginTop:"130px"
        }}>
            <div className="col-md-2">
                <ul style={{listStyle:"none"}}>

                {userlist.map(obj=><li>{obj.name}</li>)

                }
                </ul>
            </div>
            <div className="col-md-4 offset-1 bg-danger">

            </div>
            <div className="col-md-4 offset-1 bg-danger">

            </div>
        </div>
        </div>
        {/* <table class="table table-dark table-hover">

</table> */}
    </>
}