import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomConfirmAlert from "../utils/confirmDialog";
import categoryMapping from "../categoryMapping";
const useQuizListForm = () => {
    const navigate = useNavigate();
    const [difficulty, setDifficulty] = useState("easy");
    const [questionType, setQuestionType] = useState("multiple");
    const [numQuestions, setNumQuestions] = useState(10);
    const [category, setCategory] = useState(9); //id for default (general knowledge)
    const allCategories = Object.values(categoryMapping).flat();
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "difficulty") {
            setDifficulty(value);
        } else if (name === "questionType") {
            setQuestionType(value);
        } else if (name === "numQuestions") {
            setNumQuestions(value);
        } else if (name === "category") {
            setCategory(value);
        }
    };
    const getCategoryNameById = (id) => {
        const category = allCategories.find((cat) => cat.id === id);
        return category ? category.name : "";
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const confirm = CustomConfirmAlert({
            title: "Want to take a quiz?",
            message: `Difficulty: ${difficulty}, Question Type: ${questionType}, Number of Questions: ${numQuestions}, category: ${getCategoryNameById(Number(category))}`,
            onConfirm: () => {
                console.log({ difficulty, questionType, numQuestions, category });
                navigate("/quiz", { state: { difficulty: difficulty, type: questionType, amount: numQuestions, category: category } });
            },
        });
        confirm.submit();
    };

    return { allCategories, categoryMapping, difficulty, questionType, numQuestions, category, handleSubmit, handleChange };
};

export default useQuizListForm;
