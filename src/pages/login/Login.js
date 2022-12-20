import React, { useState } from 'react';
import axios from 'axios';

import Footer from "components/Footer";
import { Navigate } from 'react-router-dom';

export default function Login() {
    
    const [body, setBody] = useState({username: '', password: ''});
    const [user, setUser] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const inputChange = ({target}) => {
        const {name, value} = target
        setBody({
            ...body,
            [name]: value
        })
    }

    const sendLogin = async() => {

        axios.post('https://learn-backend-node-express-production.up.railway.app/api/login', body)
            .then(({data}) => {
                console.log(data);
                
                setUser(data.username);
                setIsLogged(true)

                console.log(user, isLogged);
            })
            .catch(({response}) => {
                console.log(response.data)
            })
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