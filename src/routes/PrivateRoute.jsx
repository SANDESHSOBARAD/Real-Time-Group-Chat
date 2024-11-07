import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ children }) => {
    const {currUser} = UserAuth();

    if (!currUser) {
        return <Navigate to = "/" replace = {true}/>
    }

    return children
  
}
