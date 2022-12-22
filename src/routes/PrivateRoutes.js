import { Navigate } from "react-router-dom";

export default function PrivateRoutes({children}) {

    if (localStorage.hasOwnProperty('auth') === true) {
        console.log("el usuario esta logeado");
        return children
    }

    return <Navigate to="/login" />

}