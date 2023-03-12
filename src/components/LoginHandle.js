import { Link } from 'react-router-dom';

export default function LoginHandle() {

    const logout = () => {
        localStorage.clear();
    }

    if (localStorage.hasOwnProperty('auth') === true) {
        return <Link to='/' onClick={logout} reloadDocument className="md:p-4 py-2 block hover:text-purple-400 text-purple-500">Logout</Link>
    }
    return <Link to='/login' className="md:p-4 py-2 block hover:text-purple-400 text-purple-500">Login</Link>
}