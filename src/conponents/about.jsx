export default function About() {
    return <>
        {/* <h1 className="text-center" style={{marginTop:'120px'}}>About</h1> */}
            <div className="container section-title" style={{marginTop:'120px'}}>
                <span className="">About Us<br /></span>
                <h2 className="">About Us<br /></h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container">

                <div className="row gy-4">

                    <div className="col-lg-6 order-1 order-lg-2" data-aos-delay="100">
                        <img src="assets/img/meet.jpeg" className="img-fluid" alt="" />
                    </div>

                    <div className="col-lg-6 order-2 order-lg-1 content" data-aos-delay="200">
                        <h3>Voluptatem dignissimos provident quasi corporis</h3>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                        </ul>
                        <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                    </div>

                </div>

            </div>
    </>
}