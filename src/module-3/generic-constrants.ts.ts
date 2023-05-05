//arrow function

const createArray = (param: string): string[] => {
  return [param];
};

const createArray1 = <x, y>(p: x, p2: y): [x, y] => {
  return [p, p2];
};

// normal function
function createArray2<x, y>(p: x, p2: y): [x, y] {
  return [p, p2];
}

const result = createArray("Bangladesh");
const result2 = createArray1<string, string>("Bangladesh", "I love");
const result3 = createArray1<boolean, Array<string>>(true, ["hello"]);

type NameType = { name: string };

const result4 = createArray1<NameType, boolean>({ name: "Nayim Hossen" }, true);

//spread operator

type MyInfoType = {
  name: string;
  age: number;
  salary: number;
  other1: boolean;
  other2: null;
};

const myInfo: MyInfoType = {
  name: "Nayim Hossen",
  age: 1000,
  salary: 20948908,
  other1: true,
  other2: null,
};

// const newDate = { ...myInfo, crush8 };

// type MandatoryType = { name: string; age: number; salary: number };
interface MandatoryType {
  name: string;
  age: number;
  salary: number;
}

const addMeToMyCrush = <T extends MandatoryType>(myInfo: T) => {
  const crush = "sultana";
  const newData = { ...myInfo, crush };
  return newData;
};

const result9 = addMeToMyCrush(myInfo);
