"use strict";
console.log("Hello from typescript!");
function add(a, b) {
    return a + b;
}
let myCar = {
    year: 5,
    model: "one",
    electric: true,
};
console.log(`${myCar.year}`);
console.log(add(5, 5)); // result 10
//? All this code will be compiled into "../dist/index.js"
