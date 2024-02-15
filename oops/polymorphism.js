// Polymorphism allows the object of different types to be treated as common superclass

class Animal
{
    constructor(name)
    {
        this.name = name;
    }

    makeSound()
    {
        console.log(`${this.name} make this sound`)
    }
}

class Dog extends Animal
{
    makeSound()
    {
        console.log(`${this.name} barks!`);
    }
}

class Cat extends Animal
{
    makeSound()
    {
        console.log(`${this.name} says meow!`);
    }
}

const dog = new Dog('coco');
console.log(dog.makeSound());

const cat = new Cat('puchi');
console.log(cat.makeSound());