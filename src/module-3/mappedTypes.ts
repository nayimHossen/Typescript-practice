const arrayOfNumbers = [1, 2, 3];

const arrayOfString = arrayOfNumbers.map((num) => num.toString());

type Volume = {
  height: number;
  width: number;
  depth: number;
};

type AreaString = {
  height: string;
  width: String;
};

type AreaReadonly = {
  readonly height: number;
  readonly width: number;
};

type Area<T> = {
  readonly [key in keyof T]: T[key];
};

let areaOne: Area<{ height: number; width: string }> = {
  height: 23,
  width: "10",
};

const rectangularArea: AreaReadonly = {
  height: 10,
  width: 20,
};

// rectangularArea.width = 10;

// type A = AreaNumber["height"]; //look up type
// type B = keyof AreaNumber; //width | height
