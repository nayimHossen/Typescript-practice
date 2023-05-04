type CrushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};

const crush1: CrushType = {
  name: "Moina",
  age: 22,
  profession: "Web Developer",
  address: "Mymensingh",
};

const crush2: CrushType = {
  name: "phaki",
  age: 32,
  profession: "Web Developer",
  address: "Dhaka",
};

const crush3: CrushType = {
  name: "Tya",
  profession: "Web Instractor",
  address: "USA",
};

type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = false;

type CourseNameType = string;

const course2: CourseNameType = "Next web";

//operation function calculator

type OperationType = (x: number, y: number) => number;

const calculate = (n1: number, n2: number, operation: OperationType) => {
  return operation(n1, n2);
};

calculate(10, 20, (x, y) => x + y);
calculate(30, 50, (x, y) => x - y);

console.log(calculate(10, 20, (x, y) => x + y));
console.log(calculate(30, 50, (x, y) => x - y));
