type User = {
  name: string;
  age: number;
};

type ExtendsUser = User & {
  role: string;
};

//we use interface for object
//And type alias we use for primitive value

interface IUser {
  name: string;
  age: number;
}

//we can extends inter face

interface IExtendedUser extends IUser {
  role: string;
}

type rollNumber = number;

//Object, function, arrow all like object

//we can make function signature type alias, for function type alias recommended

type addNumberType = (num1: number, num2: number) => number;

//we can also make function signature interface
interface IAddNumber {
  (num1: number, num2: number): number;
}

type rollNumberType = number[];

interface IRollNumbers {
  [index: number]: number;
}

const rollNumbers: IRollNumbers = [1, 2, 3, 4];

const addNumber: IAddNumber = (num1, num2) => num1 + num2;

const user4: IExtendedUser = {
  name: "Kashem",
  age: 2000,
  role: "unknown",
};

// const userWithTypeAlias: User = {
//   name: "Nayim",
//   age: 23,
// };

// const userWithInterface: IUser = {
//   name: "salma",
//   age: 40,
// };
