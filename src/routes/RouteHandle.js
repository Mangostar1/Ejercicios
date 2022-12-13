import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from "../pages/mainPage/Main";
import APIs from '../pages/apisPage/APIs';

export default function RouteHandle() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/apis' element={<APIs />}/>
                <Route path='*' element={<h1> Error 404</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}