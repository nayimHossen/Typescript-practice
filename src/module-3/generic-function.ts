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

const crush8 = "Sultana";
const myInfo = {
  name: "Nayim Hossen",
  age: 1000,
  salary: 20948908,
};

// const newDate = { ...myInfo, crush8 };

const addMeToMyCrush = <T>(myInfo: T) => {
  const crush = "sultana";
  const newData = { ...myInfo, crush };
  return newData;
};

const result9 = addMeToMyCrush(myInfo);
