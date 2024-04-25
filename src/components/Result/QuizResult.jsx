import Question from "./Question";
import useQuizResultHandler from "../../hooks/useQuizResultHandler";
const QuizResult = () => {
    const { data, quizCompleted , selectedAnswers, correctAnswersCheck, totalCorrectAnswers, } = useQuizResultHandler();
    if (!data ||!data.length) return <div>Loading...</div>

    return (
        <>
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
        </>
    );
};

export default QuizResult;
