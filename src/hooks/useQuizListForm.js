import { useState } from "react";
import CustomConfirmAlert from "../utils/confirmDialog";
import { useNavigate } from "react-router-dom";
const useQuizListForm = () => {
    const navigate = useNavigate();
    const [difficulty, setDifficulty] = useState("easy");
    const [questionType, setQuestionType] = useState("multiple");
    const [numQuestions, setNumQuestions] = useState(10);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        if (type === "checkbox") {
            if (checked) {
                setSelectedCategories([...selectedCategories, value]);
            } else {
                setSelectedCategories(selectedCategories.filter((category) => category !== value));
            }
        } else {
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
        const confirm = CustomConfirmAlert({
            title: "Want to take a quiz?",
            message: `Difficulty: ${difficulty}, Question Type: ${questionType}, Number of Questions: ${numQuestions}, Categories: ${selectedCategories.join(", ")}`,
            onConfirm: () => {
                console.log({ difficulty, questionType, numQuestions, selectedCategories });
                navigate("/quiz", {state: {difficulty: difficulty, type: questionType, amount: numQuestions, categories: selectedCategories}});
            },
        });
        confirm.submit();
    };

    return { difficulty, questionType, numQuestions, selectedCategories, handleSubmit, handleChange };
};

export default useQuizListForm;
