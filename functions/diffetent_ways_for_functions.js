// functions - which is used to perform for a specific task that can be called multiple times, 
//    it takes input parameter optionally and returns a value.


// 1. default parameter

function greet(name = 'there') {
    console.log('Hi', name)
}

// 2. function declaration

function isPositive(num) {
    return num>0
}

// 3. Recursion function

function factorial(num) {
    if (num in [0,1]) {
        return num
    }
    else {
        return num*factorial(num-1)
    }
}


// 4. function expression

let isEven = function(num) {
    return (num%2==0)
}

arr = [1,2,3,4,5]




// 5. Arrow function

let volume = (l,b,h) => {return (l*b*h)}

let findSum = (array) => {sum = 0; for(let i of array) 
    sum += i; return sum
}

// console.log(findSum(arr))


// 6. variable arguments

let prod = (array) => {
    sum = 1;
    for(let i of array){
        sum*=i;
    }
    return sum
}

let prod_multi = (...args) => {
    sum=1;
    for(let i of args){
        sum *=i;
    }
    return sum
}

// console.log(prod_multi(5,10,20))

// 7. Generators

function* indexGenerator() {
    let index = 1
    while(true) {
        yield index++   
    }
}

let gen = indexGenerator()
// console.log(gen.next().value)
// console.log(gen.next().value)


// 8. callback function

function greetConsole(name){
    console.log('Hello', name)
}

function greetHeading(name){
    const heading = document.querySelector('h1');
    heading.innerHTML = 'hello ' + name;
}

function greet(callback) {
    callback('Mohan')
}

// console.log(greet(greetHeading))


// map function 

let PriceUSD = [10,20,30]
let PriceINR = PriceUSD.map(x => x*83)
console.log(PriceINR)

PriceINR = PriceUSD.map(convert)

function convert(val) {
    return val*83
}

let convertedPrices = PriceUSD.map(convert);
console.log(convertedPrices); 
