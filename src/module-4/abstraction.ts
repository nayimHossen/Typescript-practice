//interface
// interface ICar {
//   name: string;
//   model: string;
// }

// const Car: ICar = {
//   name: "Honda",
//   model: "v 208",
// };

// interface IVehicle {
//   startEngine(): void;
//   stopEngine(): void;
//   move(): void;
// }

// class Vehicle implements IVehicle {
//   constructor(
//     public name: string,
//     public brand: string,
//     public model: number
//   ) {}

//   startEngine(): void {
//     console.log(`I am a string engine`);
//   }
//   stopEngine(): void {
//     console.log(`I am stop the engine`);
//   }
//   move(): void {
//     console.log(`I am move`);
//   }
//   test() {
//     console.log(`I am for testing purpose`);
//   }
// }

// const vehicle1 = new Vehicle("car", "honda", 2022);

//abstract class
abstract class Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}

  abstract startEngine(): void;
  abstract stopEngine(): void;
  move(): void {
    console.log(`I am move`);
  }
  test() {
    console.log(`I am for testing purpose`);
  }
}

class Car extends Vehicle {
  startEngine(): void {
    console.log(`I am start engine`);
  }
  stopEngine(): void {
    console.log(`Stop the engin`);
  }
}
