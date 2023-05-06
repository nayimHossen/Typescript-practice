interface CrushInterface<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
}

const myCrush: CrushInterface<boolean> = { name: "Sultana", husband: true };
const myCrush2: CrushInterface<string> = {
  name: "Jan",
  husband: "Nayim Hossen",
};

interface IHusband {
  name: string;
  salary: number;
}

const myCrush3: CrushInterface<IHusband, string> = {
  name: "Sultana",
  husband: {
    name: "Nayim Hossen",
    salary: 802,
  },
  wife: "Kobita",
};

interface IPerson {
  name: string;
  age: number;
}

const myCrush4: CrushInterface<IPerson, IPerson> = {
  name: "Sultana",
  husband: {
    name: "Nayim Hossen",
    age: 802,
  },
  wife: {
    name: "Kobita",
    age: 20,
  },
};

type GenericTuples<x, y> = [x, y];

const relations: GenericTuples<string, string> = ["Nayim", "Sultana"];

type relationWithSalaryType = { name: string; salary: number };

interface IRelationsWithSalary {
  name: string;
  salary: number;
}

const relationWithSalaryOne: GenericTuples<IRelationsWithSalary, string> = [
  { name: "Nayim Hossen", salary: 2000 },
  "Sultana",
];

type GenericArrays<T> = Array<T>;

const rollNumbers3: GenericArrays<number> = [1, 2, 3, 4, 5];
const rollNumbers4: GenericArrays<string> = ["1", "2", "3", "4", "5"];
const rollNumbers5: GenericArrays<boolean> = [true, false];

type nameRollType = { name: string; roll: number };

const userNameAndRollNumber: GenericArrays<nameRollType> = [
  { name: "Sultana", roll: 20 },
  { name: "Nayim", roll: 2 },
];
