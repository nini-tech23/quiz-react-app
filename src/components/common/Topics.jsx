import { useNavigate } from 'react-router-dom';
import { BsBookFill, BsGlobeAmericas } from "react-icons/bs";
import { RiMovie2Fill } from "react-icons/ri";
import { MdOutlineHistoryEdu, MdOutlineSportsGymnastics, MdScience } from "react-icons/md";
import { FaLaptop, FaMusic } from "react-icons/fa";
import { ImBooks } from "react-icons/im";

const Topics = () => {
    const navigate = useNavigate();

    const handleTopicClick = (category, type = "multiple", difficulty = "", numQuestions = 10) => {
        navigate("/quiz", { 
            state: { 
                difficulty: difficulty, 
                type: type, 
                amount: numQuestions, 
                category: category 
            }
        });
    };

    return (
        <div className="topics">
            <h2>WHAT TOPIC ARE YOU INTERESTED IN?</h2>
            <div className="topicscontainer">
                <div onClick={() => handleTopicClick(9)} className="topic">
                    <BsBookFill className='topicicon'/>
                    <p>General</p>
                </div>
                <div onClick={() => handleTopicClick(11)} className="topic">
                    <RiMovie2Fill className='topicicon'/>
                    <p>Movie</p>
                </div>
                <div onClick={() => handleTopicClick(12)} className="topic">
                    <FaMusic className='topicicon'/>
                    <p>Music</p>
                </div>
                <div onClick={() => handleTopicClick(10)} className="topic">
                    <ImBooks className='topicicon'/>
                    <p>Literature</p>
                </div>
                <div onClick={() => handleTopicClick(21)} className="topic">
                    <MdOutlineSportsGymnastics className='topicicon'/>
                    <p>Sports</p>
                </div>
            </div>
            <div className="topicscontainer">        
                <div onClick={() => handleTopicClick(17)} className="topic">
                    <MdScience className='topicicon'/>
                    <p>Science</p>
                </div>
                <div onClick={() => handleTopicClick(18)} className="topic">
                    <FaLaptop className='topicicon'/>
                    <p>Computers</p>
                </div>
                <div onClick={() => handleTopicClick(23)} className="topic">
                    <MdOutlineHistoryEdu className='topicicon'/>
                    <p>History</p>
                </div>
                <div onClick={() => handleTopicClick(22)} className="topic">
                    <BsGlobeAmericas className='topicicon'/>
                    <p>Geography</p>
                </div>
            </div>
        </div>
    );
};

export default Topics;
