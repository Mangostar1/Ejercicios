import { Link } from 'react-router-dom';

export default function LoginHandle() {

    const logout = () => {
        localStorage.clear();
    }

    if (localStorage.hasOwnProperty('auth') === true) {
        return<Link to='/' onClick={logout} reloadDocument>Logout</Link>
    }
    return <Link to='/login'>Login</Link>
}