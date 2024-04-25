import { useEffect, useState } from "react";
import he from "he";
import CustomConfirmAlert from "../utils/confirmDialog";
import { showErrorToast } from "../utils/toasNotif";
import { quizAPI, userAPI } from "../API";
import shuffleArray from "../utils/shuffleArray";
import { useUserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export const useQuiz = ({ amount = 10, type = "multiple", difficulty = "", category = "" }) => {
    const [data, setData] = useState();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const {user} = useUserContext();
    const navigate = useNavigate();
    // fetch quiz data here
    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                const params = {
                    amount,
                    type,
                    ...(difficulty && { difficulty }),
                    ...(category && { category }),
                };
                const response = await quizAPI.get("/api.php", { params });
                const fetchedData = response.data.results.map((question) => ({
                    ...question,
                    question: he.decode(question.question),
                    correct_answer: he.decode(question.correct_answer),
                    incorrect_answers: question.incorrect_answers.map((answer) => he.decode(answer)),
                    options: shuffleArray([...question.incorrect_answers.map((answer) => he.decode(answer)), he.decode(question.correct_answer)]),
                }));
                setData(fetchedData);

                setSelectedAnswers(new Array(response.data.results.length).fill(null));
            } catch (error) {
                console.log("Failed to fetch quiz data:", error);
            }
        };
        fetchQuizData();
    }, [amount, type, difficulty, category]);
    const submitQuizResults = async () => {
        const quizData = {
            userId: user.userId,
            questions: data.map((question, index) => ({
                question: question.question,
                options: question.options,
                correctAnswer: question.correct_answer,
                userAnswer: selectedAnswers[index],
                isCorrect: selectedAnswers[index] === question.correct_answer,
            })),
            type,
            difficulty,
            category,
            totalQuestions: data.length,
        };
        console.log(quizData)
        try {
            const response = await userAPI.post("/submit-result", quizData);
            if(response.status === 200){
                console.log(response.data._id)
                navigate(`/quizresults/${response.data._id}`)
            }else {
                showErrorToast('Failed to submit quiz results');
            }
        } catch (error){
            console.log('Error submitting quiz results:', error);
        }
    }
    const handleNextQuestion = () => {
        if (selectedAnswers[currentQuestionIndex] !== null) {
            if (currentQuestionIndex < data?.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                const confirm = CustomConfirmAlert({
                    title: "Quiz Completion Confirm",
                    message: "Do you want to complete the quiz?",
                    onConfirm: () => {
                        submitQuizResults();
                    },
                });
                confirm.submit();
            }
        } else {
            showErrorToast("Please select an answer");
        }
    };

    const handlePrevQuestionIndex = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleSelectedAnswer = (answer) => {
        setSelectedAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestionIndex] = answer;
            return newAnswers;
        });
    };

    return {
        data,
        currentQuestionIndex,
        handleNextQuestion,
        handlePrevQuestionIndex,
        handleSelectedAnswer,
        selectedAnswers,
    };
};
