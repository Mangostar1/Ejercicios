import React from 'react';

import logo from 'assets/img/logo_omar.png';
import './Header.css';

export default function Header() {

    return(
        <>
        <header className="header">
            <nav className="nav">
                <div className="logo-content">
                    <a className="link-logo" href="https://omar-zavala.xyz/">
                        <img id='logo' src={logo} alt='logo'/>
                    </a>
                </div>
                <ul className="menu">
                    <li id="nav-home" className="link" ><a href='/'>Inicio</a></li>
                    <li id="nav-about" className="link" ><a href='/apis'>APIs</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
}