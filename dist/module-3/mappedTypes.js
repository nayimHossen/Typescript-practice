"use strict";
const arrayOfNumbers = [1, 2, 3];
const arrayOfString = arrayOfNumbers.map((num) => num.toString());
let areaOne = {
    height: 23,
    width: "10",
};
const rectangularArea = {
    height: 10,
    width: 20,
};
// rectangularArea.width = 10;
// type A = AreaNumber["height"]; //look up type
// type B = keyof AreaNumber; //width | height
