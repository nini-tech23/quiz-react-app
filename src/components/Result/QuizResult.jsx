import ResultQuestion from "./ResultQuestion";
import useQuizResultHandler from "../../hooks/useQuizResultHandler";
import { Link } from "react-router-dom";
const QuizResult = ({ resultId }) => {
    const { data } = useQuizResultHandler(resultId);
    if (!data || !data.questions) return <div>Loading...</div>;

    return (
        <>
            <div className="results-container">
                <Link to='/user'>Back to the result list</Link>
                <h1 className="result-title">Quiz Result</h1>
                <div className="result-info">
                    <p>
                        <b style={{ fontWeight: "600" }}>Total Correct Anwers: </b>
                        {data.score}
                    </p>
                    <p>
                        <b style={{ fontWeight: "600" }}>Total InCorrect Anwers: </b>
                        {data.questions.length - data.score}
                    </p>
                </div>
                {data.questions.map((item, index) => (
                    <>
                        <ResultQuestion
                            key={index}
                            question={item.questionText}
                            options={item.options}
                            currentQuestionNumber={index + 1}
                            selectedAnswer={item.userAnswer}
                            isCorrect={item.correctAnswer===item.userAnswer}
                        />
                        <p className="correct-answer">
                            <b style={{ fontWeight: "600" }}>Correct Answer: </b>
                            {item.correctAnswer}
                        </p>
                    </>
                ))}
            </div>
        </>
    );
};

export default QuizResult;
