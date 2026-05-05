
export const seedData = {
  id: 123,
  version: '1.0',
  allExercises: [
    {
      id: '9012310293812903810',
      title: 'Variables',
      questions: [
        {
          id: '98102830219839021',
          title: 'Variable hoisting',
          question: "console.log(myVar);\nvar myVar = 5;\nconsole.log(myVar);",
          options: [
            { id: '21412323412341', option: 'a', text: 'undefined then 5', correct: true, selected: false },
            { id: '21431523412341', option: 'b', text: 'ReferenceError', correct: false, selected: false },
            { id: '21431234124141', option: 'c', text: '5 then 5', correct: false, selected: false },
            { id: '21431255555341', option: 'd', text: 'null then 5', correct: false, selected: false },
          ],
          correctAnswer: 'c'
        },
        {
          id: '98102830229839221',
          title: 'Temporal dead zone',
          question: "console.log(a);\nlet a = 10;",
          options: [
            { id: '22212323412341', option: 'a', text: 'undefined', correct: false, selected: false },
            { id: '21412323417741', option: 'b', text: '10', correct: false, selected: false },
            { id: '21411123412341', option: 'c', text: 'ReferenceError', correct: true, selected: false },
            { id: '21412443412341', option: 'd', text: 'null', correct: false, selected: false },
          ],
          correctAnswer: 'c'
        },
      ],
      tasks: [
        {
          id: '901482f0aj921901290h',
          title: "Reverse a string",
          description: "Write a function {{reverseString(str)}} that takes a string and returns it reversed.",
          example: '{{reverseString("hello")}} → {{"olleh"}}',
          note: "implement in your editor / console",
          solution: "const reverseString = str => str.split('').reverse().join('');"
        },
        {
          id: '901122f0aj921901290h',
          title: "Filter even numbers",
          description: "Write a function {{filterEvens(arr)}} that returns a new array containing only the even numbers.",
          example: '{{filterEvens([1, 2, 3, 4, 5, 6])}} → {{[2, 4, 6]}}',
          note: "implement in your editor / console",
          solution: "const filterEvens = arr => arr.filter(num => num % 2 === 0);"
        },
      ]
    },
    {
      id: '9012315132432143210296812903810',
      title: 'aaaaaaaaaa',
      questions: [
        {
          id: '4123',
          title: 'aaaaaaa',
          question: "console.log(myVar);\nvar myVar = 5;\nconsole.log(myVar);",
          options: [
            { id: '21412323412341', option: 'a', text: 'undefined then 5', correct: true, selected: false },
            { id: '21431523412341', option: 'b', text: 'ReferenceError', correct: false, selected: false },
            { id: '21431234124141', option: 'c', text: '5 then 5', correct: false, selected: false },
            { id: '21431255555341', option: 'd', text: 'null then 5', correct: false, selected: false },
          ],
          correctAnswer: 'c'
        },
        {
          id: '9810283521342140229839221',
          title: 'Temporal dead zone',
          question: "console.log(a);\nlet a = 10;",
          options: [
            { id: '22212323412341', option: 'a', text: 'undefined', correct: false, selected: false },
            { id: '21412323417741', option: 'b', text: '10', correct: false, selected: false },
            { id: '21411123412341', option: 'c', text: 'ReferenceError', correct: true, selected: false },
            { id: '21412443412341', option: 'd', text: 'null', correct: false, selected: false },
          ],
          correctAnswer: 'c'
        },
      ],
      tasks: [
        {
          id: '901482f0aj9253214241901290h',
          title: "Reverse a string",
          description: "Write a function {{reverseString(str)}} that takes a string and returns it reversed.",
          example: '{{reverseString("hello")}} → {{"olleh"}}',
          note: "implement in your editor / console",
          solution: "const reverseString = str => str.split('').reverse().join('');"
        },
        {
          id: '901122f0aj953124221901290h',
          title: "Filter even numbers",
          description: "Write a function {{filterEvens(arr)}} that returns a new array containing only the even numbers.",
          example: '{{filterEvens([1, 2, 3, 4, 5, 6])}} → {{[2, 4, 6]}}',
          note: "implement in your editor / console",
          solution: "const filterEvens = arr => arr.filter(num => num % 2 === 0);"
        },
      ]
    },
  ]
}