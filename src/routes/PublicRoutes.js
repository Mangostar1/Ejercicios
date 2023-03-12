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
import LoginHandle from 'components/LoginHandle';

export default function PublicRoutes() {

    const handleNavView = () => {
        const menu = document.querySelector('#menu');
        menu.classList.toggle('hidden');
    }


    return(
            <BrowserRouter>

                <header className="header">
                    <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
                        <div>
                        <a href="https://omar-zavala.xyz/">
                            <img id='logo' src={logo} alt='logo'/>
                        </a>
                        </div>
                
                        <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" className="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleNavView}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                
                        <div className="hidden w-full md:flex md:items-center md:w-auto z-30" id="menu">
                            <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
                                <li>
                                    <Link to='/' className="md:p-4 py-2 block hover:text-purple-400">Inicio</Link>
                                </li>
                                <li>
                                    <Link to='/apis' className="md:p-4 py-2 block hover:text-purple-400">APIs</Link>
                                </li>
                                <li>
                                    <LoginHandle />
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
    );
}