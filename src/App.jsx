import { useState } from "react"
import Header from "./components/Header"
import MainNav from "./components/MainNav"
import QuizQuestion from "./components/QuizQuestion"

function App() {
  const [exercizes, setExercizes] = useState(null)
  

  const data = {
    id: 123,
    version: '1.0',
    allQuestions: [
      {
        id: '9012310293812903810',
        title: 'Variables',
        questions: [
          {
            id: '98102830219839021',
            title: 'Variable hoisting',
            question: "console.log(myVar);\nvar myVar = 5;\nconsole.log(myVar);",
            options: [
              { id: '21412323412341', option: 'a', text: 'undefined then 5', correct: true, selected: false },
              { id: '21431523412341', option: 'b', text: 'ReferenceError', correct: false, selected: false },
              { id: '21431234124141', option: 'c', text: '5 then 5', correct: false, selected: false },
              { id: '21431255555341', option: 'd', text: 'null then 5', correct: false, selected: false },
            ],
            correctAnswer: 'c'
          },
          {
            id: '98102830229839221',
            title: 'Temporal dead zone',
            question: "console.log(a);\nlet a = 10;",
            options: [
              { id: '22212323412341', option: 'a', text: 'undefined', correct: false, selected: false },
              { id: '21412323417741', option: 'b', text: '10', correct: false, selected: false },
              { id: '21411123412341', option: 'c', text: 'ReferenceError', correct: true, selected: false },
              { id: '21412443412341', option: 'd', text: 'null', correct: false, selected: false },
            ],
            correctAnswer: 'c'
          },
        ],
        tasks: [
          {
            id: '901482f0aj921901290h',
            title: "Reverse a string",
            description: "Write a function {{reverseString(str)}} that takes a string and returns it reversed.",
            example: '{{reverseString("hello")}} → {{"olleh"}}',
            note: "implement in your editor / console",
            solution: "const reverseString = str => str.split('').reverse().join('');"
          },
          {
            id: '901122f0aj921901290h',
            title: "Filter even numbers",
            description: "Write a function {{filterEvens(arr)}} that returns a new array containing only the even numbers.",
            example: '{{filterEvens([1, 2, 3, 4, 5, 6])}} → {{[2, 4, 6]}}',
            note: "implement in your editor / console",
            solution: "const filterEvens = arr => arr.filter(num => num % 2 === 0);"
          },
        ]
      },
    ]
  }

  const displayQuestions = (exercizeData) => {
    setExercizes(exercizeData)
  }

  const handleChoseOption = (option) => {
  console.log('option: ', option);
  

  }

  return (
    <>
      <MainNav data={data.allQuestions} displayExercize={displayQuestions}/>

      <div className="main-panel">
        <Header/>

        <main className="content-area" id="mainContent">

          {!exercizes ? (
              <div>Welcome</div>
            ) : 
          (
            <div>

            <div className="content-header">
                <h1 className="page-title">🧠 JavaScript Drills</h1>
                <button className="left-reset-btn" id="leftSideResetBtn"><span>↻</span> reset all</button>
            </div>


            {exercizes?.questions.map((question, index) => (
              <QuizQuestion key={question.id} index={index} question={question} choseOption={handleChoseOption}/>
            ))}


            <h2 style={{margin: '2.5rem 0 1rem', display: 'flex', gap: '10px', alignItems: 'center'}}>
                <span style={{background: '#f97316', width: '8px', height: '32px', borderRadius: '8px'}}></span> 
                Coding Challenges — write the function
            </h2>

         
            {/* <div className="challenge-card" id="challenge1">
                <div className="challenge-title"><span className="ch-icon">⚡1</span> Reverse a string</div>
                <div className="challenge-desc">
                    📝 Write a function <code>reverseString(str)</code> that takes a string and returns it reversed. <br>
                    <strong>Example:</strong> <code>reverseString("hello")</code> → <code>"olleh"</code>
                </div>
                <div className="challenge-note">
                    <span>🔧 implement in your editor / console</span>
                    <button className="reveal-btn challenge-reveal" data-challenge="1">🔍 Show Code</button>
                </div>
                <div className="challenge-solution" id="ch-sol-1">
                    <div className="code-block">const reverseString = str => str.split('').reverse().join('');</div>
                </div>
            </div>

       
            <div className="challenge-card" id="challenge2">
                <div className="challenge-title"><span className="ch-icon">⚡2</span> Filter even numbers</div>
                <div className="challenge-desc">
                    📝 Write a function <code>filterEvens(arr)</code> that returns a new array containing only the even numbers. <br>
                    <strong>Example:</strong> <code>filterEvens([1, 2, 3, 4, 5, 6])</code> → <code>[2, 4, 6]</code>
                </div>
                <div className="challenge-note">
                    <span>🔧 try with <code>.filter()</code></span>
                    <button className="reveal-btn challenge-reveal" data-challenge="2">🔍 Show Code</button>
                </div>
                <div className="challenge-solution" id="ch-sol-2">
                    <div className="code-block">const filterEvens = arr => arr.filter(num => num % 2 === 0);</div>
                </div>
            </div>

         
            <div className="challenge-card" id="challenge3">
                <div className="challenge-title"><span className="ch-icon">⚡3</span> Delayed console.log</div>
                <div className="challenge-desc">
                    📝 Write a function <code>delayedMessage(msg, delay)</code> that logs the message after <code>delay</code> milliseconds. <br>
                    <strong>Example:</strong> <code>delayedMessage("Hello", 2000)</code> → logs “Hello” after 2 seconds.
                </div>
                <div className="challenge-note">
                    <span>⏱️ use <code>setTimeout</code></span>
                    <button className="reveal-btn challenge-reveal" data-challenge="3">🔍 Show Code</button>
                </div>
                <div className="challenge-solution" id="ch-sol-3">
                    <div className="code-block">function delayedMessage(msg, delay) {\n  setTimeout(() => console.log(msg), delay);\n}</div>
                </div>
            </div> */}

          </div>
          )}
        </main>
      </div>
    </>
  )
}

export default App
