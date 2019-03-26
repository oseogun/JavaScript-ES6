/*
* JavaScript provides 3 options for storing values in a program. They are:
*
* 1) let - This allows programmers store values which cannot be access/changed outside block within which it is declared.
*
* 2) const - This allows programmers store values that cannot changed. This is useful for storing values that have to remain unchanged during computation (e.g. const PI = 3.14;)
* In the case of Arrays & Objects constants (const), while the types cannot be changed, the values within the data structures can be modified.
*
* 3) var - This allows programmers store values that can be modified outside the code block where the var was declared/initiallized. This might be useful for global variables
*
*
*/

/*
* var exmaple
*/
function varDemo(){
 // var variable declared and initialized inside code block
 var varValue = "Original var value initialized within function block";
 console.log(varValue);
}

varDemo();
// var value altered outside code block
varValue = "Altered var value modified outside function block";
console.log(varValue);

/*
* let example
*/

// Declare & initialize let variable in function.
function letDemo(){
 let letValue = "Original let value initialized inside the function block";
 console.log(letValue);
}

// Call function to print let variable.
letDemo();

// Try calling let variable outside function block - try/catch block helps us manage the error.
try{
  console.log(letValue);
} catch {
  console.log("letValue can't be accessed outside function code block");
}


/*
* const example
*/

// Declare & initialize constant
const constValue = "Original const value";

// Print constant
console.log(constValue);

// Try to change the value if the constant - try/catch helps us handle the error
try {
constValue = "Altered const value";
console.log(constValue);
} catch {
  console.log("constValue cannot be altered");
}


/*
* Hoisting Explanation
* Hoisting is JavaScript's default behavoir of moving all var declartions to to the top of a script,
* irrrespective where in the code block the declaration occurs. Only var declarations are 'hoisted'.
* var initializations, as well as let and const declarations are not hoisted.
*/
