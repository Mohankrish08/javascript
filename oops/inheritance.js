class Vechile
{
    constructor(make, model)
    {
        this.make = make;
        this.model = model;
    }

    getThat()
    {
        return `${this.make} and ${this.model}`;
    }
}

class Car extends Vechile
{
    constructor(make, model, year)
    {
        super(make, model);
        this.year = year;
    }

    getThat()
    {
        return `${super.getThat()} and ${this.year}`;
    }
}

const car = new Car("Ford", "Mustang", 1980);
console.log(car.getThat());