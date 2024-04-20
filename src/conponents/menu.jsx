import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { loginInfo } from './loginSlice'
function Menu() {
    let loginStatus = useSelector(state=>state.userLoginStore.value)
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let logout = (event) => {
        event.preventDefault();
        dispatch(loginInfo({name:undefined,token:undefined,isLogin:false}))
        navigate("/")
    }
    return <>
        <header id="header" className="header fixed-top">

            <div className="topbar d-flex align-items-center">
                <div className="container d-flex justify-content-end justify-content-md-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
                        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
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
                                <li><Link to="/profile">View Profile</Link></li>
                                <li><Link to="/userlist">User List</Link></li>
                                <li><Link onClick={logout}>Logout</Link></li>
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

                    </div>
                </div>
                
        </header>

    </>
}

export default Menu