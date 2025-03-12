const getRandomTsCode = () => {
    // Generate a random number between 1 and 20
    const randNum = Math.floor(Math.random() * 20) + 1;

    // Return the code based on the generated number
    switch (randNum) {
        case 1:
            return 'console.log("Hello, world!");';
        case 2:
            return 'const myName = "John"; console.log(`My name is ${myName}`);';
        case 3:
            return 'let x = 5; console.log(x * 2);';
        case 4:
            return 'function greet(name) { console.log(`Hello, ${name}!`); } greet("Alice");';
        case 5:
            return 'class Animal { constructor(sound) { this.sound = sound; } speak() { console.log(this.sound); } } const dog = new Animal("woof"); dog.speak();';
        case 6:
            return 'const points = [1, 2, 3]; for (let i = 0; i < points.length; i++) { console.log(points[i]); }';
        case 7:
            return 'const numbers = [1, 2, 3, 4, 5]; const sum = numbers.reduce((acc, cur) => acc + cur); console.log(sum);';
        case 8:
            return 'const numbers = [1, 2, 3, 4, 5]; const product = numbers.reduce((acc, cur) => acc * cur); console.log(product);';
        case 9:
            return 'const fruits = ["apple", "banana", "cherry"]; for (let i = 0; i < fruits.length; i++) { console.log(fruits[i]); }';
        case 10:
            return 'const colors = ["red", "blue", "green"]; for (let color of colors) { console.log(color); }';
        case 11:
            return 'function isEven(num) { if (num % 2 === 0) { return true; } else { return false; } } const num = 42; console.log(isEven(num));';
        case 12:
            return 'const person = { name: "Alice", age: 30 }; for (let key in person) { console.log(`${key}: ${person[key]}`); }';
        case 13:
            return 'const myArray = [1, 2, 3, 4]; for (let i = 0; i < myArray.length; i++) { const element = myArray[i]; console.log(element); }';
        case 14:
            return 'const myObject = { name: "Alice", age: 30 }; for (let key in myObject) { console.log(`${key}: ${myObject[key]}`); }';
        case 15:
            return 'function isAdult(age) { if (age >= 18) { return true; } else { return false; } } const age = 21; console.log(isAdult(age));';
        case 16:
            return 'const numbers = [1, 2, 3, 4, 5]; const sum = numbers.reduce((acc, cur) => acc + cur); console.log(sum);';
        case 17:
            return 'const fruits = ["apple", "banana", "cherry"]; const sortedFruits = fruits.sort(); console.log(sortedFruits);';
        case 18:
            return 'const colors = ["red", "blue", "green"]; const colorIndex = colors.indexOf("green"); console.log(colorIndex);';
        case 19:
            return 'function isPrime(num) { if (num <= 1) { return false; } for (let i = 2; i < num; i++) { if (num % i === 0) { return false; } } return true; } const num = 5; console.log(isPrime(num));';
        case 20:
            return 'const myNumbers = [1, 2, 3, 4, 5]; const sum = myNumbers.reduce((acc, cur) => acc + cur); console.log(sum);';
    }
};
