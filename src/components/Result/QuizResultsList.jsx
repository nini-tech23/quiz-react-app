import QuizResultListItem from "./QuizResultListItem"
import useQuizResultsListHandler from "../../hooks/useQuizResultsListHandler"
const QuizResultsList = () => {
    const {results} = useQuizResultsListHandler();
    return (
        <div className="resultslist-container">
            <div className="resultslist-header-row">
                <h6>No.</h6>
                <h6>Category</h6>
                <h6>Type</h6>
                <h6>Difficulty</h6>
                <h6>Total Questions</h6>
                <h6>Score</h6>
            </div>
            {results.map((result, index) => <QuizResultListItem key={index} index={index} category={result.category} type={result.type} difficulty={result.difficulty} totalQuestions={result.totalQuestions} score={result.score} id={result._id}/>) }
        </div>
    )
}

export default QuizResultsList