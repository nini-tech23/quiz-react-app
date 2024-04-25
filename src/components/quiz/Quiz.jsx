import { ToastContainer } from "react-toastify";
import Question from "./Question";
import { useQuiz } from "../../hooks/useQuizHandler";
import { useLocation } from "react-router-dom";
const Quiz = () => {
    const location = useLocation();
    const { amount, type, difficulty, category } = location.state || {};
    const { data, currentQuestionIndex, handleNextQuestion, handlePrevQuestionIndex, selectedAnswers, handleSelectedAnswer,} = useQuiz({ amount, type, difficulty, category });
    if (!data ||!data.length) return <div>Loading...</div>

    return (
        <>
            <ToastContainer />
                <div className="quiz-container">
                    <Question
                        question={data[currentQuestionIndex].question}
                        options={data[currentQuestionIndex].options}
                        currentQuestionNumber={currentQuestionIndex + 1}
                        onAnswerSelected={handleSelectedAnswer}
                        selectedAnswer={selectedAnswers[currentQuestionIndex]}
                    />
                    <div className="btn-container">
                        <button
                            type="submit"
                            className="prev-btn"
                            onClick={handlePrevQuestionIndex}
                            disabled={currentQuestionIndex === 0}>
                            Previous
                        </button>
                        <button
                            type="submit"
                            className="next-btn"
                            onClick={handleNextQuestion}>
                            Next
                        </button>
                    </div>
                    <p className="quiz-progress">
                        {currentQuestionIndex + 1} of {data.length} questions
                    </p>
                </div>
        </>
    );
};

export default Quiz;
