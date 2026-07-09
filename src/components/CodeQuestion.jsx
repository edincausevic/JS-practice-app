import { useState } from "react";
import { _GL } from "../globals/global";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeQuestion = ({title, description, result, solution, done, markAsDone, unmarkAsDone}) => {

  const [isSolutionVisible, setIsSolutionVisible] = useState(false)

  return (
    <div className="challenge-card" >
        <div className="challenge-title"><span className="ch-icon">⚡</span> {title}</div>
        <div className="challenge-desc">
            📝 <span dangerouslySetInnerHTML={{ __html: _GL.UTIL.formatCodeMarkup(description) }}></span> <br/>
            <strong>Result:</strong> 
            <span 
              dangerouslySetInnerHTML={{ __html: _GL.UTIL.formatCodeMarkup(result) }}
              ></span>
        </div>
        <div className="challenge-note flex justify-between">
            <button 
            onClick={() => setIsSolutionVisible(!isSolutionVisible)}
            className="reveal-btn challenge-reveal" >🔍 {isSolutionVisible ? 'Hide' : "Reveal"} Solution</button>
   
            <div>
              {!done ? 
                <button  className="reveal-btn challenge-reveal" onClick={markAsDone}>Mark as done</button> : 
                <div className="flex justify-between">
                    <span 
                      className="reveal-btn challenge-reveal mr-2"
                      style={{marginRight:'5px', borderColor: '#22c55e', background: '#22c55e20', cursor: 'default'}}>
                      DONE
                    </span>  
                  <button  className="reveal-btn challenge-reveal" onClick={unmarkAsDone}>Undone</button>
                </div>}
            </div>
        </div>
        <div className="" >
            {isSolutionVisible && <div className="code-block" >
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
                {solution}
              </SyntaxHighlighter>  
            </div>}
        </div>
    </div>
  )
}

export default CodeQuestion;
