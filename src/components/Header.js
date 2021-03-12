import React from 'react'
import { Link, withRouter } from "react-router-dom"

const Header = ({ history }) => {
    return (
        <header id="header">
            <div className="d-flex flex-column">

                <div className="profile">
                    <img src="assets/img/profile.jpg" alt="" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">Abhijeet Ranmale</a></h1>
                    <div className="social-links mt-3 text-center">
                        {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a> */}
                        <a href="https://www.facebook.com/abhijeet.ranmale.1/" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="https://www.instagram.com/abhijeet_ranmale/" className="instagram" target="_blank"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus" target="_blank"><i className="bx bxl-whatsapp"></i></a>
                        <a href="https://www.linkedin.com/in/abhijeet-ranmale-690aa7167" className="linkedin" target="_blank"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li><Link to="/" className={history.location.pathname === "/" ? "nav-link scrollto active" : "nav-link scrollto"}><i className="bx bx-home"></i> <span>Home</span></Link></li>
                        <li><Link to="/about" className={history.location.pathname === "/about" ? "nav-link scrollto active" : "nav-link scrollto"}><i className="bx bx-user"></i> <span>About</span></Link></li>
                        <li><Link to="/skills" className={history.location.pathname === "/skills" ? "nav-link scrollto active" : "nav-link scrollto"}><i className="bx bx-file-blank"></i> <span>Skills</span></Link></li>
                        <li><Link to="/resume" className={history.location.pathname === "/resume" ? "nav-link scrollto active" : "nav-link scrollto"}><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li>
                        <li><Link to="/portfolio" className={history.location.pathname === "/portfolio" ? "nav-link scrollto active" : "nav-link scrollto"}><i className="bx bx-book-content"></i> <span>Portfolio</span></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default withRouter(Header)
