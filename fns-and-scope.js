//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler(name) {
    return name == 'Tyler' ? true : false;
  }

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  function getName() {
    return prompt('Please enter your name');
  }

//console.log('Problem 2: ', getName());

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function welcome(myFunc) {
    return alert('Welcome ' + myFunc());
  }

//////////////////PROBLEM 4////////////////////


//What is the difference between arguments and parameters?

  //When declaring functions you give them parameters, when invoking functions
  //you pass arguments.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Null, undefined, false, 0, '', NaN -- You can check if something is falsy with val == false



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName(){
    return 'Joseph Isabell';
  }



//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName;

//Now alert the result of invoking newMyName

  alert('Now invoking newMyName: ' + newMyName())

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn(){
    return function(){
      return 'Joseph Isabell';
    }
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.

  console.log(innerFn());
