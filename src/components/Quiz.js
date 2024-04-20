const Quiz = ({ question, option1, option2, option3, option4, currentQuestionNumber }) => {
    return (
        <>
            <p className="question">
                <span>{currentQuestionNumber}. </span>
                {question}
            </p>
            <div className="answersContainer">
                <div className="answer">{option1}</div>
                <div className="answer">{option2}</div>
                <div className="answer">{option3}</div>
                <div className="answer">{option4}</div>
            </div>
        </>
    );
};

export default Quiz;
