// creating the user

let user_1 = {
    name: 'Mohan krishnan',
    age: 20,
    email: 'mohan@gmail.com',
    login() {
        console.log('Hi', this.name)
        console.log('You are logged In');
    },
    logout(){
        console.log('You are logged out');
    }
}

let user_2 = {
    name: 'Mukilan',
    age: 22,
    email: 'mukilan@gmail.com',
    login() {
        console.log('Hi', this.name)
        console.log('You are logged In');
    },
    logout(){
        console.log('You are logged out');
    }
}

// creating a class using constructor

// Class is the template, properties and methods.

class User{
    static numberofUsers = 0;
    constructor(name, age){
        // instance variables
        this.name = name;
        this.age = age;
        this.email = `${name}@gmail.com`
        User.numberofUsers ++;

    }
    login() {
        console.log('Hi', this.name)
        console.log('You are logged In');
    }
    logout(){
        console.log('You are logged out');
    }
}

let user_3 = new User('Murali', 22)
let user_4 = new User('Sri hari', 20)


// inheritance

class PaidUser extends User{
    constructor(name, age, storage){
        super(name, age);
        this.storage = 100;
    }
    message(){
        console.log('You have 2TB of stroage!!');
    }
    //overriding
    login(){
        console.log('Thank you for your support!!')
        return this;
    }
}

let paiduser_1 = new PaidUser('shankari', 21)

//method chaining

console.log(paiduser_1.login().message())


