import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/Header'
import Footer from '../component/Footer'

export default function Layout() {
  return (
    <>
    {/* <div>
  <div className="preloader">
    <div className="preloader-inner">
      <div className="preloader-icon">
        <span />
        <span />
      </div>
    </div>
  </div>
  <div className="overlay" />
  <a href="#0" className="scrollToTop">
    <i className="fas fa-angle-up" />
  </a>
</div> */}

    
    <Header/>

    <Outlet/>

    <Footer/>
    </>
  )
}
