import React,{ useState } from 'react';

import Main from "./routes/Main";
import APIs from './routes/APIs';
import logo from 'img/logo_omar.png';
import './Header.css';

export default function Header() {

    const [nav, setNav] = useState(0);

    const handleNav = (e) => {
        if (e.target.id === "nav-home") {
            setNav(0);
        } else if (e.target.id === "nav-about") {
            setNav(1);
        }
    }

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
                    <li id="nav-home" className="link" onClick={handleNav}>Inicio</li>
                    <li id="nav-about" className="link" onClick={handleNav}>APIs</li>
                </ul>
            </nav>
        </header>
        {nav === 0 ? <Main /> : <APIs />}
        </>
    );
}