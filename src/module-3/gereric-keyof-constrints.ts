type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address";

type newTypeUsingKeyOf = keyof PersonType;

const a: newType = "age";
const b: newTypeUsingKeyOf = "address";

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}

const resultNow = getProperty({ name: "Nayim", age: 200 }, "age");
