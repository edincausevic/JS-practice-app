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
          "result": "%Bye%",
          "note": "implement in your editor / console",
          "solution": "let message = 'Hello';\nmessage = 'Bye';"
        },
        {
          "id": "task-let-002",
          "title": "Late Assignment",
          "description": "Declare a variable named %price% using %let% without assigning it a value. Then, on a new line, assign it the number %100%.",
          "result": "%100%",
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
          "result": "%3.14%",
          "note": "implement in your editor / console",
          "solution": "const PI = 3.14;"
        },
        {
          "id": "task-const-002",
          "title": "Identifying Errors",
          "description": "Try to declare a %const% named %taxRate% without a value. Note the error you get in the console.",
          "result": "%SyntaxError%",
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
          "result": "%Mike%",
          "note": "Don't use spaces or illegal characters",
          "solution": "let myScore = 100;"
        },
        {
          "id": "task-name-002",
          "title": "Verify Case Sensitivity",
          "description": "Create two variables: %let color = 'red'% and %let Color = 'blue'%. Log both to see that they are separate variables.",
          "result": "%true%",
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
          "result": "%ignored%",
          "note": "Use the double forward slash",
          "solution": "// let hiddenValue = 10;"
        },
        {
          "id": "task-comm-002",
          "title": "Write a Note",
          "description": "Use a multi-line comment to write a two-line note about your code.",
          "result": "%ignored%",
          "note": "Ensure you close the comment block",
          "solution": "/* This is a \n note */"
        }
      ]
    },
    {
      "id": "strings-section-105",
      "title": "Strings",
      "videoID": "09",
      "questions": [
        {
          "id": "q-str-001",
          "title": "Escaping Characters",
          "question": "Which code correctly prints: That's ok.?",
          "options": [
            { "id": "opt-s1", "option": "a", "text": "console.log('That's ok.');", "correct": false, "selected": false },
            { "id": "opt-s2", "option": "b", "text": "console.log('That\\'s ok.');", "correct": true, "selected": false },
            { "id": "opt-s3", "option": "c", "text": "console.log('That/s ok.');", "correct": false, "selected": false },
            { "id": "opt-s4", "option": "d", "text": "console.log(\"That's ok.');", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-str-002",
          "title": "Template Literals",
          "question": "What is the correct syntax for injecting a variable into a template literal?",
          "options": [
            { "id": "opt-s5", "option": "a", "text": "'Hello, {name}'", "correct": false, "selected": false },
            { "id": "opt-s6", "option": "b", "text": "`Hello, ${name}`", "correct": true, "selected": false },
            { "id": "opt-s7", "option": "c", "text": "`Hello, ${'name'}`", "correct": false, "selected": false },
            { "id": "opt-s8", "option": "d", "text": "'Hello, ' + ${name}", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-str-003",
          "title": "String Concatenation",
          "question": "What is the result of: 'Hello' + ' ' + 'World'?",
          "options": [
            { "id": "opt-s9", "option": "a", "text": "'HelloWorld'", "correct": false, "selected": false },
            { "id": "opt-s10", "option": "b", "text": "'Hello World'", "correct": true, "selected": false },
            { "id": "opt-s11", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-s12", "option": "d", "text": "Error", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-str-004",
          "title": "New Line Character",
          "question": "Which character is used to create a new line inside a standard single-quoted string?",
          "options": [
            { "id": "opt-s13", "option": "a", "text": "/n", "correct": false, "selected": false },
            { "id": "opt-s14", "option": "b", "text": "\\line", "correct": false, "selected": false },
            { "id": "opt-s15", "option": "c", "text": "\\n", "correct": true, "selected": false },
            { "id": "opt-s16", "option": "d", "text": "Enter key", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-str-005",
          "title": "Backticks vs Quotes",
          "question": "Which quote type allows you to create multi-line strings naturally by pressing Enter?",
          "options": [
            { "id": "opt-s17", "option": "a", "text": "Single quotes ('')", "correct": false, "selected": false },
            { "id": "opt-s18", "option": "b", "text": "Double quotes (\"\")", "correct": false, "selected": false },
            { "id": "opt-s19", "option": "c", "text": "Backticks (``)", "correct": true, "selected": false },
            { "id": "opt-s20", "option": "d", "text": "None of the above", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "task-str-001",
          "title": "The Escape Task",
          "description": "Use single quotes to log the following sentence: %I'm learning JS%. Ensure you escape the single quote correctly.",
          "result": "%I'm learning JS%",
          "note": "Use the backslash character",
          "solution": "console.log('I\\'m learning JS');"
        },
        {
          "id": "task-str-002",
          "title": "Variable Injection",
          "description": "Declare a const %city = 'Paris'%. Use a template literal (backticks) to log: %I want to visit Paris%.",
          "result": "%I want to visit Paris%",
          "note": "Use backticks and ${}",
          "solution": "const city = 'Paris';\nconsole.log(`I want to visit ${city}`);"
        },
        {
          "id": "task-str-003",
          "title": "Old School Concatenation",
          "description": "Declare two variables, %firstName% and %lastName%. Use the %+% operator to join them with a space in between.",
          "result": "%John Doe%",
          "note": "Don't forget the empty string for the space",
          "solution": "console.log(firstName + ' ' + lastName);"
        },
        {
          "id": "task-str-004",
          "title": "Multi-line Challenge",
          "description": "Log a two-line message using backticks. The first line should say %Line one% and the second line %Line two%.",
          "result": "%Line one\nLine two%",
          "note": "Just press enter inside the backticks",
          "solution": "console.log(`Line one\nLine two`);"
        }
      ]
    },
    {
      "id": "numbers-section-106",
      "title": "Numbers",
      "videoID": "10",
      "questions": [
        {
          "id": "q-num-001",
          "title": "Mathematical Operations",
          "question": "What does console.log('Pizza' * 10) output?",
          "options": [
            { "id": "opt-n5", "option": "a", "text": "0", "correct": false, "selected": false },
            { "id": "opt-n6", "option": "b", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-n7", "option": "c", "text": "NaN", "correct": true, "selected": false },
            { "id": "opt-n8", "option": "d", "text": "Error", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-num-002",
          "title": "Checking Data Types",
          "question": "What is the result of typeof NaN?",
          "options": [
            { "id": "opt-n9", "option": "a", "text": "number", "correct": true, "selected": false },
            { "id": "opt-n10", "option": "b", "text": "NaN", "correct": false, "selected": false },
            { "id": "opt-n11", "option": "c", "text": "string", "correct": false, "selected": false },
            { "id": "opt-n12", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-num-003",
          "title": "Working with Mixed Types",
          "question": "What is the output of console.log('80' + 20)?",
          "options": [
            { "id": "opt-n13", "option": "a", "text": "100", "correct": false, "selected": false },
            { "id": "opt-n14", "option": "b", "text": "8020", "correct": true, "selected": false },
            { "id": "opt-n15", "option": "c", "text": "NaN", "correct": false, "selected": false },
            { "id": "opt-n16", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-num-004",
          "title": "Implicit Conversion",
          "question": "What is the result of console.log('200' / 2)?",
          "options": [
            { "id": "opt-n17", "option": "a", "text": "100", "correct": true, "selected": false },
            { "id": "opt-n18", "option": "b", "text": "200/2", "correct": false, "selected": false },
            { "id": "opt-n19", "option": "c", "text": "NaN", "correct": false, "selected": false },
            { "id": "opt-n20", "option": "d", "text": "2002", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "task-num-001",
          "title": "Basic Calculation",
          "description": "Declare a variable %points% and assign it %100%. On the next line, log the result of %points% divided by %4%.",
          "result": "%25%",
          "note": "Use the / operator",
          "solution": "let points = 100;\nconsole.log(points / 4);"
        },
        {
          "id": "task-num-002",
          "title": "Template Literal Math (Review)",
          "description": "Create two constants: %boys = 12% and %girls = 13%. Log a message using backticks that says: %Total students: 25%.",
          "result": "%Total students: 25%",
          "note": "Perform the math inside the ${} curly braces",
          "solution": "const boys = 12;\nconst girls = 13;\nconsole.log(`Total students: ${boys + girls}`);"
        },
        {
          "id": "task-num-003",
          "title": "Implicit Conversion",
          "description": "Declare a variable %level = '5'%. Log the result of %level - 1%.",
          "result": "%4%",
          "note": "Observe how subtraction forces the string to become a number",
          "solution": "let level = '5';\nconsole.log(level - 1);"
        }
      ]
    },
    {
      "id": "null-section-107",
      "title": "Null",
      "videoID": "11",
      "questions": [
        {
          "id": "q-null-001",
          "title": "Intentional Empty Values",
          "question": "Which value is used to represent an intentional absence of any object value?",
          "options": [
            { "id": "opt-nu1", "option": "a", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-nu2", "option": "b", "text": "null", "correct": true, "selected": false },
            { "id": "opt-nu3", "option": "c", "text": "0", "correct": false, "selected": false },
            { "id": "opt-nu4", "option": "d", "text": "NaN", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-null-002",
          "title": "Checking Null Type",
          "question": "What is the result of typeof null?",
          "options": [
            { "id": "opt-nu5", "option": "a", "text": "null", "correct": false, "selected": false },
            { "id": "opt-nu6", "option": "b", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-nu7", "option": "c", "text": "object", "correct": true, "selected": false },
            { "id": "opt-nu8", "option": "d", "text": "number", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-null-003",
          "title": "Null vs Undefined",
          "question": "If you declare a variable with 'let' but do not assign it a value, what is its default value?",
          "options": [
            { "id": "opt-nu9", "option": "a", "text": "null", "correct": false, "selected": false },
            { "id": "opt-nu10", "option": "b", "text": "undefined", "correct": true, "selected": false },
            { "id": "opt-nu11", "option": "c", "text": "NaN", "correct": false, "selected": false },
            { "id": "opt-nu12", "option": "d", "text": "0", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-null-001",
          "title": "Assigning Null",
          "description": "Declare a variable %userProfile% using %let% and intentionally assign it the value %null%.",
          "result": "%null%",
          "note": "Use this when you want to explicitly say 'nothing' is there",
          "solution": "let userProfile = null;"
        },
        {
          "id": "task-null-002",
          "title": "The Typeof Quirk",
          "description": "Log the %typeof% the value %null% to the console.",
          "result": "%object%",
          "note": "This is a well-known behavior in JavaScript",
          "solution": "console.log(typeof null);"
        },
        {
          "id": "task-null-003",
          "title": "Review: String & Null",
          "description": "Declare a const %username = null%. Use a template literal to log: %Current user is null%.",
          "result": "%Current user is null%",
          "note": "Reviewing template literals from the Strings section",
          "solution": "const username = null;\nconsole.log(`Current user is ${username}`);"
        }
      ]
    },
    {
      "id": "boolean-section-108",
      "title": "Booleans",
      "videoID": "12",
      "questions": [
        {
          "id": "q-bool-001",
          "title": "Logical NOT Operator",
          "question": "let isAdmin = true;\nconsole.log(!isAdmin);",
          "options": [
            { "id": "opt-b1", "option": "a", "text": "true", "correct": false, "selected": false },
            { "id": "opt-b2", "option": "b", "text": "false", "correct": true, "selected": false },
            { "id": "opt-b3", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-b4", "option": "d", "text": "null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-bool-002",
          "title": "Data Types",
          "question": "What is the result of typeof true?",
          "options": [
            { "id": "opt-b5", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "opt-b6", "option": "b", "text": "boolean", "correct": true, "selected": false },
            { "id": "opt-b7", "option": "c", "text": "object", "correct": false, "selected": false },
            { "id": "opt-b8", "option": "d", "text": "number", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-bool-003",
          "title": "The Double NOT Operator",
          "question": "If let data = null;, what is the result of console.log(!!data)?",
          "options": [
            { "id": "opt-b9", "option": "a", "text": "null", "correct": false, "selected": false },
            { "id": "opt-b10", "option": "b", "text": "true", "correct": false, "selected": false },
            { "id": "opt-b11", "option": "c", "text": "false", "correct": true, "selected": false },
            { "id": "opt-b12", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "task-bool-001",
          "title": "Toggling State",
          "description": "Declare a variable %isDark% using %let% and set it to %false%. On the next line, reassign it to the opposite of its current value using the %!% operator.",
          "result": "%true%",
          "note": "Think of it like a light switch",
          "solution": "let isDark = false;\nisDark = !isDark;"
        },
        {
          "id": "task-bool-002",
          "title": "Truthiness Check (Review)",
          "description": "Declare a constant %phoneNumber = null%. Use the %!!% operator to log whether this value exists as a boolean.",
          "result": "%false%",
          "note": "Reviewing null while learning truthiness",
          "solution": "const phoneNumber = null;\nconsole.log(!!phoneNumber);"
        },
        {
          "id": "task-bool-003",
          "title": "Dynamic Boolean Message",
          "description": "Create a variable %isSubscribed = true%. Use a template literal to log: %Subscription status is: true%.",
          "result": "%Subscription status is: true%",
          "note": "Reviewing template strings from section 105",
          "solution": "let isSubscribed = true;\nconsole.log(`Subscription status is: ${isSubscribed}`);"
        },
        {
          "id": "task-bool-004",
          "title": "Logical Reversal",
          "description": "Declare a constant %hasError = false%. Log the value of %!hasError%.",
          "result": "%true%",
          "note": "The ! operator flips the boolean value",
          "solution": "const hasError = false;\nconsole.log(!hasError);"
        }
      ]
    },
    {
      "id": "if-else-logic-level-113",
      "title": "if else",
      "videoID": "14",
      "questions": [
        {
          "id": "q-if-016",
          "title": "Block Scoping with Let",
          "question": "let status = 'idle';\nif (true) {\n  let status = 'active';\n}\nconsole.log(status);",
          "options": [
            { "id": "opt-i61", "option": "a", "text": "active", "correct": false, "selected": false },
            { "id": "opt-i62", "option": "b", "text": "idle", "correct": true, "selected": false },
            { "id": "opt-i63", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-i64", "option": "d", "text": "Error", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-if-017",
          "title": "Negation Logic",
          "question": "const hasAccess = false;\nif (!hasAccess) {\n  console.log('Denied');\n}",
          "options": [
            { "id": "opt-i65", "option": "a", "text": "Nothing is logged", "correct": false, "selected": false },
            { "id": "opt-i66", "option": "b", "text": "Denied", "correct": true, "selected": false },
            { "id": "opt-i67", "option": "c", "text": "false", "correct": false, "selected": false },
            { "id": "opt-i68", "option": "d", "text": "Error", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-if-018",
          "title": "Branching Result",
          "question": "const points = 0;\nif (points) {\n  console.log('Winner');\n} else {\n  console.log('Player');\n}",
          "options": [
            { "id": "opt-i69", "option": "a", "text": "Winner", "correct": false, "selected": false },
            { "id": "opt-i70", "option": "b", "text": "Player", "correct": true, "selected": false },
            { "id": "opt-i71", "option": "c", "text": "0", "correct": false, "selected": false },
            { "id": "opt-i72", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-if-019",
          "title": "The Empty String Trick",
          "question": "let folder = ' ';\nif (folder) {\n  console.log('Found');\n} else {\n  console.log('Missing');\n}",
          "options": [
            { "id": "opt-i73", "option": "a", "text": "Found", "correct": true, "selected": false },
            { "id": "opt-i74", "option": "b", "text": "Missing", "correct": false, "selected": false },
            { "id": "opt-i75", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-i76", "option": "d", "text": "Error", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-if-020",
          "title": "The NaN Comparison",
          "question": "if ('hello' / 2) {\n  console.log('Math works');\n} else {\n  console.log('Math failed');\n}",
          "options": [
            { "id": "opt-i77", "option": "a", "text": "Math works", "correct": false, "selected": false },
            { "id": "opt-i78", "option": "b", "text": "Math failed", "correct": true, "selected": false },
            { "id": "opt-i79", "option": "c", "text": "NaN", "correct": false, "selected": false },
            { "id": "opt-i80", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-if-014",
          "title": "The Welcome Message",
          "description": "Declare a const %guest = 'Alex'%. Create an %if(true)% block. Inside, declare a const %welcome% using a template literal: %`Welcome, ${guest}`% and log it to the console.",
          "result": "%Welcome, Alex%",
          "note": "Focus on using the variable inside the block scope",
          "solution": "const guest = 'Alex';\nif (true) {\n  const welcome = `Welcome, ${guest}`;\n  console.log(welcome);\n}"
        },
        {
          "id": "task-if-015",
          "title": "One-Line Alert",
          "description": "Declare a variable %isMuted = true%. Use a single-line %if% statement (no curly braces) to log %'Silence...'% if the variable is true.",
          "result": "%Silence...%",
          "note": "Practice the shorthand one-line syntax",
          "solution": "const isMuted = true;\nif (isMuted) console.log('Silence...');"
        },
        {
          "id": "task-if-016",
          "title": "Battery Check",
          "description": "Declare %isLow = false%. Use %if / else% to log %'Battery Low'% if true, and %'Battery Full'% otherwise.",
          "result": "%Battery Full%",
          "note": "Simple branching using a boolean check",
          "solution": "const isLow = false;\nif (isLow) {\n  console.log('Battery Low');\n} else {\n  console.log('Battery Full');\n}"
        }
      ]
    },
    {
      "id": "comparison-ops-115",
      "title": "Comparison Operators",
      "videoID": "15",
      "questions": [
        {
          "id": "q-comp-001",
          "title": "Greater Than or Equal",
          "question": "What is the result of console.log(15 >= 15)?",
          "options": [
            { "id": "opt-c1", "option": "a", "text": "true", "correct": true, "selected": false },
            { "id": "opt-c2", "option": "b", "text": "false", "correct": false, "selected": false },
            { "id": "opt-c3", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-c4", "option": "d", "text": "NaN", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-comp-002",
          "title": "Loose Equality Quirk",
          "question": "What does console.log(0 == false) output?",
          "options": [
            { "id": "opt-c5", "option": "a", "text": "true", "correct": true, "selected": false },
            { "id": "opt-c6", "option": "b", "text": "false", "correct": false, "selected": false },
            { "id": "opt-c7", "option": "c", "text": "null", "correct": false, "selected": false },
            { "id": "opt-c8", "option": "d", "text": "TypeError", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-comp-003",
          "title": "Strict Inequality",
          "question": "Which comparison returns true?",
          "options": [
            { "id": "opt-c9", "option": "a", "text": "10 !== '10'", "correct": true, "selected": false },
            { "id": "opt-c10", "option": "b", "text": "10 != '10'", "correct": false, "selected": false },
            { "id": "opt-c11", "option": "c", "text": "5 === '5'", "correct": false, "selected": false },
            { "id": "opt-c12", "option": "d", "text": "null === undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-comp-004",
          "title": "Comparison in Logic",
          "question": "let x = 10;\nif (x <= 10) {\n  x = x + 5;\n}\nconsole.log(x);",
          "options": [
            { "id": "opt-c17", "option": "a", "text": "10", "correct": false, "selected": false },
            { "id": "opt-c18", "option": "b", "text": "15", "correct": true, "selected": false },
            { "id": "opt-c19", "option": "c", "text": "5", "correct": false, "selected": false },
            { "id": "opt-c20", "option": "d", "text": "true", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-comp-005",
          "title": "Strict Comparison Trick",
          "question": "let age = '25';\nif (age === 25) {\n  console.log('Match');\n} else {\n  console.log('No Match');\n}",
          "options": [
            { "id": "opt-c21", "option": "a", "text": "Match", "correct": false, "selected": false },
            { "id": "opt-c22", "option": "b", "text": "No Match", "correct": true, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-comp-001",
          "title": "Price Check",
          "description": "Declare a variable %budget = 50%. Write an %if% statement that checks if %budget% is less than %60%. If true, log %'Within budget'%.",
          "result": "%Within budget%",
          "note": "Use the < operator",
          "solution": "let budget = 50;\nif (budget < 60) {\n  console.log('Within budget');\n}"
        },
        {
          "id": "task-comp-002",
          "title": "Strict Identity Verification",
          "description": "Declare %enteredPin = '1234'%. Compare it to %actualPin = 1234% using %===%. If they are NOT strictly equal, log %'Invalid Type'%.",
          "result": "%Invalid Type%",
          "note": "A string is never strictly equal to a number",
          "solution": "const enteredPin = '1234';\nconst actualPin = 1234;\nif (enteredPin !== actualPin) {\n  console.log('Invalid Type');\n}"
        },
        {
          "id": "task-comp-004",
          "title": "Score Evaluation",
          "description": "Declare %score = 80%. Use %if / else% to log %'Pass'% if %score >= 70%, otherwise log %'Fail'%.",
          "result": "%Pass%",
          "note": "Check for greater than or equal to",
          "solution": "let score = 80;\nif (score >= 70) {\n  console.log('Pass');\n} else {\n  console.log('Fail');\n}"
        },
        {
          "id": "task-comp-005",
          "title": "Comparison Assignment",
          "description": "Declare %count = 10%. If %count !== 20%, reassign %count% to %20%. Finally, log %count%.",
          "result": "%20%",
          "note": "Strict inequality ensures we only update if the value/type is different",
          "solution": "let count = 10;\nif (count !== 20) {\n  count = 20;\n}\nconsole.log(count);"
        }
      ]
    },
    {
      "id": "milestone-foundations-01",
      "title": "- MILESTONE EXERCISES 1 -",
      "videoID": "16",
      "questions": [
        {
          "id": "q-rev-001",
          "title": "Variable Reassignment",
          "question": "const x = 10;\nx = 20;\nconsole.log(x);",
          "options": [
            { "id": "opt-r1", "option": "a", "text": "20", "correct": false, "selected": false },
            { "id": "opt-r2", "option": "b", "text": "10", "correct": false, "selected": false },
            { "id": "opt-r3", "option": "c", "text": "TypeError", "correct": true, "selected": false },
            { "id": "opt-r4", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-rev-002",
          "title": "Type Concatenation",
          "question": "What is typeof (10 + '5')?",
          "options": [
            { "id": "opt-r5", "option": "a", "text": "number", "correct": false, "selected": false },
            { "id": "opt-r6", "option": "b", "text": "string", "correct": true, "selected": false },
            { "id": "opt-r7", "option": "c", "text": "NaN", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-rev-003",
          "title": "The Null Type",
          "question": "What does typeof null return?",
          "options": [
            { "id": "opt-r8", "option": "a", "text": "null", "correct": false, "selected": false },
            { "id": "opt-r9", "option": "b", "text": "object", "correct": true, "selected": false },
            { "id": "opt-r10", "option": "c", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-rev-004",
          "title": "Truthy Strings",
          "question": "Which of these evaluates to true?",
          "options": [
            { "id": "opt-r11", "option": "a", "text": "Boolean('')", "correct": false, "selected": false },
            { "id": "opt-r12", "option": "b", "text": "Boolean('false')", "correct": true, "selected": false },
            { "id": "opt-r13", "option": "c", "text": "Boolean(0)", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-rev-005",
          "title": "Else If Logic",
          "question": "let temp = 15;\nif (temp > 20) {\n  console.log('Hot');\n} else if (temp > 10) {\n  console.log('Warm');\n} else {\n  console.log('Cold');\n}",
          "options": [
            { "id": "opt-r14", "option": "a", "text": "Hot", "correct": false, "selected": false },
            { "id": "opt-r15", "option": "b", "text": "Warm", "correct": true, "selected": false },
            { "id": "opt-r16", "option": "c", "text": "Cold", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-rev-006",
          "title": "Strict Equality",
          "question": "100 === '100'",
          "options": [
            { "id": "opt-r17", "option": "a", "text": "true", "correct": false, "selected": false },
            { "id": "opt-r18", "option": "b", "text": "false", "correct": true, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-rev-007",
          "title": "Loose Equality",
          "question": "100 == '100'",
          "options": [
            { "id": "opt-r19", "option": "a", "text": "true", "correct": true, "selected": false },
            { "id": "opt-r20", "option": "b", "text": "false", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-rev-008",
          "title": "The Bang Operator",
          "question": "What is !null?",
          "options": [
            { "id": "opt-r21", "option": "a", "text": "true", "correct": true, "selected": false },
            { "id": "opt-r22", "option": "b", "text": "false", "correct": false, "selected": false },
            { "id": "opt-r23", "option": "c", "text": "null", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-rev-009",
          "title": "Undefined Check",
          "question": "let x;\nif (x === undefined) {\n  console.log('Yes');\n}",
          "options": [
            { "id": "opt-r24", "option": "a", "text": "Yes", "correct": true, "selected": false },
            { "id": "opt-r25", "option": "b", "text": "Nothing logs", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-rev-010",
          "title": "Template Literals",
          "question": "const val = 5;\nconsole.log(`Result: ${val + val}`);",
          "options": [
            { "id": "opt-r26", "option": "a", "text": "Result: 55", "correct": false, "selected": false },
            { "id": "opt-r27", "option": "b", "text": "Result: 10", "correct": true, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-rev-011",
          "title": "Falsy Values",
          "question": "Which of these is NOT a falsy value?",
          "options": [
            { "id": "opt-r28", "option": "a", "text": "0", "correct": false, "selected": false },
            { "id": "opt-r29", "option": "b", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-r30", "option": "c", "text": "' ' (String with a space)", "correct": true, "selected": false },
            { "id": "opt-r31", "option": "d", "text": "NaN", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-rev-012",
          "title": "Double Negation",
          "question": "What is !!'Hello'?",
          "options": [
            { "id": "opt-r32", "option": "a", "text": "true", "correct": true, "selected": false },
            { "id": "opt-r33", "option": "b", "text": "false", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-rev-013",
          "title": "If Block Scope",
          "question": "if (true) { let a = 5; }\nconsole.log(a);",
          "options": [
            { "id": "opt-r34", "option": "a", "text": "5", "correct": false, "selected": false },
            { "id": "opt-r35", "option": "b", "text": "ReferenceError", "correct": true, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-rev-014",
          "title": "Boolean Conversion",
          "question": "What is Boolean(1)?",
          "options": [
            { "id": "opt-r36", "option": "a", "text": "true", "correct": true, "selected": false },
            { "id": "opt-r37", "option": "b", "text": "false", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-rev-015",
          "title": "Undefined Addition",
          "question": "What is the result of 5 + undefined?",
          "options": [
            { "id": "opt-r39", "option": "a", "text": "5", "correct": false, "selected": false },
            { "id": "opt-r40", "option": "b", "text": "NaN", "correct": true, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-rev-016",
          "title": "Relational Operators",
          "question": "What is the result of 10 >= 10?",
          "options": [
            { "id": "opt-r41", "option": "a", "text": "true", "correct": true, "selected": false },
            { "id": "opt-r42", "option": "b", "text": "false", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-rev-017",
          "title": "Strict Inequality",
          "question": "'apple' !== 'Apple'",
          "options": [
            { "id": "opt-r43", "option": "a", "text": "true", "correct": true, "selected": false },
            { "id": "opt-r44", "option": "b", "text": "false", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-rev-018",
          "title": "Logical NOT on Truthy",
          "question": "What does !10 return?",
          "options": [
            { "id": "opt-r51", "option": "a", "text": "false", "correct": true, "selected": false },
            { "id": "opt-r52", "option": "b", "text": "true", "correct": false, "selected": false },
            { "id": "opt-r53", "option": "c", "text": "-10", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-rev-020",
          "title": "Logical NOT with Text",
          "question": "What is !'JavaScript'?",
          "options": [
            { "id": "opt-r49", "option": "a", "text": "true", "correct": false, "selected": false },
            { "id": "opt-r50", "option": "b", "text": "false", "correct": true, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-rev-022",
          "title": "TypeOf Comparison",
          "question": "What is the output of: console.log(typeof (10 === 10));",
          "options": [
            { "id": "opt-r57", "option": "a", "text": "'boolean'", "correct": true, "selected": false },
            { "id": "opt-r58", "option": "b", "text": "'number'", "correct": false, "selected": false },
            { "id": "opt-r59", "option": "c", "text": "'string'", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "t-rev-001",
          "title": "The Grade System",
          "description": "Declare %score = 85%. Use branching logic to log: %'A'% if the score is greater than or equal to 90, %'B'% if the score is greater than or equal to 80, and %'C'% for all other cases.",
          "result": "%B%",
          "solution": "let score = 85;\nif (score >= 90) {\n  console.log('A');\n} else if (score >= 80) {\n  console.log('B');\n} else {\n  console.log('C');\n}"
        },
        {
          "id": "t-rev-002",
          "title": "User Status Review",
          "description": "Declare %username = null%. Use conditional logic to log %'Welcome guest'% if the username does not have a truthy value. If it does have a value, log a greeting using the name and a template literal.",
          "result": "%Welcome guest%",
          "solution": "const username = null;\nif (username) {\n  console.log(`Welcome ${username}`);\n} else {\n  console.log('Welcome guest');\n}"
        },
        {
          "id": "t-rev-003",
          "title": "Temperature Guard",
          "description": "Declare %temp = 32%. Check if the temperature is strictly equal to 32 and log %'Freezing point'%. Otherwise, check if the temperature is greater than 32 and log %'Above freezing'%.",
          "result": "%Freezing point%",
          "solution": "let temp = 32;\nif (temp === 32) {\n  console.log('Freezing point');\n} else if (temp > 32) {\n  console.log('Above freezing');\n}"
        },
        {
          "id": "t-rev-004",
          "title": "Strict Type Filter",
          "description": "Declare %input = '5'%. Write logic that logs %'Number'% only if the input is strictly equal to the number 5. If the type of the input is a string, log %'String'%.",
          "result": "%String%",
          "solution": "let input = '5';\nif (input === 5) {\n  console.log('Number');\n} else if (typeof input === 'string') {\n  console.log('String');\n}"
        },
        {
          "id": "t-rev-005",
          "title": "The Double Check",
          "description": "Declare %val = 0%. If the value is strictly equal to 0, change the value to 10. Then, using a completely separate block of logic, log %'Success'% if the value is now greater than 5.",
          "result": "%Success%",
          "solution": "let val = 0;\nif (val === 0) { val = 10; }\nif (val > 5) { console.log('Success'); }"
        }
      ]
    },
    {
      "id": "intro-to-arrays-117",
      "title": "Arrays",
      "videoID": "17",
      "questions": [
        {
          "id": "q-arr-101",
          "title": "The Type Trap",
          "question": "const temperatures = [32, 35, 40];\nconsole.log(typeof temperatures);",
          "options": [
            { "id": "opt-ax1", "option": "a", "text": "'array'", "correct": false, "selected": false },
            { "id": "opt-ax2", "option": "b", "text": "'object'", "correct": true, "selected": false },
            { "id": "opt-ax3", "option": "c", "text": "'number'", "correct": false, "selected": false },
            { "id": "opt-ax4", "option": "d", "text": "'undefined'", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-arr-102",
          "title": "Logical Array Check",
          "question": "let guests = [];\nif (Boolean(guests)) {\n  console.log('Open Door');\n} else {\n  console.log('Closed');\n}",
          "options": [
            { "id": "opt-ax5", "option": "a", "text": "Open Door", "correct": true, "selected": false },
            { "id": "opt-ax6", "option": "b", "text": "Closed", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-arr-103",
          "title": "Index Mystery",
          "question": "const colors = ['Red', 'Green', 'Blue'];\nconsole.log(colors[0]);",
          "options": [
            { "id": "opt-ax7", "option": "a", "text": "Green", "correct": false, "selected": false },
            { "id": "opt-ax8", "option": "b", "text": "Red", "correct": true, "selected": false },
            { "id": "opt-ax9", "option": "c", "text": "Blue", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-arr-104",
          "title": "Constructor Practice",
          "question": "const scores = new Array(10, 20, 30);\nconsole.log(scores[2]);",
          "options": [
            { "id": "opt-ax10", "option": "a", "text": "10", "correct": false, "selected": false },
            { "id": "opt-ax11", "option": "b", "text": "20", "correct": false, "selected": false },
            { "id": "opt-ax12", "option": "c", "text": "30", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "task-arr-101",
          "title": "Stock Inventory",
          "description": "Declare an array %stock% containing %150%, %'In Transit'%, and %true%. Log the second element to the console.",
          "result": "%In Transit%",
          "note": "Arrays can hold mixed data types including numbers, strings, and booleans.",
          "solution": "const stock = [150, 'In Transit', true];\nconsole.log(stock[1]);"
        },
        {
          "id": "task-arr-102",
          "title": "The Truth Test",
          "description": "Declare a variable %collection% using the %new Array()% syntax with any three names. Log a %Boolean% conversion of the entire array.",
          "result": "%true%",
          "note": "Even if an array is created via the constructor, it remains truthy.",
          "solution": "const collection = new Array('Alice', 'Bob', 'Charlie');\nconsole.log(Boolean(collection));"
        },
        {
          "id": "task-arr-103",
          "title": "Type Validation",
          "description": "Create an array called %playlist%. Write a line of code that logs the %typeof% this variable.",
          "result": "%object%",
          "note": "Always remember that arrays are a special type of object in JS.",
          "solution": "const playlist = ['Song 1', 'Song 2'];\nconsole.log(typeof playlist);"
        }
      ]
    },
    {
      "id": "mastering-length-property-118",
      "title": "The Length Property",
      "videoID": "18",
      "questions": [
        {
          "id": "q-len-201",
          "title": "String Length Basics",
          "question": "const city = 'New York';\nconsole.log(city.length);",
          "options": [
            { "id": "opt-l1", "option": "a", "text": "7", "correct": false, "selected": false },
            { "id": "opt-l2", "option": "b", "text": "8", "correct": true, "selected": false },
            { "id": "opt-l3", "option": "c", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-len-202",
          "title": "Empty vs Space",
          "question": "const input = ' ';\nconsole.log(input.length);",
          "options": [
            { "id": "opt-l4", "option": "a", "text": "0", "correct": false, "selected": false },
            { "id": "opt-l5", "option": "b", "text": "1", "correct": true, "selected": false },
            { "id": "opt-l6", "option": "c", "text": "null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-len-203",
          "title": "The Last Index Formula",
          "question": "const nums = [10, 20, 30, 40];\nconsole.log(nums[nums.length - 1]);",
          "options": [
            { "id": "opt-l7", "option": "a", "text": "40", "correct": true, "selected": false },
            { "id": "opt-l8", "option": "b", "text": "30", "correct": false, "selected": false },
            { "id": "opt-l9", "option": "c", "text": "4", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-len-204",
          "title": "Length Comparison",
          "question": "const tags = ['js', 'code'];\nif (tags.length > 2) {\n  console.log('Large');\n} else {\n  console.log('Small');\n}",
          "options": [
            { "id": "opt-l10", "option": "a", "text": "Large", "correct": false, "selected": false },
            { "id": "opt-l11", "option": "b", "text": "Small", "correct": true, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-len-201",
          "title": "Password Validator",
          "description": "Declare %pass = '12345'%. If the length is less than 6, log %'Weak'%. Otherwise, log %'Strong'%.",
          "result": "%Weak%",
          "note": "A common real-world use for .length is checking input requirements.",
          "solution": "const pass = '12345';\nif (pass.length < 6) {\n  console.log('Weak');\n} else {\n  console.log('Strong');\n}"
        },
        {
          "id": "task-len-202",
          "title": "Dynamic Last Item",
          "description": "Declare an array %colors% with 4 values. Log the very last item by using the %length - 1% pattern.",
          "result": "%(Your last color)%",
          "note": "Using length - 1 ensures you always get the last item regardless of how many are in the array.",
          "solution": "const colors = ['Red', 'Green', 'Blue', 'Yellow'];\nconsole.log(colors[colors.length - 1]);"
        },
        {
          "id": "task-len-203",
          "title": "The Bio Counter",
          "description": "Declare %bio = 'Hello world'%. Create a variable %left% that subtracts the length of the bio from a limit of %50%. Log %`Remaining: ${left}`%.",
          "result": "%Remaining: 39%",
          "note": "Template literals combined with .length are great for UI feedback.",
          "solution": "const bio = 'Hello world';\nconst left = 50 - bio.length;\nconsole.log(`Remaining: ${left}`);"
        }
      ]
    },
    {
      "id": "object-fundamentals-119",
      "title": "Objects",
      "videoID": "19",
      "questions": [
        {
          "id": "q-obj-301",
          "title": "Object Type Identification",
          "question": "const laptop = { brand: 'Apple', year: 2024 };\nconsole.log(typeof laptop);",
          "options": [
            { "id": "opt-o1", "option": "a", "text": "'object'", "correct": true, "selected": false },
            { "id": "opt-o2", "option": "b", "text": "'dictionary'", "correct": false, "selected": false },
            { "id": "opt-o3", "option": "c", "text": "'array'", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-obj-302",
          "title": "Accessing Properties",
          "question": "const user = { name: 'Alice', age: 28 };\nconsole.log(user.name);",
          "options": [
            { "id": "opt-o4", "option": "a", "text": "Alice", "correct": true, "selected": false },
            { "id": "opt-o5", "option": "b", "text": "name", "correct": false, "selected": false },
            { "id": "opt-o6", "option": "c", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-obj-303",
          "title": "The Missing Property",
          "question": "const book = { title: 'JS Basics' };\nconsole.log(book.author);",
          "options": [
            { "id": "opt-o7", "option": "a", "text": "null", "correct": false, "selected": false },
            { "id": "opt-o8", "option": "b", "text": "Error", "correct": false, "selected": false },
            { "id": "opt-o9", "option": "c", "text": "undefined", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-obj-304",
          "title": "Special Key Access",
          "question": "const data = { 'user-id': 101 };\nHow do you access user-id?",
          "options": [
            { "id": "opt-o10", "option": "a", "text": "data.user-id", "correct": false, "selected": false },
            { "id": "opt-o11", "option": "b", "text": "data['user-id']", "correct": true, "selected": false },
            { "id": "opt-o12", "option": "c", "text": "data(user-id)", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-obj-301",
          "title": "Create a Profile",
          "description": "Declare an object %product% with %name: 'Phone'% and %price: 500%. Then, add a %color% property using dot notation after the object is created.",
          "result": "%Phone 500 (color value)%",
          "note": "Objects are mutable, meaning you can add properties at any time.",
          "solution": "const product = { name: 'Phone', price: 500 };\nproduct.color = 'Silver';\nconsole.log(product.name, product.price, product.color);"
        },
        {
          "id": "task-obj-302",
          "title": "The Boolean Check",
          "description": "Declare an empty object %settings%. Log its %Boolean% value to the console.",
          "result": "%true%",
          "note": "Just like arrays, even an empty object {} is truthy.",
          "solution": "const settings = {};\nconsole.log(Boolean(settings));"
        },
        {
          "id": "task-obj-303",
          "title": "Special Properties",
          "description": "Declare an object %movie% with a property key %'release-year'% set to %2024%. Log that specific property using bracket notation.",
          "result": "%2024%",
          "note": "If a key has a hyphen or space, dot notation will break.",
          "solution": "const movie = { 'release-year': 2024 };\nconsole.log(movie['release-year']);"
        }
      ]
    },
    {
      "id": "function-foundations-120",
      "title": "Functions",
      "videoID": "20",
      "questions": [
        {
          "id": "q-func-401",
          "title": "Execution vs Declaration",
          "question": "function showMessage() {\n  console.log('Active');\n}\n// What happens if we don't add showMessage(); after this?",
          "options": [
            { "id": "opt-f1", "option": "a", "text": "It logs 'Active' automatically", "correct": false, "selected": false },
            { "id": "opt-f2", "option": "b", "text": "Nothing is logged to the console", "correct": true, "selected": false },
            { "id": "opt-f3", "option": "c", "text": "The code throws an error", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-func-402",
          "title": "Default Parameters",
          "question": "const setVolume = (level = 50) => {\n  console.log(level);\n};\nsetVolume();",
          "options": [
            { "id": "opt-f4", "option": "a", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-f5", "option": "b", "text": "NaN", "correct": false, "selected": false },
            { "id": "opt-f6", "option": "c", "text": "50", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-func-403",
          "title": "Arrow Function Syntax",
          "question": "Which of these is a valid arrow function?",
          "options": [
            { "id": "opt-f7", "option": "a", "text": "const play = () => { }", "correct": true, "selected": false },
            { "id": "opt-f8", "option": "b", "text": "function play = () => { }", "correct": false, "selected": false },
            { "id": "opt-f9", "option": "c", "text": "const play => () { }", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-func-404",
          "title": "Object Arguments",
          "question": "const logScore = (data) => {\n  console.log(data.points);\n};\nlogScore({ points: 100 });",
          "options": [
            { "id": "opt-f10", "option": "a", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-f11", "option": "b", "text": "points", "correct": false, "selected": false },
            { "id": "opt-f12", "option": "c", "text": "100", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "task-func-401",
          "title": "The Login Notifier",
          "description": "Create an arrow function %notify% that takes a %username% parameter. It should log %`User ${username} just logged in`%. Call it once with %'Admin'%.",
          "result": "%User Admin just logged in%",
          "note": "Parameters allow you to reuse the same logic with different data.",
          "solution": "const notify = (username) => {\n  console.log(`User ${username} just logged in`);\n};\nnotify('Admin');"
        },
        {
          "id": "task-func-402",
          "title": "Weather Assistant",
          "description": "Write a function %checkWeather% with two parameters: %temp% and %scale%. Set the default value of %scale% to %'Celsius'%. Log %`It is ${temp} degrees ${scale}`%.",
          "result": "%It is 25 degrees Celsius%",
          "note": "Default parameters act as a safety net when an argument is missing.",
          "solution": "const checkWeather = (temp, scale = 'Celsius') => {\n  console.log(`It is ${temp} degrees ${scale}`);\n};\ncheckWeather(25);"
        },
        {
          "id": "task-func-403",
          "title": "Pet Info System",
          "description": "Create a function %showPet% that receives an object with keys %type% and %breed%. Log a message like %'This is a Dog of breed Husky'%.",
          "result": "%This is a Dog of breed Husky%",
          "note": "Passing an object into a function is a great way to handle multiple related pieces of data.",
          "solution": "const showPet = (pet) => {\n  console.log(`This is a ${pet.type} of breed ${pet.breed}`);\n};\nshowPet({ type: 'Dog', breed: 'Husky' });"
        }
      ]
    },
    {
      "id": "scope-mastery-121",
      "title": "Function Scope",
      "videoID": "21",
      "questions": [
        {
          "id": "q-sco-501",
          "title": "Global Access",
          "question": "let status = 'Active';\n\nfunction check() {\n  console.log(status);\n}\ncheck();",
          "options": [
            { "id": "opt-s1", "option": "a", "text": "Active", "correct": true, "selected": false },
            { "id": "opt-s2", "option": "b", "text": "ReferenceError", "correct": false, "selected": false },
            { "id": "opt-s3", "option": "c", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-sco-502",
          "title": "Block Scope Wall",
          "question": "if (true) {\n  const secret = '1234';\n}\nconsole.log(secret);",
          "options": [
            { "id": "opt-s4", "option": "a", "text": "1234", "correct": false, "selected": false },
            { "id": "opt-s5", "option": "b", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-s6", "option": "c", "text": "ReferenceError", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-sco-503",
          "title": "Function Isolation",
          "question": "function start() {\n  let count = 10;\n}\nstart();\nconsole.log(count);",
          "options": [
            { "id": "opt-s7", "option": "a", "text": "10", "correct": false, "selected": false },
            { "id": "opt-s8", "option": "b", "text": "ReferenceError", "correct": true, "selected": false },
            { "id": "opt-s9", "option": "c", "text": "null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-sco-504",
          "title": "Scope Shadowing",
          "question": "let x = 5;\nif (true) {\n  let x = 10;\n}\nconsole.log(x);",
          "options": [
            { "id": "opt-s10", "option": "a", "text": "10", "correct": false, "selected": false },
            { "id": "opt-s11", "option": "b", "text": "5", "correct": true, "selected": false },
            { "id": "opt-s12", "option": "c", "text": "ReferenceError", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-sco-505",
          "title": "Parameter Scope",
          "question": "const greet = (name) => {\n  console.log(name);\n};\ngreet('Bob');\nconsole.log(name);",
          "options": [
            { "id": "opt-s13", "option": "a", "text": "Bob then Bob", "correct": false, "selected": false },
            { "id": "opt-s14", "option": "b", "text": "Bob then ReferenceError", "correct": true, "selected": false },
            { "id": "opt-s15", "option": "c", "text": "Bob then undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-sco-506",
          "title": "Nested Block Access",
          "question": "let a = 1;\nif (true) {\n  if (true) {\n    console.log(a);\n  }\n}",
          "options": [
            { "id": "opt-s16", "option": "a", "text": "1", "correct": true, "selected": false },
            { "id": "opt-s17", "option": "b", "text": "ReferenceError", "correct": false, "selected": false },
            { "id": "opt-s18", "option": "c", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "task-sco-501",
          "title": "The Global Shield",
          "description": "Declare a global variable %appMode = 'Dark'%. Create an arrow function %getMode% that logs the %appMode%. Call the function.",
          "result": "%Dark%",
          "note": "Variables declared outside of any block are accessible anywhere in your script.",
          "solution": "const appMode = 'Dark';\nconst getMode = () => {\n  console.log(appMode);\n};\ngetMode();"
        },
        {
          "id": "task-sco-502",
          "title": "Locked in the Block",
          "description": "Inside an %if (true)% block, declare %const temp = 98.6%. Try to %console.log(temp)% outside the block and observe the error.",
          "result": "%ReferenceError%",
          "note": "Using 'const' or 'let' locks the variable inside the nearest curly braces {}.",
          "solution": "if (true) {\n  const temp = 98.6;\n}\n// console.log(temp); // This will cause the error"
        },
        {
          "id": "task-sco-503",
          "title": "The Function Vault",
          "description": "Create a function called %saveData%. Inside, declare %let apiKey = 'abc-123'%. Outside the function, declare another %let apiKey = 'xyz-789'%. Log the one outside the function.",
          "result": "%xyz-789%",
          "note": "Functions create their own scope; variables inside don't 'leak' out to the global space.",
          "solution": "function saveData() {\n  let apiKey = 'abc-123';\n}\nlet apiKey = 'xyz-789';\nconsole.log(apiKey);"
        },
        {
          "id": "task-sco-504",
          "title": "Shadowing Practice",
          "description": "Declare a global %points = 0%. Create a function %addPoints% that declares its own local %let points = 50% and logs it. Then log the global %points% outside.",
          "result": "%50 then 0%",
          "note": "Local variables with the same name as global ones take priority inside the function.",
          "solution": "let points = 0;\nconst addPoints = () => {\n  let points = 50;\n  console.log(points);\n};\naddPoints();\nconsole.log(points);"
        }
      ]
    },
    {
      "id": "hoisting-essentials-122",
      "title": "Hoisting",
      "videoID": "22",
      "questions": [
        {
          "id": "q-hoi-601",
          "title": "Function Declaration Hoisting",
          "question": "show();\n\nfunction show() {\n  console.log('Displaying...');\n}",
          "options": [
            { "id": "opt-h1", "option": "a", "text": "Displaying...", "correct": true, "selected": false },
            { "id": "opt-h2", "option": "b", "text": "ReferenceError", "correct": false, "selected": false },
            { "id": "opt-h3", "option": "c", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-hoi-602",
          "title": "Arrow Function Hoisting",
          "question": "start();\n\nconst start = () => {\n  console.log('Starting...');\n};",
          "options": [
            { "id": "opt-h4", "option": "a", "text": "Starting...", "correct": false, "selected": false },
            { "id": "opt-h5", "option": "b", "text": "ReferenceError", "correct": true, "selected": false },
            { "id": "opt-h6", "option": "c", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-hoi-603",
          "title": "Nested Hoisting",
          "question": "function parent() {\n  child();\n  function child() {\n    console.log('Inner');\n  }\n}\nparent();",
          "options": [
            { "id": "opt-h7", "option": "a", "text": "Inner", "correct": true, "selected": false },
            { "id": "opt-h8", "option": "b", "text": "ReferenceError", "correct": false, "selected": false },
            { "id": "opt-h9", "option": "c", "text": "Nothing logs", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-hoi-605",
          "title": "Hoisting Boundaries",
          "question": "function main() {\n  sub();\n}\nmain();\nfunction sub() {\n  console.log('Sub');\n}",
          "options": [
            { "id": "opt-h13", "option": "a", "text": "Sub", "correct": true, "selected": false },
            { "id": "opt-h14", "option": "b", "text": "Error: sub is not defined", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-hoi-606",
          "title": "Const/Let TDZ",
          "question": "console.log(val);\nlet val = 10;",
          "options": [
            { "id": "opt-h15", "option": "a", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-h16", "option": "b", "text": "ReferenceError", "correct": true, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-hoi-601",
          "title": "The Early Caller",
          "description": "Write a function declaration called %boot% that logs %'System Booting'%. Call this function *before* you actually write its definition in the code.",
          "result": "%System Booting%",
          "note": "Function declarations are moved to the top of their scope by the JS engine.",
          "solution": "boot();\nfunction boot() {\n  console.log('System Booting');\n}"
        },
        {
          "id": "task-hoi-602",
          "title": "Nested Logic Hoisting",
          "description": "Create a function %initApp%. Inside it, call a function %loadConfig% before defining it. Inside %loadConfig%, log %'Config Loaded'%.",
          "result": "%Config Loaded%",
          "note": "Hoisting also works for functions nested inside other functions.",
          "solution": "function initApp() {\n  loadConfig();\n  function loadConfig() {\n    console.log('Config Loaded');\n  }\n}\ninitApp();"
        },
        {
          "id": "task-hoi-603",
          "title": "Expression vs Declaration",
          "description": "Declare a constant %run% and assign it an arrow function that logs %'Running'%. Try to call %run()% before the declaration and comment out why it fails.",
          "result": "%ReferenceError%",
          "note": "Arrow functions assigned to variables (const/let) are NOT hoisted like function declarations.",
          "solution": "// run(); // This would cause a ReferenceError\nconst run = () => {\n  console.log('Running');\n};"
        }
      ]
    },
    {
      "id": "return-statement-123",
      "title": "The Return Statement",
      "videoID": "23",
      "questions": [
        {
          "id": "q-ret-701",
          "title": "Return vs Log",
          "question": "function getScore() {\n  return 100;\n}\nconst result = getScore();\nconsole.log(result);",
          "options": [
            { "id": "opt-r1", "option": "a", "text": "100", "correct": true, "selected": false },
            { "id": "opt-r2", "option": "b", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-r3", "option": "c", "text": "Nothing logs", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-ret-702",
          "title": "Code After Return",
          "question": "function test() {\n  return 'Done';\n  console.log('Hello');\n}\ntest();",
          "options": [
            { "id": "opt-r4", "option": "a", "text": "Done then Hello", "correct": false, "selected": false },
            { "id": "opt-r5", "option": "b", "text": "Only Hello", "correct": false, "selected": false },
            { "id": "opt-r6", "option": "c", "text": "Nothing is logged", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-ret-703",
          "title": "Implicit Return Check",
          "question": "function noReturn() {\n  const x = 10;\n}\nconsole.log(noReturn());",
          "options": [
            { "id": "opt-r7", "option": "a", "text": "10", "correct": false, "selected": false },
            { "id": "opt-r8", "option": "b", "text": "undefined", "correct": true, "selected": false },
            { "id": "opt-r9", "option": "c", "text": "Error", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-ret-704",
          "title": "Mathematical Return",
          "question": "const double = (n) => n * 2;\n// If an arrow function has no braces, it returns automatically.",
          "options": [
            { "id": "opt-r10", "option": "a", "text": "True", "correct": true, "selected": false },
            { "id": "opt-r11", "option": "b", "text": "False", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-ret-705",
          "title": "Returning Objects",
          "question": "function createPoint(x, y) {\n  return { x: x, y: y };\n}\nconsole.log(typeof createPoint(1, 2));",
          "options": [
            { "id": "opt-r12", "option": "a", "text": "number", "correct": false, "selected": false },
            { "id": "opt-r13", "option": "b", "text": "object", "correct": true, "selected": false },
            { "id": "opt-r14", "option": "c", "text": "string", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-ret-701",
          "title": "The Adder",
          "description": "Create a function %add% that takes two parameters and %returns% their sum. Store the result in a variable and log that variable.",
          "result": "%(The sum)%",
          "note": "Returning values allows you to 'capture' the result of a calculation for later use.",
          "solution": "function add(a, b) {\n  return a + b;\n}\nconst total = add(5, 10);\nconsole.log(total);"
        },
        {
          "id": "task-ret-702",
          "title": "Early Exit Pattern",
          "description": "Write a function %checkAge% that takes a %number%. If the number is less than 18, %return 'Too young'%. Otherwise, %return 'Welcome'%.",
          "result": "%'Too young' or 'Welcome'%",
          "note": "Using return inside an 'if' statement is a great way to stop a function as soon as you have your answer.",
          "solution": "const checkAge = (age) => {\n  if (age < 18) return 'Too young to drive.';\n  return 'Welcome';\n};"
        },
        {
          "id": "task-ret-703",
          "title": "The Formatter",
          "description": "Create a function %formatUser% that takes %name% and %role%. It should return an object like %{ displayName: name, access: role }%.",
          "result": "%{ displayName: '...', access: '...' }%",
          "note": "Functions often act as 'factories' that build and return objects.",
          "solution": "const formatUser = (name, role) => {\n  return {\n    displayName: name,\n    access: role\n  };\n};"
        }
      ]
    },
    {
      "id": "primitives-vs-reference-124",
      "title": "Primitives vs Objects",
      "videoID": "24",
      "questions": [
        {
          "id": "q-pri-801",
          "title": "Primitive Assignment",
          "question": "let a = 'Hello';\nlet b = a;\nb = 'Hi';\nconsole.log(a);",
          "options": [
            { "id": "opt-p1", "option": "a", "text": "Hello", "correct": true, "selected": false },
            { "id": "opt-p2", "option": "b", "text": "Hi", "correct": false, "selected": false },
            { "id": "opt-p3", "option": "c", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-pri-802",
          "title": "The Reference Link",
          "question": "const original = { price: 10 };\nconst copy = original;\ncopy.price = 20;\nconsole.log(original.price);",
          "options": [
            { "id": "opt-p4", "option": "a", "text": "10", "correct": false, "selected": false },
            { "id": "opt-p5", "option": "b", "text": "20", "correct": true, "selected": false },
            { "id": "opt-p6", "option": "c", "text": "ReferenceError", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-pri-804",
          "title": "Memory Logic",
          "question": "let x = 10;\nlet y = 10;\nconsole.log(x === y);\n\nlet obj1 = {};\nlet obj2 = {};\nconsole.log(obj1 === obj2);",
          "options": [
            { "id": "opt-p9", "option": "a", "text": "true then true", "correct": false, "selected": false },
            { "id": "opt-p10", "option": "b", "text": "true then false", "correct": true, "selected": false },
            { "id": "opt-p11", "option": "c", "text": "false then false", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-pri-802",
          "title": "Shared Profile",
          "description": "Create an object %admin = { power: 'All' }%. Declare a second variable %manager% and set it to %admin%. Change the %power% property of %manager% to %'Limited'%. Log %admin.power%.",
          "result": "%Limited%",
          "note": "Both variables point to the same space in memory. Changing one changes the 'source'.",
          "solution": "const admin = { power: 'All' };\nconst manager = admin;\nmanager.power = 'Limited';\nconsole.log(admin.power);"
        },
        {
          "id": "task-pri-803",
          "title": "The Constant Object",
          "description": "Declare %const phone = { brand: 'Apple' }%. Change the brand to %'Samsung'%. Log the object.",
          "result": "%{ brand: 'Samsung' }%",
          "note": "Even with 'const', you can change properties inside an object, because the reference (the 'address') hasn't changed.",
          "solution": "const phone = { brand: 'Apple' };\nphone.brand = 'Samsung';\nconsole.log(phone);"
        }
      ]
    },
    {
      "id": "milestone-logic-functions-02",
      "title": "- MILESTONE EXERCISES 2 -",
      "videoID": "25",
      "questions": [
        { "id": "mq2-01", "title": "Identifying Arrays", "question": "const favoriteColors = ['red', 'blue'];\nconsole.log(typeof favoriteColors);", "options": [{ "id": "o1", "option": "a", "text": "'array'", "correct": false }, { "id": "o2", "option": "b", "text": "'object'", "correct": true }], "correctAnswer": "b" },
        { "id": "mq2-02", "title": "Empty Array Truthiness", "question": "const shoppingCart = [];\nif (shoppingCart) {\n  console.log('Cart exists');\n}", "options": [{ "id": "o3", "option": "a", "text": "It logs 'Cart exists'", "correct": true }, { "id": "o4", "option": "b", "text": "Nothing happens", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-03", "title": "Accessing First Item", "question": "const projectDeadlines = [10, 20, 30];\nconsole.log(projectDeadlines[0]);", "options": [{ "id": "o5", "option": "a", "text": "10", "correct": true }, { "id": "o6", "option": "b", "text": "20", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-04", "title": "String Length", "question": "const userStatus = 'Online';\nconsole.log(userStatus.length);", "options": [{ "id": "o7", "option": "a", "text": "5", "correct": false }, { "id": "o8", "option": "b", "text": "6", "correct": true }], "correctAnswer": "b" },
        { "id": "mq2-05", "title": "Out of Bounds Index", "question": "const teamMembers = ['Alisa', 'Max'];\nconsole.log(teamMembers[2]);", "options": [{ "id": "o9", "option": "a", "text": "undefined", "correct": true }, { "id": "o10", "option": "b", "text": "Error", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-06", "title": "Space in Strings", "question": "const emptySpace = ' ';\nconsole.log(emptySpace.length);", "options": [{ "id": "o11", "option": "a", "text": "0", "correct": false }, { "id": "o12", "option": "b", "text": "1", "correct": true }], "correctAnswer": "b" },
        { "id": "mq2-07", "title": "Missing Object Key", "question": "const employee = { name: 'Alisa' };\nconsole.log(employee.salary);", "options": [{ "id": "o13", "option": "a", "text": "undefined", "correct": true }, { "id": "o14", "option": "b", "text": "null", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-08", "title": "Bracket Notation Need", "question": "const laptop = { 'disk-space': '500GB' };\n// How do we access disk-space?", "options": [{ "id": "o15", "option": "a", "text": "laptop.disk-space", "correct": false }, { "id": "o16", "option": "b", "text": "laptop['disk-space']", "correct": true }], "correctAnswer": "b" },
        { "id": "mq2-09", "title": "Running a Function", "question": "function sendEmail() {\n  return 'Sent';\n}\n// Which one actually runs the function?", "options": [{ "id": "o17", "option": "a", "text": "sendEmail()", "correct": true }, { "id": "o18", "option": "b", "text": "sendEmail", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-10", "title": "Default Parameters", "question": "function setVolume(level = 50) {\n  return level;\n}\nconsole.log(setVolume());", "options": [{ "id": "o19", "option": "a", "text": "50", "correct": true }, { "id": "o20", "option": "b", "text": "undefined", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-11", "title": "Global Scope Access", "question": "const globalScore = 100;\nfunction showScore() {\n  console.log(globalScore);\n}\nshowScore();", "options": [{ "id": "o21", "option": "a", "text": "It logs 100", "correct": true }, { "id": "o22", "option": "b", "text": "ReferenceError", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-12", "title": "Block Scope Const", "question": "if (true) {\n  const internalCode = 999;\n}\nconsole.log(internalCode);", "options": [{ "id": "o23", "option": "a", "text": "999", "correct": false }, { "id": "o24", "option": "b", "text": "ReferenceError", "correct": true }], "correctAnswer": "b" },
        { "id": "mq2-13", "title": "Function Hoisting", "question": "greetUser();\nfunction greetUser() {\n  console.log('Welcome!');\n}", "options": [{ "id": "o25", "option": "a", "text": "Works (logs 'Welcome!')", "correct": true }, { "id": "o26", "option": "b", "text": "Fails (Error)", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-14", "title": "Arrow Function Hoisting", "question": "launch();\nconst launch = () => {\n  console.log('Liftoff');\n};", "options": [{ "id": "o27", "option": "a", "text": "Works", "correct": false }, { "id": "o28", "option": "b", "text": "Fails (ReferenceError)", "correct": true }], "correctAnswer": "b" },
        { "id": "mq2-15", "title": "The Return Wall", "question": "function processOrder() {\n  return 'Success';\n  console.log('Sending Notification...');\n}\nprocessOrder();", "options": [{ "id": "o29", "option": "a", "text": "Logs 'Sending Notification...'", "correct": false }, { "id": "o30", "option": "b", "text": "Nothing logs", "correct": true }], "correctAnswer": "b" },
        { "id": "mq2-16", "title": "Arrow Implicit Return", "question": "const multiplyByTwo = (number) => number * 2;\nconsole.log(multiplyByTwo(5));", "options": [{ "id": "o31", "option": "a", "text": "10", "correct": true }, { "id": "o32", "option": "b", "text": "undefined", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-17", "title": "Primitive Value Copy", "question": "let originalPrice = 100;\nlet salePrice = originalPrice;\nsalePrice = 80;\nconsole.log(originalPrice);", "options": [{ "id": "o33", "option": "a", "text": "100", "correct": true }, { "id": "o34", "option": "b", "text": "80", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-18", "title": "Object Reference Copy", "question": "const userProfile = { age: 25 };\nconst updatedProfile = userProfile;\nupdatedProfile.age = 30;\nconsole.log(userProfile.age);", "options": [{ "id": "o35", "option": "a", "text": "30", "correct": true }, { "id": "o36", "option": "b", "text": "25", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-19", "title": "Local Scope Privacy", "question": "function setPrice() {\n  let discount = 0.1;\n}\nconsole.log(discount);", "options": [{ "id": "o37", "option": "a", "text": "ReferenceError", "correct": true }, { "id": "o38", "option": "b", "text": "0.1", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-20", "title": "Implicit Return Array", "question": "const getScores = () => [90, 85, 70];\nconst currentScores = getScores();\nconsole.log(currentScores[1]);", "options": [{ "id": "o39", "option": "a", "text": "85", "correct": true }, { "id": "o40", "option": "b", "text": "90", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-21", "title": "Array Length Property", "question": "const taskList = ['Task 1', 'Task 2'];\nconsole.log(taskList.length);", "options": [{ "id": "o41", "option": "a", "text": "2", "correct": true }, { "id": "o42", "option": "b", "text": "1", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-22", "title": "Property Update", "question": "const vehicle = { type: 'Car' };\nvehicle.type = 'Truck';\nconsole.log(vehicle.type);", "options": [{ "id": "o43", "option": "a", "text": "'Truck'", "correct": true }, { "id": "o44", "option": "b", "text": "Error (it is const)", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-23", "title": "Last Index Logic", "question": "If an array has a length of 5 items, what index is the last item located at?", "options": [{ "id": "o45", "option": "a", "text": "5", "correct": false }, { "id": "o46", "option": "b", "text": "4", "correct": true }], "correctAnswer": "b" },
        { "id": "mq2-24", "title": "Function with No Return", "question": "function logMessage() {\n  console.log('Action performed');\n}\nconst result = logMessage();\nconsole.log(result);", "options": [{ "id": "o47", "option": "a", "text": "undefined", "correct": true }, { "id": "o48", "option": "b", "text": "null", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-25", "title": "Const Object Mutation", "question": "Can you add a NEW property to an object declared with 'const'?", "options": [{ "id": "o49", "option": "a", "text": "Yes", "correct": true }, { "id": "o50", "option": "b", "text": "No", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-26", "title": "Array Indexing", "question": "const ages = [21, 25, 30];\nconsole.log(ages[1]);", "options": [{ "id": "o51", "option": "a", "text": "25", "correct": true }, { "id": "o52", "option": "b", "text": "21", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-27", "title": "Length calculation", "question": "const language = 'JavaScript';\nconsole.log(language.length - 1);", "options": [{ "id": "o53", "option": "a", "text": "9", "correct": true }, { "id": "o54", "option": "b", "text": "10", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-28", "title": "Variable keys", "question": "const userProperty = 'username';\nconst account = { username: 'Admin' };\nconsole.log(account[userProperty]);", "options": [{ "id": "o55", "option": "a", "text": "'Admin'", "correct": true }, { "id": "o56", "option": "b", "text": "undefined", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-29", "title": "Shadowing Variables", "question": "let totalAmount = 50;\nfunction updateAmount() {\n  let totalAmount = 100;\n  console.log(totalAmount);\n}\nupdateAmount();", "options": [{ "id": "o57", "option": "a", "text": "100", "correct": true }, { "id": "o58", "option": "b", "text": "50", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-30", "title": "Multiple Returns", "question": "function validate(val) {\n  if (val > 0) return 'Valid';\n  return 'Invalid';\n}\nconsole.log(validate(10));", "options": [{ "id": "o59", "option": "a", "text": "'Valid'", "correct": true }, { "id": "o60", "option": "b", "text": "'Invalid'", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-31", "title": "Extra Arguments", "question": "function addNumbers(a, b) {\n  return a + b;\n}\nconsole.log(addNumbers(5, 5, 100));", "options": [{ "id": "o61", "option": "a", "text": "10", "correct": true }, { "id": "o62", "option": "b", "text": "110", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-32", "title": "Object Falsiness", "question": "Is an empty object {} considered 'falsy' in an if-statement?", "options": [{ "id": "o63", "option": "a", "text": "No, it is truthy", "correct": true }, { "id": "o64", "option": "b", "text": "Yes, it is falsy", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-33", "title": "Implicit Return Object", "question": "const createPlayer = (playerName) => ({ name: playerName });\n// What does this function return?", "options": [{ "id": "o65", "option": "a", "text": "An object with a name property", "correct": true }, { "id": "o66", "option": "b", "text": "undefined", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-34", "title": "String Reference", "question": "let cityOne = 'London';\nlet cityTwo = cityOne;\ncityTwo = 'Paris';\n// Does cityOne change?", "options": [{ "id": "o67", "option": "a", "text": "No", "correct": true }, { "id": "o68", "option": "b", "text": "Yes", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-35", "title": "Arrow Body No Return", "question": "const getNumber = () => { 10 };\nconsole.log(getNumber());", "options": [{ "id": "o69", "option": "a", "text": "undefined", "correct": true }, { "id": "o70", "option": "b", "text": "10", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-36", "title": "Implicit Return Logic", "question": "const isEven = (n) => n % 2 === 0;\nconsole.log(isEven(4));", "options": [{ "id": "o71", "option": "a", "text": "true", "correct": true }, { "id": "o72", "option": "b", "text": "undefined", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-37", "title": "Typeof Null", "question": "console.log(typeof null);", "options": [{ "id": "o73", "option": "a", "text": "'object'", "correct": true }, { "id": "o74", "option": "b", "text": "'null'", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-38", "title": "Scope Isolation", "question": "function taskA() { let status = 'done'; }\nfunction taskB() { let status = 'pending'; }\n// Do these variables cause an error?", "options": [{ "id": "o75", "option": "a", "text": "No, they are isolated in their functions", "correct": true }, { "id": "o76", "option": "b", "text": "Yes, name conflict", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-39", "title": "Template Literal return", "question": "const currentYear = 2026;\nconst getYear = () => `Year: ${currentYear}`;\nconsole.log(getYear());", "options": [{ "id": "o77", "option": "a", "text": "'Year: 2026'", "correct": true }, { "id": "o78", "option": "b", "text": "Year: 2026 (no quotes)", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-40", "title": "Object value access", "question": "const userSettings = { volume: 80 };\nconsole.log(userSettings['volume']);", "options": [{ "id": "o79", "option": "a", "text": "80", "correct": true }, { "id": "o80", "option": "b", "text": "undefined", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-41", "title": "Variable for object property", "question": "const dataKey = 'email';\nconst userAccount = { email: 'test@test.com' };\nconsole.log(userAccount.dataKey);", "options": [{ "id": "o81", "option": "a", "text": "undefined", "correct": true }, { "id": "o82", "option": "b", "text": "'test@test.com'", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-42", "title": "Implicit Return vs Braces", "question": "const result = () => 5 + 5;\nconsole.log(result());", "options": [{ "id": "o83", "option": "a", "text": "10", "correct": true }, { "id": "o84", "option": "b", "text": "undefined", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-43", "title": "Boolean Conversion", "question": "Boolean(0)", "options": [{ "id": "o85", "option": "a", "text": "false", "correct": true }, { "id": "o86", "option": "b", "text": "true", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-44", "title": "Negative Index", "question": "const pointValues = [1, 2];\nconsole.log(pointValues[-1]);", "options": [{ "id": "o87", "option": "a", "text": "undefined", "correct": true }, { "id": "o88", "option": "b", "text": "Error", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-45", "title": "Redeclaring in Scope", "question": "let username = 'Alisa';\nlet username = 'Max'; // (Same scope)", "options": [{ "id": "o89", "option": "a", "text": "Error", "correct": true }, { "id": "o90", "option": "b", "text": "Name changes", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-46", "title": "Logic in Return", "question": "const isAdult = (age) => age >= 18;\nconsole.log(isAdult(20));", "options": [{ "id": "o91", "option": "a", "text": "true", "correct": true }, { "id": "o92", "option": "b", "text": "false", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-47", "title": "Double space length", "question": "const fillerText = '  ';\nconsole.log(fillerText.length);", "options": [{ "id": "o93", "option": "a", "text": "2", "correct": true }, { "id": "o94", "option": "b", "text": "0", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-48", "title": "Undefined type", "question": "console.log(typeof undefined);", "options": [{ "id": "o95", "option": "a", "text": "'undefined'", "correct": true }, { "id": "o96", "option": "b", "text": "'object'", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-49", "title": "Implicit Return Config", "question": "const getConfig = (type) => ({ theme: type });\nconst myConfig = getConfig('Dark');\nconsole.log(myConfig.theme);", "options": [{ "id": "o97", "option": "a", "text": "'Dark'", "correct": true }, { "id": "o98", "option": "b", "text": "undefined", "correct": false }], "correctAnswer": "a" },
        { "id": "mq2-50", "title": "Parameters as Variables", "question": "function update(data) {\n  return data;\n}\n// Is 'data' accessible outside the function?", "options": [{ "id": "o99", "option": "a", "text": "No", "correct": true }, { "id": "o100", "option": "b", "text": "Yes", "correct": false }], "correctAnswer": "a" }
      ],
      "tasks": [
        { "id": "mt2-01", "title": "Inventory Check", "description": "Declare %const stockItems = [10, 'In Stock', true]%. Log the %typeof% the middle element.", "result": "%string%", "solution": "const stockItems = [10, 'In Stock', true];\nconsole.log(typeof stockItems[1]);" },
        { "id": "mt2-02", "title": "Security Check", "description": "Declare %let password = 'abc'%. If the %length% is less than 5, log %'Weak Password'%.", "result": "%Weak Password%", "solution": "let password = 'abc';\nif (password.length < 5) {\n  console.log('Weak Password');\n}" },
        { "id": "mt2-03", "title": "Dynamic Profile", "description": "Create an empty object %const userAccount = {}%. After it is created, add a property %email% with a string value.", "result": "%{email: '...'}%", "solution": "const userAccount = {};\nuserAccount.email = 'alisa@example.com';" },
        { "id": "mt2-04", "title": "Price Calculator", "description": "Create an arrow function %getDiscountedPrice% that takes %price% and %discount% as parameters and returns the %price - discount%. Log the result of %getDiscountedPrice(100, 20)%.", "result": "%80%", "solution": "const getDiscountedPrice = (price, discount) => {\n  return price - discount;\n};\nconsole.log(getDiscountedPrice(100, 20));" },
        { "id": "mt2-05", "title": "Global Settings", "description": "Declare a global variable %const appTheme = 'Dark'%. Create a function %showTheme% that logs this global variable.", "result": "%Dark%", "solution": "const appTheme = 'Dark';\nconst showTheme = () => {\n  console.log(appTheme);\n};\nshowTheme();" },
        { "id": "mt2-06", "title": "Function Order", "description": "Write a function declaration %displayAlert()% that logs %'System Ready'%. Call it on the line ABOVE where you wrote the function.", "result": "%System Ready%", "solution": "displayAlert();\nfunction displayAlert() {\n  console.log('System Ready');\n}" },
        { "id": "mt2-07", "title": "Shared Database", "description": "Create an object %const database = { status: 'Online' }%. Declare a second variable %localCopy% and set it equal to %database%. Change %localCopy.status% to %'Offline'%. Log %database.status%.", "result": "%Offline%", "solution": "const database = { status: 'Online' };\nconst localCopy = database;\nlocalCopy.status = 'Offline';\nconsole.log(database.status);" },
        { "id": "mt2-08", "title": "Label Length", "description": "Declare %const productLabel = 'Premium Coffee'%. Log the length of this string.", "result": "%14%", "solution": "const productLabel = 'Premium Coffee';\nconsole.log(productLabel.length);" },
        { "id": "mt2-09", "title": "Smart Greeting", "description": "Create a function %greetMember% that takes a %name% parameter with a default value of %'Guest'%. It should return a template literal: %`Welcome, ${name}`%.", "result": "%Welcome, Guest%", "solution": "const greetMember = (name = 'Guest') => {\n  return `Welcome, ${name}`;\n};\nconsole.log(greetMember());" },
        { "id": "mt2-10", "title": "Special Key Access", "description": "Create an object %const serverData = { 'response-time': 150 }%. Use bracket notation to log this property.", "result": "%150%", "solution": "const serverData = { 'response-time': 150 };\nconsole.log(serverData['response-time']);" },
        { "id": "mt2-11", "title": "Last Queue Item", "description": "Create an array %const waitingQueue = ['User1', 'User2', 'User3']%. Use the %length% property to log the very last item in the array.", "result": "%User3%", "solution": "const waitingQueue = ['User1', 'User2', 'User3'];\nconsole.log(waitingQueue[waitingQueue.length - 1]);" },
        { "id": "mt2-12", "title": "Validation Logic", "description": "Create a function %checkAge% that takes a %userAge% parameter. If %userAge% is 18 or more, return %'Access Granted'%. Otherwise, return %'Access Denied'%.", "result": "%...%", "solution": "const checkAge = (userAge) => {\n  if (userAge >= 18) {\n    return 'Access Granted';\n  }\n  return 'Access Denied';\n};" },
        { "id": "mt2-13", "title": "Variable Privacy", "description": "Create a function %saveData%. Inside it, declare %let secretKey = '12345'%. Try to log %secretKey% OUTSIDE the function and explain why it fails.", "result": "%Error%", "solution": "function saveData() {\n  let secretKey = '12345';\n}\n// console.log(secretKey); // Fails because of function scope" },
        { "id": "mt2-14", "title": "Complex Data Array", "description": "Declare an array %const userDashboard% that contains: a string (name), a number (id), and an object (settings).", "result": "%[...]%", "solution": "const userDashboard = [\n  'Alisa',\n  101,\n  { theme: 'Light' }\n];" },
        { "id": "mt2-15", "title": "Total Score Arrow", "description": "Create an arrow function %calculateTotal% that takes three parameters (%round1%, %round2%, %round3%) and returns their sum using an implicit return.", "result": "%Sum%", "solution": "const calculateTotal = (round1, round2, round3) => round1 + round2 + round3;" },
        { "id": "mt2-16", "title": "Object Factory", "description": "Create an arrow function %buildUser% that takes a %username% and returns an object %{ name: username, active: true }% using an implicit return.", "result": "%{name, active}%", "solution": "const buildUser = (username) => ({ name: username, active: true });" },
        { "id": "mt2-17", "title": "Type Inspector", "description": "Create a function %inspectValue% that takes one parameter and returns its %typeof% as a string.", "result": "%...%", "solution": "const inspectValue = (input) => {\n  return typeof input;\n};" },
        { "id": "mt2-18", "title": "Template Task", "description": "Create an arrow function %formatPrice% that takes a %value% and returns %`$${value}`% using an implicit return.", "result": "%$...%", "solution": "const formatPrice = (value) => `$${value}`;" },
        { "id": "mt2-19", "title": "Copy Protection", "description": "Declare %let originalName = 'Max'%. Set %let backupName = originalName%. Change %backupName% to %'Joe'%. Log both to show the original didn't change.", "result": "%Max Joe%", "solution": "let originalName = 'Max';\nlet backupName = originalName;\nbackupName = 'Joe';\nconsole.log(originalName, backupName);" },
        { "id": "mt2-20", "title": "Block Security", "description": "Inside an %if (true)% block, declare %const sessionToken = 'XYZ'%. Try to log it outside and see the error.", "result": "%Error%", "solution": "if (true) {\n  const sessionToken = 'XYZ';\n}\n// console.log(sessionToken); // ReferenceError" }
      ]
    },
    {
      "id": "string-methods-01",
      "title": "String Methods 1",
      "videoID": "26",
      "questions": [
        { "id": "smq-01", "title": "Checking the Start", "question": "const emailAddress = 'support@company.com';\nconst isSupport = emailAddress.startsWith('support');\nconsole.log(isSupport);", "options": [{ "id": "o1", "option": "a", "text": "true", "correct": true }, { "id": "o2", "option": "b", "text": "false", "correct": false }], "correctAnswer": "a" },
        { "id": "smq-02", "title": "Case Sensitivity Check", "question": "const webAddress = 'HTTPS://google.com';\nconst isSecure = webAddress.startsWith('https');\nconsole.log(isSecure);", "options": [{ "id": "o3", "option": "a", "text": "true", "correct": false }, { "id": "o4", "option": "b", "text": "false", "correct": true }], "correctAnswer": "b" },
        { "id": "smq-03", "title": "Finding a Keyword", "question": "const productDescription = 'Laptop with 16GB RAM and fast processor';\nconst hasRamInfo = productDescription.includes('16GB');\nconsole.log(hasRamInfo);", "options": [{ "id": "o5", "option": "a", "text": "true", "correct": true }, { "id": "o6", "option": "b", "text": "false", "correct": false }], "correctAnswer": "a" },
        { "id": "smq-04", "title": "Extracting a Substring", "question": "const spreadsheetRow = '2026-Data-Export';\nconst extractedYear = spreadsheetRow.slice(0, 4);\nconsole.log(extractedYear);", "options": [{ "id": "o7", "option": "a", "text": "'2026'", "correct": true }, { "id": "o8", "option": "b", "text": "'2026-'", "correct": false }], "correctAnswer": "a" },
        { "id": "smq-05", "title": "Checking the End", "question": "const uploadedFile = 'invoice_draft.pdf';\nconst isPdf = uploadedFile.endsWith('.pdf');\nconsole.log(isPdf);", "options": [{ "id": "o9", "option": "a", "text": "true", "correct": true }, { "id": "o10", "option": "b", "text": "false", "correct": false }], "correctAnswer": "a" },
        { "id": "smq-06", "title": "Slice with One Argument", "question": "const serialNumber = 'SN-99823';\nconst numericPart = serialNumber.slice(3);\nconsole.log(numericPart);", "options": [{ "id": "o11", "option": "a", "text": "'99823'", "correct": true }, { "id": "o12", "option": "b", "text": "'SN-'", "correct": false }], "correctAnswer": "a" },
        { "id": "smq-07", "title": "Includes Empty String", "question": "const messageText = 'Hello World';\nconst result = messageText.includes('');\nconsole.log(result);", "options": [{ "id": "o13", "option": "a", "text": "true", "correct": true }, { "id": "o14", "option": "b", "text": "false", "correct": false }], "correctAnswer": "a" },
        { "id": "smq-08", "title": "Slice Out of Bounds", "question": "const shortCode = 'ABC';\nconst partialCode = shortCode.slice(0, 10);\nconsole.log(partialCode);", "options": [{ "id": "o15", "option": "a", "text": "'ABC'", "correct": true }, { "id": "o16", "option": "b", "text": "Error", "correct": false }], "correctAnswer": "a" },
        { "id": "smq-09", "title": "Space and Includes", "question": "const searchBanner = 'New Arrivals';\nconst hasSpace = searchBanner.includes(' ');\nconsole.log(hasSpace);", "options": [{ "id": "o17", "option": "a", "text": "true", "correct": true }, { "id": "o18", "option": "b", "text": "false", "correct": false }], "correctAnswer": "a" },
        { "id": "smq-10", "title": "String Character Count", "question": "const couponCode = 'SAVE20';\nconsole.log(couponCode.length);", "options": [{ "id": "o19", "option": "a", "text": "6", "correct": true }, { "id": "o20", "option": "b", "text": "5", "correct": false }], "correctAnswer": "a" }
      ],
      "tasks": [
        { "id": "smt-01", "title": "URL Security Check", "description": "Declare %const websiteUrl = 'https://mybank.com'%. Use a string method to check if the URL starts with %'https'%. Log the result.", "result": "%true%", "solution": "const websiteUrl = 'https://mybank.com';\nconst isSecure = websiteUrl.startsWith('https');\nconsole.log(isSecure);" },
        { "id": "smt-02", "title": "Extract Area Code", "description": "Declare %const phoneNumber = '(555) 123-4567'%. Use the %slice()% method to extract only the area code %'555'% (do not include the parentheses). Log the result.", "result": "%555%", "solution": "const phoneNumber = '(555) 123-4567';\nconst areaCode = phoneNumber.slice(1, 4);\nconsole.log(areaCode);" },
        { "id": "smt-03", "title": "Spam Keyword Filter", "description": "Declare %const incomingMessage = 'Get rich fast! Click here.'%. Write an %if% statement that checks if the message %includes()% the word %'rich'%. If it does, log %'Spam Blocked'%.", "result": "%Spam Blocked%", "solution": "const incomingMessage = 'Get rich fast! Click here.';\nif (incomingMessage.includes('rich')) {\n  console.log('Spam Blocked');\n}" },
        { "id": "smt-04", "title": "Document Extension Check", "description": "Declare %const originalDocument = 'report_final.docx'%. Use a string method to check if the filename ends with %'.docx'%. Log the true/false result.", "result": "%true%", "solution": "const originalDocument = 'report_final.docx';\nconst isWordDoc = originalDocument.endsWith('.docx');\nconsole.log(isWordDoc);" },
        { "id": "smt-05", "title": "Username Length Guard", "description": "Declare %const accountUsername = 'Alisa'%. Create an %if% statement that checks if the character length is less than 8. If it is, log %'Username too short'%.", "result": "%Username too short%", "solution": "const accountUsername = 'Alisa';\nif (accountUsername.length < 8) {\n  console.log('Username too short');\n}" },
        { "id": "smt-06", "title": "Extract File Name", "description": "Declare %const absoluteFilePath = '/images/profile_picture.png'%. Use the %slice()% method with only ONE parameter to extract everything after the second slash, starting from %'profile_picture.png'%. Log the result.", "result": "%profile_picture.png%", "solution": "const absoluteFilePath = '/images/profile_picture.png';\nconst fileNameOnly = absoluteFilePath.slice(8);\nconsole.log(fileNameOnly);" },
        { "id": "smt-07", "title": "Domain Finder", "description": "Declare %const customerEmail = 'john.doe@gmail.com'%. Use the %includes()% method to check if the email belongs to a gmail domain (%'gmail.com'%). Log the true/false result.", "result": "%true%", "solution": "const customerEmail = 'john.doe@gmail.com';\nconst isGmail = customerEmail.includes('gmail.com');\nconsole.log(isGmail);" }
      ]
    },
  ]
}