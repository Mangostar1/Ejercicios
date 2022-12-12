import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from "../pages/Main";
import APIs from '../pages/APIs';

export default function RouteHandle() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/apis' element={<APIs />}/>
            </Routes>
        </BrowserRouter>
    );
}