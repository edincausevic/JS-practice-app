import { useState } from "react";
import UdemyLogo from "../assets/udemy_logo.png"

const MainNav = ({displayExercise, data}) => {
  const [activeLinkId, setActiveLinkId] = useState()

  return (
    <nav className="left-menu">
        <div className="menu-header">
          <h2>📘 JavaScript Drills </h2>
        </div>
        <div className="course-link">
          <a href="https://example.com/js-course" target="_blank" rel="noopener" style={{marginRight: '7px'}}>
          <span><img style={{height: '15px'}} src={UdemyLogo}/></span> 
          Go to JS Course</a>
          <a 
            href="https://www.youtube.com/channel/UCxsJ-g3ALVzsn_VCkKfDXxA" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: 'inherit' }}
          >
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                style={{ height: '15px', fill: '#FF0000' }}
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </span>
            My YouTube
          </a>
        </div>
        <ul className="exercise-list" >
          <h2 className="pl-2 font-bold">Udemy Videos</h2>
          {data?.map((listItem) => (
            <li 
              className={`exercise-item ${activeLinkId === listItem.id ? 'active-exercise' : ''}`} 
              key={listItem.id} 
              onClick={() => {
                setActiveLinkId(listItem.id)
                displayExercise(listItem)
              }}>
              <a href="#"><i style={{color: listItem.milestone ? '#f37a7a' : '#38bdf8'}}>{listItem.videoID} </i> 
              {listItem.title} 
              {/* <span className="status-dot" ></span> */}
              </a>
            </li>
          ))}
          {/* <li className="exercise-item" style={{marginTop: '12px', borderTop: '1px solid #1e2b3f', paddingTop: '8px'}}><a href="#challenge1"><i>⚡</i> Reverse string</a></li>
          <li className="exercise-item"><a href="#challenge2"><i>⚡</i> Filter even</a></li>
          <li className="exercise-item"><a href="#challenge3"><i>⚡</i> Delay log</a></li> */}
        </ul>
        {/* <div style={{marginTop: 'auto', fontSize: '0.8rem', color: '#5f6c80', padding: '1rem', borderTop: '1px solid #1e2b3f'}}>
          What to add: code color coding, copy code icon, stats of one and all exercises, btn on taskt 'click to make as DONE', each item in the menu should have green icon if all is done, milestne number should be red, za lake stvari ostavi samo pitanja a smakni tasks, u dosta lekcija odgovor je uvjek A, promjeni to
        </div> */}
    </nav>
  )
}

export default MainNav;
