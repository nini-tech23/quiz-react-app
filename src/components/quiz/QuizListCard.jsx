import {FaQuestion, FaMusic, FaFlask} from "react-icons/fa";
import useQuizListCard from "../../hooks/useQuizListCard";
const QuizListCard = ({mainCategory, categories}) => {
    const iconMapping = {
        'General Knowledge': <FaQuestion />,
        'Entertainment': <FaMusic />,
        'Science': <FaFlask />
    }
    const Icon = iconMapping[mainCategory] || <FaQuestion />;
    const {categoryNameHandler, quesNumHandler } = useQuizListCard();
    return (
        <div className='quiz-list-card'>
            <h1 className='quiz-list-card-title'>{Icon}{mainCategory}</h1>
            {categories.map((category, index) => (
                <div key={index} className="quiz-list-card-subcategory">
                    <div>{categoryNameHandler(category.name)}</div>
                    <p>{quesNumHandler(category.id)}</p>
                </div>
                
            ))}
        </div>
    )
}

export default QuizListCard