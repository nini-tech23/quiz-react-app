import { ToastContainer } from "react-toastify";
import Quiz from "../components/Quiz";
import { useQuiz } from "../hooks/useQuizHandler";
const QuizPage = () => {
    const { currentQuestionIndex, currentData, totalQuestions, quizCompleted, handleNextQuestion, handlePrevQuestionIndex, selectedAnswers, handleSelectedAnswer} = useQuiz();
    return (
        <>
            <ToastContainer/>
            <div className="quizContainer">
                <Quiz
                    key={currentData.id}
                    question={currentData.question}
                    option1={currentData.option1}
                    option2={currentData.option2}
                    option3={currentData.option3}
                    option4={currentData.option4}
                    currentQuestionNumber={currentQuestionIndex + 1}
                    onAnswerSelected={handleSelectedAnswer}
                    selectedAnswer={selectedAnswers[currentQuestionIndex]}
                    quizCompleted={quizCompleted}
                />
                <div className="btnContainer">
                    <button
                        type="submit"
                        className="prevBtn"
                        onClick={handlePrevQuestionIndex}>
                        Previous
                    </button>
                    <button
                        type="submit"
                        className="nextBtn"
                        onClick={handleNextQuestion}>
                        Next
                    </button>
                </div>
                <p className="progress">
                    {currentQuestionIndex + 1} of {totalQuestions} questions
                </p>
            </div>
        </>
    )
};

export default QuizPage;
