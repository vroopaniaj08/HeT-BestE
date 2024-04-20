import { Link } from "react-router-dom";

export default function Home() {
    return <>
    {/* <p className="text-center" style={{marginTop:"150px"}}>hi</p> */}
    <div style={{backgroundImage:`url("./assets/img/homepage.jpeg")`,width:"100%",height:"100vh",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            {/* <img src="./assets/img/hero-bg.jpg" style={{width:"100%",height:"100vh"}} alt="" /> */}

                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-lg-4 col-md-4 col-sm-8"  style={{marginTop:"250px",zIndex:"2"}}>
                            <h2 className="text-white">Welcome to HeT BestE</h2>
                            <p className="text-light">Inspiring connections, celebrating diversity, empowering voices, shaping tomorrow together.</p>
                            <Link to="/about" className="btn-get-started"><button className="btn btn-outline-danger">Get Started</button></Link>
                        </div>
                    </div>
                </div>
     </div>
    </>
}