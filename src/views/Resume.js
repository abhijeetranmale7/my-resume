import React from 'react'
import Layout from '../Layout'

const Resume = () => {
    return (
        <Layout>
            <main id="main">
                <section id="resume" className="resume">
                    <div className="container">

                        <div className="section-title">
                            <h2>Resume</h2>
                            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                        </div>

                        <div className="row">
                            <div className="col-lg-6" data-aos="fade-up">
                                <h3 className="resume-title">Sumary</h3>
                                <div className="resume-item pb-0">
                                    <h4>Abhijeet Ranmale</h4>
                                    <p><em>Innovative and deadline-driven Software Developer with 2+ years of experience. Passionate and always curious, experimenting with different technologies & believe in continuous learning.</em></p>
                                    <ul>
                                        <li>Nashik, Maharashtra, India</li>
                                        <li>+91 9545895755</li>
                                        <li>abhijeetranmale@gmail.com</li>
                                    </ul>
                                </div>

                                <h3 className="resume-title">Education</h3>
                                <div className="resume-item">
                                    <h4>BE - Computer Engineering</h4>
                                    <h5>2016 - 2019</h5>
                                    <p><em>R. H. Sapat College of engineering, Nashik</em></p>
                                    {/* <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p> */}
                                </div>
                                <div className="resume-item">
                                    <h4>Diploma in Computer Technology</h4>
                                    <h5>2013 - 2016</h5>
                                    <p><em>K. K. Wagh Polytechnic, Nashik</em></p>
                                    {/* <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p> */}
                                </div>
                                <div className="resume-item">
                                    <h4>SSC</h4>
                                    <h5>2012 - 2013</h5>
                                    <p><em>Maratha High School, Nashik</em></p>
                                    {/* <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p> */}
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="resume-title">Professional Experience</h3>
                                <div className="resume-item">
                                    <h4>Software Developer</h4>
                                    <h5>2019 - Present</h5>
                                    <p><em>Eluminous Technologies Pvt. Ltd., Nashik</em></p>
                                    <ul>
                                        <li>Software developer with the multiple skillset.</li>
                                        <li>Managed up to 3 projects or tasks at a given time while under pressure.</li>
                                        <li>Experience with enterprise projects and worked on more than 10 projects till now.</li>
                                        <li>Product Development Hands-on.</li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>Internship in Software Development</h4>
                                    <h5>2018 - 2019</h5>
                                    <p><em>Weoto Tech Labs, Nashik</em></p>
                                    <ul>
                                        <li>Learned the Javascript Frameworks.</li>
                                        <li>While learning I have created the mobile application for the firm.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default Resume
