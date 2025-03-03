import { useSelector } from "react-redux";
import { getIsLoggedIn, getIsRefreshing } from "../../Redux/selectors";
import { Navigate } from "react-router-dom";

interface IPrivatRoute{
    component: React.ComponentType<any>;
    redirectTo?: string;
}

export const PrivateRoute: React.FC<IPrivatRoute> = ({component: Component, redirectTo = '/'}) => {
    const isLoggedIn = useSelector(getIsLoggedIn)
    const isRefreshing = useSelector(getIsRefreshing)
    const shouldRedirect = !isLoggedIn && !isRefreshing

    return (
        shouldRedirect ? <Navigate to={redirectTo}/> : <Component />
    )
}