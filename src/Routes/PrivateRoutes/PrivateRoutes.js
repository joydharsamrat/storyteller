import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();
    if (loading) {
        return <progress className="progress w-56 h-10"></progress>
    }
    if (user?.uid) {
        return children
    }
    return <Navigate to='login' state={{ from: location }} replace></Navigate >
};

export default PrivateRoutes;