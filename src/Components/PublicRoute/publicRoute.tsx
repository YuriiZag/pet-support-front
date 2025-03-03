import { getIsLoggedIn } from "../../Redux/selectors"
import { Navigate } from "react-router-dom"
import { useAppSelector } from "../../customHooks/customHooks";


interface IPublicRoute {
    component: React.ComponentType<any>;
    redirectTo: string
}


export const PublicRoute: React.FC<IPublicRoute>= ({component: Component, redirectTo = '/'}) => {
    const isLoggedIn = useAppSelector(getIsLoggedIn)
    
    return (isLoggedIn ? <Navigate to={redirectTo}/> : <Component />)
}
