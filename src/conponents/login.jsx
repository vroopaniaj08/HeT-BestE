import { useRef } from "react"
import { Link } from "react-router-dom";
import WebMethod from "../service/webMethod";
import apis from "../service/apis";
// import { useState } from "react";
import { useDispatch } from 'react-redux'
import { loginInfo } from "./loginSlice";
import { useNavigate } from "react-router-dom";
export default function Login(props) {

    let emailBox = useRef();
    let passwordBox = useRef();
    // const [msg, setmsg] = useState("");
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let islogin = async (event) => {
        props.setProgress(0);
        event.preventDefault();
        let obj = {
            email: emailBox.current.value,
            password: passwordBox.current.value
        }
        
        let i=5
        while(i<95){
            props.setProgress(i);
            i+=1
        }
        let response = await WebMethod.postapi(apis.LOGINAPI, obj);
        console.log(response)
        if (response.data.status) {
            dispatch(loginInfo({ name: response.data.data.name, token: response.data.data.token, isLogin: true ,image:response.data.data.image}))
            // { setmsg(response.data.message) }
            navigate("/profile")
        }
        props.setProgress(100);
    }
    return <>
        <div className="d-flex justify-content-center align-items-center" style={{ backgroundImage: `url("./assets/img/loginpage2.jpeg")`, height: "100vh", backgroundRepeat: "no-repeat",backgroundSize:"cover" }}>

            <div className="container p-4 w-50" style={{ height: "fit-content", boxShadow: '1px 2px 4px 2px rgba(0, 0, 0, 0.3)', borderRadius: "10px",backgroundColor:`rgba(255,255,255,0.5)` }}>
                <h3 className='text-center'>Login page</h3>
                <form onSubmit={islogin}>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <input type="text" ref={emailBox} className="form-control" placeholder="Enter email here" style={{backgroundColor:`rgba(255,255,255,0.7)`}}></input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <input type="text" ref={passwordBox} className="form-control" placeholder="Enter Password here"  style={{backgroundColor:`rgba(255,255,255,0.7)`}}></input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <button className="btn btn-danger w-100" >Login</button> &nbsp;&nbsp;&nbsp;
                            {/* {msg} */}
                            <Link to='/register' className="text-center w-100 d-block fw-bold">Sign Up or Register</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}