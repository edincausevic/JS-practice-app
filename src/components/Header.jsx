

const Header = ({onResetBtnClick, stats}) => {
  return (
    <header className="top-bar">
        {/* <div className="progress-indicator">
            <span>✅ done</span>
            <span className="progress-badge" id="progressDisplay">0 / 6</span>
        </div> */}
        <div className="header-stats flex ">
            <div>Questions: 
                <strong > {stats?.correctQuestions} </strong>
                <strong >/ {stats?.incorrectQuestions} </strong>
                <span >/ {stats?.numOfQuestions}</span></div>
            <div style={{margin: '0 9px'}}>|</div>
            <div>Assignments: 
                <strong > {stats?.assignmentsDone} </strong>
                <span>/ {stats?.numOfAssignments}</span></div>
        </div>
        <div></div>
        <button onClick={onResetBtnClick}  className="reset-btn" id="resetAllBtn"><span>↻</span> reset all exercises</button>
    </header>
)
}

export default Header;


let user = 'John';

console.log(user)