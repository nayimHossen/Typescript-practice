const arrayOfNumber = [2, 3, 4];

const arrayOfString = arrayOfNumber.map((number) => number.toString());
console.log(arrayOfString);

type AreaNumber = {
  hight: number;
  width: number;
};

type Area = {
  [key in "height" | "width"]: string;
};

type AreaString = {
  height: string;
  width: string;
};

type AreaReadonly = {
  readonly height: number;
  readonly width: number;
};

const rectangulerArea: AreaReadonly = {
  hight: 10,
  width: 30,
};
rectangulerArea.width = 20;

type A1 = AreaNumber["hight"];
type B1 = keyof AreaNumber;
