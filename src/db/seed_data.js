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
      "milestone": true,
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
      "milestone": true,
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
    {
      "id": "string-methods-02",
      "title": "String Methods 2",
      "videoID": "27",
      "questions": [
        {
          "id": "smq2-01",
          "title": "Changing to Uppercase",
          "question": "const discountCode = 'save20';\nconst updatedCode = discountCode.toUpperCase();\nconsole.log(updatedCode);",
          "options": [
            { "id": "o1", "option": "a", "text": "'SAVE20'", "correct": true },
            { "id": "o2", "option": "b", "text": "'save20'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq2-02",
          "title": "Changing to Lowercase",
          "question": "const userEmailInput = 'MAX@Example.com';\nconst lowerCaseEmail = userEmailInput.toLowerCase();\nconsole.log(lowerCaseEmail);",
          "options": [
            { "id": "o3", "option": "a", "text": "'max@example.com'", "correct": true },
            { "id": "o4", "option": "b", "text": "'MAX@EXAMPLE.COM'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq2-03",
          "title": "Removing Outer Spaces",
          "question": "const usernameInput = '   alisa_developer   ';\nconst cleanUsername = usernameInput.trim();\nconsole.log(cleanUsername);",
          "options": [
            { "id": "o5", "option": "a", "text": "'alisa_developer'", "correct": true },
            { "id": "o6", "option": "b", "text": "'   alisa_developer   '", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq2-04",
          "title": "Replacing Text Content",
          "question": "const systemStatus = 'System: Error detected';\nconst updatedStatus = systemStatus.replace('Error', 'Success');\nconsole.log(updatedStatus);",
          "options": [
            { "id": "o7", "option": "a", "text": "'System: Success detected'", "correct": true },
            { "id": "o8", "option": "b", "text": "'System: Error detected'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq2-05",
          "title": "Splitting at Commas",
          "question": "const itemsList = 'shoes,shirts,hats';\nconst itemsArray = itemsList.split(',');\nconsole.log(itemsArray[0]);",
          "options": [
            { "id": "o9", "option": "a", "text": "'shoes'", "correct": true },
            { "id": "o10", "option": "b", "text": "'shirts'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq2-06",
          "title": "Joining with Hyphens",
          "question": "const dateParts = ['2026', '05', '18'];\nconst formattedDate = dateParts.join('-');\nconsole.log(formattedDate);",
          "options": [
            { "id": "o11", "option": "a", "text": "'2026-05-18'", "correct": true },
            { "id": "o12", "option": "b", "text": "'20260518'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq2-07",
          "title": "Splitting Spaces into Words",
          "question": "const shortNotice = 'Welcome Back Admin';\nconst wordsArray = shortNotice.split(' ');\nconsole.log(wordsArray.length);",
          "options": [
            { "id": "o13", "option": "a", "text": "3", "correct": true },
            { "id": "o14", "option": "b", "text": "1", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq2-08",
          "title": "Case Sensitive Replacement",
          "question": "const chatMessage = 'Please do not Spam here';\nconst cleanMessage = chatMessage.replace('spam', 'post');\nconsole.log(cleanMessage);",
          "options": [
            { "id": "o15", "option": "a", "text": "'Please do not Spam here'", "correct": true },
            { "id": "o16", "option": "b", "text": "'Please do not post here'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq2-09",
          "title": "Joining Without Spaces",
          "question": "const singleLetters = ['R', 'e', 'a', 'c', 't'];\nconst completeWord = singleLetters.join('');\nconsole.log(completeWord);",
          "options": [
            { "id": "o17", "option": "a", "text": "'React'", "correct": true },
            { "id": "o18", "option": "b", "text": "'R e a c t'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq2-12",
          "title": "Method Chaining Order",
          "question": "const rawInputText = '  hello  ';\nconst finalOutput = rawInputText.trim().toUpperCase();\nconsole.log(finalOutput);",
          "options": [
            { "id": "o23", "option": "a", "text": "'HELLO'", "correct": true },
            { "id": "o24", "option": "b", "text": "'  HELLO  '", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq2-14",
          "title": "Join with Space Delimiter",
          "question": "const namesArray = ['John', 'Smith'];\nconst introduction = namesArray.join(' ');\nconsole.log(introduction);",
          "options": [
            { "id": "o27", "option": "a", "text": "'John Smith'", "correct": true },
            { "id": "o28", "option": "b", "text": "'JohnSmith'", "correct": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "smt2-01",
          "title": "Search Query Normalizer",
          "description": "Declare %const userSearchInput = '   PrOdUcT   '%. Create a new variable that removes the white spaces around it and completely converts it to lowercase. Log the clean result.",
          "result": "%product%",
          "solution": "const userSearchInput = '   PrOdUcT   ';\nconst cleanInput = userSearchInput.trim().toLowerCase();\nconsole.log(cleanInput);"
        },
        {
          "id": "smt2-02",
          "title": "Comma Separated Values Data Converter",
          "description": "Declare %const csvLineData = 'Laptop,Electronics,1200,InStock'%. Convert this string text into an array wherever a comma character appears. Log the newly created array structure.",
          "result": "%[...]%",
          "solution": "const csvLineData = 'Laptop,Electronics,1200,InStock';\nconst datasetArray = csvLineData.split(',');\nconsole.log(datasetArray);"
        },
        {
          "id": "smt2-03",
          "title": "Website Address Link Generator",
          "description": "Declare %const phraseSegments = ['building', 'modern', 'websites']%. Join these words together using a single hyphen character (%'-'%) to make a web address link. Log the combined text string.",
          "result": "%building-modern-websites%",
          "solution": "const phraseSegments = ['building', 'modern', 'websites'];\nconst webLinkSlug = phraseSegments.join('-');\nconsole.log(webLinkSlug);"
        },
        {
          "id": "smt2-04",
          "title": "Sensitive Log Scrubbing",
          "description": "Declare %const dangerousSystemLog = 'Database failure caused by password123 error'%. Target the string %'password123'% inside this sentence text and switch it to %'REDACTED'%. Log the updated message content.",
          "result": "%Database failure caused by REDACTED error%",
          "solution": "const dangerousSystemLog = 'Database failure caused by password123 error';\nconst safeSystemLog = dangerousSystemLog.replace('password123', 'REDACTED');\nconsole.log(safeSystemLog);"
        },
        {
          "id": "smt2-05",
          "title": "Input Spacing Verification",
          "description": "Declare %const customerEmailAddress = '  contact@agency.com '%. Create an %if% statement checking if the email has starting spaces using %startsWith(' ')%. If it does, use a string method to safely strip the blank spaces and log %'Email Sanitized'%.",
          "result": "%Email Sanitized%",
          "solution": "const customerEmailAddress = '  contact@agency.com ';\nif (customerEmailAddress.startsWith(' ')) {\n  const sanitizedEmail = customerEmailAddress.trim();\n  console.log('Email Sanitized');\n}"
        },
        {
          "id": "smt2-06",
          "title": "High Visibility Banner Text Converter",
          "description": "Declare %const regularAlertMessage = 'warning: low server storage space remaining'%. Translate this alert line fully into capital letters so it catches eyes in logs. Log the transformed capital sentence string.",
          "result": "%WARNING: LOW SERVER STORAGE SPACE REMAINING%",
          "solution": "const regularAlertMessage = 'warning: low server storage space remaining';\nconst highVisibilityAlert = regularAlertMessage.toUpperCase();\nconsole.log(highVisibilityAlert);"
        },
        {
          "id": "smt2-07",
          "title": "Sentence Word Counter",
          "description": "Declare %const shortArticleTeaser = 'Learning programming opens many career opportunities'%. Break up this entire line into an array of isolated single words separated by space inputs. Log the numerical count of how many single words are located inside that resulting list array.",
          "result": "%7%",
          "solution": "const shortArticleTeaser = 'Learning programming opens many career opportunities';\nconst wordsCollection = shortArticleTeaser.split(' ');\nconsole.log(wordsCollection.length);"
        },
        {
          "id": "smt2-08",
          "title": "Title Case Normalization",
          "description": "Declare %const rawTitleInput = '  welcome to our portal'%. Trim any starting spaces, then replace the lowercase word %'welcome'% with an uppercase %'Welcome'%. Log the completed title string.",
          "result": "%Welcome to our portal%",
          "solution": "const rawTitleInput = '  welcome to our portal';\nconst trimmedTitle = rawTitleInput.trim();\nconst correctedTitle = trimmedTitle.replace('welcome', 'Welcome');\nconsole.log(correctedTitle);"
        },
        {
          "id": "smt2-09",
          "title": "File Format Path Splitter",
          "description": "Declare %const fullImageFileName = 'user_avatar.png'%. Split this filename into two parts using the dot (%'.'%) symbol. Access the array index for the file format extension and log it.",
          "result": "%png%",
          "solution": "const fullImageFileName = 'user_avatar.png';\nconst segmentedFileName = fullImageFileName.split('.');\nconsole.log(segmentedFileName[1]);"
        }
      ]
    },
    {
      "id": "string-methods-03",
      "title": "String Methods 3",
      "videoID": "28",
      "questions": [
        {
          "id": "smq3-01",
          "title": "Checking String Length",
          "question": "const password = 'secure123';\nconsole.log(password.length);",
          "options": [
            { "id": "o1", "option": "a", "text": "9", "correct": true },
            { "id": "o2", "option": "b", "text": "10", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq3-02",
          "title": "Substrings with Includes",
          "question": "const email = 'admin@domain.com';\nconst hasAdmin = email.includes('admin');\nconsole.log(hasAdmin);",
          "options": [
            { "id": "o3", "option": "a", "text": "true", "correct": true },
            { "id": "o4", "option": "b", "text": "false", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq3-03",
          "title": "Extracting with Slice",
          "question": "const code = 'JS-2026';\nconst year = code.slice(3);\nconsole.log(year);",
          "options": [
            { "id": "o5", "option": "a", "text": "'2026'", "correct": true },
            { "id": "o6", "option": "b", "text": "'-2026'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq3-04",
          "title": "Replacing All Occurrences",
          "question": "const phrase = 'cats and cats';\nconst updated = phrase.replaceAll('cats', 'dogs');\nconsole.log(updated);",
          "options": [
            { "id": "o7", "option": "a", "text": "'dogs and dogs'", "correct": true },
            { "id": "o8", "option": "b", "text": "'dogs and cats'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq3-05",
          "title": "Checking the Beginning",
          "question": "const url = 'https://example.com';\nconsole.log(url.startsWith('https'));",
          "options": [
            { "id": "o9", "option": "a", "text": "true", "correct": true },
            { "id": "o10", "option": "b", "text": "false", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq3-06",
          "title": "Checking the End",
          "question": "const file = 'document.pdf';\nconsole.log(file.endsWith('.pdf'));",
          "options": [
            { "id": "o11", "option": "a", "text": "true", "correct": true },
            { "id": "o12", "option": "b", "text": "false", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq3-07",
          "title": "Negative Slice Indexing",
          "question": "const text = 'JavaScript';\nconst endPart = text.slice(-2);\nconsole.log(endPart);",
          "options": [
            { "id": "o13", "option": "a", "text": "'pt'", "correct": true },
            { "id": "o14", "option": "b", "text": "'ip'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq3-08",
          "title": "Includes Case Sensitivity",
          "question": "const message = 'Hello World';\nconsole.log(message.includes('hello'));",
          "options": [
            { "id": "o15", "option": "a", "text": "false", "correct": true },
            { "id": "o16", "option": "b", "text": "true", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq3-09",
          "title": "Slice with Two Parameters",
          "question": "const phrase = 'ReduxToolkit';\nconst sub = phrase.slice(0, 5);\nconsole.log(sub);",
          "options": [
            { "id": "o17", "option": "a", "text": "'Redux'", "correct": true },
            { "id": "o18", "option": "b", "text": "'ReduxT'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq3-10",
          "title": "Empty Split Delimiter",
          "question": "const word = 'UI';\nconst letters = word.split('');\nconsole.log(letters[0]);",
          "options": [
            { "id": "o19", "option": "a", "text": "'U'", "correct": true },
            { "id": "o20", "option": "b", "text": "'I'", "correct": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "smt3-01",
          "title": "Password Length Validator Function",
          "description": "Create a function named %validatePassword(pass)% that checks if the incoming string parameter has fewer than 8 characters. If it is too short, return %'Too Short'%, otherwise return %'Valid'%.",
          "result": "%Too Short%",
          "solution": "function validatePassword(pass) {\n  if (pass.length < 8) {\n    return 'Too Short';\n  }\n  return 'Valid';\n}\nconsole.log(validatePassword('12345'));"
        },
        {
          "id": "smt3-02",
          "title": "Email Domain Guard Function",
          "description": "Create a function named %checkCorporateEmail(email)% that looks inside an email address string to verify whether it belongs to the corporate domain %'@company.com'%. Return %true% if it does, and %false% if it does not.",
          "result": "%true%",
          "solution": "function checkCorporateEmail(email) {\n  if (email.includes('@company.com')) {\n    return true;\n  }\n  return false;\n}\nconsole.log(checkCorporateEmail('alex@company.com'));"
        },
        {
          "id": "smt3-03",
          "title": "URL Protocol Secure Fixer Function",
          "description": "Create a function named %enforceHttps(url)% that checks if a link starts with unsecured web layout text %'http://'%. If it matches, fix the link by changing that specific part to %'https://'% and return the updated secure string. Otherwise, return the original url.",
          "result": "%https://myweb.com%",
          "solution": "function enforceHttps(url) {\n  if (url.startsWith('http://')) {\n    return url.replace('http://', 'https://');\n  }\n  return url;\n}\nconsole.log(enforceHttps('http://myweb.com'));"
        },
        {
          "id": "smt3-04",
          "title": "E-Commerce Slug Generator Function",
          "description": "Create a function named %generateProductSlug(title)% that takes a raw title string like %'   Blue Nike Shoes   '%. The function should remove any trailing or leading empty spaces, convert all text to lowercase, and switch every internal space into a single hyphen character (%'-'%). Return the formatted text.",
          "result": "%blue-nike-shoes%",
          "solution": "function generateProductSlug(title) {\n  const cleanTitle = title.trim().toLowerCase();\n  return cleanTitle.replaceAll(' ', '-');\n}\nconsole.log(generateProductSlug('   Blue Nike Shoes   '));"
        },
        {
          "id": "smt3-05",
          "title": "Image File Validator Function",
          "description": "Create a function named %isPngFile(filename)% that checks an uploaded file name. Verify if the file string terminates with the image format extension %'.png'%. Return %'Approved Image'% if it matches, and %'Unsupported File'% if it doesn't.",
          "result": "%Approved Image%",
          "solution": "function isPngFile(filename) {\n  if (filename.endsWith('.png')) {\n    return 'Approved Image';\n  }\n  return 'Unsupported File';\n}\nconsole.log(isPngFile('avatar.png'));"
        },
        {
          "id": "smt3-06",
          "title": "Text Preview Snippet Function",
          "description": "Create a function named %getArticlePreview(text)% that takes a long content string. Extract precisely the first 10 characters from that text sequence, combine it with a trailing ellipsis %'...'% symbol, and return the final condensed preview snippet.",
          "result": "%Read more ...%",
          "solution": "function getArticlePreview(text) {\n  const cutText = text.slice(0, 10);\n  return cutText + '...';\n}\nconsole.log(getArticlePreview('Read more about JavaScript string methods'));"
        },
        {
          "id": "smt3-07",
          "title": "CSV First Column Extractor Function",
          "description": "Create a function named %getUserIdFromCsv(csvRow)% that handles comma-separated values like %'USR99,John,Active'%. Separate the record values out into an isolated collection, and return only the first element located at the start of that sequence.",
          "result": "%USR99%",
          "solution": "function getUserIdFromCsv(csvRow) {\n  const parsedData = csvRow.split(',');\n  return parsedData[0];\n}\nconsole.log(getUserIdFromCsv('USR99,John,Active'));"
        },
        {
          "id": "smt3-08",
          "title": "Tag Collection Compiler Function",
          "description": "Create a function named %compileTagsString(tagsArray)% that takes an array list of string indicators like %['react', 'js', 'html']%. Compile all elements together into a single cohesive string where each word is separated exclusively by a blank space. Return the compiled string text.",
          "result": "%react js html%",
          "solution": "function compileTagsString(tagsArray) {\n  return tagsArray.join(' ');\n}\nconsole.log(compileTagsString(['react', 'js', 'html']));"
        }
      ]
    },
    {
      "id": "number-methods-01",
      "title": "Number Methods",
      "videoID": "29",
      "questions": [
        {
          "id": "nmq1-01",
          "title": "Converting Number to String",
          "question": "const score = 45;\nconst result = score.toString();\nconsole.log(typeof result);",
          "options": [
            { "id": "o1", "option": "a", "text": "'string'", "correct": true },
            { "id": "o2", "option": "b", "text": "'number'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "nmq1-02",
          "title": "Parsing String to Number",
          "question": "const entry = '29.99';\nconst price = Number(entry);\nconsole.log(typeof price);",
          "options": [
            { "id": "o3", "option": "a", "text": "'number'", "correct": true },
            { "id": "o4", "option": "b", "text": "'string'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "nmq1-03",
          "title": "Formatting Decimal Places",
          "question": "const pi = 3.14159;\nconst formatted = pi.toFixed(2);\nconsole.log(formatted);",
          "options": [
            { "id": "o5", "option": "a", "text": "'3.14'", "correct": true },
            { "id": "o6", "option": "b", "text": "3.14", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "nmq1-04",
          "title": "Checking Finite Numbers",
          "question": "const value = 100;\nconsole.log(isFinite(value));",
          "options": [
            { "id": "o7", "option": "a", "text": "true", "correct": true },
            { "id": "o8", "option": "b", "text": "false", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "nmq1-05",
          "title": "Checking Global Infinity",
          "question": "console.log(isFinite(Infinity));",
          "options": [
            { "id": "o9", "option": "a", "text": "false", "correct": true },
            { "id": "o10", "option": "b", "text": "true", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "nmq1-06",
          "title": "Invalid Number Conversion",
          "question": "const dynamicValue = Number('abc');\nconsole.log(isFinite(dynamicValue));",
          "options": [
            { "id": "o11", "option": "a", "text": "false", "correct": true },
            { "id": "o12", "option": "b", "text": "true", "correct": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "nmt1-01",
          "title": "Checkout Currency Formatter Function",
          "description": "Create a function named %formatPrice(amount)% that takes a number decimal value (like %19.9862%). The function should round and limit the value to exactly 2 decimal places and return the result as a string (like %'19.99'%).",
          "result": "%19.99%",
          "solution": "function formatPrice(amount) {\n  return amount.toFixed(2);\n}\nconsole.log(formatPrice(19.9862));"
        },
        {
          "id": "nmt1-02",
          "title": "Form Input Parser Function",
          "description": "Create a function named %processAgeInput(inputString)% that receives a string representing an age (like %'25'%). Convert that text input into a real number and return it (like %25%).",
          "result": "%25%",
          "solution": "function processAgeInput(inputString) {\n  return Number(inputString);\n}\nconsole.log(processAgeInput('25'));"
        },
        {
          "id": "nmt1-03",
          "title": "API Code ID Normalizer Function",
          "description": "Create a function named %stringifyId(numericId)% that accepts a number type ID (like %1024%). Transform this number into a string and return it (like %'1024'%).",
          "result": "%1024%",
          "solution": "function stringifyId(numericId) {\n  return numericId.toString();\n}\nconsole.log(stringifyId(1024));"
        },
        {
          "id": "nmt1-04",
          "title": "Division Safety Guard Function",
          "description": "Create a function named %validateResult(total, parts)% that divides the %total% parameter by %parts%. Check if the result of this division is a valid, finite number. Return %true% if it is a valid finite number, and %false% if it is not (such as when dividing %10% by %0%).",
          "result": "%false%",
          "solution": "function validateResult(total, parts) {\n  const outcome = total / parts;\n  if (isFinite(outcome)) {\n    return true;\n  }\n  return false;\n}\nconsole.log(validateResult(10, 0));"
        },
        {
          "id": "nmt1-05",
          "title": "E-Commerce Discount Display Function",
          "description": "Create a function named %getIntegerDiscount(percentage)% that takes a decimal discount number (like %14.85%). Format the value down to show exactly 0 decimal locations and return the result as a string (like %'15'%).",
          "result": "%15%",
          "solution": "function getIntegerDiscount(percentage) {\n  return percentage.toFixed();\n}\nconsole.log(getIntegerDiscount(14.85));"
        }
      ]
    },
    {
      "id": "destructuring-01",
      "title": "Array and Object Destructuring",
      "videoID": "30",
      "questions": [
        {
          "id": "dq1-01",
          "title": "Basic Array Destructuring",
          "question": "const colors = ['red', 'green', 'blue'];\nconst [firstColor, secondColor] = colors;\nconsole.log(secondColor);",
          "options": [
            { "id": "o1", "option": "a", "text": "'green'", "correct": true },
            { "id": "o2", "option": "b", "text": "'red'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "dq1-02",
          "title": "Skipping Items in Array",
          "question": "const settings = ['light', 'en', 'v1.0'];\nconst [theme, , version] = settings;\nconsole.log(version);",
          "options": [
            { "id": "o3", "option": "a", "text": "'v1.0'", "correct": true },
            { "id": "o4", "option": "b", "text": "'en'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "dq1-03",
          "title": "Basic Object Destructuring",
          "question": "const user = { username: 'alex99', role: 'admin' };\nconst { username } = user;\nconsole.log(username);",
          "options": [
            { "id": "o5", "option": "a", "text": "'alex99'", "correct": true },
            { "id": "o6", "option": "b", "text": "undefined", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "dq1-04",
          "title": "Destructuring with Variable Renaming",
          "question": "const product = { id: 101, title: 'Phone' };\nconst { title: productName } = product;\nconsole.log(productName);",
          "options": [
            { "id": "o7", "option": "a", "text": "'Phone'", "correct": true },
            { "id": "o8", "option": "b", "text": "'title'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "dq1-05",
          "title": "Destructuring Default Values",
          "question": "const config = { host: 'localhost' };\nconst { host, port = 8080 } = config;\nconsole.log(port);",
          "options": [
            { "id": "o9", "option": "a", "text": "8080", "correct": true },
            { "id": "o10", "option": "b", "text": "undefined", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "dq1-06",
          "title": "Nested Object Destructuring",
          "question": "const profile = { id: 1, info: { email: 'test@test.com' } };\nconst { info: { email } } = profile;\nconsole.log(email);",
          "options": [
            { "id": "o11", "option": "a", "text": "'test@test.com'", "correct": true },
            { "id": "o12", "option": "b", "text": "undefined", "correct": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "dt1-01",
          "title": "GPS Coordinate Unpacker Function",
          "description": "Create a function named %getLatitude(coordinates)% that receives an array containing two numbers representing a location. Input example: %[48.208, 16.373]%. Use array destructuring to unpack the coordinates and return only the first coordinate value. Output example: %48.208%.",
          "result": "%48.208%",
          "solution": "function getLatitude(coordinates) {\n  const [latitude, longitude] = coordinates;\n  return latitude;\n}\nconsole.log(getLatitude([48.208, 16.373]));"
        },
        {
          "id": "dt1-02",
          "title": "User Destructuring Welcome Function",
          "description": "Create a function named %greetUser(userObj)% that accepts an object representing a registered member. Input example: %{ firstName: 'Anna', age: 28 }%. Use object destructuring to extract the %firstName% property from the parameter and return a welcome greeting message. Output example: %'Welcome Anna'%.",
          "result": "%Welcome Anna%",
          "solution": "function greetUser(userObj) {\n  const { firstName } = userObj;\n  return 'Welcome ' + firstName;\n}\nconsole.log(greetUser({ firstName: 'Anna', age: 28 }));"
        },
        {
          "id": "dt1-03",
          "title": "E-Commerce Alias Price Reducer Function",
          "description": "Create a function named %getDiscountedPrice(productObj)% that accepts an item object containing pricing details. Input example: %{ itemId: 'B12', price: 100 }%. Use object destructuring to extract the %price% property but rename it to a variable called %originalPrice%. Subtract 20 from %originalPrice% and return that calculated value as a number. Output example: %80%.",
          "result": "%80%",
          "solution": "function getDiscountedPrice(productObj) {\n  const { price: originalPrice } = productObj;\n  return originalPrice - 20;\n}\nconsole.log(getDiscountedPrice({ itemId: 'B12', price: 100 }));"
        },
        {
          "id": "dt1-04",
          "title": "Server Safe Fallback Config Function",
          "description": "Create a function named %getServerMode(config)% that accepts an option object. Input example: %{ timeout: 5000 }%. Use object destructuring to unpack a property named %mode%. Provide a fallback default assignment value of %'production'% to that extracted variable during the destructuring process if it does not exist on the object, and return its final value. Output example: %'production'%.",
          "result": "%production%",
          "solution": "function getServerMode(config) {\n  const { mode = 'production' } = config;\n  return mode;\n}\nconsole.log(getServerMode({ timeout: 5000 }));"
        },
        {
          "id": "dt1-05",
          "title": "RGB Color Value Extractor Function",
          "description": "Create a function named %getBlueValue(rgbColors)% that receives an array displaying primary coloring metrics. Input example: %['255', '120', '40']%. Use array destructuring to completely skip over the first two indices and capture only the third index sequence, returning that string value. Output example: %'40'%.",
          "result": "%40%",
          "solution": "function getBlueValue(rgbColors) {\n  const [, , blue] = rgbColors;\n  return blue;\n}\nconsole.log(getBlueValue(['255', '120', '40']));"
        },
        {
          "id": "dt1-06",
          "title": "Nested Order City Extractor Function",
          "description": "Create a function named %getOrderCity(orderData)% that receives a complex transaction summary containing nested information. Input example: %{ id: 951, shipping: { city: 'Vienna', zip: '1010' } }%. Use nested object destructuring to drill straight down into the %shipping% structure, extract the internal %city% property in a single operational line, and return it. Output example: %'Vienna'%.",
          "result": "%Vienna%",
          "solution": "function getOrderCity(orderData) {\n  const { shipping: { city } } = orderData;\n  return city;\n}\nconsole.log(getOrderCity({ id: 951, shipping: { city: 'Vienna', zip: '1010' } }));"
        }
      ]
    },
    {
      "id": "function-destructuring-01",
      "title": "Function Argument Destructuring",
      "videoID": "31",
      "questions": [
        {
          "id": "fdq1-01",
          "title": "Basic Object Argument Destructuring",
          "question": "function displayUser({ name }) {\n  console.log(name);\n}\ndisplayUser({ name: 'Sarah', age: 31 });",
          "options": [
            { "id": "o1", "option": "a", "text": "'Sarah'", "correct": true },
            { "id": "o2", "option": "b", "text": "undefined", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "fdq1-02",
          "title": "Renaming Object Parameters",
          "question": "function logId({ id: userId }) {\n  console.log(userId);\n}\nlogId({ id: 505 });",
          "options": [
            { "id": "o3", "option": "a", "text": "505", "correct": true },
            { "id": "o4", "option": "b", "text": "undefined", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "fdq1-03",
          "title": "Default Parameter Values",
          "question": "function setVolume({ level = 50 }) {\n  console.log(level);\n}\nsetVolume({});",
          "options": [
            { "id": "o5", "option": "a", "text": "50", "correct": true },
            { "id": "o6", "option": "b", "text": "undefined", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "fdq1-04",
          "title": "Basic Array Argument Destructuring",
          "question": "function handleCoordinates([x, y]) {\n  console.log(y);\n}\nhandleCoordinates([10, 20]);",
          "options": [
            { "id": "o7", "option": "a", "text": "20", "correct": true },
            { "id": "o8", "option": "b", "text": "10", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "fdq1-05",
          "title": "Skipping Array Parameters",
          "question": "function processItems([, second]) {\n  console.log(second);\n}\nprocessItems(['apple', 'banana', 'orange']);",
          "options": [
            { "id": "o9", "option": "a", "text": "'banana'", "correct": true },
            { "id": "o10", "option": "b", "text": "'apple'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "fdq1-06",
          "title": "Nested Destructuring in Arguments",
          "question": "function printCity({ address: { city } }) {\n  console.log(city);\n}\nprintCity({ id: 10, address: { city: 'Berlin' } });",
          "options": [
            { "id": "o11", "option": "a", "text": "'Berlin'", "correct": true },
            { "id": "o12", "option": "b", "text": "undefined", "correct": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "fdt1-01",
          "title": "Profile Badge Generator Function",
          "description": "Create a function named %generateBadge% that directly destructures the %username% property from its object parameter. Return a string combining the name with a status tag. Input example: %{ username: 'dev_max', role: 'moderator' }%. Output example: %'User: dev_max'%.",
          "result": "%User: dev_max%",
          "solution": "function generateBadge({ username }) {\n  return 'User: ' + username;\n}\nconsole.log(generateBadge({ username: 'dev_max', role: 'moderator' }));"
        },
        {
          "id": "fdt1-02",
          "title": "Product Alias Price Tag Function",
          "description": "Create a function named %extractPrice% that destructures the %cost% property from its object parameter and renames it to %amount% directly within the function signature. Return the value of %amount% as a number. Input example: %{ sku: 'A18', cost: 49 }%. Output example: %49%.",
          "result": "%49%",
          "solution": "function extractPrice({ cost: amount }) {\n  return amount;\n}\nconsole.log(extractPrice({ sku: 'A18', cost: 49 }));"
        },
        {
          "id": "fdt1-03",
          "title": "System Logger Custom Prefix Function",
          "description": "Create a function named %logMessage% that destructures the %status% property from its object parameter. Assign a fallback default value of %'INFO'% to %status% if the property is missing. Return the final string value. Input example: %{ message: 'Database connected' }%. Output example: %'INFO'%.",
          "result": "%INFO%",
          "solution": "function logMessage({ status = 'INFO' }) {\n  return status;\n}\nconsole.log(logMessage({ message: 'Database connected' }));"
        },
        {
          "id": "fdt1-04",
          "title": "Game Score Target Tracker Function",
          "description": "Create a function named %getSecondaryScore% that accepts an array of scores as a parameter. Directly destructure the array in the function signature to completely skip the first score and capture the second score. Return that value. Input example: %[95, 87, 64]%. Output example: %87%.",
          "result": "%87%",
          "solution": "function getSecondaryScore([, second]) {\n  return second;\n}\nconsole.log(getSecondaryScore([95, 87, 64]));"
        },
        {
          "id": "fdt1-05",
          "title": "Chart Dimensions Multiplier Function",
          "description": "Create a function named %calculateArea% that accepts an array containing chart dimensions. Destructure the first two values representing width and height directly in the function arguments list, multiply them together, and return the final area value as a number. Input example: %[12, 5]%. Output example: %60%.",
          "result": "%60%",
          "solution": "function calculateArea([width, height]) {\n  return width * height;\n}\nconsole.log(calculateArea([12, 5]));"
        },
        {
          "id": "fdt1-06",
          "title": "Nested Employee Department Finder Function",
          "description": "Create a function named %getDepartment% that accepts an employee info object containing a nested organizational structure. Use nested object destructuring directly inside the function parameter list to drill straight down into the %meta% structure and unpack the internal %dept% property in a single line, then return it. Input example: %{ name: 'John', meta: { dept: 'Engineering', floor: 3 } }%. Output example: %'Engineering'%.",
          "result": "%Engineering%",
          "solution": "function getDepartment({ meta: { dept } }) {\n  return dept;\n}\nconsole.log(getDepartment({ name: 'John', meta: { dept: 'Engineering', floor: 3 } }));"
        }
      ]
    },
    {
      "id": "spread-operator-01",
      "title": "The Spread Operator",
      "videoID": "32",
      "questions": [
        {
          "id": "soq1-01",
          "title": "Spreading Array Elements",
          "question": "const initial = [1, 2];\nconst combined = [...initial, 3, 4];\nconsole.log(combined.length);",
          "options": [
            { "id": "o1", "option": "a", "text": "4", "correct": true },
            { "id": "o2", "option": "b", "text": "3", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "soq1-02",
          "title": "Spreading Objects",
          "question": "const base = { role: 'user' };\nconst activeUser = { ...base, active: true };\nconsole.log(activeUser.role);",
          "options": [
            { "id": "o3", "option": "a", "text": "'user'", "correct": true },
            { "id": "o4", "option": "b", "text": "undefined", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "soq1-03",
          "title": "Overwriting Object Properties",
          "question": "const defaults = { status: 'pending', attempts: 1 };\nconst update = { ...defaults, status: 'success' };\nconsole.log(update.status);",
          "options": [
            { "id": "o5", "option": "a", "text": "'success'", "correct": true },
            { "id": "o6", "option": "b", "text": "'pending'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "soq1-04",
          "title": "Combining Multiple Objects",
          "question": "const user = { name: 'Alex' };\nconst job = { title: 'Dev' };\nconst employee = { ...user, ...job };\nconsole.log(employee.title);",
          "options": [
            { "id": "o7", "option": "a", "text": "'Dev'", "correct": true },
            { "id": "o8", "option": "b", "text": "undefined", "correct": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "sot1-01",
          "title": "Array Merger Function",
          "description": "Create a function named %combineArrays(arr1, arr2)% that takes two arrays. Use the spread operator to merge all elements from both inputs into a single new array and return it. Input example: %[1, 2]% and %[3, 4]%. Output example: %[1, 2, 3, 4]%.",
          "result": "%[1, 2, 3, 4]%",
          "solution": "function combineArrays(arr1, arr2) {\n  return [...arr1, ...arr2];\n}\nconsole.log(combineArrays([1, 2], [3, 4]));"
        },
        {
          "id": "sot1-02",
          "title": "User Profile Merge Function",
          "description": "Create a function named %mergeProfile(account, details)% that accepts two objects. Use the object spread operator to combine all properties from both objects into a brand new profile object and return it. Input example: %{ id: 101 }% and %{ name: 'Alice' }%. Output example: %{ id: 101, name: 'Alice' }%.",
          "result": "%{ id: 101, name: 'Alice' }%",
          "solution": "function mergeProfile(account, details) {\n  return { ...account, ...details };\n}\nconsole.log(mergeProfile({ id: 101 }, { name: 'Alice' }));"
        },
        {
          "id": "sot1-03",
          "title": "Immutable Push Alternative Function",
          "description": "Create a function named %appendItem(items, newItem)% that takes an array and a string item. Without changing the original array directly, use the spread operator to create a new array that includes all original items with the %newItem% added cleanly at the end. Input example: %['bag', 'shoes']% and %'hat'%. Output example: %['bag', 'shoes', 'hat']%.",
          "result": "%['bag', 'shoes', 'hat']%",
          "solution": "function appendItem(items, newItem) {\n  return [...items, newItem];\n}\nconsole.log(appendItem(['bag', 'shoes'], 'hat'));"
        },
        {
          "id": "sot1-04",
          "title": "Product Price Updater Function",
          "description": "Create a function named %updatePrice(productObj, newPrice)% that takes an inventory object and a number value. Use the object spread operator to copy the product data while cleanly updating or overwriting its %price% property with the new number value, returning the final object. Input example: %{ sku: 'A5', price: 15 }% and %22%. Output example: %{ sku: 'A5', price: 22 }%.",
          "result": "%{ sku: 'A5', price: 22 }%",
          "solution": "function updatePrice(productObj, newPrice) {\n  return { ...productObj, price: newPrice };\n}\nconsole.log(updatePrice({ sku: 'A5', price: 15 }, 22));"
        }
      ]
    },
    {
      "id": "rest-operator-01",
      "title": "The Rest Operator",
      "videoID": "33",
      "questions": [
        {
          "id": "roq1-01",
          "title": "Gathering Remaining Arguments",
          "question": "function collectNumbers(first, ...rest) {\n  console.log(rest.length);\n}\ncollectNumbers(10, 20, 30, 40);",
          "options": [
            { "id": "o1", "option": "a", "text": "3", "correct": true },
            { "id": "o2", "option": "b", "text": "4", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "roq1-02",
          "title": "Rest in Array Destructuring",
          "question": "const team = ['Anna', 'Bob', 'Charlie', 'David'];\nconst [leader, ...everyoneElse] = team;\nconsole.log(everyoneElse[0]);",
          "options": [
            { "id": "o3", "option": "a", "text": "'Bob'", "correct": true },
            { "id": "o4", "option": "b", "text": "'Anna'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "roq1-03",
          "title": "Rest in Object Destructuring",
          "question": "const settings = { theme: 'dark', language: 'fr', version: 2 };\nconst { theme, ...remainingOptions } = settings;\nconsole.log(remainingOptions.theme);",
          "options": [
            { "id": "o5", "option": "a", "text": "undefined", "correct": true },
            { "id": "o6", "option": "b", "text": "'dark'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "roq1-04",
          "title": "Function Parameters Position Check",
          "question": "function handleArgs(first, ...rest) {\n  console.log(first);\n}\nhandleArgs(5, 10, 15);",
          "options": [
            { "id": "o7", "option": "a", "text": "5", "correct": true },
            { "id": "o8", "option": "b", "text": "[10, 15]", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "roq1-05",
          "title": "Missing Values with Rest Parameter",
          "question": "function getMore(...items) {\n  console.log(items[0]);\n}\ngetMore();",
          "options": [
            { "id": "o9", "option": "a", "text": "undefined", "correct": true },
            { "id": "o10", "option": "b", "text": "null", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "roq1-06",
          "title": "Rest Property Extraction Check",
          "question": "const product = { id: 101, title: 'Shirt', stock: 45 };\nconst { id, ...details } = product;\nconsole.log(details.stock);",
          "options": [
            { "id": "o11", "option": "a", "text": "45", "correct": true },
            { "id": "o12", "option": "b", "text": "undefined", "correct": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "rot1-01",
          "title": "Skipping First Runner Function",
          "description": "Create a function named %getBackupRunners(runners)% that receives an array of runner names. Use array destructuring along with the rest operator to capture all participants except the first runner into a new array, and return that subset array. Input example: %['Alex', 'Ben', 'Chris', 'Dan']%.",
          "result": "%['Ben', 'Chris', 'Dan']%",
          "solution": "function getBackupRunners(runners) {\n  const [first, ...restOfRunners] = runners;\n  return restOfRunners;\n}\nconsole.log(getBackupRunners(['Alex', 'Ben', 'Chris', 'Dan']));"
        },
        {
          "id": "rot1-02",
          "title": "Sensitive Payload Filter Function",
          "description": "Create a function named %filterSensitiveData(userAccount)% that accepts a user account object containing authentication fields. Use object destructuring combined with the rest operator to split the object, extracting the %password% property on its own while packing all remaining properties into a clean separate profile object. Return that filtered profile object. Input example: %{ id: 404, username: 'cyber_hero', password: 'secret123' }%.",
          "result": "%{ id: 404, username: 'cyber_hero' }%",
          "solution": "function filterSensitiveData(userAccount) {\n  const { password, ...publicProfile } = userAccount;\n  return publicProfile;\n}\nconsole.log(filterSensitiveData({ id: 404, username: 'cyber_hero', password: 'secret123' }));"
        },
        {
          "id": "rot1-03",
          "title": "Array Elements Count Guard Function",
          "description": "Create a function named %countRemainingItems(items)% that accepts an array. Use array destructuring with the rest operator to split off the first two items, storing everything else left over inside a single rest array variable. Return the total count of elements remaining inside that rest array as a number. Input example: %['pen', 'paper', 'clip', 'ruler', 'tape']%.",
          "result": "%3%",
          "solution": "function countRemainingItems(items) {\n  const [first, second, ...leftovers] = items;\n  return leftovers.length;\n}\nconsole.log(countRemainingItems(['pen', 'paper', 'clip', 'ruler', 'tape']));"
        }
      ]
    },
    {
      "id": "crud-operations-01",
      "title": "CRUD Operations on Arrays and Objects",
      "videoID": "34",
      "questions": [
        {
          "id": "coq1-01",
          "title": "Adding Elements to Arrays",
          "question": "const fruits = ['apple', 'banana'];\nconst updated = ['kiwi', ...fruits, 'mango'];\nconsole.log(updated[0]);",
          "options": [
            { "id": "o1", "option": "a", "text": "'kiwi'", "correct": true },
            { "id": "o2", "option": "b", "text": "'apple'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "coq1-02",
          "title": "Targeting the Last Array Element",
          "question": "const items = ['pen', 'paper', 'clip'];\nconst last = items.at(-1);\nconsole.log(last);",
          "options": [
            { "id": "o3", "option": "a", "text": "'clip'", "correct": true },
            { "id": "o4", "option": "b", "text": "'pen'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "coq1-03",
          "title": "Removing the Last Array Element",
          "question": "const list = ['a', 'b', 'c'];\nconst subset = [...list.slice(0, -1)];\nconsole.log(subset.length);",
          "options": [
            { "id": "o5", "option": "a", "text": "2", "correct": true },
            { "id": "o6", "option": "b", "text": "3", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "coq1-04",
          "title": "Updating Object States",
          "question": "const user = { name: 'Pablo', isOnline: false };\nconst updatedUser = { ...user, isOnline: true, isAdmin: true };\nconsole.log(updatedUser.isOnline);",
          "options": [
            { "id": "o7", "option": "a", "text": "true", "correct": true },
            { "id": "o8", "option": "b", "text": "false", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "coq1-05",
          "title": "Removing Properties via Rest",
          "question": "const account = { id: 1, age: 23, role: 'user' };\nconst { age, ...cleanAccount } = account;\nconsole.log(cleanAccount.age);",
          "options": [
            { "id": "o9", "option": "a", "text": "undefined", "correct": true },
            { "id": "o10", "option": "b", "text": "23", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "coq1-06",
          "title": "Array Tail Extraction",
          "question": "const colors = ['red', 'green', 'blue'];\nconst [first, ...restOfColors] = colors;\nconsole.log(restOfColors[0]);",
          "options": [
            { "id": "o11", "option": "a", "text": "'green'", "correct": true },
            { "id": "o12", "option": "b", "text": "'red'", "correct": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "cot1-01",
          "title": "Array Boundary Inserter Function",
          "description": "Create a function named %wrapArray(items, leading, trailing)% that accepts an array and two string elements. Use the spread operator to return a new array where %leading% is placed at the start, followed by all original items, and %trailing% is placed at the very end. Input example: %['banana']%, %'kiwi'%, and %'mango'%.",
          "result": "%['kiwi', 'banana', 'mango']%",
          "solution": "function wrapArray(items, leading, trailing) {\n  return [leading, ...items, trailing];\n}\nconsole.log(wrapArray(['banana'], 'kiwi', 'mango'));"
        },
        {
          "id": "cot1-02",
          "title": "Array Tail Dropper Function",
          "description": "Create a function named %removeLastElement(list)% that receives an array. Use the slice method inside an array literal combined with the spread operator to copy and return a new array containing all elements except the very last one. Input example: %['apple', 'banana', 'orange']%.",
          "result": "%['apple', 'banana']%",
          "solution": "function removeLastElement(list) {\n  return [...list.slice(0, -1)];\n}\nconsole.log(removeLastElement(['apple', 'banana', 'orange']));"
        },
        {
          "id": "cot1-03",
          "title": "Object Editor and Extender Function",
          "description": "Create a function named %activateAdmin(userObj)% that accepts an identity object. Use the object spread operator to create a new object that copies the original properties, updates %isOnline% to %true%, and adds a new property named %isAdmin% set to %true%. Return this new object. Input example: %{ name: 'Pablo', age: 23, isOnline: false }%.",
          "result": "%{ name: 'Pablo', age: 23, isOnline: true, isAdmin: true }%",
          "solution": "function activateAdmin(userObj) {\n  return { ...userObj, isOnline: true, isAdmin: true };\n}\nconsole.log(activateAdmin({ name: 'Pablo', age: 23, isOnline: false }));"
        },
        {
          "id": "cot1-04",
          "title": "Property Exclusion Filter Function",
          "description": "Create a function named %removeAgeField(profile)% that accepts an object. Use object destructuring and the rest operator to extract and isolate the %age% property into its own variable while collecting all other properties into a separate object. Return that separate object without the age field. Input example: %{ name: 'Pablo', age: 23, isOnline: false }%.",
          "result": "%{ name: 'Pablo', isOnline: false }%",
          "solution": "function removeAgeField(profile) {\n  const { age, ...userWithoutAge } = profile;\n  return userWithoutAge;\n}\nconsole.log(removeAgeField({ name: 'Pablo', age: 23, isOnline: false }));"
        }
      ]
    },
    {
      "id": "milestone-exercises-03",
      "title": "- MILESTONE EXERCISES 3 -",
      "milestone": true,
      "videoID": "35",
      "questions": [
        {
          "id": "mq3-01",
          "title": "String Length Check",
          "question": "const username = 'alpha_dev';\nconsole.log(username.length);",
          "options": [
            { "id": "o1", "option": "a", "text": "9", "correct": true },
            { "id": "o2", "option": "b", "text": "8", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-02",
          "title": "Substring Evaluation with Includes",
          "question": "const email = 'support@company.com';\nconsole.log(email.includes('@'));",
          "options": [
            { "id": "o3", "option": "a", "text": "true", "correct": true },
            { "id": "o4", "option": "b", "text": "false", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-03",
          "title": "Prefix Validation",
          "question": "const url = 'https://api.com';\nconsole.log(url.startsWith('https'));",
          "options": [
            { "id": "o5", "option": "a", "text": "true", "correct": true },
            { "id": "o6", "option": "b", "text": "false", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-04",
          "title": "Suffix Validation",
          "question": "const file = 'invoice.pdf';\nconsole.log(file.endsWith('.pdf'));",
          "options": [
            { "id": "o7", "option": "a", "text": "true", "correct": true },
            { "id": "o8", "option": "b", "text": "false", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-05",
          "title": "JavaScript Primitives",
          "question": "Which of the following options lists ONLY primitive data types in JavaScript, excluding bigint and symbol?",
          "options": [
            { "id": "o9", "option": "a", "text": "String, Number, Boolean, undefined, null", "correct": true },
            { "id": "o10", "option": "b", "text": "String, Number, Boolean, Object, Array", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-06",
          "title": "String Splice and Isolation",
          "question": "const text = 'JavaScript';\nconsole.log(text.slice(0, 4));",
          "options": [
            { "id": "o11", "option": "a", "text": "'Java'", "correct": true },
            { "id": "o12", "option": "b", "text": "'Script'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-07",
          "title": "Case Transformation Upper",
          "question": "const code = 'promo10';\nconsole.log(code.toUpperCase());",
          "options": [
            { "id": "o13", "option": "a", "text": "'PROMO10'", "correct": true },
            { "id": "o14", "option": "b", "text": "'promo10'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-08",
          "title": "Case Transformation Lower",
          "question": "const input = 'USER_NAME';\nconsole.log(input.toLowerCase());",
          "options": [
            { "id": "o15", "option": "a", "text": "'user_name'", "correct": true },
            { "id": "o16", "option": "b", "text": "'username'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-09",
          "title": "String Parsing into Arrays",
          "question": "const tags = 'html,css,js';\nconst list = tags.split(',');\nconsole.log(list[1]);",
          "options": [
            { "id": "o17", "option": "a", "text": "'css'", "correct": true },
            { "id": "o18", "option": "b", "text": "'html'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-10",
          "title": "Array Aggregation into Strings",
          "question": "const path = ['usr', 'bin'];\nconsole.log(path.join('/'));",
          "options": [
            { "id": "o19", "option": "a", "text": "'usr/bin'", "correct": true },
            { "id": "o20", "option": "b", "text": "'usr,bin'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-11",
          "title": "Whitespace Cleanup",
          "question": "const input = '   admin   ';\nconsole.log(input.trim());",
          "options": [
            { "id": "o21", "option": "a", "text": "'admin'", "correct": true },
            { "id": "o22", "option": "b", "text": "'   admin'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-12",
          "title": "Identifying Falsy Values",
          "question": "Which of the following evaluations represents a falsy value in standard JavaScript conditions?",
          "options": [
            { "id": "o23", "option": "a", "text": "0", "correct": true },
            { "id": "o24", "option": "b", "text": "'0'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-13",
          "title": "Single Character Replacement",
          "question": "const phrase = 'test-case';\nconsole.log(phrase.replace('-', '_'));",
          "options": [
            { "id": "o25", "option": "a", "text": "'test_case'", "correct": true },
            { "id": "o26", "option": "b", "text": "'testcase'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-14",
          "title": "Global Occurrence Replacement",
          "question": "const path = '2026/05/20';\nconsole.log(path.replaceAll('/', '-'));",
          "options": [
            { "id": "o27", "option": "a", "text": "'2026-05-20'", "correct": true },
            { "id": "o28", "option": "b", "text": "'2026/05-20'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-15",
          "title": "Float Precision Formatting",
          "question": "const balance = 10.5678;\nconsole.log(balance.toFixed(2));",
          "options": [
            { "id": "o29", "option": "a", "text": "'10.57'", "correct": true },
            { "id": "o30", "option": "b", "text": "10.57", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-16",
          "title": "Explicit Type Parsing",
          "question": "const entry = '4';\nconst parsed = Number(entry);\nconsole.log(typeof parsed);",
          "options": [
            { "id": "o31", "option": "a", "text": "'number'", "correct": true },
            { "id": "o32", "option": "b", "text": "'string'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-17",
          "title": "Array Head Discarding Pattern",
          "question": "const fruits = ['apple', 'banana', 'orange'];\nconst [, ...tail] = fruits;\nconsole.log(tail[0]);",
          "options": [
            { "id": "o33", "option": "a", "text": "'banana'", "correct": true },
            { "id": "o34", "option": "b", "text": "'apple'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-18",
          "title": "Object Key Extraction Safety",
          "question": "const data = { id: 5, score: 90 };\nconst { id, ...remainder } = data;\nconsole.log(remainder.id);",
          "options": [
            { "id": "o35", "option": "a", "text": "undefined", "correct": true },
            { "id": "o36", "option": "b", "text": "5", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-19",
          "title": "Array Head Extraction",
          "question": "const queue = ['task1', 'task2'];\nconst [nextTask] = queue;\nconsole.log(nextTask);",
          "options": [
            { "id": "o37", "option": "a", "text": "'task1'", "correct": true },
            { "id": "o38", "option": "b", "text": "'task2'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-20",
          "title": "Understanding Hoisting",
          "question": "console.log(greet());\nfunction greet() {\n  return 'hello';\n}",
          "options": [
            { "id": "o39", "option": "a", "text": "'hello'", "correct": true },
            { "id": "o40", "option": "b", "text": "TypeError", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-21",
          "title": "Relative Array Indexing",
          "question": "const speeds = [30, 50, 80];\nconsole.log(speeds.at(-1));",
          "options": [
            { "id": "o41", "option": "a", "text": "80", "correct": true },
            { "id": "o42", "option": "b", "text": "30", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-22",
          "title": "Array Leftover Collection",
          "question": "const logs = ['error1', 'info1', 'info2'];\nconst [first, ...remaining] = logs;\nconsole.log(remaining.length);",
          "options": [
            { "id": "o43", "option": "a", "text": "2", "correct": true },
            { "id": "o44", "option": "b", "text": "3", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-23",
          "title": "Array Element Prepending",
          "question": "const systems = ['linux'];\nconst collection = ['macOS', ...systems];\nconsole.log(collection[0]);",
          "options": [
            { "id": "o45", "option": "a", "text": "'macOS'", "correct": true },
            { "id": "o46", "option": "b", "text": "'linux'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-24",
          "title": "Array Element Replacement Slicing",
          "question": "const original = ['x', 'y', 'z'];\nconst [, ...withoutFirstEl] = original;\nconst updated = [...withoutFirstEl, 'w'];\nconsole.log(updated[1]);",
          "options": [
            { "id": "o47", "option": "a", "text": "'z'", "correct": true },
            { "id": "o48", "option": "b", "text": "'y'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-25",
          "title": "Array Element Appending",
          "question": "const stack = ['git'];\nconst fullStack = [...stack, 'docker'];\nconsole.log(fullStack.at(-1));",
          "options": [
            { "id": "o49", "option": "a", "text": "'docker'", "correct": true },
            { "id": "o50", "option": "b", "text": "'git'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-26",
          "title": "State Update Overwrites",
          "question": "const user = { name: 'Pablo', isOnline: false };\nconst nextUser = { ...user, isOnline: true, isAdmin: true };\nconsole.log(nextUser.isOnline);",
          "options": [
            { "id": "o51", "option": "a", "text": "true", "correct": true },
            { "id": "o52", "option": "b", "text": "false", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-27",
          "title": "Object Field Extraction Exclusion",
          "question": "const client = { uid: 99, age: 23, plan: 'basic' };\nconst { age, ...clientWithoutAge } = client;\nconsole.log(clientWithoutAge.age);",
          "options": [
            { "id": "o53", "option": "a", "text": "undefined", "correct": true },
            { "id": "o54", "option": "b", "text": "23", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-28",
          "title": "Function Scope Isolation",
          "question": "function run() {\n  let internal = 'secured';\n}\nrun();\nconsole.log(typeof internal);",
          "options": [
            { "id": "o55", "option": "a", "text": "'undefined'", "correct": true },
            { "id": "o56", "option": "b", "text": "'string'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-29",
          "title": "Destructured Defaults Evaluation",
          "question": "const data = { token: 'xyz' };\nconst { token, type = 'Bearer' } = data;\nconsole.log(type);",
          "options": [
            { "id": "o57", "option": "a", "text": "'Bearer'", "correct": true },
            { "id": "o58", "option": "b", "text": "undefined", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-30",
          "title": "Argument Binding via Destruction",
          "question": "function show({ title }) {\n  return title;\n}\nconsole.log(show({ id: 5, title: 'Book' }));",
          "options": [
            { "id": "o59", "option": "a", "text": "'Book'", "correct": true },
            { "id": "o60", "option": "b", "text": "undefined", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-31",
          "title": "Renaming During State Spread",
          "question": "const original = { categoryId: 10 };\nconst { categoryId: id } = original;\nconsole.log(id);",
          "options": [
            { "id": "o61", "option": "a", "text": "10", "correct": true },
            { "id": "o62", "option": "b", "text": "undefined", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-32",
          "title": "Array Boundary Relative Indexing",
          "question": "const devices = ['phone', 'tablet', 'laptop'];\nconsole.log(devices.at(-1));",
          "options": [
            { "id": "o63", "option": "a", "text": "'laptop'", "correct": true },
            { "id": "o64", "option": "b", "text": "'phone'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-33",
          "title": "String Conditional Matching",
          "question": "const alertMessage = 'ERROR: Database failed';\nconsole.log(alertMessage.startsWith('ERROR'));",
          "options": [
            { "id": "o65", "option": "a", "text": "true", "correct": true },
            { "id": "o66", "option": "b", "text": "false", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-34",
          "title": "Object Variable Value Injection",
          "question": "const status = 'active';\nconst config = { status, version: 1 };\nconsole.log(config.status);",
          "options": [
            { "id": "o67", "option": "a", "text": "'active'", "correct": true },
            { "id": "o68", "option": "b", "text": "undefined", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-35",
          "title": "Array Element Isolation via Rest",
          "question": "const rates = [1.2, 3.4, 5.6];\nconst [primary, ...restRates] = rates;\nconsole.log(restRates[0]);",
          "options": [
            { "id": "o69", "option": "a", "text": "3.4", "correct": true },
            { "id": "o70", "option": "b", "text": "1.2", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-36",
          "title": "Number Evaluation of Fixed Values",
          "question": "const score = 9.99;\nconst output = score.toFixed(0);\nconsole.log(typeof output);",
          "options": [
            { "id": "o71", "option": "a", "text": "'string'", "correct": true },
            { "id": "o72", "option": "b", "text": "'number'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-37",
          "title": "Character Replacement Chain",
          "question": "const item = 'tea cup';\nconsole.log(item.replace(' ', '-'));",
          "options": [
            { "id": "o73", "option": "a", "text": "'tea-cup'", "correct": true },
            { "id": "o74", "option": "b", "text": "'teacup'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-38",
          "title": "Block Scope Constraints",
          "question": "if (true) {\n  let temporary = 'inside';\n}\nconsole.log(typeof temporary);",
          "options": [
            { "id": "o75", "option": "a", "text": "'undefined'", "correct": true },
            { "id": "o76", "option": "b", "text": "'string'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-39",
          "title": "String Suffix Evaluation",
          "question": "const file = 'main.js';\nconsole.log(file.endsWith('.js'));",
          "options": [
            { "id": "o77", "option": "a", "text": "true", "correct": true },
            { "id": "o78", "option": "b", "text": "false", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-41",
          "title": "Property Accumulation via Spreading",
          "question": "const base = { x: 1 };\nconst point = { ...base, y: 2, x: 3 };\nconsole.log(point.x);",
          "options": [
            { "id": "o81", "option": "a", "text": "3", "correct": true },
            { "id": "o82", "option": "b", "text": "1", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-42",
          "title": "Substring Match Inclusion Check",
          "question": "const msg = 'Welcome administrator';\nconsole.log(msg.includes('admin'));",
          "options": [
            { "id": "o83", "option": "a", "text": "true", "correct": true },
            { "id": "o84", "option": "b", "text": "false", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-43",
          "title": "Explicit Real Number Assignment",
          "question": "const metric = '42';\nconsole.log(Number(metric) + 1);",
          "options": [
            { "id": "o85", "option": "a", "text": "43", "correct": true },
            { "id": "o86", "option": "b", "text": "'421'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-44",
          "title": "String Cleansing Operations",
          "question": "const token = ' token_val ';\nconsole.log(token.trim().length);",
          "options": [
            { "id": "o87", "option": "a", "text": "9", "correct": true },
            { "id": "o88", "option": "b", "text": "11", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-45",
          "title": "Object Key Removal Isolation",
          "question": "const entity = { k1: 'v1', k2: 'v2' };\nconst { k1, ...restEntity } = entity;\nconsole.log(restEntity.k1);",
          "options": [
            { "id": "o89", "option": "a", "text": "undefined", "correct": true },
            { "id": "o90", "option": "b", "text": "'v1'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-46",
          "title": "Array Conversion via Division",
          "question": "const phrase = 'a b c';\nconsole.log(phrase.split(' ').length);",
          "options": [
            { "id": "o91", "option": "a", "text": "3", "correct": true },
            { "id": "o92", "option": "b", "text": "1", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-47",
          "title": "String Character Transformations",
          "question": "const label = 'Item';\nconsole.log(label.toUpperCase() === 'ITEM');",
          "options": [
            { "id": "o93", "option": "a", "text": "true", "correct": true },
            { "id": "o94", "option": "b", "text": "false", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-48",
          "title": "Array Bound Indexing Offset",
          "question": "const codes = [99, 101];\nconsole.log(codes.at(-1));",
          "options": [
            { "id": "o95", "option": "a", "text": "101", "correct": true },
            { "id": "o96", "option": "b", "text": "99", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-49",
          "title": "Global Replacements Chain Evaluation",
          "question": "const route = 'one.two.three';\nconsole.log(route.replaceAll('.', '/'));",
          "options": [
            { "id": "o97", "option": "a", "text": "'one/two/three'", "correct": true },
            { "id": "o98", "option": "b", "text": "'one/two.three'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mq3-50",
          "title": "Destructured Parameter Value Reassignments",
          "question": "function compute({ scale = 2 }) {\n  return scale * 10;\n}\nconsole.log(compute({}));",
          "options": [
            { "id": "o99", "option": "a", "text": "20", "correct": true },
            { "id": "o100", "option": "b", "text": "NaN", "correct": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "mt3-01",
          "title": "User Promo Code Normalizer Function",
          "description": "Create a function named %normalizePromoCode(rawCode)% that cleans up user voucher string inputs. Trim any trailing or leading empty white spaces, convert the entire text value to lowercase characters, and return the cleaned string. Input example: %'  WINTER50 '%.",
          "result": "%'winter50'%",
          "solution": "function normalizePromoCode(rawCode) {\n  return rawCode.trim().toLowerCase();\n}\nconsole.log(normalizePromoCode('  WINTER50 '));"
        },
        {
          "id": "mt3-02",
          "title": "Secure API Path Detector Function",
          "description": "Create a function named %isSecureEndpoint(url)% that checks if an API target URL matches necessary security requirements. Return true if the endpoint starts precisely with the secure token string protocol %'https'%, and false otherwise. Input example: %'https://api.gateway.io'%.",
          "result": "%true%",
          "solution": "function isSecureEndpoint(url) {\n  return url.startsWith('https');\n}\nconsole.log(isSecureEndpoint('https://api.gateway.io'));"
        },
        {
          "id": "mt3-03",
          "title": "Document Extension Guard Function",
          "description": "Create a function named %validatePdfFile(filename)% that takes a string. Check if the string ends with %'.pdf'%. Convert the filename to lowercase before checking to ensure it catches uppercase variations. Return true if valid, or false if not. Input example: %'INVOICE.PDF'%.",
          "result": "%true%",
          "solution": "function validatePdfFile(filename) {\n  const lower = filename.toLowerCase();\n  return lower.endsWith('.pdf');\n}\nconsole.log(validatePdfFile('INVOICE.PDF'));"
        },
        {
          "id": "mt3-04",
          "title": "Slug Text Generator Function",
          "description": "Create a function named %generateSlug(title)% that converts an article header title string into a url safe string. Transform all characters to lowercase, replace every blank empty space with a single dash connector symbol %'-'%, and return the final string. Input example: %'My First Post'%.",
          "result": "%'my-first-post'%",
          "solution": "function generateSlug(title) {\n  return title.toLowerCase().replaceAll(' ', '-');\n}\nconsole.log(generateSlug('My First Post'));"
        },
        {
          "id": "mt3-05",
          "title": "Product Cost Estimator Function",
          "description": "Create a function named %formatTotalCost(priceString, quantity)% that accepts a price as a string and a quantity number. Explicitly convert the price string into a real number, multiply it by the quantity, format the outcome down to exactly 2 decimal locations as a string, and return it. Input example: %'12.345'% and %3%.",
          "result": "%'37.04'%",
          "solution": "function formatTotalCost(priceString, quantity) {\n  const numericPrice = Number(priceString);\n  const total = numericPrice * quantity;\n  return total.toFixed(2);\n}\nconsole.log(formatTotalCost('12.345', 3));"
        },
        {
          "id": "mt3-06",
          "title": "CSV Row Parser Function",
          "description": "Create a function named %extractFirstColumn(csvRow)% that parses values from comma-separated logs. Split the text record wherever a comma separator is found, use array destructuring to capture only the first separated item entry, and return that item value. Input example: %'active_user,2026,true'%.",
          "result": "%'active_user'%",
          "solution": "function extractFirstColumn(csvRow) {\n  const [firstItem] = csvRow.split(',');\n  return firstItem;\n}\nconsole.log(extractFirstColumn('active_user,2026,true'));"
        },
        {
          "id": "mt3-07",
          "title": "System Log Stream Prepend Function",
          "description": "Create a function named %prependUrgentLog(logs, newLog)% that accepts an array of strings and a single urgent message log string. Use the spread operator to place the %newLog% at the very front index of a new array, followed by all elements from the existing logs array, and return it. Input example: %['info1', 'info2']% and %'critical_error'%.",
          "result": "%['critical_error', 'info1', 'info2']%",
          "solution": "function prependUrgentLog(logs, newLog) {\n  return [newLog, ...logs];\n}\nconsole.log(prependUrgentLog(['info1', 'info2'], 'critical_error'));"
        },
        {
          "id": "mt3-08",
          "title": "Database Connection String Masker Function",
          "description": "Create a function named %maskSecretKey(apiKey)% that keeps sensitive information secure. Extract the first 4 characters of the key string using the slice method, append three asterisks %'***'% directly to the end of that sliced chunk, and return the masked sequence. Input example: %'secret_api_key_99'%.",
          "result": "%'secr***'%",
          "solution": "function maskSecretKey(apiKey) {\n  return apiKey.slice(0, 4) + '***';\n}\nconsole.log(maskSecretKey('secret_api_key_99'));"
        },
        {
          "id": "mt3-09",
          "title": "E-Commerce Recent Item Tracker Function",
          "description": "Create a function named %getLastViewedItem(history)% that receives a customer's history array of items. Extract the very last item in the collection array without altering the original array data structure using the modern array index relative locator method, and return it. Input example: %['shoes', 'bag', 'jacket']%.",
          "result": "%'jacket'%",
          "solution": "function getLastViewedItem(history) {\n  return history.at(-1);\n}\nconsole.log(getLastViewedItem(['shoes', 'bag', 'jacket']));"
        },
        {
          "id": "mt3-10",
          "title": "User Account Activator and Upgrade Function",
          "description": "Create a function named %upgradeUserSession(sessionObj)% that modifies an active connection status state. Use the object spread operator to duplicate the existing properties, modify %isOnline% directly to true, and add a new %isAdmin% property set to true. Return this customized object configuration. Input example: %{ name: 'Pablo', age: 23, isOnline: false }%.",
          "result": "%{ name: 'Pablo', age: 23, isOnline: true, isAdmin: true }%",
          "solution": "function upgradeUserSession(sessionObj) {\n  return { ...sessionObj, isOnline: true, isAdmin: true };\n}\nconsole.log(upgradeUserSession({ name: 'Pablo', age: 23, isOnline: false }));"
        },
        {
          "id": "mt3-11",
          "title": "PII Data Scrubbing Function",
          "description": "Create a function named %stripAgeData(payload)% that filters structured customer metadata. Use object destructuring and the rest operator together in a clean single assignment statement to split out the %age% property onto its own variable, and return only the remaining database safe profile fields wrapped in an object. Input example: %{ name: 'Pablo', age: 23, isOnline: false }%.",
          "result": "%{ name: 'Pablo', isOnline: false }%",
          "solution": "function stripAgeData(payload) {\n  const { age, ...userWithoutAge } = payload;\n  return userWithoutAge;\n}\nconsole.log(stripAgeData({ name: 'Pablo', age: 23, isOnline: false }));"
        },
        {
          "id": "mt3-12",
          "title": "Domain Name Extractor Function",
          "description": "Create a function named %extractDomain(email)% that extracts web infrastructure targets. Use the split method to break up the email address string at the %'@'% separator symbol, use array destructuring to grab the second part of the resulting array split, and return it. Input example: %'dev@code.io'%.",
          "result": "%'code.io'%",
          "solution": "function extractDomain(email) {\n  const [, domain] = email.split('@');\n  return domain;\n}\nconsole.log(extractDomain('dev@code.io'));"
        },
        {
          "id": "mt3-14",
          "title": "Structured Address Formatter Function",
          "description": "Create a function named %formatAddress({ city, zip })% that accepts an object containing customer location indicators. Destructure both fields directly within the function argument parameter list, combine them into a uniform human readable string formatted with a space separator, and return it. Input example: %{ city: 'Vienna', zip: '1010' }%.",
          "result": "%'Vienna 1010'%",
          "solution": "function formatAddress({ city, zip }) {\n  return city + ' ' + zip;\n}\nconsole.log(formatAddress({ city: 'Vienna', zip: '1010' }));"
        },
        {
          "id": "mt3-15",
          "title": "Subdomain URL Normalizer Function",
          "description": "Create a function named %cleanSubdomain(host)% that processes network infrastructure references. Use the replaceAll method to switch out every occurrence of a dot descriptor symbol %'.'% with a uniform dash connector symbol %'-'%, transform the entire string to uppercase, and return it. Input example: %'dev.api.v1'%.",
          "result": "%'DEV-API-V1'%",
          "solution": "function cleanSubdomain(host) {\n  return host.replaceAll('.', '-').toUpperCase();\n}\nconsole.log(cleanSubdomain('dev.api.v1'));"
        },
        {
          "id": "mt3-16",
          "title": "Dynamic Cart Item Append Function",
          "description": "Create a function named %addItemToCart(currentCart, item)% that preserves structural integrity. Use the array spread operator to assemble a completely new list structure that copies all active elements from the %currentCart% array and appends the new %item% string cleanly onto the end position, returning it. Input example: %['kiwi', 'banana']% and %'mango'%.",
          "result": "%['kiwi', 'banana', 'mango']%",
          "solution": "function addItemToCart(currentCart, item) {\n  return [...currentCart, item];\n}\nconsole.log(addItemToCart(['kiwi', 'banana'], 'mango'));"
        },
        {
          "id": "mt3-16.1",
          "title": "Property Exclusion Filter Function",
          "description": "Create a function named %removeAgeField(profile)% that accepts an object. Use object destructuring and the rest operator to extract and isolate the %age% property into its own variable while collecting all other properties into a separate object. Return that separate object without the age field. Input example: %{ name: 'Pablo', age: 23, isOnline: false }%.",
          "result": "%{ name: 'Pablo', isOnline: false }%",
          "solution": "function removeAgeField(profile) {\n  const { age, ...userWithoutAge } = profile;\n  return userWithoutAge;\n}\nconsole.log(removeAgeField({ name: 'Pablo', age: 23, isOnline: false }));"
        },
        {
          "id": "mt3-17",
          "title": "Compact Description Snippet Function",
          "description": "Create a function named %createSnippet(text)% that generates small overview feeds. Extract the first 10 character components using the slice method, append an ellipsis sequence string %'...'%, and return that final combined string statement. Input example: %'Learn JavaScript basics'%.",
          "result": "%'Learn Java...'%",
          "solution": "function createSnippet(text) {\n  return text.slice(0, 10) + '...';\n}\nconsole.log(createSnippet('Learn JavaScript basics'));"
        },
        {
          "id": "mt3-18",
          "title": "Data Inventory Identifier Extractor Function",
          "description": "Create a function named %extractAssetMetadata(assetRecord)% that unpacks complex tracking details. Use object destructuring inside the function signature to capture an attribute named %skuCode% but rename it locally onto a distinct working variable called %id%, then return its value. Input example: %{ skuCode: 'MN-92', price: 450 }%.",
          "result": "%'MN-92'%",
          "solution": "function extractAssetMetadata({ skuCode: id }) {\n  return id;\n}\nconsole.log(extractAssetMetadata({ skuCode: 'MN-92', price: 450 }));"
        },
        {
          "id": "mt3-19",
          "title": "Search Keyword Matcher Function",
          "description": "Create a function named %hasSearchKeyword(sentence, keyword)% that verifies text records. Transform both the source sentence and target keyword parameter string elements completely into lowercase characters first, then use the includes method to check if the sentence contains the keyword, returning true or false. Input example: %'React Query Tutorial'%, %'query'%.",
          "result": "%true%",
          "solution": "function hasSearchKeyword(sentence, keyword) {\n  const lowerSentence = sentence.toLowerCase();\n  const lowerKeyword = keyword.toLowerCase();\n  return lowerSentence.includes(lowerKeyword);\n}\nconsole.log(hasSearchKeyword('React Query Tutorial', 'query'));"
        },
        {
          "id": "mt3-20",
          "title": "Array Tail Elements Rest Isolator Function",
          "description": "Create a function named %getTailElements(items)% that breaks down structured listings. Use array destructuring along with the rest operator to catch and split off the first array element entry index, saving all remaining items leftover neatly inside a single sub-array package, and return that sub-array. Input example: %['apple', 'banana', 'orange']%.",
          "result": "%['banana', 'orange']%",
          "solution": "function getTailElements(items) {\n  const [first, ...withoutFirstEl] = items;\n  return withoutFirstEl;\n}\nconsole.log(getTailElements(['apple', 'banana', 'orange']));"
        }
      ]
    },
    {
      "id": "ternary-operator-01",
      "title": "Ternary Operator",
      "videoID": "36",
      "questions": [
        {
          "id": "toq1-01",
          "title": "Basic Ternary Execution",
          "question": "const isActive = true;\nconst status = isActive ? 'Active' : 'Inactive';\nconsole.log(status);",
          "options": [
            { "id": "o1", "option": "a", "text": "'Active'", "correct": true },
            { "id": "o2", "option": "b", "text": "'Inactive'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "toq1-02",
          "title": "Falsy Condition Evaluation",
          "question": "const score = 0;\nconst result = score ? 'Has Score' : 'No Score';\nconsole.log(result);",
          "options": [
            { "id": "o3", "option": "a", "text": "'No Score'", "correct": true },
            { "id": "o4", "option": "b", "text": "'Has Score'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "toq1-03",
          "title": "Ternary with Template Literals",
          "question": "const isPremium = true;\nconst message = `Status: ${isPremium ? 'VIP' : 'Guest'}`;\nconsole.log(message);",
          "options": [
            { "id": "o7", "option": "a", "text": "'Status: VIP'", "correct": true },
            { "id": "o8", "option": "b", "text": "'Status: Guest'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "toq1-04",
          "title": "Executing Function Calls",
          "question": "function getLeft() { return 'Left'; }\nfunction getRight() { return 'Right'; }\nconst direction = false ? getLeft() : getRight();\nconsole.log(direction);",
          "options": [
            { "id": "o9", "option": "a", "text": "'Right'", "correct": true },
            { "id": "o10", "option": "b", "text": "'Left'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "toq1-05",
          "title": "Nested Ternary Evaluation",
          "question": "const speed = 120;\nconst alert = speed > 100 ? (speed > 130 ? 'Danger' : 'Warning') : 'Normal';\nconsole.log(alert);",
          "options": [
            { "id": "o11", "option": "a", "text": "'Warning'", "correct": true },
            { "id": "o12", "option": "b", "text": "'Danger'", "correct": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "tot1-01",
          "title": "Light Mode and Dark Mode Theme Picker",
          "description": "Create a function named %getTheme(isDarkMode)% that accepts a boolean parameter. Use a ternary operator to return the string %'dark'% if true, and %'light'% if false. Input example: %true%.",
          "result": "%'dark'%",
          "solution": "function getTheme(isDarkMode) {\n  return isDarkMode ? 'dark' : 'light';\n}\nconsole.log(getTheme(true));"
        },
        {
          "id": "tot1-02",
          "title": "Dynamic Welcome Message Dashboard Flag",
          "description": "Create a function named %greetUser(username)% that accepts a string. Use a ternary operator to check if %username% has a truthy value. If it does, return %'Hello, ' + username%. If it is empty or null, return %'Welcome, Guest'%. Input example: %'Alex'%.",
          "result": "%'Hello, Alex'%",
          "solution": "function greetUser(username) {\n  return username ? 'Hello, ' + username : 'Welcome, Guest';\n}\nconsole.log(greetUser('Alex'));"
        },
        {
          "id": "tot1-03",
          "title": "E-commerce Basket Free Shipping Calculator",
          "description": "Create a function named %checkShipping(total)% that takes a total order amount number as a parameter. Using a ternary operator, return %0% if the total amount is greater than or equal to 100. Otherwise, return a shipping cost of %15%. Input example: %120%.",
          "result": "%0%",
          "solution": "function checkShipping(total) {\n  return total >= 100 ? 0 : 15;\n}\nconsole.log(checkShipping(120));"
        }
      ]
    },
    {
      "id": "logical-and-01",
      "title": "Logical Operator AND (&&)",
      "videoID": "37",
      "questions": [
        {
          "id": "laq1-01",
          "title": "Basic Boolean AND Evaluation",
          "question": "const hasKey = true;\nconst hasPermission = false;\nconst canEnter = hasKey && hasPermission;\nconsole.log(canEnter);",
          "options": [
            { "id": "o1", "option": "a", "text": "false", "correct": true },
            { "id": "o2", "option": "b", "text": "true", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "laq1-02",
          "title": "Short Circuit with Falsy Value",
          "question": "const points = 0;\nconst status = points && 'Active Player';\nconsole.log(status);",
          "options": [
            { "id": "o3", "option": "a", "text": "0", "correct": true },
            { "id": "o4", "option": "b", "text": "'Active Player'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "laq1-03",
          "title": "Short Circuit Returning Last Truthy",
          "question": "const isLoggedIn = true;\nconst userRole = 'Editor';\nconst currentAccess = isLoggedIn && userRole;\nconsole.log(currentAccess);",
          "options": [
            { "id": "o5", "option": "a", "text": "'Editor'", "correct": true },
            { "id": "o6", "option": "b", "text": "true", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "laq1-04",
          "title": "Multiple Chain Evaluation Short Circuit",
          "question": "const result = 'Hello' && '' && 'World';\nconsole.log(result);",
          "options": [
            { "id": "o7", "option": "a", "text": "''", "correct": true },
            { "id": "o8", "option": "b", "text": "'World'", "correct": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "laq1-05",
          "title": "Guarded Function Execution",
          "question": "let value = 10;\nconst logValue = () => { value = 20; return true; };\nfalse && logValue();\nconsole.log(value);",
          "options": [
            { "id": "o9", "option": "a", "text": "10", "correct": true },
            { "id": "o10", "option": "b", "text": "20", "correct": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "lat1-01",
          "title": "Account Access Double Verification Gate",
          "description": "Create a function named %verifyAccess(hasToken, isVerified)% that accepts two boolean parameters. Use the logical AND operator to return %true% if both conditions are met, otherwise return %false%. Input example: %true% and %false%.",
          "result": "%false%",
          "solution": "function verifyAccess(hasToken, isVerified) {\n  return hasToken && isVerified;\n}\nconsole.log(verifyAccess(true, false));"
        },
        {
          "id": "lat1-02",
          "title": "Dashboard Element Conditional Text Guard",
          "description": "Create a function named %renderWidget(isLoaded, textContent)% that accepts a boolean and a string parameter. Use the short-circuit behavior of the logical AND operator to return %textContent% only if %isLoaded% is true. If %isLoaded% is false, it must return the false condition value. Input example: %true% and %'Analytics Dashboard'%.",
          "result": "%'Analytics Dashboard'%",
          "solution": "function renderWidget(isLoaded, textContent) {\n  return isLoaded && textContent;\n}\nconsole.log(renderWidget(true, 'Analytics Dashboard'));"
        },
      ]
    }
  ]
}