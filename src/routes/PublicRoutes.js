import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import logo from 'assets/img/logo_omar.png';
import './Header.css'

import Main from "../pages/mainPage/Main";
import APIs from '../pages/apisPage/APIs';
import Login from '../pages/login/Login';
import Dashboard from '../pages/dashboard/Dashboard';
import Error404 from 'pages/404/Error404';
import PrivateRoutes from './PrivateRoutes';

export default function PublicRoutes() {
    return(
        <>
            <BrowserRouter>

                <header className="header">
                    <nav className="nav">
                        <div className="logo-content">
                            <a className="link-logo" href="https://omar-zavala.xyz/">
                                <img id='logo' src={logo} alt='logo'/>
                            </a>
                        </div>
                        <div className='menu-content'>
                            <ul className="menu">
                                <li id="nav-home" className="link" >
                                    <Link to='/'>Inicio</Link>
                                </li>
                                <li id="nav-about" className="link" >
                                    <Link to='/apis'>APIs</Link>
                                </li>
                            </ul>
                            <ul className="menu">
                                <li id="nav-home" className="link" >
                                    <Link to='/login'>Login</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={<Main />}/>
                    <Route path='/apis' element={<APIs />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/dashboard' element={<PrivateRoutes> <Dashboard /> </PrivateRoutes>}/>
                    <Route path='*' element={<Error404 />}/>
                </Routes>
                
            </BrowserRouter>
        </>
    );
}