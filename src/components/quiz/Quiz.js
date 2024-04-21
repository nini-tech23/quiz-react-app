import { ToastContainer } from "react-toastify";
import Question from "./Question";
import { useQuiz } from "../../hooks/useQuizHandler";
import data from "../../data";
const Quiz = () => {
    const { currentQuestionIndex, currentData, totalQuestions, quizCompleted, handleNextQuestion, handlePrevQuestionIndex, selectedAnswers, handleSelectedAnswer, correctAnswersCheck, totalCorrectAnswers, correctAnswerShower} = useQuiz();
    return (
        <>
            <ToastContainer/>
            {quizCompleted ? (
                <div className="results-container">
                <h1 className="result-title">Quiz Result</h1>
                <div className="result-info">
                    <p>
                        <b style={{ fontWeight: "600" }}>Total Correct Anwers: </b>
                        {totalCorrectAnswers}
                    </p>
                    <p>
                        <b style={{ fontWeight: "600" }}>Total InCorrect Anwers: </b>
                        {data.length - totalCorrectAnswers}
                    </p>
                </div>
                {data.map((item, index) => (
                    <>
                        <Question
                            key={item.id}
                            question={item.question}
                            option1={item.option1}
                            option2={item.option2}
                            option3={item.option3}
                            option4={item.option4}
                            currentQuestionNumber={index + 1}
                            selectedAnswer={selectedAnswers[index]}
                            quizCompleted={quizCompleted}
                            isCorrect={correctAnswersCheck[index]}
                        />
                        <p className="correct-answer">
                            <b style={{ fontWeight: "600" }}>Correct Answer: </b>
                            {correctAnswerShower(item.ans)}
                        </p>
                    </>
                ))}
            </div>
            ) : (
                <div className="quiz-container">
                    <Question
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
                    <div className="btn-container">
                        <button
                            type="submit"
                            className="prev-btn"
                            onClick={handlePrevQuestionIndex}>
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
                        {currentQuestionIndex + 1} of {totalQuestions} questions
                    </p>
                </div>
            )}
        </>
    )
};

export default Quiz;
