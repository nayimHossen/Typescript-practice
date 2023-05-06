//keyof guard

type AlphaNumerics = string | number;

function add(p: AlphaNumerics, p1: AlphaNumerics) {
  if (typeof p === "number" && typeof p1 === "number") {
    return p + p1;
  } else {
    return p.toString() + p1.toString();
  }
}

add(1, 3);
add("1", "4");

//In guard

type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: "admin";
};

function getUser(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return `I am admin and my role is ${user.role}`;
  } else {
    return `I am normal user`;
  }
}

const normalUser: NormalUserType = { name: "Nayim Hossen" };

const adminUser: AdminUserType = { name: "sultana", role: "admin" };

console.log(getUser(normalUser));
console.log(getUser(adminUser));

//Instance of guard

class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log("I am making sound");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(`I am Barking`);
  }
}

class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeMew() {
    console.log(`I am dancing`);
  }
}

function isDog(animal: Animal): animal is Dog {
  return animal instanceof Dog;
}

function isCat(animal: Animal): animal is Cat {
  return animal instanceof Cat;
}

function getAnimal(animal: Animal) {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMew();
  } else {
    animal1.makeSound();
  }
}

const animal1 = new Dog("Tome hero", "Dog");
const animal2 = new Cat("Tome hero", "Cat");

getAnimal(animal1);
getAnimal(animal2);
