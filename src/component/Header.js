import React from 'react'
import Navigation from './Navigation'

export default function Header() {
  return (
    <>
    <header class="header-section">
        <div class="container">
            <div class="header-wrapper">
                <div class="logo">
                    <a href="/">
                        <img src="assets/images/logo/logo.png" alt="logo"/>
                    </a>
                </div>
                <Navigation/>
                <div class="header-bar d-lg-none">
					<span></span>
					<span></span>
					<span></span>
				</div>
            </div>
        </div>
    </header>
    </>
  )
}
