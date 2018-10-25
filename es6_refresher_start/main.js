// CONST & LET
// let name = "John"

// name = 'Jack';

// console.log(name);

const person = {
    name: "John",
    age: 33
};

person.name = 'Jack'

const num = [1, 2, 3, 4];
num.push(5);

// ARROW FUNCTIONS

// function sayHello() {
//     console.log('Hello');
// }

const sayHello = (name) => console.log(`Hello ${name}`);

// sayHello('Brad');


const fruits = ["Apples", "Oranges", "Grapes"];
// FOREACH

fruits.forEach((fruit, index) => {
    // console.log(fruit);
});

// MAP

const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toLocaleUpperCase());

// console.log(singleFruit);

// FILTER

const people = [{
        id: 1,
        name: "Karen",
    },
    {
        id: 2,
        name: "Bob",
    },
    {
        id: 3,
        name: "Sharon",
    }
]

const people2 = people.filter(person => person.id != 2);
// console.log(people2);

// SPREAD

const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)];

// console.log(arr3);

// console.log(arr2);

const person1 = {
    name: 'Brad',
    age: 36
};

const person2 = {
    ...person1,
    email: 'brad@gmail.com'
}

// console.log(person2);
// DESTRUCTURING

const profile = {
    name: 'John Doe',
    address: {
        street: "40 Main St",
        city: "Boston"
    },
    hobbies: ["movies", "music"]
};

const {
    name,
    address,
    hobbies
} = profile

const {
    street,
    city
} = profile.address;

// console.log(street, city);

// CLASSES
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello my name ${this.name} and I am ${this.age}`;
    }
}

const personOne = new Person('John', 33);
const personTwo = new Person('Sarah', 28);

console.log(personOne.greet())
// SUBCLASSES
class Customer extends Person {
    constructor(name, age, balance) {
        super(name, age);
        this.balance = balance;
    }

    info() {
        return `${this.name} owes $${this.balance}.00`;
    }

}

const customer1 = new Customer('Kevin', 32, 300);

console.log(customer1.info());


// MODULES

//file 1 (file1.js)
// export const nameOne = 'Jeff';
// export const nums = [1, 2, 3];
// export default Person;

//file 2 (file2.js)
// import {
//     nameOne,
//     nums
// } from './file1';
// import Person from './file1';