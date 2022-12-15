import React, { useState } from 'react';

import Footer from "components/Footer";

export default function Login() {
    
    const [body, setBody] = useState({username: '', password: ''});
    
    const inputChange = ({target}) => {
        const {name, value} = target
        setBody({
            ...body,
            [name]: value
        })
    }

    const sendLogin = () => {
        console.log(body.username, body.password);
    }

    return(
        <>
            <main className=''>
                <form className="bg-red-600 flex flex-col items-center justify-center px-6 py-8 w-60 m-auto">
                    <input type="text" placeholder="User" value={body.username} onChange={inputChange} name='username' className="bg-gray-100 py-1 px-2 border-solid border-1 border-light-blue-500" />
                    <input type="password" placeholder="Password" value={body.password} onChange={inputChange} name='password' className="bg-gray-100 py-1 px-2 border-solid border-1 border-light-blue-500" />
                    <input type="button" value="Login" onClick={sendLogin} className="bg-gray-300 hover:bg-gray-400 py-1 px-2" />
                </form>
            </main>
            <Footer />
        </>

    )
}