"use strict";
//arrow function
const createArray = (param) => {
    return [param];
};
const createArray1 = (p, p2) => {
    return [p, p2];
};
// normal function
function createArray2(p, p2) {
    return [p, p2];
}
const result = createArray("Bangladesh");
const result2 = createArray1("Bangladesh", "I love");
const result3 = createArray1(true, ["hello"]);
const result4 = createArray1({ name: "Nayim Hossen" }, true);
const myInfo = {
    name: "Nayim Hossen",
    age: 1000,
    salary: 20948908,
    other1: true,
    other2: null,
};
const addMeToMyCrush = (myInfo) => {
    const crush = "sultana";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const result9 = addMeToMyCrush(myInfo);
