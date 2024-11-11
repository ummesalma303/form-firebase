import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user,loading } = useContext(AuthContext)

    // loading animation 
    if (loading) {
        return <span className="loading loading-infinity loading-xs"></span>
    }
    
    // user&&children
    if(user){
        return children
    }
   
   
    return (
       
            <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoutes;