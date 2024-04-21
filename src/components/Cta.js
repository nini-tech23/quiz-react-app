import { Link } from "react-router-dom"

const Cta = () => {
  return (
    <div className="cta">
        <h1>Unleash Your Inner<br/>Wizard of Wisdom</h1>
        <p>
            Embark on a Journey of Knowledge Exploration with<br/>
            Our Extensive Collection of Interactive Quizzes.
        </p>
        <Link to="/quiz" className="ctaBtn"><button>Start Quiz</button></Link>
    </div>
  )
}

export default Cta