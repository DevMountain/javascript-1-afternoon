//////////////////PROBLEM 1////////////////////

var name = 'Russell';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name){

if (name === "Tyler") {
  return true;
}  
return false;

}//Code Here

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


 function getName(name){
  prompt(name);
  return prompt();

 } 
 
 //Code Here

 
//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function welcome() {
    
   alert("Welcome, " + getName())
    
  }
  
 
  
  //Code Here


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

 "example function test(Parameter1, Parameter2) the parameters are place holder values that are expected, to run through the code" //Answer Here
"example test(John, 25) these would be the arguments for test that will take over the paremeters and run through the code"

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  NaN, 0, false , null, undefined, ""  //Answer Here

//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

 function myName(){
  return name;
 } //Code Here
  
console.log(myName);

//Now save the function definition of myName into a new variable called newMyName

 var newMyName = myName;
 
//Now alert the result of invoking newMyName



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

 var outerFn = function() {
   return newMyName;
 }


 //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

 var innerFn = outerFn(); //Code Here

//Now invoke innerFn.
innerFn();