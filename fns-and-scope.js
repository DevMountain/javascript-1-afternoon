//Once you complete a problem, open up Chrome and check the answer in the console.

//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.


var name = 'Tyler';

function isTyler(name) {
  if (name === 'Tyler') {
    return true;
  }
  else {
    return false;
  }
}

//Next problem

//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName() {
  var name = prompt("Please enter your name");
  return name;
}

//Next Problem

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function getName() {
    var name = prompt("Please enter your name");
    return name;
}

function welcome() {
    alert("Welcome, " + getName());
}

//Next problem

//What is the difference between arguments and parameters?

  // Arguments are fed into parameters with the call.


//Next problem

//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //null, 0, undefined, false, NaN, " ". Use an if statement to check if something is falsy.

//Next Problem

//Create a function called myName that returns your name

function myName() {
  return "Andrew";
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = function myName() {
  return "Andrew";
};

//Now alert the result of invoking newMyName
alert(newMyName());

//Next problem

//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
  return function() {
    return "Andrew";
  };
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

 innerFn();
