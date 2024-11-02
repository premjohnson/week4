const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function categorizeAge(age) {
    if (age < 13) {
        console.log('You are a child');
    } else if (age >= 13 && age < 20) {
        console.log('You are a teen');
    } else if (age >= 20 && age < 65) {
        console.log('You are an adult');
    } else {
        console.log('You are a senior');
    }
}

rl.question('Please enter your age: ', (answer) => {
    let age = Number(answer);
    categorizeAge(age);
    rl.close();
});
