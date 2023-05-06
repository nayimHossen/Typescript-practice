//We use alias type for primitive type data
type User = {
  name: string;
  age: number;
};

//type alias extends way
type extendsUser = User & {
  role: string;
};

//We use interface for object type data
interface IUser {
  name: string;
  age: number;
}

//type alias function signature
type addNumberTypes = (n: number, n1: number) => number;

//interface function signature
interface IAddNumbers {
  (n: number, n1: number): number;
}

const addNumber: addNumberTypes = (n: number, n1: number): number => n + n1;
const addNumber2: IAddNumbers = (n: number, n1: number): number => n + n1;

//Object, function, Array

//interface extends way
interface IExtendUser extends IUser {
  role: string;
}

const userMan: IExtendUser = {
  name: "Sultana",
  age: 20,
  role: "unknown",
};

const userWithTypeAlias: User = {
  name: "Sultana",
  age: 23,
};

const userWithTypeInterface: IUser = {
  name: "Nayim Hossen",
  age: 32,
};

//Number type and interface index array
type rollNumberType = number[];
interface IRollNumber {
  [index: number]: number;
}
const rollNumbers: rollNumberType = [1, 2, 3];
const rollNumbers2: IRollNumber = [1, 2, 3];
