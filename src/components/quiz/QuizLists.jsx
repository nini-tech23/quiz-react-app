import QuizListCard from "./QuizListCard";
import useQuizList from "../../hooks/useQuizList";
import QuizListForm from "./quizListForm";
import useQuizListForm from "../../hooks/useQuizListForm";

const QuizLists = () => {
    const { categoryMapping } = useQuizList();
    const { handleSubmit, handleChange, difficulty, questionType, numQuestions,} = useQuizListForm();

    return (
        <>
            {categoryMapping && (
                <div className="quiz-list">
                    <h1>Select quiz category and take a quiz</h1>
                    <div className="quiz-list-card-container">
                        {Object.entries(categoryMapping).map(([key, value]) => (
                            <QuizListCard key={key} mainCategory={key} categories={value} onChange={handleChange}/>
                        ))}
                    </div>
                    <QuizListForm onSubmit={handleSubmit} onChange={handleChange} difficulty={difficulty} questionType={questionType} numQuestions={numQuestions}/>
                </div>
            )}
        </>
    );
};

export default QuizLists;
