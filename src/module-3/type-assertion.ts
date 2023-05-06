let hello: any;

hello = "Next Level web development";

(hello as string).length;
<string>hello.length;

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The Converted result is : ${value} gram`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}

const resultToBeNumber = kgToGram(23) as number;
const resultToBeString = <string>kgToGram("23");

type CustomErrorType = {
  message: string;
};

try {
} catch (error) {
  console.log((error as CustomErrorType).message);
}
