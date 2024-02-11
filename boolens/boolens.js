// Javascript boolens only have two values like true or false

// 1. Constructor - returns function creates boolean datatype

let bool = false;
let text = bool.constructor;
console.log(text);

console.log('--------------------------------')

// 2. prototype - allow you to add new properties and methods to booleans.

Boolean.prototype.mycolor = function() {
    if (this.valueOf() == true) {
        return ("green");
    }
    else {
        return ("red");
    }
}

let a = true;
console.log(a.mycolor())

function Person(first, last, age, eyecolor) {
    this.firstName = first,
    this.lastName = last,
    this.eyecolor = eyecolor;
}

Person.prototype.nationality = 'Indian';

console.log(Person.prototype.nationality)

console.log('--------------------------------')

// 3. tostring() - retuns boolean as string

let b = true;
console.log(b.toString())