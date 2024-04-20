import { ToastContainer } from "react-toastify";
import Quiz from "../components/Quiz";
import { useQuiz } from "../hooks/useQuizHandler";
import data from "../data";
const QuizPage = () => {
    const { currentQuestionIndex, currentData, totalQuestions, quizCompleted, handleNextQuestion, handlePrevQuestionIndex, selectedAnswers, handleSelectedAnswer, correctAnswersCheck, totalCorrectAnswers, correctAnswerShower} = useQuiz();
    return (
        <>
            <ToastContainer/>
            {quizCompleted ? (
                <div className="resultsContainer">
                <h1 className="resulttitle">Quiz Result</h1>
                <div className="resultinfo">
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
                        <Quiz
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
                        <p className="correctanswer">
                            <b style={{ fontWeight: "600" }}>Correct Answer: </b>
                            {correctAnswerShower(item.ans)}
                        </p>
                    </>
                ))}
            </div>
            ) : (
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
            )}
        </>
    )
};

export default QuizPage;
