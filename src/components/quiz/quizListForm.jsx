
const quizListForm = ({ onSubmit, onChange, difficulty, questionType, numQuestions, categories, category }) => {
    return (
        <form
            onSubmit={onSubmit}
            className="take-quiz-form">
            <label>
                Choose category:
                <select
                    name="category"
                    value={category}
                    onChange={onChange}>
                    {categories.map((category) => (
                        <option
                            key={category.id}
                            value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Choose difficulty:
                <select
                    name="difficulty"
                    value={difficulty}
                    onChange={onChange}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </label>
            <label>
                Choose type of questions:
                <select
                    name="questionType"
                    value={questionType}
                    onChange={onChange}>
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True / False</option>
                </select>
            </label>
            <label>
                Number of Questions:
                <input
                    name="numQuestions"
                    type="number"
                    value={numQuestions}
                    onChange={onChange}
                    min="10"
                    max="50"
                />
            </label>
            <div className="start-quiz-btn-container">
                <button
                    type="submit"
                    className="start-quiz-btn">
                    Start Quiz
                </button>
            </div>
        </form>
    );
};

export default quizListForm;
