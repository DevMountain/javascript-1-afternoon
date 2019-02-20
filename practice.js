/***
 * #1
 * 
 * Create a function declaration called 'greeting' that
 * accepts 'name' as its only parameter.
 * 'greeting' should return the string "Hello, "
 * plus the value of the name parameter.
 * 
 * Bonus! Use a Template String.
 */

//Code here


/***
 * #2
 * 
 * Rewrite the function 'greeting' as a function expression
 * then name it 'newGreeting'.
 */

//Code Here


/***
 * #3
 * 
 * Rewrite the function greeting as an arrow function
 * then name it 'finalGreeting'.
 */

//Code Here


/***
 * #4 
 * 
 * Create an array called 'groceries' with the values
 * "apples", "milk", "eggs", "bread"
 */

//Code Here


/***
 * #4 Continued...
 * 
 * Write a function called 'doubleCheck' that takes in an array as a parameter
 * If the array does not contain "chocolate", add "chocolate".
 * 'doubleCheck' should return the array
 */

//Code Here


/***
 * #5
 * 
 * Create an object named 'dog'.
 * The 'dog' object should have the following properties:
 * name: (string), color: (string), age (number), goodBoy: (boolean)
 */

//Code Here


/***
 * #5 Continued...
 * 
 * Access the dog's name from the object and assign it to a
 * variable called 'devMountainClassPet'
 */

//Code Here


/***
 * #5 Continued...
 * 
 * Add a method to 'dog' called 'bark'. The value of bark
 * should be a function that returns the string "Woof woof".
 */

//Code Here


/***
 * #5 Continued...
 * 
 * Invoke the 'bark' method and assign it to the variable called 'ruff'
 */

//Code Here


/***
 * #6 
 * 
 * Write a function called 'looper' that takes in an array.
 * 'looper' should declare a variable called 'mySum' and set it equal to 0.
 * 'looper' should then loop through the array and check each element.
 * 
 * If the element is odd, or if the element is greater than or equal to 100, 
 * add the element to the 'mySum' variable total. 
 * 
 * Return 'mySum'
 */

//Code Here


/***
 * #7 
 * 
 * Given the following function called 'math'
 */


function math(num1, num2, callback) {
  return callback(num1, num2);
}


/***
 * #7 Continued...
 * 
 * Write a function called 'add' that takes in two parameters.
 * Return the result of adding them together.
 */

//Code Here


/***
 * #7 Continued...
 * 
 * Invoke the 'math' function. Pass in the numbers 3, 4 and your 'add' function.
 * Assign the result to a variable called 'mathSum'.
 */

//Code Here


/***
 * #8 
 * 
 * Write a function called 'invoker' that takes in a callback function as a parameter.
 * 'invoker' should return the result of invoking the callback.
 */

function sampleCallbackOne() {
  return "I am a callback function";
}

function sampleCallbackTwo() {
  return "I am also a callback function";
}

//Code Here


/***
 * #9 
 * 
 */


let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

/***
 * #9 Continued...
 * 
 * The 4 variables above: 'duck', 'rubberDuck', 'sailorDuck' and 'realDuck'
 * are all within different scopes.
 * 
 * Given the functions and variables above, edit the arrays
 * below to contain only the appropriate variable names as strings.
 */

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ["duck", "sailorDuck", "rubberDuck", "realDuck"];

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ["duck", "sailorDuck", "rubberDuck", "realDuck"];

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ["duck", "sailorDuck", "rubberDuck", "realDuck"];

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ["duck", "sailorDuck", "rubberDuck", "realDuck"];


/***
 * #10 
 * 
 * Create a function called 'outerFn' that returns an 
 * anonymous function which returns your name.
 */

//Code Here

// Now save the result of invoking outerFn into a variable called innerFn.

// Code Here

// Now invoke innerFn and save the result to a variable called finalResult.

// Code Here
