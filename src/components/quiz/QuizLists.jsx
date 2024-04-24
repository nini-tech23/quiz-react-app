import QuizListCard from "./QuizListCard";
import QuizListForm from "./quizListForm";
import useQuizListForm from "../../hooks/useQuizListForm";

const QuizLists = () => {
    const { handleSubmit, handleChange, categoryMapping, difficulty, questionType, numQuestions, category} = useQuizListForm();
    const categories = Object.values(categoryMapping).flat();
    
    return (
        <>
            {categoryMapping && (
                <div className="quiz-list">
                    <h1>Take a customized quiz by category</h1>
                    <div className="quiz-list-card-container">
                        {Object.entries(categoryMapping).map(([key, value]) => (
                            <QuizListCard key={key} mainCategory={key} categories={value}/>
                        ))}
                    </div>            
                    <QuizListForm
                        onSubmit={handleSubmit}
                        onChange={handleChange}
                        difficulty={difficulty}
                        questionType={questionType}
                        numQuestions={numQuestions}
                        categories={categories}
                        category={category}
                    />
                </div>
            )}
        </>
    );
};

export default QuizLists;
