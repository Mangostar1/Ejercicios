import { Link } from 'react-router-dom';

export default function LoginHandle() {

    const logout = () => {
        localStorage.clear();
    }

    if (localStorage.hasOwnProperty('auth') === true) {
        return <Link to='/' onClick={logout} reloadDocument className='bg-red-600 text-white py-0.5 px-1 rounded hover:bg-red-800 active:bg-red-500'>Logout</Link>
    }
    return <Link to='/login' className='bg-green-600 text-white py-0.5 px-1 rounded hover:bg-green-800 active:bg-green-500'>Login</Link>
}