// class Person {
//   takeNape(): void {
//     console.log(`I am sleeping 8 hours per day`);
//   }
// }

// class Student extends Person {
//   takeNape(): void {
//     console.log(`I am sleeping 10 hours per day`);
//   }
// }

// class Developer extends Person {
//   takeNape(): void {
//     console.log(`I am sleeping 5 hours per day`);
//   }
// }

// function getNape(param: Person) {
//   param.takeNape();
// }

// const person1 = new Person();
// const person2 = new Student();
// const person3 = new Developer();

// getNape(person1);
// getNape(person2);
// getNape(person3);

// class Shape {
//   getArea(): number {
//     return 0;
//   }
// }

// class Circle extends Shape {
//   radius: number;

//   constructor(radius: number) {
//     super();
//     this.radius = radius;
//   }

//   getArea(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Rectangle extends Shape {
//   height: number;
//   width: number;

//   constructor(height: number, width: number) {
//     super();
//     this.height = height;
//     this.width = width;
//   }

//   getArea(): number {
//     return this.width * this.height;
//   }
// }

// function getAreaOfShape(param: Shape) {
//   console.log(param.getArea());
// }

// getAreaOfShape(new Circle(10));
// getAreaOfShape(new Rectangle(10, 12));
