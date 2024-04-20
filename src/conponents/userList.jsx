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
        <div className="container">
        <table className="table table-striped-row table-hover" style={{marginTop:"130px"}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                </tr>
            </thead>
            <tbody>
            {userlist.map(obj=><tr>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
            </tr>)}
            </tbody>
        </table>
        </div>
        {/* <table class="table table-dark table-hover">

</table> */}
    </>
}