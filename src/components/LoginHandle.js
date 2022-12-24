import { Link } from 'react-router-dom';

export default function LoginHandle() {

    if (localStorage.hasOwnProperty('auth') === true) {
        /* localStorage.clear() */
        return <Link to='/' reloadDocument>Logout</Link>
    }
    return <Link to='/login'>Login</Link>
}