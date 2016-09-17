//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
  if (name === "Tyler") {
    return true;
  }
  else {
    return false;
  }
}  //Code Here

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
function getName(){
  var name = prompt("Whats your name?");
  return name;
}

  //Code Here


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses
// your getName function you created in the previous problem to
 // get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function welcome() {
    var personName = getName();
    alert ("Welcome, " + personName);
  }//Code Here


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?
//asjdnakjsndi
  //Answer Here

//parameters are used as place holders for arguments they have no value and are are mutable. Arguments represent actual values that are entered into the place a parameter (placeholder).
//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


//falsey values are false, 0, "", null. undefined, NaN. Use of an "IF" statement is a way to check if something is falsey.  //Answer Here



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName() {
  return "Thai";
}  //Code Here



//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName;//Code Here

//Now alert the result of invoking newMyName

alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn(){

  return function person(){
    return "Thai";
  };
}  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();//Code Here

//Now invoke innerFn.
innerfn();
