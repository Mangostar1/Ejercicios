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

    const sendLogin = async() => {
        console.log(body.username, body.password);

        try {
            await fetch('https://learn-backend-node-express-production.up.railway.app/api/login', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": `${body.username}`,
                    "password": `${body.password}`
                })
            });
        } catch (error) {
            console.error(error, 'Ocurrio un error 😒');
        }

    }

    return(
        <>
            <main className=''>
                <form className="bg-gray-200 flex flex-col items-center justify-center px-6 py-8 w-60 m-auto gap-2">
                    <div>
                        <label htmlFor='user' className=''>User:</label>
                        <input type="text" placeholder="User" value={body.username} onChange={inputChange} name='username' id='user' className="bg-gray-100 py-1 px-2 w-full border rounded border-gray-300 focus:border-green-600 focus:outline-none" />
                    </div>

                    <div>
                        <label htmlFor='pass' className=''>Password:</label>
                        <input type="password" placeholder="Password" value={body.password} onChange={inputChange} name='password' id='pass' className="bg-gray-100 py-1 px-2 w-full border rounded border-gray-300 focus:border-green-600 focus:outline-none" />
                    </div>
                    <input type="button" value="Login" onClick={sendLogin} className="transition duration-500 ease-in-out bg-gray-300 hover:bg-gray-400 py-1 px-2 w-full rounded" />
                </form>
            </main>
            <Footer />
        </>
    )
}