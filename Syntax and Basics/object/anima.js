class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks!`);
    }
}

const animal = new Animal('Generic Animal', 'Unknown');
animal.speak();

const dog = new Dog('Buddy');
dog.speak();
dog.bark();
