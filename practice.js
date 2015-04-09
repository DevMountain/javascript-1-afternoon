//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  var isTyler = function(name){
  	if(name === "Tyler"){
  		return true;
  	} else {
  		return false;
  	}
  }


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  var getName = function(){
  	return prompt("Hey, what's your name?");
  }


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  var welcome = function(){
  	alert("Welcome, " + getName());
  	return;
  }


//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
  Parameters are used in the definition of a function as as way to defined the quantity (and maybe type) of the inputs to a function;
  Arguments are the actual values passed into a function during the invocation of the function;


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  /*Falsy values are the following:
  	null
  	undefined
  	""
  	NaN
  	0
  	false

  The check to determine true or false is an if statement:
   if(something){
   	//this executes if true
   } else {
   	//this returns if false
   }

   The six different falsy values account for both an explicitly false value and some other condition where an evaluation can't take place (ie no value)
	*/



//Next Problem



//Create a function called myName that returns your name

  //Code Here
  var myName = function(){
  	return prompt("What is your name?", "Matt");
  }

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName;

//Now alert the result of invoking newMyName
	alert(newMyName());


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  var outerFn = function(){
  	return function(){
  		return prompt("What is your name", "Matt");
  	}
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

  var innerFn = outerFn();


//Now invoke innerFn.
	innerFn();







