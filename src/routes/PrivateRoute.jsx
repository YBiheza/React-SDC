import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';

export function PrivateRoute ({children}) {
    //const user = useAuth();
    const location = useLocation();
    const log = useSelector(state => state.auth.log);

    //if (!user) {
    if (!log) {
        return (
            <Navigate  
              to="/authorisation"
              state={{ from: location }}
              replace
            />
        );
    //} else {
    //    return <Navigate to="/OrderPage" replace />
    }


    return children;
}

/*import { Outlet } from "react-router-dom";

export function PrivateRoute() {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return null; // или <Spinner />
  }

  if (!user) {
    return (
      <Navigate
        to="/authorisation"
        state={{ from: location }}
        replace
      />
    );
  }

  return <Outlet />;
}*/
