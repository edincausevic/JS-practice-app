import Header from "./components/Header"
import MainNav from "./components/MainNav"

function App() {

  return (
    <>
      <MainNav/>

      <div className="main-panel">
        <Header/>

        <main className="content-area" id="mainContent">
            <div className="content-header">
                <h1 className="page-title">🧠 JavaScript Drills</h1>
                <button className="left-reset-btn" id="leftSideResetBtn"><span>↻</span> reset all</button>
            </div>


            <div className="question-card" id="ex1" data-ex-id="1" data-correct="a">
                <div className="question-title"><span className="q-icon">1</span> Variable hoisting</div>
                <div className="code-block">{`console.log(myVar);\nvar myVar = 5;\nconsole.log(myVar);`}</div>
                <div className="options-grid">
                    <label className="option-item" data-opt="a"><span className="option-prefix">A</span> undefined then 5</label>
                    <label className="option-item" data-opt="b"><span className="option-prefix">B</span> ReferenceError</label>
                    <label className="option-item" data-opt="c"><span className="option-prefix">C</span> 5 then 5</label>
                    <label className="option-item" data-opt="d"><span className="option-prefix">D</span> null then 5</label>
                </div>
                <div className="action-row">
                    <div className="feedback-msg" id="fb1"></div>
                    <button className="reveal-btn" data-reveal="1">🔍 Reveal solution</button>
                </div>
                <div id="solution1" style={{display: 'none'}}><span className="solution-badge">✓ correct answer: A</span></div>
            </div>

{/*      
            <div className="question-card" id="ex2" data-ex-id="2" data-correct="b">
                <div className="question-title"><span className="q-icon">2</span> Closure value</div>
                <div className="code-block">for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}</div>
                <div className="options-grid">
                    <label className="option-item" data-opt="a"><span className="option-prefix">A</span> 0,1,2</label>
                    <label className="option-item" data-opt="b"><span className="option-prefix">B</span> 3,3,3</label>
                    <label className="option-item" data-opt="c"><span className="option-prefix">C</span> 2,2,2</label>
                    <label className="option-item" data-opt="d"><span className="option-prefix">D</span> undefined x3</label>
                </div>
                <div className="action-row">
                    <div className="feedback-msg" id="fb2"></div>
                    <button className="reveal-btn" data-reveal="2">🔍 Reveal solution</button>
                </div>
                <div id="solution2" style="display: none;"><span className="solution-badge">✓ correct answer: B</span></div>
            </div>

            <div className="question-card" id="ex3" data-ex-id="3" data-correct="c">
                <div className="question-title"><span className="q-icon">3</span> Temporal dead zone</div>
                <div className="code-block">console.log(a);\nlet a = 10;</div>
                <div className="options-grid">
                    <label className="option-item" data-opt="a"><span className="option-prefix">A</span> undefined</label>
                    <label className="option-item" data-opt="b"><span className="option-prefix">B</span> 10</label>
                    <label className="option-item" data-opt="c"><span className="option-prefix">C</span> ReferenceError</label>
                    <label className="option-item" data-opt="d"><span className="option-prefix">D</span> null</label>
                </div>
                <div className="action-row">
                    <div className="feedback-msg" id="fb3"></div>
                    <button className="reveal-btn" data-reveal="3">🔍 Reveal solution</button>
                </div>
                <div id="solution3" style="display: none;"><span className="solution-badge">✓ correct answer: C</span></div>
            </div>

            <div className="question-card" id="ex4" data-ex-id="4" data-correct="b">
                <div className="question-title"><span className="q-icon">4</span> Promise execution</div>
                <div className="code-block">Promise.resolve(1)\n  .then(x => x + 1)\n  .then(console.log)</div>
                <div className="options-grid">
                    <label className="option-item" data-opt="a"><span className="option-prefix">A</span> 1</label>
                    <label className="option-item" data-opt="b"><span className="option-prefix">B</span> 2</label>
                    <label className="option-item" data-opt="c"><span className="option-prefix">C</span> undefined</label>
                    <label className="option-item" data-opt="d"><span className="option-prefix">D</span> [object Promise]</label>
                </div>
                <div className="action-row">
                    <div className="feedback-msg" id="fb4"></div>
                    <button className="reveal-btn" data-reveal="4">🔍 Reveal solution</button>
                </div>
                <div id="solution4" style="display: none;"><span className="solution-badge">✓ correct answer: B</span></div>
            </div>

            <div className="question-card" id="ex5" data-ex-id="5" data-correct="b">
                <div className="question-title"><span className="q-icon">5</span> “this” in event</div>
                <div className="code-block">const obj = {\n  name: 'Alice',\n  greet: () => { console.log(this.name); }\n};\nobj.greet();</div>
                <div className="options-grid">
                    <label className="option-item" data-opt="a"><span className="option-prefix">A</span> 'Alice'</label>
                    <label className="option-item" data-opt="b"><span className="option-prefix">B</span> undefined (global)</label>
                    <label className="option-item" data-opt="c"><span className="option-prefix">C</span> window / global</label>
                    <label className="option-item" data-opt="d"><span className="option-prefix">D</span> TypeError</label>
                </div>
                <div className="action-row">
                    <div className="feedback-msg" id="fb5"></div>
                    <button className="reveal-btn" data-reveal="5">🔍 Reveal solution</button>
                </div>
                <div id="solution5" style="display: none;"><span className="solution-badge">✓ correct answer: B</span></div>
            </div>

            <div className="question-card" id="ex6" data-ex-id="6" data-correct="a">
                <div className="question-title"><span className="q-icon">6</span> Array map</div>
                <div className="code-block">[1, 2, 3].map(num => {\n  if (num > 1) return num * 2;\n});</div>
                <div className="options-grid">
                    <label className="option-item" data-opt="a"><span className="option-prefix">A</span> [undefined, 4, 6]</label>
                    <label className="option-item" data-opt="b"><span className="option-prefix">B</span> [2, 4, 6]</label>
                    <label className="option-item" data-opt="c"><span className="option-prefix">C</span> [4, 6]</label>
                    <label className="option-item" data-opt="d"><span className="option-prefix">D</span> [undefined, undefined, undefined]</label>
                </div>
                <div className="action-row">
                    <div className="feedback-msg" id="fb6"></div>
                    <button className="reveal-btn" data-reveal="6">🔍 Reveal solution</button>
                </div>
                <div id="solution6" style="display: none;"><span className="solution-badge">✓ correct answer: A</span></div>
            </div> */}

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
        </main>
      </div>
    </>
  )
}

export default App
