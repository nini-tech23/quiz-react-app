import {useState} from 'react'
import data from '../data';
export const useQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const handleNextQuestion = () => {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Handle end of quiz, e.g., show results or reset
      console.log("Quiz Completed!");
    }
  };
  const handlePrevQuestionIndex = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      console.log('The very first question!')
    }
  };
  const currentData = data[currentQuestionIndex];
  const totalQuestions = data.length
  return {currentData, currentQuestionIndex, totalQuestions, handleNextQuestion, handlePrevQuestionIndex}
}

export const useAnswer = () => {
  const [answer, setAnswer] = useState('');
  const handleAnswer = (e) => {
    setAnswer(e.target.value)
  }
  return {answer, handleAnswer}
}