type PersonType = {
  name: string;
  age: number;
  address: string;
};

type NewType = "name" | "age" | "address";

type NewTypeUsingKeyOf = keyof PersonType;

const a: NewType = "age";
const b: NewTypeUsingKeyOf = "address";

// ({name: "Mr. Nayim", age: 200}, "age")

function getProperty<x, y extends keyof x>(obj: x, key: y) {
  obj[key];
}

const property = getProperty({ name: "Nayim", age: 100 }, "age");
