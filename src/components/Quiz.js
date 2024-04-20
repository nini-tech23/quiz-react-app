const Quiz = ({ question, option1, option2, option3, option4, currentQuestionNumber, selectedAnswer, onAnswerSelected, quizCompleted, isCorrect }) => {
  const getAnswerClass = (optionNumber) => {
    if (!quizCompleted) {
      return selectedAnswer === optionNumber ? 'answer selected' : 'answer';
    }
    // Display correct/incorrect classes when quiz is completed
    return selectedAnswer === optionNumber ? (isCorrect ? 'answer correct' : 'answer incorrect') : 'answer';
  };

  return (
    <>
      <p className="question">
        <span>{currentQuestionNumber}. </span>
        {question}
      </p>
      <div className={"answersContainer"}>
        <div className={getAnswerClass(1)} onClick={()=>onAnswerSelected(1)}>a. {option1}</div>
        <div className={getAnswerClass(2)} onClick={()=>onAnswerSelected(2)}>b. {option2}</div>
        <div className={getAnswerClass(3)} onClick={()=>onAnswerSelected(3)}>c. {option3}</div>
        <div className={getAnswerClass(4)} onClick={()=>onAnswerSelected(4)}>d. {option4}</div>
      </div>
    </>
  );
};
export default Quiz;