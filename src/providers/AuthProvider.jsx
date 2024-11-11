import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
   
    return (
        <div>
            <AuthContext.Provider>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;