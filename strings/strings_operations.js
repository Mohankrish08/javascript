let str = "Hi there this is javascript methods tutorial"

let str2 = " This is the second string we have  "

let text = "5"


// string length
console.log(`The length of the string is ${str.length}`)

// string slice
console.log(str.slice(0,5))

// string substring
console.log(str.substring(5,15))

// string  substr
console.log(str.substr(5,15))

// string replace
console.log(str.replace("methods", "types"))

// string replaceall
console.log(str.replaceAll("methods", "types"))

// string toupper
console.log(str.toUpperCase())

// string tolower
console.log(str.toLowerCase())

// string concat
console.log(str.concat(str2))

// string trim
console.log(str2.trim())

// string trimstart
console.log(str2.trimStart())

// string trimend
console.log(str2.trimEnd())

// string padstart
console.log(text.padStart(5, '0'))

// string padend
console.log(text.padEnd(4, "2"))

// string split
console.log(str.split(' '))
