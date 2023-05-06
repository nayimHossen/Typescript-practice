class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  public makeSound() {
    console.log(`The ${this.name} says ${this.sound} `);
  }
}

const dog = new Animal("Tome", "Dog", "Ghu Ghu");
const cat = new Animal("Love", "Cat", "Mau Mau");

dog.makeSound();
cat.makeSound();

cat.name = "spicla";
