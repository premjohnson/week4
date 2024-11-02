//Task: Declare and log different types of variables using var, let, and const. Explain their differences.
var name = "Alice";
console.log("var name:", name);
//the commented explanation anout the js variable and keyword declaration is below.<"||">
/* var:
Scope: 
var is function-scoped, meaning it’s accessible throughout the function in which it’s declared. 
If used outside a function, it’s globally scoped.
Hoisting: Variables declared with var are hoisted to the top of their scope. 
However, they’re initialized as undefined until the code reaches the line where they’re defined.
Reassignment: var allows both reassignment and redeclaration within its scope, 
which can lead to unexpected results and bugs.

In JavaScript, 
hoisting refers to the behavior where declarations of variables and functions are moved ("hoisted") 
to the top of their containing scope (either a function or the global scope) before the code executes. 
This behavior applies differently to var, let, const, and functions.

Hoisting with var
When you declare a variable with var, JavaScript "hoists" the declaration to the top of the scope but not the assignment. 
This means that the variable is created at the top, 
but it’s automatically initialized as undefined until the code actually assigns it a value. 
This can cause unexpected behavior if you try to use the variable before its definition line.

Example
//console.log(myVar); // Output: undefined, because `myVar` is hoisted and initialized to `undefined`
var myVar = 10;
console.log(myVar); // Output: 10

// Hoisted declaration (treated as if it's at the top)
var myVar; // myVar is hoisted and initialized to `undefined`

//console.log(myVar); // Output: undefined, because myVar hasn’t been assigned yet
myVar = 10; // Assignment happens here
console.log(myVar); // Output: 10


Hoisting with let and const
Variables declared with let and const are also hoisted, but they are not initialized at the start of their scope. 
They remain in a "Temporal Dead Zone" from the start of the scope until their declaration line, 
which means they cannot be accessed before their declaration.

Example with let or const

//console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 10;
let myLet; is hoisted, but unlike var, it’s not initialized to undefined.
Instead, trying to access myLet before its declaration line results in a ReferenceError due to the Temporal Dead Zone.

//function testVar() {
    var number = 10;
    
    if (true) {
        var number = 20; // Redeclares and overwrites the outer `number`
        console.log("Inside if block:", number); // Output: 20
    }
    
    console.log("Outside if block:", number); // Output: 20 (unexpectedly changed)
}

testVar();

Why This Can Lead to Bugs
In larger codebases or complex functions, redeclaring variables with var can result in unintended overwrites, 
making the code difficult to debug and maintain. 
Here’s an example of how this could create unexpected behavior:


most imp t-Ting The Temporal Dead Zone (TDZ) is a concept in JavaScript that describes the period between 
the start of a block scope and the point at which a variable declared with let or const is initialized. 
During this time, the variable exists but cannot be accessed, 
leading to a ReferenceError if you try to use it before its declaration line.

How the Temporal Dead Zone Works
When JavaScript executes code, it first sets up the environment for all variables and functions within the current scope. 
Variables declared with var are initialized as undefined right away, so they can be used (though with a value of undefined) 
even before their actual line of declaration. However, for variables declared with let and const, this immediate initialization doesn’t happen. Instead:

JavaScript is aware of the let and const variables because their declarations are hoisted to the top of their block scope.
The variables remain uninitialized until the code reaches the exact line where they’re declared and assigned a value.
The TDZ starts from the beginning of the scope and ends when the variable is declared and assigned.

example
//console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 5;
console.log(myLet); // Output: 5


let age = 25;
let age = 30; // SyntaxError: Identifier 'age' has already been declared


it's ok to do

let age = 25;
age = 30; // This is allowed
console.log(age); // Output: 30

myLet  is consider has let::::::::"'<_oo_>'"
Yes, in the context of JavaScript, 
myLet refers to a variable that has been declared using the let keyword. 
Here's a breakdown of how this works:

Example of Using myLet

//let myLet = 5; // Declaration and initialization

console.log(myLet); // Output: 5 (access after initialization)

if (true) {
    let myLet = 10; // This is a different `myLet` scoped to this block
    console.log(myLet); // Output: 10
}

console.log(myLet); // Output: 5 (accessing the outer `myLet`)

*/
let age = 25;
console.log("let age:", age);

const country = "USA";
console.log("const country:", country);

name = "Bob"; 
console.log("var name after reassigning:", name);

age = 30; 
console.log("let age after reassigning:", age);

country = "Canada"; // This line will throw an error

