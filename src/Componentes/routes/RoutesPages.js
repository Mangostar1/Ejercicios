import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from "./Main";
import APIs from './APIs';

export default function RoutesPages() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/apis' element={<APIs />}/>
            </Routes>
        </BrowserRouter>
    );
}