"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
// another way of writing functions
const sub = (num1, num2) => num1 - num2;
console.log(sub(5, 3));
// another way
const mult = function (num_1, num_2) {
    return num_1 * num_2;
};
// optional parameters
const mutli_new = function (num_1, num_2, num_3) {
    return num_3 ? num_1 * num_2 * num_3 : num_1 * num_2;
};
console.log(mult(5, 5));
console.log(mutli_new(4, 4));
console.log(mutli_new(4, 4, 4));
// required parameters
const mutli_new_n = (num_1, num_2, num_3 = 10) => num_1 * num_2 * num_3;
console.log(mutli_new_n(5, 5, 5));
