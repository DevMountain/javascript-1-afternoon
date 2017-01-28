//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler (name) {
   if  (name === "Tyler")
    return true;
    else
    return false;
  }

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  function getName() {
  var answer = prompt("What is your name?")
  return answer;
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function welcome() {
  var answer = getName()
  alert("Welcome, " + answer);
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Arguments and parameters can be used interchangeably but parameters are the values that will be passing through the function while the arguments are the actual values. 


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  


//Now save the function definition of myName into a new variable called newMyName

  //Code Here

//Now alert the result of invoking newMyName



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.
