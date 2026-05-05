import { useState } from "react"
import Header from "./components/Header"
import MainNav from "./components/MainNav"
import QuizQuestion from "./components/QuizQuestion"
import { initDB, saveDB, getDB } from "./db/init"

function App() {
  initDB()

  const [selectedExercise, setSelectedExercise] = useState(null)
  const [courseData, setCourseData] = useState(getDB())

  
  const displayQuestions = (exerciseData) => {
    setSelectedExercise(exerciseData)
  }

  const handleChoseOption = (optionId, questionID) => {
    
    const updatedData = {
      ...courseData,
      allExercises: courseData.allExercises.map(exercise => ({
        ...exercise,
        questions: exercise.questions.map(question => {
          if(question.id === questionID) {
            return {...question, options: question.options.map(opt => {
              if (opt.id === optionId) {
                return { ...opt, selected: true };
              }else {
                return { ...opt, selected: false };
              }
            })}
          }
          return {...question}
        }
      )
      }))
    };

    // display exercises
    updatedData.allExercises.forEach(exercise => {
      if(selectedExercise.id === exercise.id) {
        setSelectedExercise(exercise)
      }
    })
    
    setCourseData(updatedData)
    
    // save on the server
    saveDB(updatedData)
  }

  return (
    <>
      <MainNav data={courseData.allExercises} displayExercise={displayQuestions}/>

      <div className="main-panel">
        <Header/>

        <main className="content-area" id="mainContent">

          {!selectedExercise ? (
              <div>Welcome</div>
            ) : 
          (
            <div>

            <div className="content-header">
                <h1 className="page-title">🧠 JavaScript Drills</h1>
                <button className="left-reset-btn" id="leftSideResetBtn"><span>↻</span> reset all</button>
            </div>


            {selectedExercise?.questions.map((question, index) => (
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
