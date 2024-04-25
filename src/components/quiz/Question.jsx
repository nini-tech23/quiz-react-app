const Question = ({ question, options, currentQuestionNumber, selectedAnswer, onAnswerSelected }) => {
  return (
    <>
      <p className="question">
        <span>{currentQuestionNumber}. </span>
        {question}
      </p>
      <div className="answers-container">
        {options.map((option, index)=> (
          <div key={index} className={selectedAnswer===option? 'answer selected' : 'answer'} onClick={()=>onAnswerSelected(option)}>
            {option}
          </div>
        ))}
      </div>
    </>
  );
};
export default Question;