import { useRef, useState } from "react"
import webMethod from "../service/webMethod";
import apis from "../service/apis";

export default function Register() {
    let nameBox = useRef();
    let phoneBox = useRef();
    let emailBox = useRef();
    let passwordBox = useRef();
    let genderBox = useRef();
    const [msg,setmsg] = useState("");
    let isregister = async(event) => {
        event.preventDefault()
        let obj = {
            name:nameBox.current.value,
            phone:phoneBox.current.value,
            email:emailBox.current.value,
            password:passwordBox.current.value,
            gender:genderBox.current.value
        }
        let response = await webMethod.postapi(apis.REGISTERAPI,obj);
        console.log(response)
        if(response.data.status){
            {setmsg(response.data.message)}
        }
    }
    return <>
        <div className="d-flex justify-content-center align-items-center" style={{ backgroundImage: `url("./assets/img/registerpage.jpeg")`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

            <div className="container p-4 w-50" style={{ height: "fit-content", boxShadow: '1px 2px 4px 2px rgba(0, 0, 0, 0.3)', borderRadius: "10px", backgroundColor: `rgba(255,255,255,0.5)` }}>
                <h3 className='text-center'>Register or Signup</h3>
                <form onSubmit={isregister}>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <input type="text" ref={nameBox} className="form-control" placeholder="Enter Name here" style={{ backgroundColor: `rgba(255,255,255,0.7)` }}></input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <input type="text" ref={phoneBox} className="form-control" placeholder="Enter Phone Number here" style={{ backgroundColor: `rgba(255,255,255,0.7)` }}></input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <input type="text" ref={emailBox} className="form-control" placeholder="Enter Email here" style={{ backgroundColor: `rgba(255,255,255,0.7)` }}></input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <input type="text" ref={passwordBox} className="form-control" placeholder="Enter Password here" style={{ backgroundColor: `rgba(255,255,255,0.7)` }}></input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <input type="text" ref={genderBox} className="form-control" placeholder="Enter Gender here" style={{ backgroundColor: `rgba(255,255,255,0.7)` }}></input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <button className="btn btn-danger w-100" >Register or Signup</button> &nbsp;&nbsp;&nbsp;
                            <p className="text-center text-danger">{msg}</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}