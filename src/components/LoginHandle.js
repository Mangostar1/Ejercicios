import { Link } from 'react-router-dom';

export default function LoginHandle() {

    if (localStorage.hasOwnProperty('auth') === true) {
        return<Link to='/' reloadDocument>Logout</Link>
    }
    return <Link to='/login'>Login</Link>
}