import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';

export const AuthContext = createContext();

// Auth Provider Section
const AuthProvider = ({ children }) => {
    const allContexts = useFirebase();
    return (
        // AuthContext Provider
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;