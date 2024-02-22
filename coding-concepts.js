// UNIT 1 ASSESSMENT: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//  console.log(colors.push("indigo"))

// a) Your answer:["tangerine", "magenta", "lilac", "daffodil", "indigo"]

// b) Verify and explain: output is 5. its only counting the amount of strings in the array instead of displaying the strings in the array.


// // --------------------1) What will this log?

// const cohort = "LEARN 2023"
//  console.log(cohort.length)

// // a) Your answer: 10

// // b) Verify and explain: 10. you only see 9 characters but the empty space between "N" and "2" is still counted in the string as an character


// // --------------------2) What will this log?

// const greeting = "Hello World!"
//  console.log(greeting[4])

// // a) Your answer: o
// // b) Verify and explain: index starts at zero so im technically (as a human) am counting 5 not 4 which means whatevers in the 5 index is correct

// // --------------------3) What will this log?

// const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
//  console.log(languages[index])

// // a) Your answer:"Ruby"
// // b) Verify and explain: Its counting the strings as individuals in the array 

// // --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// // a) Your answer:SATURDAY, SUNDAY
// // b) Verify and explain:.toUpperCase is a built-in method that uppercases anything its connected to

// // --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
 console.log(typeof dataTypes.length)

// // a) Your answer: 3
// // b) Verify and explain: the correct output => number, i thought .length would count each strings index in the array 
