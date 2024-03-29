import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Footer from "components/Footer";

export default function Login() {
    
    const [body, setBody] = useState({username: '', password: ''});
    let navigate = useNavigate();
    
    const inputChange = ({target}) => {
        const {name, value} = target
        setBody({
            ...body,
            [name]: value
        })
    }

    const sendLogin = async() => { //<-- Hace un post a la API con los datos del formulario, para validar si el usuario existe o no en la base de datos 

        axios.post('https://my-backend-expressjs.up.railway.app/api/login', body)
            .then(({data}) => {

                localStorage.setItem('auth', "yes");
                navigate("/dashboard");
                localStorage.getItem('auth');//<-- Para leer el contenido del 'auth' en el localStorage
                window.location.replace('');
            })
            .catch(({response}) => {
                console.error(response.data)
            })
    }

    return(
        <>
            <main className='min-h-screen-3/4 flex'>
                <form className="bg-gray-200 flex flex-col items-center justify-center px-6 py-8 w-60 m-auto gap-2 rounded shadow-lg">
                    <div>
                        <label htmlFor='user' className=''>User:</label>
                        <input type="text" placeholder="User" value={body.username} onChange={inputChange} name='username' id='user' className="bg-gray-100 py-1 px-2 w-full border rounded border-gray-300 focus:border-green-600 focus:outline-none" />
                    </div>

                    <div>
                        <label htmlFor='pass' className=''>Password:</label>
                        <input type="password" placeholder="Password" value={body.password} onChange={inputChange} name='password' id='pass' className="bg-gray-100 py-1 px-2 w-full border rounded border-gray-300 focus:border-green-600 focus:outline-none" />
                    </div>
                    <input type="button" value="Login" onClick={sendLogin} className="transition duration-800 ease-in-out bg-gray-300 hover:bg-gray-400 py-1 px-2 w-full rounded active:bg-green-600" />
                </form>
            </main>
            <Footer />
        </>
    )
}