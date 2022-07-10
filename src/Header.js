import React,{ useState } from 'react';

import './Header.css';
import Main from "./Main";

export default function Header() {

    const [nav, setNav] = useState(0);

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
                    <li className="list"><a className="link" href="https://omar-zavala.xyz/">Inicio</a></li>
                    <li className="list"><a className="link" href="https://omar-zavala.xyz/">APIs</a></li>
                </ul>
            </nav>
        </header>
        <Main />
        </>
    );
}