const Question = ({ question, options, currentQuestionNumber, selectedAnswer, onAnswerSelected, quizCompleted, isCorrect }) => {
  const getAnswerClass = (option) => {
    if (!quizCompleted) {
      return selectedAnswer === option ? 'answer selected' : 'answer';
    }
    // Display correct/incorrect classes when quiz is completed
    return selectedAnswer === option ? (isCorrect ? 'answer correct' : 'answer incorrect') : 'answer';
  };

  return (
    <>
      <p className="question">
        <span>{currentQuestionNumber}. </span>
        {question}
      </p>
      <div className="answers-container">
        {options.map((option, index)=> (
          <div key={index} className={getAnswerClass(option)} onClick={()=>onAnswerSelected(option)}>
            {option}
          </div>
        ))}
      </div>
    </>
  );
};
export default Question;