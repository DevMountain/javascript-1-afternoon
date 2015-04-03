//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';

//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(name) {
    if (name === "Tyler") {
        return true;
    }
    else {
        return false;
    }
};

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


var getName = function() {
	var name = prompt("What is your name?");
	return name;
};


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome = function() {
    var name = getName();
	alert("Welcome, " + name);
};


//Next problem




//What is the difference between arguments and parameters?

//Paramaters are the placeholders you put in a function's parantheses to represent implicitly defined variables that work 
//in the function. Arguments replace those variables when the function is called.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


/*NaN, null, undefined, 0, '', false*/
var valuebeingtested = "";
if (valuebeingtested) {
	alert("true statement");
}
else {
	alert("not true statement");
}

//Next Problem



//Create a function called myName that returns your name

var myName = function() {
	return "Mike Starks";
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function () {
	return function () {
		var user = "Mike Starks"
		return user;
	}
}

//Save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.
innerFn();

/*Let's see if I understand this right: the invocation of outerFn IS a function, so if we assign innerFn to the invocation of outerFn(),
innerFn becomes a function. Thus, you can invoke it.