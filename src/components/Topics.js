import {Link} from 'react-router-dom';
import { BsBookFill } from "react-icons/bs";
import { RiMovie2Fill } from "react-icons/ri";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { BsGlobeAmericas } from "react-icons/bs";
import { MdScience } from "react-icons/md";
import { BiMath } from "react-icons/bi";
import { GiGalaxy } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
const Topics = () => {
    return (
        <div className="topics">
            <h2>WHAT TOPIC ARE YOU INTERESTED IN?</h2>
            <div className="topicscontainer">
                <Link to='/quiz' className="topic">
                    <BsBookFill className='topicicon'/>
                    <p>General</p>
                </Link>
                <Link to='/quiz' className="topic">
                    <RiMovie2Fill className='topicicon'/>
                    <p>Entertainment</p>
                </Link>
                <Link to='/quiz' className="topic">
                    <MdOutlineSportsGymnastics className='topicicon'/>
                    <p>Sports</p>
                </Link>
                <Link to='/quiz' className="topic">
                    <MdOutlineHistoryEdu className='topicicon'/>
                    <p>History</p>
                </Link>
                <Link to='/quiz' className="topic">
                    <BsGlobeAmericas className='topicicon'/>
                    <p>Geography</p>
                </Link>
            </div>
            <div className="topicscontainer">
                <Link to='/quiz' className="topic">
                    <MdScience className='topicicon'/>
                    <p>Science</p>
                </Link>
                <Link to='/quiz' className="topic">
                    <BiMath className='topicicon'/>
                    <p>IQ & Logic</p>
                </Link>
                <Link to='/quiz' className="topic">
                    <GiGalaxy className='topicicon'/>
                    <p>Astronomy</p>
                </Link>
                <Link to='/quiz' className="topic">
                    <ImBooks className='topicicon'/>
                    <p>Literature</p>
                </Link>
            </div>
        </div>
    );
};

export default Topics;
