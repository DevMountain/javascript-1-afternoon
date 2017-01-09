//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler() {
    return (arguments[0] === "Tyler");
}
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


var getName = function() {
    var result = prompt("What's yer name?");
    return result;
}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
    var callback = getName();
    alert("Welcome, " + callback);
}

//////////////////PROBLEM 4////////////////////



//What is the difference between arguments and parameters?

//parameters are placeholders or named variables in the func signature that contain the value of arguments passed into them from a function call.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


// 0, null, "", undefined, NaN, false


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName() {
    return "beau";
}


//Now save the function definition of myName into a new variable called newMyName

var newMyName = function() {
    return "beau";
}

//Now alert the result of invoking newMyName

alert(newMyName);

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
    return newMyName;
}
//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();
//Now invoke innerFn.
