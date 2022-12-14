import React, { useState, useEffect } from 'react';

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
        <main>
            <form className="">
                <input type="text" placeholder="User" value={body.username} onChange={inputChange} name='username' className="bg-gray-100 py-1 px-2" />
                <input type="password" placeholder="Password" value={body.password} onChange={inputChange} name='password' className="bg-gray-100 py-1 px-2" />
                <input type="button" value="Login" onClick={sendLogin} className="bg-gray-300 py-1 px-2" />
            </form>
        </main>
    )
}