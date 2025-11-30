"use strict";
// problem 1 -------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
const formatValue = (fv) => {
    if (typeof fv === 'string') {
        return fv.toUpperCase();
    }
    else if (typeof fv === 'number') {
        return fv * 10;
    }
    else if (typeof fv === 'boolean') {
        return !fv;
    }
};
// console.log(formatValue('sss'));
// problem 2-------------------------------------------------------
const getLength = (gl) => {
    return gl.length;
};
// console.log(getLength('akash'));
// problem 3-------------------------------------------------------
class Person {
    name;
    age;
    // name: string;
    // age: number
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.name=name 
        //  this.age=age 
    }
    getDetails() {
        return `Name: ${this.name} , Age: ${this.age} `;
    }
}
const person1 = new Person('akash', 30);
console.log(person1.getDetails());
//=========//============//============//===========
const arr = [1, 4, 5];
const sqrArray = arr.map((elem) => elem * elem);
// console.log(sqrArray);
//# sourceMappingURL=solution.js.map