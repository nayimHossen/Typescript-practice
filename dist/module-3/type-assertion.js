"use strict";
let hello;
hello = "Next Level web development";
hello.length;
hello.length;
function kgToGram(param) {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The Converted result is : ${value} gram`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
}
const resultToBeNumber = kgToGram(23);
const resultToBeString = kgToGram("23");
try {
}
catch (error) {
    console.log(error.message);
}
