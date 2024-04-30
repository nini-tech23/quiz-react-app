import { useParams } from "react-router-dom";
import QuizResult from "../components/Result/QuizResult";

const ResultPage = () => {
    const resultId = useParams();
    return (
        <QuizResult resultId={resultId} />
    )
}

export default ResultPage