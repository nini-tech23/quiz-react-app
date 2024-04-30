const ResultQuestion = ({ question, options, currentQuestionNumber, selectedAnswer, isCorrect }) => {
    return (
        <>
            <p className="question">
                <span>{currentQuestionNumber}. </span>
                {question}
            </p>
            <div className="answers-container">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={selectedAnswer === option ? (isCorrect ? "answer correct" : "answer incorrect") : "answer"}>
                        {option}
                    </div>
                ))}
            </div>
        </>
    );
};
export default ResultQuestion;
