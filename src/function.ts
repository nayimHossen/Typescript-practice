//normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(2, 3));

//arrow function

const addArrow = (n: number, n2: number): number => n + n2;

console.log(addArrow(2, 3));

//map arrow function

const arr = [2, 3, 4, 5];

const newArray = arr.map((n: number) => n * n);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "Nayim Hossen",
  balance: 5,
  addBalance(money: number) {
    return `Your New Balance is ${this.balance + money}`;
  },
};
