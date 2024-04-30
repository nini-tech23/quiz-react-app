import { useEffect, useState } from "react";
import { userAPI } from "../API";
const useQuizResultHandler = (resultId) => {
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                console.log(resultId);
                const response = await userAPI.get(`/quizresults/${resultId.resultId}`);
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.log("Failed to fetch quiz data:", error);
            }
        };
        fetchQuizData();
    }, [resultId]);
    return { data };
};

export default useQuizResultHandler;
