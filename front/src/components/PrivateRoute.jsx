import { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={user ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
