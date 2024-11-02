const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    introduce: function() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}.`);
    }
};

// Calling the introduce method
person.introduce();


/*import { createInterface } from 'readline';// importing

const rl = createInterface({
    input: process.stdin,
    output: process.stdout ////////////// create input and output
});

const person = {// objecct declerations of person
    name: '',
    age: 0,
    city: '',
    introduce() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}.`);
    }// method call from constructor function person   
};

const askQuestion = (question) => {// it take arg-u que store in ask-que;
    return new Promise((resolve) => {// here its return the Promise every promise takes resolve and reject here we only resolve the-- 
        rl.question(question, resolve);//que and reslove
    });
};

const main = async () => { then after asyn js acts here it's await untill user enter name then it reslove the answer it mean fullment of promises
    person.name = await askQuestion("Enter your name: ");
    person.age = await askQuestion("Enter your age: ");
    person.city = await askQuestion("Enter your city: ");
    
    person.introduce();
    rl.close();
};

main(); 

*/
