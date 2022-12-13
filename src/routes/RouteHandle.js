import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from "../pages/mainPage/Main";
import APIs from '../pages/apisPage/APIs';
import Error404 from 'pages/404/Error404';

export default function RouteHandle() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/apis' element={<APIs />}/>
                <Route path='*' element={<Error404 />}/>
            </Routes>
        </BrowserRouter>
    );
}