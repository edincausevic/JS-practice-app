import { useState } from "react";
import { _GL } from "../globals/global";
import UdemyLogo from "../assets/udemy_logo.png"

const MainNav = ({displayExercize, data}) => {
  const [activeLinkId, setActiveLinkId] = useState()

  return (
    <nav className="left-menu">
        <div className="menu-header">
          <h2>📘 JS drills </h2>
        </div>
        <div className="course-link">
          <a href="https://example.com/js-course" target="_blank" rel="noopener">
          <span><img style={{height: '15px'}} src={UdemyLogo}/></span> 
          Go to JS Course</a>
        </div>
        <ul className="exercise-list" >
          <h2 className="pl-2 font-bold">Udemy Video Numbers</h2>
          {data?.map((listItem, index) => (
            <li 
              className={`exercise-item ${activeLinkId === listItem.id ? 'active-exercise' : ''}`} 
              key={listItem.id} 
              onClick={() => {
                setActiveLinkId(listItem.id)
                displayExercize(listItem)
              }}>
              <a href="#"><i>{_GL.UTIL.formatNum(index)}</i> {listItem.title} 
              {/* <span className="status-dot" ></span> */}
              </a>
            </li>
          ))}
          {/* <li className="exercise-item" style={{marginTop: '12px', borderTop: '1px solid #1e2b3f', paddingTop: '8px'}}><a href="#challenge1"><i>⚡</i> Reverse string</a></li>
          <li className="exercise-item"><a href="#challenge2"><i>⚡</i> Filter even</a></li>
          <li className="exercise-item"><a href="#challenge3"><i>⚡</i> Delay log</a></li> */}
        </ul>
        <div style={{marginTop: 'auto', fontSize: '0.8rem', color: '#5f6c80', padding: '1rem', borderTop: '1px solid #1e2b3f'}}>
          ⚡ green = correct · red = wrong
        </div>
    </nav>
  )
}

export default MainNav;
