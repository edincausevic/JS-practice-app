
export const seedData = {
  id: 123,
  version: '1.0',
  allExercises: [
    {
      "id": "let-section-101",
      "title": "LET",
      "videoID": "05",
      "questions": [
        {
          "id": "q-let-001",
          "title": "Default value of let",
          "question": "let score;\nconsole.log(score);",
          "options": [
            { "id": "opt-1", "option": "a", "text": "null", "correct": false, "selected": false },
            { "id": "opt-2", "option": "b", "text": "undefined", "correct": true, "selected": false },
            { "id": "opt-3", "option": "c", "text": "ReferenceError", "correct": false, "selected": false },
            { "id": "opt-4", "option": "d", "text": "0", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-let-002",
          "title": "Reassigning values",
          "question": "let city = 'New York';\ncity = 'Berlin';\nconsole.log(city);",
          "options": [
            { "id": "opt-5", "option": "a", "text": "New York", "correct": false, "selected": false },
            { "id": "opt-6", "option": "b", "text": "Error: Assignment to constant variable", "correct": false, "selected": false },
            { "id": "opt-7", "option": "c", "text": "Berlin", "correct": true, "selected": false },
            { "id": "opt-8", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "task-let-001",
          "title": "Declare and Initialize",
          "description": "Create a variable named %message% using %let% and assign it the value %'Hello'%. On the next line, change its value to %'Bye'%.",
          "example": "%console.log(message)% → %Bye%",
          "note": "implement in your editor / console",
          "solution": "let message = 'Hello';\nmessage = 'Bye';"
        },
        {
          "id": "task-let-002",
          "title": "Late Assignment",
          "description": "Declare a variable named %price% using %let% without assigning it a value. Then, on a new line, assign it the number %100%.",
          "example": "%console.log(price)% → %100%",
          "note": "implement in your editor / console",
          "solution": "let price;\nprice = 100;"
        }
      ]
    },
    {
      "id": "const-section-102",
      "title": "CONST",
      "videoID": "06",
      "questions": [
        {
          "id": "q-const-001",
          "title": "Reassigning const",
          "question": "const speed = 100;\nspeed = 120;",
          "options": [
            { "id": "opt-c1", "option": "a", "text": "The value of speed becomes 120", "correct": false, "selected": false },
            { "id": "opt-c2", "option": "b", "text": "TypeError: Assignment to constant variable", "correct": true, "selected": false },
            { "id": "opt-c3", "option": "c", "text": "speed becomes undefined", "correct": false, "selected": false },
            { "id": "opt-c4", "option": "d", "text": "The code runs without any change to speed", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-const-002",
          "title": "Const Initialization",
          "question": "const gravity;",
          "options": [
            { "id": "opt-c5", "option": "a", "text": "SyntaxError: Missing initializer in const declaration", "correct": true, "selected": false },
            { "id": "opt-c6", "option": "b", "text": "gravity is assigned undefined", "correct": false, "selected": false },
            { "id": "opt-c7", "option": "c", "text": "gravity is assigned null", "correct": false, "selected": false },
            { "id": "opt-c8", "option": "d", "text": "The code works perfectly", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-const-003",
          "title": "Const vs Let",
          "question": "Which of these allows you to change the value after the first assignment?",
          "options": [
            { "id": "opt-c9", "option": "a", "text": "Only const", "correct": false, "selected": false },
            { "id": "opt-c10", "option": "b", "text": "Both let and const", "correct": false, "selected": false },
            { "id": "opt-c11", "option": "c", "text": "Only let", "correct": true, "selected": false },
            { "id": "opt-c12", "option": "d", "text": "Neither of them", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "task-const-001",
          "title": "Constant Declaration",
          "description": "Create a constant named %PI% and assign it the value %3.14%.",
          "example": "%console.log(PI)% → %3.14%",
          "note": "implement in your editor / console",
          "solution": "const PI = 3.14;"
        },
        {
          "id": "task-const-002",
          "title": "Identifying Errors",
          "description": "Try to declare a %const% named %taxRate% without a value. Note the error you get in the console.",
          "example": "%const taxRate;% → %SyntaxError%",
          "note": "This task is to observe the error behavior",
          "solution": "const taxRate = 0.2; // Correct way: must have a value"
        }
      ]
    },
    {
      "id": "naming-rules-103",
      "title": "Naming Rules",
      "videoID": "07",
      "questions": [
        {
          "id": "q-name-001",
          "title": "Case Sensitivity",
          "question": "let a = 5;\nlet A = 10;\nconsole.log(a);",
          "options": [
            { "id": "opt-n1", "option": "a", "text": "10", "correct": false, "selected": false },
            { "id": "opt-n2", "option": "b", "text": "5", "correct": true, "selected": false },
            { "id": "opt-n3", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-n4", "option": "d", "text": "SyntaxError", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-name-002",
          "title": "Starting a Variable Name",
          "question": "Which of these variable declarations will cause an error?",
          "options": [
            { "id": "opt-n5", "option": "a", "text": "let _user = 'John';", "correct": false, "selected": false },
            { "id": "opt-n6", "option": "b", "text": "let $price = 10;", "correct": false, "selected": false },
            { "id": "opt-n7", "option": "c", "text": "let 1stPlace = 'Winner';", "correct": true, "selected": false },
            { "id": "opt-n8", "option": "d", "text": "let user1 = 'John';", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-name-003",
          "title": "Spaces and Symbols",
          "question": "What happens if you use a space in a variable name like: let user name = 'Joe'?",
          "options": [
            { "id": "opt-n9", "option": "a", "text": "It works normally", "correct": false, "selected": false },
            { "id": "opt-n10", "option": "b", "text": "It results in a SyntaxError", "correct": true, "selected": false },
            { "id": "opt-n11", "option": "c", "text": "JS automatically adds an underscore", "correct": false, "selected": false },
            { "id": "opt-n12", "option": "d", "text": "The variable name becomes 'user'", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-name-001",
          "title": "Chaining Words",
          "description": "Declare a variable that contains two words (my score). Assign it a value and ensure there are no spaces or dashes.",
          "example": "%let myName = Mike;%",
          "note": "Don't use spaces or illegal characters",
          "solution": "let myScore = 100;"
        },
        {
          "id": "task-name-002",
          "title": "Verify Case Sensitivity",
          "description": "Create two variables: %let color = 'red'% and %let Color = 'blue'%. Log both to see that they are separate variables.",
          "example": "%color% is different from %Color%",
          "note": "JS sees capital and lowercase letters as different",
          "solution": "let color = 'red';\nlet Color = 'blue';"
        }
      ]
    },
    {
      "id": "comments-section-104",
      "title": "Comments",
      "videoID": "08",
      "questions": [
        {
          "id": "q-comm-001",
          "title": "Single-line Comments",
          "question": "Which characters are used to start a single-line comment in JavaScript?",
          "options": [
            { "id": "opt-m1", "option": "a", "text": "<!--", "correct": false, "selected": false },
            { "id": "opt-m2", "option": "b", "text": "//", "correct": true, "selected": false },
            { "id": "opt-m3", "option": "c", "text": "#", "correct": false, "selected": false },
            { "id": "opt-m4", "option": "d", "text": "/*", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-comm-002",
          "title": "Multi-line Comments",
          "question": "How do you start and end a multi-line comment block?",
          "options": [
            { "id": "opt-m5", "option": "a", "text": "// and //", "correct": false, "selected": false },
            { "id": "opt-m6", "option": "b", "text": "/* and */", "correct": true, "selected": false },
            { "id": "opt-m7", "option": "c", "text": "<!-- and -->", "correct": false, "selected": false },
            { "id": "opt-m8", "option": "d", "text": "{ and }", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-comm-003",
          "title": "VS Code Shortcut",
          "question": "What is the common shortcut to comment out a line of code in Visual Studio Code?",
          "options": [
            { "id": "opt-m9", "option": "a", "text": "Ctrl + C (Cmd + C on Mac)", "correct": false, "selected": false },
            { "id": "opt-m10", "option": "b", "text": "Ctrl + / (Cmd + / on Mac)", "correct": true, "selected": false },
            { "id": "opt-m11", "option": "c", "text": "Alt + F4", "correct": false, "selected": false },
            { "id": "opt-m12", "option": "d", "text": "Ctrl + S", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-comm-001",
          "title": "Comment Out Code",
          "description": "Take the line %let hiddenValue = 10;% and use a single-line comment so that the JavaScript engine ignores it.",
          "example": "%// let hiddenValue = 10;%",
          "note": "Use the double forward slash",
          "solution": "// let hiddenValue = 10;"
        },
        {
          "id": "task-comm-002",
          "title": "Write a Note",
          "description": "Use a multi-line comment to write a two-line note about your code.",
          "example": "%/* This is a \n two line note */%",
          "note": "Ensure you close the comment block",
          "solution": "/* This is a \n note */"
        }
      ]
    },
  ]
}