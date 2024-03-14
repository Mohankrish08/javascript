// declaring string

let lname : string;

lname = "Mohan";

let newName = lname.toUpperCase()
console.log(newName);

// declaring number

let age : number;
age = 20;
let dob = "25"

let result = parseInt(dob);

// declaring boolean

let isValid : boolean = true;
console.log(isValid);

// array

let empList : string[]; // this holds all the values as string
let numlist : Array<number> // this is the another way


empList = ["Car", "Bike", "train", "flight"];

numlist = [1,2,3,4,5];

let resuls = numlist.filter((num) => num>2);

let results_find = numlist.find((num) => num===3);

let res_emp = empList.find((emp) => emp="Car");

let sum = numlist.reduce((acc, num) => acc + num);

console.log(resuls);
console.log(results_find);
console.log(res_emp);
console.log(sum);

// declaring enums

const enum color {
    Red,
    Green,
    Blue
}

// creating new color
let c: color = color.Blue;

//declaring tuples

let swapnums: [number, number];
function swapNum(num_1:number, num_2:number): [number, number] {
    return [num_2, num_1]
}

swapnums = swapNum(10,20);

// declaring any datatype

let department : any;
department = "AI";
department = 2020;


