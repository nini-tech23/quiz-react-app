const quizListForm = ({onSubmit, onChange, difficulty, questionType, numQuestions}) => {
    return (
        <form onSubmit={onSubmit} className='take-quiz-form'>
            <label>
                Choose difficulty:
                <select name='difficulty' value={difficulty} onChange={onChange}>
                    <option value="easy" >Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </label>
            <br />
            <label>
                Choose type of questions:
                <select name='questionType' value={questionType} onChange={onChange}>
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True / False</option>
                </select>
            </label>
            <br />
            <label>
                Number of Questions:
                <input name="numQuestions" type="number" value={numQuestions} onChange={onChange} min="10" max="50"/>
            </label>
            <br />
            <div className="start-quiz-btn-container"><button type="submit" className="start-quiz-btn">Start Quiz</button></div>
        </form>
    )
}

export default quizListForm