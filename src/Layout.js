import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
            <Header />
            <div>
                {
                    children
                }
            </div>
            <Footer />
            <a className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </div>
    )
}

export default Layout
