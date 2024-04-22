import { useEffect, useState } from "react";
import he from 'he';
import CustomConfirmAlert from "../utils/confirmDialog";
import { showErrorToast } from "../utils/toasNotif";
import { quizAPI } from "../API";
import shuffleArray from "../utils/shuffleArray";

export const useQuiz = () => {
    const [data, setData] = useState();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [correctAnswersCheck, setCorrectAnswersCheck] = useState([]);
    const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);

    // fetch quiz data here
    useEffect(()=>{
        const fetchQuizData = async () => {
            try {
                const response = await quizAPI.get("/api.php?amount=10&type=multiple");
                const fetchedData = response.data.results.map(question=>({
                    ...question,
                    question: he.decode(question.question),
                    correct_answer: he.decode(question.correct_answer),
                    incorrect_answers: question.incorrect_answers.map(answer=>he.decode(answer)),
                    options: shuffleArray([...question.incorrect_answers.map(answer=>he.decode(answer)), he.decode(question.correct_answer)])
                }))
                setData(fetchedData);

                setSelectedAnswers(new Array(response.data.results.length).fill(null));
                setCorrectAnswersCheck(new Array(response.data.results.length).fill(false));
            } catch (error) {
                console.log('Failed to fetch quiz data:', error);
            }
        };
        fetchQuizData();
    }, []);
    const handleNextQuestion = () => {
        if (selectedAnswers[currentQuestionIndex] !== null) {
            if (currentQuestionIndex < data?.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                const confirm = CustomConfirmAlert({
                    title: "Quiz Completion Confirm",
                    message: "Do you want to complete the quiz?",
                    onConfirm: () => {
                        setQuizCompleted(true);
                        correctAnswerCounter();
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
        setSelectedAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestionIndex] = answer;
            return newAnswers;
        });
    };

    const correctAnswerCounter = () => {
        let newTotalCorrectAnswers = 0;
        const newCorrectAnswersCheck = data.map((item, index) => {
            const isCorrect = item.correct_answer === selectedAnswers[index];
            if (isCorrect) newTotalCorrectAnswers++;
            return isCorrect;
        });
        setCorrectAnswersCheck(newCorrectAnswersCheck);
        setTotalCorrectAnswers(newTotalCorrectAnswers);
    };

    return {
        data,
        currentQuestionIndex,
        quizCompleted,
        handleNextQuestion,
        handlePrevQuestionIndex,
        handleSelectedAnswer,
        selectedAnswers,
        totalCorrectAnswers,
        correctAnswersCheck,
    };
};

