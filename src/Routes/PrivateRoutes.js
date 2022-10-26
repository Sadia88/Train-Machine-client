import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoutes = ({children}) => {
    let location = useLocation();
    const {user,loader}=useContext(AuthContext)
if(loader){
return <Spinner animation="border" variant="primary" />
}
    if (!user?.uid) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
      }
    
        return children

        
};
export default PrivateRoutes;