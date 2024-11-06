import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ children }) => {
    const currentUser = true;

    if (!currentUser) {
        return <Navigate to = "/" replace = {true}/>
    }

    return children
  
}
