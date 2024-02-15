// Abstraction is the process of hiding the complex implementations and showing only the necessary features. 

class Animal 
{
    constructor(name)
    {
        this.name = name;
    }

    makeSound(){
        throw new Error("This methods must be implemented in subclass");
    }
}

class Dog extends Animal
{
    makeSound(){
        return 'bark!';
    }
}

class Cat extends Animal
{
    makeSound(){
        return 'Meow!';
    }
}

const dog = new Dog('coco');
console.log(dog.makeSound());
const cat = new Cat('Puchi')
console.log(cat.makeSound());