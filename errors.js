// Fix the error in the snackSelection code snippet to see the error from the function

const snackSelection = 'Pretzels';

if (snackSelection === 'Pretzels') {
  console.log("That'll be $1, please!");
}


// Fix the code above this line to see the error from this first() function in your browser's console

function first () {
  second(); // (2)
}

function second () {
  third(); // (3)
}

function third () {
  console.log("Now I'm a function!");
}

// const third = 'Declaring a new variable.';

first(); // (1) global scope
