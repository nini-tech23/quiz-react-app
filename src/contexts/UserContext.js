import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        return token ? { token, userId } : null;
    });

    const login = (userData) => {
        localStorage.setItem('token', userData.token);
        localStorage.setItem('userId', userData.userId);
        setUser(userData);
        console.log(userData)
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setUser(null);
    };

    useEffect(() => {
        // Optional: Refresh token logic or validate token
    }, []);

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
