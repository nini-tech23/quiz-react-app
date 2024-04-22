import { createContext, useState, useContext } from 'react';

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [results, setResults] = useState([]);

    // Function to update user data
    const loginUser = (userData) => {
        setUser(userData);
    };

    // Function to logout user
    const logoutUser = () => {
        setUser(null);
        setResults([]);
    };

    // Function to update quiz results
    const updateResults = (newResults) => {
        setResults(newResults);
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser, results, updateResults }}>
            {children}
        </UserContext.Provider>
    );
};
