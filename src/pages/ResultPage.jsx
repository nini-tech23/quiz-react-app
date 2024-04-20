import Quiz from "../components/Quiz";
import { useQuiz } from "../hooks/useQuizHandler";
import data from "../data";

const ResultPage = () => {
    const { totalCorrectAnswers, correctAnswersCheck, selectedAnswers, correctAnswerShower, quizCompleted } = useQuiz();
    return (
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
    );
};

export default ResultPage;
