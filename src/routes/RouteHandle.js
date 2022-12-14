import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from "../pages/mainPage/Main";
import APIs from '../pages/apisPage/APIs';
import Login from '../pages/login/Login';
import Dashboard from '../pages/dashboard/Dashboard';
import Error404 from 'pages/404/Error404';

export default function RouteHandle() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/apis' element={<APIs />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/dashboard' element={<Dashboard />}/>
                <Route path='*' element={<Error404 />}/>
            </Routes>
        </BrowserRouter>
    );
}