//a type is dependent on another type

type a1 = string;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : null;

//nested conditional type
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

type habibi = {
  wife1: string;
  wife2: string;
};

type A = keyof habibi;

type CheckProperty<T, K> = K extends keyof habibi ? true : false;

type CheckWife1 = CheckProperty<habibi, "girl">;

//check korbe ei sheikh type a wife1 ase kina ? true : false

type Bandubi = "a" | "b" | "c";

type RemoveBandubi<T> = T extends "b" ? never : T;

type CurrentBandubi = RemoveBandubi<Bandubi>;
