// class is type of function, instead of using function keyword we can class and the properties are assinged into the constructor.

class Car 
{
    constructor(brand)
    {
        this.brand = brand;
    }
}

mycar = new Car('Ford')
console.log(mycar)

// inheritance

class Model extends Car
{
    constructor(brand, model)
    {
        super(brand);
        this.model = model;
    }
    show()
    {
        return (`This is the model: ${this.model} and this is the car: ${this.brand}`)
    }
}

model = new Model('Ford', 'Mustand');
console.log(model);