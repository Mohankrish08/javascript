const arr1 = ["Banana", "Orange", "Apple", "Mango"];
const arr2 = [1,2,3,["Banana", "Orange", "Apple", "Mango"], 5, 45, 50]
const arr3 = [[1,2],[3,4],[5,6]];

// array length
console.log(arr1.length)
console.log(arr2.length)

// array pop
console.log(arr1.pop())

// array push
console.log(arr1.push(10))
console.log(arr1)

// array shift
console.log(arr1.shift())

// array unshift
console.log(arr1.unshift(2))
console.log(arr1)

// array concat
console.log(arr1.concat(arr2))

// array flat
console.log(arr3.flat())

// array splice
console.log(arr1.splice(0,2))
console.log(arr1)

// array slice
console.log(arr2.slice(2))
console.log(arr2)

// looping thought the array

for(let i=1; i<arr2.length; i++)
{
    console.log(arr2[i])
}