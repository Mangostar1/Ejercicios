import React,{ useState } from 'react';

import Main from "./Main";
import APIs from './APIs';
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
/* logo ira en 80 * 25 */
    return(
        <>
        <header className="header">
            <nav className="nav">
                <div className="logo-content">
                    <a className="link-logo" href="https://omar-zavala.xyz/">
                        <img src="https://picsum.photos/80/25" />
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