import {FaQuestion, FaMusic, FaFlask} from "react-icons/fa";
const QuizListCard = ({category, subcategories}) => {
    const iconMapping = {
        'General Knowledge': <FaQuestion />,
        'Entertainment': <FaMusic />,
        'Science': <FaFlask />
    }
    const Icon = iconMapping[category] || <FaQuestion />;
    const subcategoryNameHandler = (subcategory) => {
        if (subcategory.indexOf(':') !== -1) {
            return subcategory.slice(subcategory.indexOf(':')+2);
        } else {
            return subcategory
        }
    }
    return (
        <div className='quiz-list-card'>
            <h1 className='quiz-list-card-title'>{Icon}{category}</h1>
            {subcategories.map((subcategory, index) => (
                <div key={index} className="quiz-list-card-subcategory">
                    <input key={index} id={index} type='checkbox' name='subcategory' value={subcategory.name}/>
                    <label for={index} >{subcategoryNameHandler(subcategory.name)}</label>
                </div>
                
            ))}
        </div>
    )
}

export default QuizListCard