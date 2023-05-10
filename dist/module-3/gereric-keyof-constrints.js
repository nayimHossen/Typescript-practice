"use strict";
const a = "age";
const b = "address";
function getProperty(obj, key) {
    obj[key];
}
const resultNow = getProperty({ name: "Nayim", age: 200 }, "age");
