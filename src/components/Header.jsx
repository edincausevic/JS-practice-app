

const Header = ({onResetBtnClick, stats}) => {
  return (
    <header className="top-bar">
        {/* <div className="progress-indicator">
            <span>✅ done</span>
            <span className="progress-badge" id="progressDisplay">0 / 6</span>
        </div> */}
        <div className="header-stats flex ">
            <div>
            <svg style={{display: 'inline-block', color: 'red', marginRight: '4px'}} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                <strong > {stats?.correctQuestions} / </strong>
                <strong style={{color: 'red'}}>{stats?.incorrectQuestions} </strong>
                <strong >/ {stats?.numOfQuestions}</strong></div>
            <div style={{margin: '0 12px'}}></div>
            <div>
            <svg style={{display: 'inline-block', marginRight: '4px', color: '#005cff', position: 'relative', top: '-2px'}} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><line x1="9" y1="12" x2="10" y2="13"></line><line x1="15" y1="12" x2="15.01" y2="12"></line><line x1="9" y1="16" x2="10" y2="17"></line><line x1="15" y1="16" x2="15.01" y2="16"></line></svg>
                <strong > {stats?.assignmentsDone} </strong>
                <strong>/ {stats?.numOfAssignments}</strong></div>
        </div>
        <div></div>
        <button onClick={onResetBtnClick}  className="reset-btn" id="resetAllBtn"><span>↻</span> reset all exercises</button>
    </header>
)
}

export default Header;


