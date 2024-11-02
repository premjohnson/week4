const person = {
    name: 'Alice',
    age: 28,
    city: 'Los Angeles',
    introduce: function() {
        console.log(`Hello, my name is ${this.name}.`);// this refers to a person mean currently of object
    }
};

// Calling the introduce method
person.introduce();
