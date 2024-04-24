import {FaQuestion, FaMusic, FaFlask} from "react-icons/fa";
import useQuizList from "../../hooks/useQuizList";
const QuizListCard = ({mainCategory, categories, onChange}) => {
    const iconMapping = {
        'General Knowledge': <FaQuestion />,
        'Entertainment': <FaMusic />,
        'Science': <FaFlask />
    }
    const Icon = iconMapping[mainCategory] || <FaQuestion />;
    const {subcategoryNameHandler} = useQuizList();
    return (
        <div className='quiz-list-card'>
            <h1 className='quiz-list-card-title'>{Icon}{mainCategory}</h1>
            {categories.map((category, index) => (
                <div key={index} className="quiz-list-card-subcategory">
                    <input key={index} id={index} type='checkbox' name='category' value={category.id} onChange={onChange}/>
                    <label for={index} >{subcategoryNameHandler(category.name)}</label>
                </div>
                
            ))}
        </div>
    )
}

export default QuizListCard