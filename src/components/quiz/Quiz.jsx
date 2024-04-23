import { ToastContainer } from "react-toastify";
import Question from "./Question";
import { useQuiz } from "../../hooks/useQuizHandler";
const Quiz = () => {
    const { data, currentQuestionIndex, quizCompleted, handleNextQuestion, handlePrevQuestionIndex, selectedAnswers, handleSelectedAnswer, correctAnswersCheck, totalCorrectAnswers, } = useQuiz();
    if (!data ||!data.length) return <div>Loading...</div>

    return (
        <>
            <ToastContainer />
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
                                question={item.question}
                                options= {item.options}
                                currentQuestionNumber={index + 1}
                                selectedAnswer={selectedAnswers[index]}
                                quizCompleted={quizCompleted}
                                isCorrect={correctAnswersCheck[index]}
                            />
                            <p className="correct-answer">
                                <b style={{ fontWeight: "600" }}>Correct Answer: </b>
                                {item.correct_answer}
                            </p>
                        </>
                    ))}
                </div>
            ) : (
                <div className="quiz-container">
                    <Question
                        question={data[currentQuestionIndex].question}
                        options={data[currentQuestionIndex].options}
                        currentQuestionNumber={currentQuestionIndex + 1}
                        onAnswerSelected={handleSelectedAnswer}
                        selectedAnswer={selectedAnswers[currentQuestionIndex]}
                        quizCompleted={quizCompleted}
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
            )}
        </>
    );
};

export default Quiz;
