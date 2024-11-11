import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext)
    user&&children
    return (
       
            <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoutes;