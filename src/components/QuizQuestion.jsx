import { useState } from "react";


const QuizQuestion = ({question, index, choseOption}) => {
  const [isSolutionVisible, setIsSolutionVisible] = useState(false)

    return (
      <div className="question-card" key={question.id}>
          <div className="question-title"><span className="q-icon">{index + 1}</span> {question.title}</div>
          <div className="code-block">{question.question}</div>
          <div className="options-grid">
            {question.options.map(option => (
              <label 
                onClick={() => choseOption(option.id, question.id)} 
                key={option.id}
                className={`option-item ${option.correct && option.selected ? 'correct-guess' : ''} ${!option.correct && option.selected ? 'wrong-guess' : ''}`} >
                  <span className="option-prefix">{option.option.toUpperCase()}</span> {option.text}
                </label>
            ))}
          </div>
          <div className="action-row">
              <button className="reveal-btn" onClick={() => setIsSolutionVisible(!isSolutionVisible)}>🔍 Reveal solution</button>
          </div>
          {isSolutionVisible && <div><span className="solution-badge">✓ correct answer: {question.correctAnswer.toUpperCase()}</span></div>}
      </div>
    )
}

export default QuizQuestion;
