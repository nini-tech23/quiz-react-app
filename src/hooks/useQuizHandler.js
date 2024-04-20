import { useState } from "react";
import CustomConfirmAlert from "../utils/confirmDialog";
import { showErrorToast } from "../utils/toasNotif";
import data from "../data";

export const useQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(new Array(data.length).fill(null));
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [correctAnswersCheck, setCorrectAnswersCheck] = useState(new Array(data.length).fill(false));
    const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);

    const handleNextQuestion = () => {
        if (selectedAnswers[currentQuestionIndex] !== null) {
            if (currentQuestionIndex < data.length - 1) {
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
        } else {
            console.log("The very first question!");
        }
    };

    const handleSelectedAnswer = (answer) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentQuestionIndex] = answer;
        setSelectedAnswers(newSelectedAnswers);
    };

    const correctAnswerCounter = () => {
        let newTotalCorrectAnswers = 0;
        const newCorrectAnswersCheck = data.map((item, index) => {
            const isCorrect = item.ans === selectedAnswers[index];
            if (isCorrect) newTotalCorrectAnswers++;
            return isCorrect;
        });
        setCorrectAnswersCheck(newCorrectAnswersCheck);
        setTotalCorrectAnswers(newTotalCorrectAnswers);
    };
    const correctAnswerShower = (ans) => {
        switch (ans) {
            case 1:
                return "a";
            case 2:
                return "b";
            case 3:
                return "c";
            case 4:
                return "d";
            default:
                return "a";
        }
    };

    const currentData = data[currentQuestionIndex];
    const totalQuestions = data.length;
    return {
        currentData,
        currentQuestionIndex,
        totalQuestions,
        quizCompleted,
        handleNextQuestion,
        handlePrevQuestionIndex,
        handleSelectedAnswer,
        selectedAnswers,
        totalCorrectAnswers,
        correctAnswersCheck,
        correctAnswerShower,
    };
};
