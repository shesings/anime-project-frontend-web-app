import { Navigate } from "react-router";
import { useAuthentication } from "./useAuthentication";

/**
 *  A wrapper route that verifies login for screens like profile and verifies if user is premium or not 
 * before showing premium content. Else redirects them to login page or signup for premium page.
 * @returns Route or Component
 */
export  function ProtectedRoute ({children, checkPremiumUser}) {
    const {isLoggedIn, isPremiumUser} = useAuthentication();

    if ((checkPremiumUser && !isPremiumUser)) {
        return <Navigate to="/premium" replace />
    }
    
    if (isLoggedIn) {
        return children;
    }

    return <Navigate to="/login" replace /> 

}