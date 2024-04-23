import { useState } from "react";
import QuizListCard from "./QuizListCard";
const QuizLists = () => {
  
const categoryMapping = {
  "General Knowledge": [
    { id: 9, name: "General Knowledge" },
    { id: 21, name: "Sports" },
    { id: 22, name: "Geography" },
    { id: 23, name: "History" },
    { id: 24, name: "Politics" },
    { id: 25, name: "Art" },
  ],
  "Entertainment": [
    { id: 10, name: "Entertainment: Books" },
    { id: 11, name: "Entertainment: Film" },
    { id: 12, name: "Entertainment: Music" },
    { id: 14, name: "Entertainment: Television" },
    { id: 15, name: "Entertainment: Video Games" },
    { id: 32, name: "Entertainment: Cartoon & Animations" }
  ],
  "Science": [
    { id: 17, name: "Science & Nature" },
    { id: 18, name: "Science: Computers" },
    { id: 19, name: "Science: Mathematics" },
    { id: 30, name: "Science: Gadgets" }
  ]
};
    const [difficulty, setDifficulty] = useState('');
    const [questionType, setQuestionType] = useState('');
    const [numQuestions, setNumQuestions] = useState(10);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic to handle form submission
        console.log({ difficulty, questionType, numQuestions, selectedCategory });
        // Redirect to quiz page or fetch quiz questions based on these options
    };
    return (
      <div className="quiz-list">
        <h1>Select quiz category and take a quiz</h1>
        <div className="quiz-list-card-container">
          {Object.entries(categoryMapping).map(([key,value]) => (
              <QuizListCard key={key} category={key} subcategories={value}/>
          ))}
        </div>
        <form onSubmit={handleSubmit} className='take-quiz-form'>
          <label>
              Choose difficulty:
              <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                  <option value="easy" >Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
              </select>
          </label>
          <br />
          <label>
              Choose type of questions:
              <select value={questionType} onChange={e => setQuestionType(e.target.value)}>
                  <option value="multiple">Multiple Choice</option>
                  <option value="boolean">True / False</option>
              </select>
          </label>
          <br />
          <label>
              Number of Questions:
              <input type="number" value={numQuestions} onChange={e => setNumQuestions(e.target.value)} min="10" max="50" />
          </label>
          <br />
          <div className="start-quiz-btn-container"><button type="submit" className="start-quiz-btn">Start Quiz</button></div>
        </form>
      </div>
  
    );
};

export default QuizLists;
