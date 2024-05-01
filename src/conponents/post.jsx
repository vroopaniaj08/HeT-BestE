import { useRef, useState } from "react"
import webMethod from "../service/webMethod";
import apis from "../service/apis";
import { useSelector } from "react-redux";

export default function Post(){
    let userData = useSelector(state=>state.userLoginStore.value)
    let postBox = useRef()
    let imageBox = useRef();
    const [pict,setpict] = useState("")
    let addPost= async(event)=>{
        // props.setProgress(0);
        event.preventDefault();
        const picture = new FormData()
        // props.setProgress(30)
        picture.append("image", imageBox.current.files[0]);
        picture.append("message",postBox.current.value)
        console.log(picture.get("image"));
        // props.setProgress(70)
        try{
            let response = await webMethod.postapiwithtoken(apis.USERPOSTSAVE,picture,userData.token)
            // props.setProgress(100)
            console.log(response)
        }
        catch(error){
            console.log(error)
        }
    }
    let showimage = (event)=>{
        event.preventDefault()
        let image = event.target.files[0]
        console.log(image)
        {setpict(URL.createObjectURL(image))};
    }
    return<>
        <div className="d-flex justify-content-center align-items-center" style={{ backgroundImage: `url("./assets/img/loginpage2.jpeg")`, height: "100vh", backgroundRepeat: "no-repeat",backgroundSize:"cover" }}>
<div className="container p-4 w-25" style={{ height: "fit-content", boxShadow: '1px 2px 4px 2px rgba(0, 0, 0, 0.3)', borderRadius: "10px",backgroundColor:`rgba(255,255,255,0.5)` }}>
    <h3 className='text-center'>Add Post</h3>
    <form onSubmit={addPost}>
        <div className="row mt-3">
            <div className="col-md-12">
                <div className="W-100 text-center">
                <label htmlFor="postimage" className="bi bi-images bg-white p-3 rounded" style={{cursor:"pointer"}}>Upload
                <img src={pict} style={{backgroundRepeat:"no-repeat",backgroundSize:"cover"}}></img>
                </label>
                </div>
                <input type="file" id = "postimage" ref={imageBox} onChange={showimage} className="form-control d-none" placeholder="Enter Password here"  style={{backgroundColor:`rgba(255,255,255,0.7)`}}></input>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-12">
                <textarea type="text" ref={postBox} required className="form-control" placeholder="Enter message" style={{backgroundColor:`rgba(255,255,255,0.7)`}}></textarea>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-12">
                <button className="btn btn-danger w-100" >Add post</button> &nbsp;&nbsp;&nbsp;
                {/* {msg} */}
                {/* <Link to='/register' className="text-center w-100 d-block fw-bold">Sign Up or Register</Link> */}
            </div>
        </div>
    </form>
</div>
</div>
    </>
}