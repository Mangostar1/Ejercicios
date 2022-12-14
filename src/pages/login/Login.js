import React, { useState, useEffect } from 'react';

export default function Login() {
    
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    
    const handleLogin = () => {
        let userInput = document.querySelector('#userInput').value;
        let passwordInput = document.querySelector('#passwordInput').value;
        setUser(userInput);
        setPassword(passwordInput);
        console.log(user, password);
    }

    return(
        <main>
            <form className="">
                <input type="text" placeholder="User" id="userInput" className="bg-gray-100 py-1 px-2" />
                <input type="password" placeholder="Password" id="passwordInput" className="bg-gray-100 py-1 px-2" />
                <input type="button" value="Login" onClick={handleLogin} className="bg-gray-300 py-1 px-2" />
            </form>
        </main>
    )
}