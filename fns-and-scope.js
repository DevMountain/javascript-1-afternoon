//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var name1 = "chris";

function isTyler(name) {

  if (name === "Tyler") {
    return true;
  }

  if (name !== "Tyler") {
    return false;
  }

}

//console.log(isTyler(name1));

//////////////////PROBLEM 2////////////////////



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName() {
  var userName = prompt("Gimme that name yo");
  console.log(userName);
  return userName;
}

// getname();

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function welcome() {
    var userName = getName();

    alert( "Waddup " + userName);

  }

// welcome();

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

/*

  arguments are passed into the function when you call the function itself.
  parameters are the placeholders that take the arguments when you try and run your function;
  parameters then help the function complete its operation and return value(s) based on what arguments you pass when you call the function.

  */

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


/*

falsy values:
"";
0;
undefined;
NaN;
false;
null;

you check something falsy with !==

*/

//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName() {
  var name = "Chris";
  return name;
}// so now myName(); = name


//Now save the function definition of myName into a new variable called newMyName

   var newMyName = myName(); // newMyName now = name

//Now alert the result of invoking newMyName

//alert(newMyName);

//////////////////PROBLEM 7////////////////////

//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
    return function() {
      console.log(newMyName);//making sure variable is passed
      return newMyName;
    }
}

//var x = outerFn();  this is example of closures to pass variable
//x();


//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
