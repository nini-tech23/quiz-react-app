import { useEffect, useState } from "react";
import { userAPI } from "../API";
import { useUserContext } from "../contexts/UserContext";

const useQuizResultsListHandler = () => {
    const [results, setResults] = useState([]);
    const { user } = useUserContext();

    useEffect(() => {
        const fetchResults = async () => {
            if (user && user.userId) {  // Ensure there is a user and userID available
                try {
                    console.log(user.userId)
                    const response = await userAPI.get(`/quizresults?userId=${user.userId}`);
                    console.log(response.data);
                    setResults(response.data);
                } catch (error) {
                    console.log("Failed to fetch results:", error);
                }
            }
        };
        fetchResults();
    }, [user]);  // Depend on user.userId to refetch when it changes

    return { results };
}

export default useQuizResultsListHandler;
