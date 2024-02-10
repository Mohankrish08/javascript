// array data

const { formToJSON } = require("axios");

const cars = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Tesla", "Lexus", 
                "Hyundai", "Kia", "Nissan", "Subaru", "Jeep", "Mazda", "Volvo", "Porsche", "Ferrari", "Lamborghini"]



// 1. at() - return the index of the array element

let index = 2;
console.log(cars.at(index));

// 2. concat() - joins two to more array

let sample = ['a', 'b', 'c', 'd', 'e']
let concat = cars.concat(sample);
console.log(concat);

// 3. constructor - returns the function create the array prototype

let car = cars.constructor;
console.log(car)

// 4. copywithin() - copy the array element to the another position

let copy = cars.copyWithin(0,2);
console.log(copy)

// 5. entries() - returns array objects with keys and values

let f = cars.entries();
for (let [array, value] of f) {
    console.log(array, value)
}

// 6. every() - executes for each element of the array, returns false for one element

const age = [20,21,22,24]
const constraint = age.every(checkAge => checkAge >=18)
console.log(constraint)

// 7. fill() - fills specified array with the value

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");
let some = fruits.fill('dog', 2, 3);
console.log(some)

// 8. filter() - creates new array with passed test values, does not change the original value

const dd = age.filter(filtering);
function filtering(age)
{
    return age>=18
}
console.log(dd)

// 9. findIndex() - returns the index position of the element in the array

const find = age.findIndex(findAge => findAge ===24);
console.log(find)

// 10. flat() - it concatinates the sub array

const flat = [['abc'], ['def'], ['hij']];
console.log(flat.flat())

// 11. flatmap() - it maps the all element to creat a new array

const flatmap = age.flatMap((x)=> x*2)
console.log(flatmap)

// 12. forEach() - call the function for each element in the array

// let text = "";
// fruits.forEach(myFunction);

// document.getElementById("demo").innerHTML = text;
 
// function myFunction(item, index) {
//   text += index + ": " + item + "<br>"; 
// }

// 13. from() - returns the object from any iterable object

let txt = "ABCDEFG"
const myArr = Array.from(txt);
console.log(myArr);

// 14. includes() - returns true if the object present in the array

console.log(fruits.includes("dog", 2));

// 15. indexOf() - returns the index of the object in the array

console.log(fruits.indexOf('Kiwi'))

// 16. isArray() - return true if the object is an array

console.log(Array.isArray(fruits))

// 17. join() - returns the array as a string

console.log(`The value is: ${fruits.join(' and ')} | type is: ${typeof(fruits)}`)

// 18. keys() - returns array iterator object with keys

let j = cars.keys()
for(let c of cars)
{
    console.log(c)
}

// 19. length - returns length of the array

console.log(cars.length)

// 20. map() - creates new array calling a function for new element

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newArr)

// 21. pop() - removes the elements from the array

console.log(numbers.pop())

// 22. push() - used to append the elements to the end of the array

console.log(numbers.push(32,41))

// 23. reverse() - used to reverse the array

console.log(numbers.reverse())

// 24. shift() - used to remove the first element from the array

console.log(numbers.shift())

// 25. slice() - used to returns the selected elements from the array

console.log(numbers.slice(1,))

// 26. some() - used to check if the element is present in the array

age.some(check)

function check(age)
{
    return age>18;
}

console.log(age);

// 27. sort() - used to sort the elements in the array

console.log(cars.sort())

// 28. splice() - used to add or remove elements from the array

console.log(cars.splice(2,0, 'Modi'))

// 29. ToString() - used to convert the array to a string

console.log(cars.toString( ))

// 30. unshift() - used to add elements in the beginning of the array

console.log(cars.unshift('Modi'));

// 31. valueOf() - returns the array itself

console.log(cars.valueOf());
