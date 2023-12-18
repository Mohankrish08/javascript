// 1. Write a JavaScript function that uses a loop and if conditions to print all even numbers between 1 and 50.

for (let i =1; i<=50; i++)
{
    if (i%2==0){
    console.log(i)
    }
}

// 2. Create two JavaScript functions, one using a for loop and another using a while loop, both checking for a certain condition using if statements. Discuss the differences in their execution.

var j = 0;
while(j<=50)
{
    console.log(j);
    j++;
}

do{
    console.log(j);
    j++;
} while(j<=50)

for (let i=1; i<=50; j++)
{
    console.log(i);
}

// 3. Implement a JavaScript loop with if conditions where the 'break' statement is utilized

for(let i = 1; i<=20; i++)
{
    if (i==15){
        break
    }
    console.log(i)
}

// 4. Build a JavaScript loop that employs the 'continue' statement along with if conditions.

let j = 1
while(j<=10)
{
    if (j==5)
    {
        j++
        continue
    }
    else {
    console.log(j);
    }
    j++
}

// 5. Design a JavaScript function or algorithm using loops and if conditions to determine whether a given number is prime or not

if (num==1||num==0)
{
    console.log('Not possible')
}
else {
    var isprime = true;
    for (let i = 2; i<=Math.sqrt(num); i++)
    {
        if (num%i==0)
        {
            isprime = false;
            console.log('Not a prime')
            break;
        }
    }
    if (isprime) {
        console.log(`${num} is a prime number`)
    }
}

// 6. Create a JavaScript function that uses nested loops and conditional statements to generate a specific pattern

var num = 5
for (let i = 0; i<=num; i++)
{
    let row = '';
    for (let j = 0; j<=i; j++)
    {
        row += '* '
    }
    console.log(row)
}

for (let i = num; i>=1; i--)
{
    let row='';
    for (let j = 1; j<=i; j++)
    {
        row += '* '
    }
    console.log(row)
}

// 7. Write a JavaScript function that utilizes a loop with if-else conditions to identify and display the largest number among an array of integers.

var nums = [10,20,30,80,50,70]
var greater = nums[0]
for (let i=0; i<nums.length; i++)
{
    if (nums[i] > greater)
    {
        greater = nums[i]
    }
    else{
        continue
    }
}
console.log(greater);