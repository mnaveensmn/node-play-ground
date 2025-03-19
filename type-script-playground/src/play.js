"use strict";
const testObj = {
    name: "Naveen",
    age: 20,
};
//console.log(testObj);
const newObj = {
    name: "xyz",
};
const oldObj = { name: "Naveen", age: 26 };
const merged = Object.assign(Object.assign({}, oldObj), newObj);
console.log(merged);
