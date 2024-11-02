const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

fruits.forEach(fruit => {
    console.log(fruit);
});

let vegetables = ['Carrot', 'Potato', 'Tomato'];

vegetables.push('Broccoli'); // Adding an element
vegetables.splice(1, 1); // Removing 'Potato'
vegetables[0] = 'Cucumber'; // Updating 'Carrot' to 'Cucumber'

console.log(vegetables);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter(num => num % 2 !== 0);
const sum = oddNumbers.reduce((acc, num) => acc + num, 0);

console.log('Sum of odd numbers:', sum);

