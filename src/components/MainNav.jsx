
const MainNav = () => {
  return (
    <nav className="left-menu">
        <div className="menu-header">
          <h2>📘 JS drills </h2>
        </div>
        <div className="course-link">
          <a href="https://example.com/js-course" target="_blank" rel="noopener">🎓 Go to JS Course</a>
        </div>
        <ul className="exercise-list" id="exerciseList">
          <li className="exercise-item" data-ex-id="1"><a href="#ex1"><i>01</i> Variables & scope <span className="status-dot" id="statusDot1"></span></a></li>
          <li className="exercise-item" data-ex-id="2"><a href="#ex2"><i>02</i> Closures <span className="status-dot" id="statusDot2"></span></a></li>
          <li className="exercise-item" data-ex-id="3"><a href="#ex3"><i>03</i> Hoisting <span className="status-dot" id="statusDot3"></span></a></li>
          <li className="exercise-item" data-ex-id="4"><a href="#ex4"><i>04</i> Promises <span className="status-dot" id="statusDot4"></span></a></li>
          <li className="exercise-item" data-ex-id="5"><a href="#ex5"><i>05</i> this keyword <span className="status-dot" id="statusDot5"></span></a></li>
          <li className="exercise-item" data-ex-id="6"><a href="#ex6"><i>06</i> Array methods <span className="status-dot" id="statusDot6"></span></a></li>
          <li className="exercise-item" style={{marginTop: '12px', borderTop: '1px solid #1e2b3f', paddingTop: '8px'}}><a href="#challenge1"><i>⚡</i> Reverse string</a></li>
          <li className="exercise-item"><a href="#challenge2"><i>⚡</i> Filter even</a></li>
          <li className="exercise-item"><a href="#challenge3"><i>⚡</i> Delay log</a></li>
        </ul>
        <div style={{marginTop: 'auto', fontSize: '0.8rem', color: '#5f6c80', padding: '1rem', borderTop: '1px solid #1e2b3f'}}>
          ⚡ green = correct · red = wrong
        </div>
    </nav>
  )
}

export default MainNav;
