const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var adds = function(a, b) {
    return a + b;
};


rl.question("Enter the first number: ", (input1) => {
    let num1 = parseInt(input1); 
    
    
    rl.question("Enter the second number: ", (input2) => {
        let num2 = parseInt(input2); 
        
        console.log('Adding two numbers:', adds(num1, num2));
        rl.close(); 
    });
});
