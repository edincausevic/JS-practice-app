import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const QuizQuestion = ({question, index, choseOption}) => {
  const [isSolutionVisible, setIsSolutionVisible] = useState(false)

    return (
      <div className="question-card" key={question.id}>
          <div className="question-title"><span className="q-icon">{index + 1}</span> {question.title}</div>
          <div className="code-block" >
          <SyntaxHighlighter 
            language={'javascript'} 
            style={oneDark}
            customStyle={{
              margin: 0,
              padding: '1rem',
              fontSize: '1.2rem',
              background: '#0b1120',
            }}
          >
            {question.question.trim()}
          </SyntaxHighlighter>
          </div>
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
              <button className="reveal-btn" onClick={() => setIsSolutionVisible(!isSolutionVisible)}>🔍 {isSolutionVisible ? 'Hide' : 'Reveal'} Solution</button>
          </div>
          {isSolutionVisible && <div><span className="solution-badge">✓ correct answer: {question.correctAnswer.toUpperCase()}</span></div>}
      </div>
    )
}

export default QuizQuestion;
