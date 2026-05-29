

const Header = ({onResetBtnClick}) => {
  return (
    <header className="top-bar">
        {/* <div className="progress-indicator">
            <span>✅ done</span>
            <span className="progress-badge" id="progressDisplay">0 / 6</span>
        </div> */}
        <div className="header-stats flex ">
            <div>Questions: <strong >0 </strong><span >/ 100</span></div>
            <div style={{margin: '0 9px'}}>|</div>
            <div>Assignments: <strong >0 </strong><span>/ 24</span></div>
        </div>
        <div></div>
        <button onClick={onResetBtnClick}  className="reset-btn" id="resetAllBtn"><span>↻</span> reset all exercises</button>
    </header>
)
}

export default Header;
