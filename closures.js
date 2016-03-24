//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
};


// Above you're given a function that returns another function which has a closure over the name variable.
// Invoke outer saving the return value into another variable called 'inner'.

  //Code Here

//Once you do that, invoke inner.

  //Code Here



//Next problem


var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};


//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here



//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
  var count = makeCounter();
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4



//Next Problem


// Inside the function called counterFactory
// return two functions that implement up/down counter.
// The first function is called inc, this function is responsible for incrementing the value once
// The second function is called dec, this function is responsible for decrementing the value by one
// You will need to use the module pattern to achieve this.

function counterFactory(value) {
  return {

    // Code inc function
    // Code dec function

}


counter = counterFactory(10);

counter.inc(); // 11
counter.dec(); // 10




//Next Problem


// Inside the motivation function create another function called message that will return welcomeText + firstname + lastname

  function motivation(firstname, lastname){

    var welcomeText = 'Your doing awesome keep it up    ';

    // code message function here

    return message()

  }

  motivation('Billy', 'Bob'); // 'Your doing awesome keep it up Billy Bob




// Inside the return create a publicMethod property that is a function that invokes privateMethod. After you create the privateMethod
// Invoke it by calling module.publicMethod(); outside the module scope

  var module = (function() {
    var person = {
      name: "phillip",
      age: 29,
      location: 'Utah'
    };

    var privateMethod = function(){
      return welcomeText + firstname + '  ' + lastname;
    };

    // Anything that is being returned is made public and can be invoked from outside our lexical scope

    return {
      // Code here
    };

  })();

  module.publicMethod();




// Here we have a for loop that will iterate as long as i is less than or equal to 5. What we need to do is console.log(i)
// So that it logs ( 1 then 2 then 3, etc). Run this code in your console to see what the output is.


  for (var i = 0; i <= 5; i++) {
    setTimeout(function() {
      console.log(i)
    }, i * 1000)
  }


  // To make this code work you will need to create a new scope for every iteration.









/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/


