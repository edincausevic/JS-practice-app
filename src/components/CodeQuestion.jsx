import { useState } from "react";
import { _GL } from "../globals/global";

const CodeQuestion = ({title, description, result, solution}) => {
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
        <div className="challenge-note">
            <button 
            onClick={() => setIsSolutionVisible(!isSolutionVisible)}
            className="reveal-btn challenge-reveal" >🔍 {isSolutionVisible ? 'Hide' : "Reveal"} Solution</button>
        </div>
        <div className="" >
            {isSolutionVisible && <div className="code-block" >{solution}</div>}
        </div>
    </div>
  )
}

export default CodeQuestion;
