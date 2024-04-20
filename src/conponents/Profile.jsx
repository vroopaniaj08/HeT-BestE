import { useRef } from "react"
import { useSelector } from "react-redux"
import webMethod from "../service/webMethod";
import apis from "../service/apis";

export default function Profile(){
    
    let userData = useSelector(state=>state.userLoginStore.value)
    let imageBox = useRef();
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

    let uploadpic = async (event) => {
        event.preventDefault();
      
    
        const profileImage = new FormData();
        profileImage.append("image", imageBox.current.files[0]);
        // profileImage.append("id", "1");
    
        // Accessing FormData fields
        // console.log(profileImage.get("id")); // Correct way to access FormData fields
    
        console.log(profileImage.get("image")); // This will log the entire FormData object
    
        try {
            let response = await webMethod.putapiWithData(apis.USERUPLOADPIC, profileImage, userData.token);
            console.log(response);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    }
    
    return <>
        <p style={{marginTop:"130px"}}>Hello</p>
        <p>{userData.name}</p>
        <form onSubmit={uploadpic}>

        <input className="form-control" ref={imageBox} type="file"></input>
        <button type= "submit" className="btn btn-danger">Upload Image</button>
        </form>
    </>
}