//generic interface

interface CrushInterface<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
}

const crush4: CrushInterface<boolean, string> = {
  name: "sultana",
  husband: true,
  wife: "sultana",
};

const crush5: CrushInterface<string> = { name: "sultana", husband: "Nayim" };

interface PersonInterface {
  name: string;
  age: number;
}

const crush7: CrushInterface<PersonInterface, PersonInterface> = {
  name: "sultana",
  husband: {
    name: "nayim",
    age: 23,
  },
  wife: {
    name: "sultana",
    age: 40,
  },
};

interface husbandInterface {
  name: string;
  salary: number;
}

const crush6: CrushInterface<husbandInterface> = {
  name: "sultana",
  husband: {
    name: "nayim",
    salary: 20390,
  },
};

type GenericTuple<x, y> = [x, y];

const relation: GenericTuple<string, string> = ["nayim", "hossen"];

// type RelationWithSalaryType = { name: string; salary: number };

interface RelationWithSalaryInterface {
  name: string;
  salary: number;
}

const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [
  { name: "Nayim", salary: 10000 },
  "Sultana",
];

type GenericArray<T> = Array<T>;

const rollNumber2: GenericArray<number> = [2, 3, 4, 5, 6];

const rollNumber3: GenericArray<string> = ["1", "2", "4"];

const rollNumber4: GenericArray<boolean> = [true, false];

type NameRollType = { name: string; roll: number };

const userNameAndRoll: Array<NameRollType> = [
  { name: "Nayim", roll: 23 },
  { name: "Hossen", roll: 40 },
];
