import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { loginInfo } from './loginSlice'
import { useRef } from "react"
function Menu() {
    let loginStatus = useSelector(state=>state.userLoginStore.value)
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let oldBox = useRef();
    let newBox = useRef();
    let idBox = useRef()
    let logout = (event) => {
        event.preventDefault();
        dispatch(loginInfo({name:undefined,token:undefined,isLogin:false,image:null}))
        navigate("/")
    }
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
        <header id="header" className="header fixed-top">

            <div className="topbar d-flex align-items-center">
                <div className="container d-flex justify-content-end justify-content-md-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:apoorvjain7222@gmail.com">apoorvjain7222@gmail.com</a></i>
                        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+91 94072 XXXXX</span></i>
                        <div className="social-links d-flex align-items-center justify-content-end">
                            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bi bi-github"></i></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
                <div className="branding">
                    <div className="container position-relative d-flex align-items-center justify-content-between">
                        <Link to="/" className=" d-flex align-items-center">
                            <h1 className="">HeT BestE</h1>
                        </Link>

                        <nav id="navmenu" className="navmenu">
                            {loginStatus.isLogin?<ul>
                                <li><Link to="/userlist">UserList</Link></li>
                                <li><Link onClick={logout}>Logout</Link></li>
                                    <li className="dropdown show"><Link to="/profile" className="dropdown-toggle" role="" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><div className="rounded-circle" style={{height:"30px",width:"30px"}}>
                                    <img className = "w-100 h-100 rounded-circle" src={loginStatus.image}></img>
                                    </div></Link>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <Link class="dropdown-item" to="/profile">Profile</Link>
                                        <Link class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">Another action</Link>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div></li>
                            </ul>
                            :
                            <ul>
                                <li><Link to="/" className="">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/team">Team</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/Login">Login</Link></li>
                            </ul>
                            }
                            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                        </nav>
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
                    </div>
                </div>
                
        </header>

    </>
}

export default Menu