import { useState } from "react"
import Header from "./components/Header"
import MainNav from "./components/MainNav"
import QuizQuestion from "./components/QuizQuestion"
import { initDB, saveDB, getDB } from "./db/init"
import CodeQuestion from "./components/CodeQuestion"
import Welcome from "./components/Welcome"

function App() {
  initDB()

  const [selectedExercise, setSelectedExercise] = useState(null)
  const [courseData, setCourseData] = useState(getDB())
  const [stats, setStats] = useState(getStats())

  function getStats() {
    const allData = getDB()

    const questionsTotal = allData.allExercises.reduce((n, e) => { return n + e.questions.length}, 0)
    const tasksTotal = allData.allExercises.reduce((n, e) => { return n + e.tasks.length}, 0)
    let totalCorrect = 0;
    let totalFalse = 0;
    let totalTasksDone = 0;

    allData.allExercises.forEach((section) => {
      section.questions.forEach((question) => {
        // Check if the user selected the correct option
        const userGotItRight = question.options.some(
          (opt) => opt.correct === true && opt.selected === true
        );
        const userGotItWrong = question.options.some(
          (opt) => opt.correct === false && opt.selected === true
        );

        if (userGotItRight) totalCorrect++;
        if(userGotItWrong) totalFalse++
      });

      section.tasks.forEach(task => {
        if(task.done) totalTasksDone++
      })
    });

    return {
      numOfQuestions: questionsTotal,
      correctQuestions: totalCorrect,
      incorrectQuestions: totalFalse,
      numOfAssignments: tasksTotal,
      assignmentsDone: totalTasksDone,
    }
  }

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

    setStats(getStats())
  }

  const resetAllExercises = () => {
    
    const resetData = {
      ...courseData,
      allExercises: courseData.allExercises.map(exercise => ({
        ...exercise,
        questions: exercise.questions.map(q => ({
          ...q,
          options: q.options.map(opt => ({
            ...opt,
            selected: false
          }))
        })),
        tasks: exercise.tasks.map(task => ({...task, done: false}))
      }))
    };
    
    // save on the server
    saveDB(resetData)

    window.location.reload()
  }

  const handleMarkAsDone = (title, selectedExercise) => {

    const updatedSelectedExercise = {
      ...selectedExercise,
      tasks: selectedExercise.tasks.map(task => {
        if(task.title === title) return {...task, done: true}
        return task
      })
    }


    const courseDataWithMarkedTask = {
      ...courseData,
      allExercises: courseData.allExercises.map(exercise => {
        if(exercise.id === updatedSelectedExercise.id) return updatedSelectedExercise
        return exercise
      })
    }
    setCourseData(courseDataWithMarkedTask)
    setSelectedExercise(updatedSelectedExercise);

    // save on the server
    saveDB(courseDataWithMarkedTask)

    setStats(getStats())
  }

  const handleUnmarkAsDone = (title, selectedExercise) => {

    const updatedSelectedExercise = {
      ...selectedExercise,
      tasks: selectedExercise.tasks.map(task => {
        if(task.title === title) return {...task, done: false}
        return task
      })
    }

    const courseDataWithMarkedTask = {
      ...courseData,
      allExercises: courseData.allExercises.map(exercise => {
        if(exercise.id === updatedSelectedExercise.id) return updatedSelectedExercise
        return exercise
      })
    }
    setCourseData(courseDataWithMarkedTask)
    setSelectedExercise(updatedSelectedExercise);

    // save on the server
    saveDB(courseDataWithMarkedTask)

    setStats(getStats())
  }

  const handleReset = () => {
    const exerciseID = selectedExercise.id;

    const resetedData = {
      ...selectedExercise,
        questions: selectedExercise.questions.map(question => ({
          ...question,
          options: question.options.map(option => ({
            ...option,
            selected: false
          }))
        })),
        tasks: selectedExercise.tasks.map(task => ({...task, done: false}))
    }
    
   
    const newData = {
      ...courseData,
      allExercises: courseData.allExercises.map(exercise => {
        if(exercise.id === exerciseID) return resetedData
        return exercise
      })
    }

    setCourseData(newData)
    setSelectedExercise(resetedData);

    // // save on the server
    saveDB(newData)

    setStats(getStats())
  }

  return (
    <>
      <MainNav data={courseData.allExercises} displayExercise={displayQuestions}/>

      <div className="main-panel">
        <Header 
        stats={stats}
        onResetBtnClick={resetAllExercises}/>

        {!selectedExercise ?
        <Welcome/>
      :  
        <main className="content-area" id="mainContent">

          {!selectedExercise ? (
              <div>Welcome</div>
            ) : 
          (
            <div>

            <div className="content-header">
                <h1 className="page-title">🧠 JavaScript Drills</h1>
                <button className="left-reset-btn" onClick={() => handleReset()}><span>↻</span> Reset </button>
            </div>


            {selectedExercise?.questions.map((question, index) => (
              <QuizQuestion key={question.id} index={index} question={question} choseOption={handleChoseOption}/>
            ))}


            <h2 style={{margin: '3.5rem 0 1rem', display: 'flex', gap: '10px', alignItems: 'center'}}>
                <span style={{background: '#f97316', width: '8px', height: '32px', borderRadius: '8px'}}></span> 
                <strong>Coding Challenges</strong> — 🔧 implement in your editor
            </h2>

            {selectedExercise?.tasks.map(task => {
              return <CodeQuestion 
                key={task.id} 
                {...task} 
                unmarkAsDone = {() => handleUnmarkAsDone(task.title, selectedExercise)}
                markAsDone={() => handleMarkAsDone(task.title, selectedExercise)}/>
            })}
            

          </div>
          )}
        </main> }
      </div>
    </>
  )
}

export default App
