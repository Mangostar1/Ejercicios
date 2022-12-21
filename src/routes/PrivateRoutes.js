import { useNavigate, useLocation } from "react-router-dom";

export default function PrivateRoutes({children}) {

    const navigate = useNavigate();
    const location = useLocation();

    if (localStorage.hasOwnProperty('auth') === true) {
        console.log("el usuario esta logeado");
        return children
    }
    /* location.replace('/login') */
    return navigate("/login")
}