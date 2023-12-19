// creating a simple function

function greet() {
    console.log('Hello there')
}

greet()

// function with parameters

function multiply(a,b)
{
    mul = `The multiplication is ${a*b}`
    return console.log(mul)
}

multiply(5,4)


// Simple factorial program

function factorial(num)
{
    if (num == 0 || num == 1 )
    {
        return 1
    }
    else
    {
        return num*factorial(num-1)
    }
}

console.log(factorial(10))

// fibonacci series

function fibo(num)
{
    if (num==0||num==1)
    {
        return 1
    }
    else
    {
        return fibo(num-1) + fibo(num-2)
    }
}

console.log(fibo(4))


// Scope

// Global scope

let globVar = "I'm Global"

function scope()
{
    let locVar = "I'm local"

    console.log(globVar)
    console.log(locVar)
}

console.log(globVar)    // returns the global variable
// console.log(locVal)     // not accessible it trows an error

// Closure

function outerFun()
{
    let outVar = 'This is outer function'

    function innerFun()
    {
        console.log(outVar)
    }

    return innerFun
}

let result = outerFun()
console.log(result)
