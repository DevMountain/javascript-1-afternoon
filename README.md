<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project, we'll provide practice JavaScript problems to help you better understand the fundamentals.

## Setup

* `Fork` this repository.
* `Clone` your fork.
* Open `./practice.js` with your code editor.
* Open `./index.html` with your browser.

## Directions

Complete all the activities inside of `./practice.js` to make the spec runner pass it's tests. In order to check the progress of the spec runner, open `./SpecRunner.html` with your browser. Remember to commit and push your code often. Good luck!

## Tips and Tricks

One of the biggest tools at the developer's disposal is the browser's built-in debugger. To use it, open `./index.html` with your browser. Another great tool for small and isolated pieces of code is <a href="http://www.pythontutor.com/visualize.html#">Python Tutor</a>. Just make sure to change the code to `JavaScript ES6`.

## Resources

<details>

<summary> <code> Variables </code> </summary>

* [JS Variables](https://www.w3schools.com/js/js_variables.asp)

</details>

<details>

<summary> <code> Data Types </code> </summary>

* [Understanding JS Data Types](https://codeburst.io/javascript-data-types-explained-347555cd2d4d)

</details>

<details>

<summary> <code> Arrays </code> </summary>

```js
// declare an empty array
let myThings = [];

// declare an array with items
let myThings = ['Bike', 7, {name: 'Jeff'}, ['Catfish']]
```

</details>

<details>

<summary> <code> Objects </code> </summary>

```js
// declare an empty object
let car = {}

// declare an object with properties
let car = {
  make: 'Ford',
  model: 'GT',
  year: 2019
}

// adding or updating properties with dot notation
car.miles = 100;

// adding or updating properties with bracket notation
// if miles already exists on the object, this would change it's value
// if it doesn't this will set it as a key with a value of 150
car['miles'] = 150

// if a property doesn't exist on an object, it's considered undefined

car.owner === undefined // true
```

</details>

<details>

<summary> <code> Conditionals </code> </summary>

* [if..else if..else](https://www.w3schools.com/js/js_if_else.asp)
* [Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)

</details>

<details>

<summary> <code> Functions </code> </summary>

```js
// Function Declaration

function doTheThing() {
  return 'Did the thing';
}

// Function Expression

let doTheThing = function() {
  return 'Did the thing';
}

// Function Parameters, Arguments and Invoking (calling) a Function
// name is a function parameter
// a variable we'll use in our function body

function sayMyName(name) {

// the string 'Your name is Jeff' will be output
// from this function because of the return keyword

  return 'Your name is ' + name;
}

// function invocation
// parentheses after the function tell the function to run
// The string Jeff is called an argument (a value passed to a function and received as a parameter)
sayMyName('Jeff');

// Here we're passing more arguments than there are parameters
// Only Jeff will be received as "name" in the parameter list
sayMyName('Jeff', 'Karen')
```

</details>

<details>

<summary> <code> Scope </code> </summary>

* [JS Scope](https://www.w3schools.com/js/js_scope.asp)

</details>

<details>

<summary> <code> Let </code> </summary>

* [Let keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

</details>

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
