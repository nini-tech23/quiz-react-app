import { useState } from "react";
import { showErrorToast, showSuccessToast } from "../utils/toasNotif";

const useQuizListForm = () => {
    const [difficulty, setDifficulty] = useState("easy");
    const [questionType, setQuestionType] = useState("multiple");
    const [numQuestions, setNumQuestions] = useState(10);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        if (type ==='checkbox'){
            if(checked){
                setSelectedCategories([...selectedCategories, value]);
            } else {
                setSelectedCategories(selectedCategories.filter(category => category !== value));
            }
        }else{
            if (name === "difficulty") {
                setDifficulty(value);
            } else if (name === "questionType") {
                setQuestionType(value);
            } else if (name === "numQuestions") {
                setNumQuestions(value);
            }
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic to handle form submission
        showSuccessToast("Quiz started successfully");
        console.log({ difficulty, questionType, numQuestions, selectedCategories });
        // Redirect to quiz page or fetch quiz questions based on these options
    };

    return { difficulty, questionType, numQuestions, selectedCategories, handleSubmit, handleChange };
};

export default useQuizListForm;
