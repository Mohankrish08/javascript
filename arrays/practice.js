arr1 = [5,6,7,8,10,2,5,4,30,15,20,10,5]
arr2 = [15,20,5,10,25,20,30,40]

// 1. Find the Maximum Element: Write a function to find the largest element in an array of numbers.


function max_fun(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return console.log(max)
}

max_fun(arr1)

// 2. Array Sum: Create a function that calculates the sum of all elements in an array of numbers.

function arr_sum(arr) {
    let sum = 0;
    for(let i=1; i<arr.length; i++)
    {
        sum += arr[i]
    }
    return console.log(`Sum is ${sum}`)
}

arr_sum(arr1)

// 3. Remove Duplicates: Implement a function that removes duplicates from an array and returns a new array without duplicates.

function rem_dup(arr) {
    let newArr = [];
    for (let i=0; i<arr.length; i++) 
    {
        if (!newArr.includes(arr[i]))
        {
            newArr.push(arr[i])
        }
    }
    return console.log(newArr)
}
rem_dup(arr1)

// 4. Array Rotation: Create a function that rotates elements of an array to the right by a given number of steps.

function arr_rot(arr, n)
{   
    output = arr.slice(n).concat(arr.slice(0,n))
    return console.log(output)
}

arr_rot(arr1, 2)

// 5. Merge Arrays: Implement a function that merges two sorted arrays into a single sorted array.

function merge_two(arr1, arr2) {
    let arr1_mer = arr1.sort()
    let arr2_mer = arr2.sort()
    console.log(arr1_mer.concat(arr2_mer))
}

merge_two(arr1, arr2)

console.log('---------')
console.log(arr1.sort())