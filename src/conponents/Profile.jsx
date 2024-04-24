import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import webMethod from "../service/webMethod";
import apis from "../service/apis";
import loginInfo from "./loginSlice";
export default function Profile() {

    let userData = useSelector(state => state.userLoginStore.value)
    let imageBox = useRef();
    let oldBox = useRef();
    let newBox = useRef();
    let idBox = useRef()
    let dispatch = useDispatch(); 
    const [image, setimage] = useState("./assets/img/default.jpg")
    const [resetmsg,setresetmsg ] = useState("")
    useEffect(()=>{
        loginDetail()
    },[])
    let loginDetail = async() =>{
        console.log(apis.LOGININFOAPIS)
        let response = await webMethod.getapi(apis.LOGININFOAPIS,userData.token);
        if(response.data.data.image !== null){
            {setimage(response.data.data.image)}
            dispatch(loginInfo({name:userData.name,token:userData.token,isLogin:userData.isLogin,image:response1.data.data.image}))
        }
        // console.log(response);
    }


    let uploadpic = async (event) => {
        event.preventDefault();
        imageBox.current.click();
        
        const profileImage = new FormData();
        profileImage.append("image", imageBox.current.files[0]);
        
        console.log(profileImage.get("image")); // This will log the entire FormData object
        
        try {
            let response = await webMethod.putapiWithData(apis.USERUPLOADPIC, profileImage, userData.token);
            if(response.data.status){
                let response1 = await webMethod.getapi(apis.LOGININFOAPIS,userData.token)
                console.log(response1)
                {setimage(response1.data.data.image)}
                dispatch(loginInfo({name:userData.name,token:userData.token,isLogin:userData.isLogin,image:response1.data.data.image}))
            }
            // console.log(response);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    }

    // upload image 
    let functionimage = (event) => {
        event.preventDefault()
        let firstFile = event.target.files[0];
        console.log(firstFile);
        dispatch(loginInfo({name:userData.name,token:userData.token,isLogin:userData.isLogin,image:URL.createObjectURL(firstFile)}))
        // {setimage(URL.createObjectURL(firstFile))};
    }

    // change password
    let doneupdate = async(event) =>{
        event.preventDefault();
        let obj = {
            "old_password":oldBox.current.value,
            "new_password":newBox.current.value
        }
        let response = await webMethod.putapiwithtoken(apis.USERCHANGEPASSWORD,obj,userData.token)
        console.log(response)
        {setresetmsg(response.data.message)}
        event.target.reset();
    }
    
    return <>
        <div className="" style={{ padding: "130px", backgroundImage: `url("./assets/img/profilePhoto.jpeg")`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="row my-2 p-3" style={{ backgroundColor: `rgba(255,255,255,0.7)`, borderRadius: "10px" }}>
                <div className="col-md-4">
                    <form onChange={uploadpic}>
                        <div className="rounded-circle mb-2" style={{ border: '1px solid black', width: "70px", height: "70px" }}>
                            <img src={image} className=" w-100 h-100 rounded-circle"></img>
                        </div>
                        <input className="form-control my-2" ref={imageBox} onChange={functionimage} type="file"></input>
                        {/* <button type="submit" className="btn btn-danger" onClick={functionimage}>Upload Image</button> */}
                    </form>
                </div>
                <div className="col-md-6 offset-2">
                    <p>{userData.name}</p>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Reset Password
                    </button>&nbsp;&nbsp;&nbsp;
                    {resetmsg}
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Format Password</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form onSubmit={doneupdate}>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <input type="text" ref={oldBox} className="form-control" placeholder="Enter old password here"></input>
                                    <input type="text" ref={idBox} className="form-control d-none" placeholder="Enter id here"></input>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <input type="text" ref={newBox} className="form-control" placeholder="Enter new password here"></input>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <button type="submit" data-bs-dismiss="modal" className="btn btn-primary w-50">Reset Detail</button> &nbsp;&nbsp;&nbsp;
                                    {/* {msg} */}
                                </div>
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    </>
}
// let uploadpic = async(event) => {
    //     event.preventDefault()
    //     console.log("hello")
    //     const profileImage = new FormData()
    //     profileImage.append("image",imageBox.current.files[0])
    //     profileImage.append("id","1")
    //     console.log(profileImage.id)
    //     console.log(profileImage)
    //     let response = await webMethod.putapiWithData(apis.USERUPLOADPIC,profileImage,userData.token)
    //     console.log(response)
    // }
    // let resetfunction = async () => {
        //     let response = await webMethod.putapiwithtoken(apis.USERCHANGEPASSWORD,)
        // }
        
        // profileImage.append("id", "1");
        
        // Accessing FormData fields
        // console.log(profileImage.get("id")); // Correct way to access FormData fields