"use strict";
// Basic Types
let id = 5;
let company = "LukeInc";
let isPublished = true;
let x = "howdy";
let age;
let yourName = "john";
x = true;
age = 30;
yourName = "sam";
// Arrays
let ids = [1, 2, 3, 4];
let arr = [1, false, "hello"];
ids.push(8);
// console.log(ids);
// Tuples
let person = [1, "hello"];
person = [2, "hi"];
// Array of tuples
let employee = [
    [1, "five"],
    [3, "seven"]
];
employee = [
    [5, 'hi'],
    [2, "John"],
    [3, "shalom"]
];
employee = [[1, "smell"]];
//Union
let pid = 22;
pid = "22";
pid = false;
console.log(pid);
// Enum (enumerated type)
var direction;
(function (direction) {
    direction["up"] = "hello";
    direction[direction["down"] = 9] = "down";
    direction["left"] = "hi";
})(direction || (direction = {}));
console.log(direction.left);
// Objects
const user = {
    id: 1,
    username: "Sam"
};
console.log(user.id);
const buggatti = {
    model: "veyron",
    year: "2020",
    numOfSeats: 5
};
// Type Assertion
let cid = 2;
// let customerId = <number>cid
let customerId = cid;
console.log(customerId);
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const subaru = {
    model: "imprezza",
    year: 1998
};
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4]);
let strArr = getArray(["sam", "brian", "paul"]);
