// UNIT 1 ASSESSMENT: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and evaluates which of the strings has more characters. Use the test variables provided.


// const fruit1 = "apple"
// const fruit2 = "banana"
// //output: "banana"
// //let combinedArr = (fruit1, )

// const fruitBasket = (fruit1, fruit2) => {
// //create a function called fruitBasket that takes in fruit1 and fruit2 string values   
// if (fruit1.length > fruit2.length) {
// //compare the lengths of both fruit1 and fruit2 values     
//     return `${fruit1}s has more characters than ${fruit2}s`}
// //if the length of fruit1 is bigger return "fruit1 has more characters"    
//     else    
//     { return `${fruit2}s has more characters than ${fruit1}s`
// // if not return the "return fruit2 has more characters"    
// }
// }
// console.log(fruitBasket(fruit1, fruit2))
//call it

// Expected outcome: "bananas has more characters than apples"

// const fruit3 = "cherry"
// const fruit4 = "kiwi";  
// // Expected outcome: "cherry"

// // Explain your code:

// // --------------------1) Create a function that takes in an array of numbers and returns the sum of all the numbers. Use the test variables provided below.

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]

// function totalRuns(numbers) {
// //create a function named totalRuns that takes the parameter numbers    
//     let newArr = 0;
// //create a variable named newArr with the value of     
//     for (let i = 0; i < numbers.length; i++) {
// //iterate through each element in the array 
//         newArr += numbers[i];
// //add each element to newArr       
//     }
//     return newArr
// //return the newArr    
// }

// console.log(totalRuns(padres1984WorldSeriesRuns))

// // Expected output: 15
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]

// function sumRuns(numbers){
// //create a function called sumRuns that takes numbers
//     let freshArr = 0;
// //set freshArr value to 0 to add numbers later    
//     for (let i=0; i < numbers.length; i++){
// //iterate through each number in numbers        
//         freshArr += numbers[i];
// //add each elements to freshArr        
//     }
//     return freshArr
// // return sum     
// } 

// console.log(sumRuns(padres1998WorldSeriesRuns))
   

// // Expected output: 17


// // Explain your code:
// I explained as i did it

// // --------------------2) Create a function that takes in a string and  returns the string with all the characters in reversed order. Use the test variable provided below.

// const lesMiserables = "Jean Valjean"

// function reverseMiserables(str) {
// //create function called reverseMiserables that takes string        
//     return str.split('').reverse().join('')
// // split string into an array, reverse the array then convert array back to a string    
// }
// console.log(reverseMiserables(lesMiserables))

// // Expected output: "naejlaV naeJ"

// const lionKing = "Simba"

// function reverseSimba(strAgain) {
//     return strAgain.split('').reverse().join('')
// }
// console.log(reverseSimba(lionKing))


// // Expected output: "abmiS"

// // Explain your code: 
//create a funct that can take in a string
//split string into an array, reverse the array then convert array back to a string  

// // --------------------3) Create a function that takes in an array and returns an array with only the items from the third, fourth, and fifth indexes. Use the test variable provided below.

// const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]

// function thrFourFifth(arr) {
// //create a funct that takes in array as argument    
//    return arr.slice(2, 5)
// // use slice on array to grab every index between 2 and 5 then returns a new array    
// }
// console.log(thrFourFifth(stockExchange))
// //call/invoke the funct

// // // Expected output: [42, 5, -5]

// const cohortList = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]

// function delEchFox(str) {
// //create a funct called delEchFox that takes strings    
//     return str.slice(3, 6)
// //use split to return indexes 3, 6 and every index between    
// }
// console.log(delEchFox(cohortList))
// //now call/invoke 

// // Expected output: ["Delta", "Echo", "Foxtrot"]

// // Explain your code:
//give variables parameters capable of holding strings
//use the .slice method to pull specific strings in the index out from between two points in the array
