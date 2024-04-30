import { Link } from "react-router-dom"

const QuizResultListItem = ({index, category, type, difficulty, totalQuestions, score, id}) => {
    return (
        <div className="resultslist-item">
            <p>
                Quiz {index+1}
            </p>
            <p>
                {category}
            </p>
            <p>
                {type}
            </p>
            <p>
                {difficulty}
            </p>
            <p>
                {totalQuestions}
            </p>
            <p>
                {score}
            </p>
            <Link to={`/quizresults/${id}`} className="detail-link">View Detail</Link>
        </div>
    )
}

export default QuizResultListItem