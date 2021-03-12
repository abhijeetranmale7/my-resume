import React from 'react'
import Layout from '../Layout'

const About = () => {
    return (
        <Layout>
            <main id="main">
                <section id="about" className="about">
                    <div className="container">

                        <div className="section-title">
                            <h2>About</h2>
                            <p>Willing to work in a challenging position with a growing organization where I can utilize my technical and interpersonal skills to serve the organization and enhance the same.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-right">
                                <img src="assets/img/profile.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <h3>Software Developer</h3>
                                {/* <p className="font-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p> */}
                                <div className="row mb-3 mt-3">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>7 Sep 1997</span></li>
                                            {/* <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li> */}
                                            <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 9545895755</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Nashik, Maharashtra</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BE (Computer Engineering)</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>abhijeetranmale@gmail.com</span></li>
                                            {/* <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li> */}
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                2+ years of experience of software Development and Technology skills. Proven ability to leverage full-stack knowledge and experience to build interactive and user-centered website. I am a driven individual with the ability to adapt to any situation and proven potantial to grow self and others.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default About
