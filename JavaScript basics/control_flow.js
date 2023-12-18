// if statement

let num = 10
if (num % 2 ==0) {
    console.log('The number is even')
}
else {
    console.log('The number is odd')
}

console.log('------------------------')


// while loop

let a = 0;

while (a<5){
    console.log(a)
    a++
}

console.log('------------------------')

// do while

let b = 1

do{
    console.log(b);
    b++
} while(b<10)

console.log('------------------------')

// for loop

for (let i = 0; i<5; i++){
    console.log(i)
    // process.stdout.write(i.toString() + ' ')
}

console.log('------------------------')

// break and continue

for(let i=0; i<10; i++){
    if(i==4){
        continue
}
if (i==8){
    break
}
console.log(i)
}


