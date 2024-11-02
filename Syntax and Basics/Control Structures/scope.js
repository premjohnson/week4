// Global variable
let globalVar = "I am a global variable";

function exampleFunction() {
    // Local variable
    let localVar = "I am a local variable";
    
    console.log(globalVar); // Accessible
    console.log(localVar);   // Accessible
}

exampleFunction();

console.log(globalVar); // Accessible
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined
