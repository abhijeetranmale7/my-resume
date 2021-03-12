import React from 'react'
import Layout from '../Layout'
import Typed from 'react-typed';

const Homepage = () => {
    return (
        <Layout>
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">
                    <h1>Abhijeet Ranmale</h1>
                    <p>I'm <Typed
                        className="typed"
                        strings={['Developer']}
                        typeSpeed={100}
                        backSpeed={100}
                        loop
                    /></p>
                </div>
            </section>
        </Layout>
    )
}

export default Homepage
