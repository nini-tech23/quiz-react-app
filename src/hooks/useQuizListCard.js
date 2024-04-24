import { useEffect, useState } from "react";
import { quizAPI } from "../API";

const useQuizListCard = () => {
    const [numQuesofCat, setNumQuesofCat] = useState({});
    

    const categoryNameHandler = (category) => {
        if (category.indexOf(":") !== -1) {
            return category.slice(category.indexOf(":") + 2);
        } else {
            return category;
        }
    };

    useEffect(() => {
        const fetchNumofCategories = async () => {
            const storedData = sessionStorage.getItem('numQuesofCat');
            if (storedData) {
                setNumQuesofCat(JSON.parse(storedData));
            } else {
                try {
                    const response = await quizAPI.get("/api_count_global.php");
                    if (response.data && response.data.categories) {
                        const formattedData = Object.keys(response.data.categories).reduce((acc, key) => {
                            acc[key] = response.data.categories[key].total_num_of_questions;
                            return acc;
                        }, []);
                        setNumQuesofCat(formattedData);
                        sessionStorage.setItem('numQuesofCat', JSON.stringify(formattedData));
                    } else {
                        console.log('Unexpected API response structure:', response.data);
                    }
                } catch (error) {
                    console.error('Failed to fetch number of questions per category:', error);
                }
            }
        };
        fetchNumofCategories();
    }, []);  // Still only runs once, but data persists in session storage
    

    const quesNumHandler = (categoryId) => {
        return numQuesofCat[categoryId] || 'Loading...';
    };

    return { categoryNameHandler, quesNumHandler };
};

export default useQuizListCard;
