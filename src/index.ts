//Student interface
interface Student {
  name: string;
  age: number;
}

//This function take a array of object and returns those objects where the person's age is greater than or equal to 18
const findStudentAdults = (studentArray: Student[]): Student[] => {
  const result = studentArray.filter((student) => student.age >= 18);
  return result;
};

// student array of object
const students: Student[] = [
  { name: "Nayim", age: 25 },
  { name: "Hossen", age: 8 },
  { name: "Perves", age: 17 },
  { name: "Sultana", age: 30 },
  { name: "Jhanker", age: 18 },
  { name: "Sumon", age: 10 },
];

const findAdults: Student[] = findStudentAdults(students);
console.log(findAdults);
