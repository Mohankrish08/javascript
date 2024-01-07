// creating a simple objects 

let phone = {
    name: 'iphone',
    price: 500000,
    quantity: 1,
    dimension: {
        length: 7,
        breadth: 3,
        height: 10
    }
}

// another way of creating objects

let tv = new Object();
tv.name = 'LG';
tv.price = 400000;
tv.quantity = 1,
tv.dimension = {
    length: 10,
    breadth: 20,
    height: 40
}

// accesing object notation

console.log(phone.price)
// alter the pricee
phone.price = 450000
console.log(phone.price)

// adding new property 
phone.returnable = true
console.log(phone)

// square bracker notation
console.log(phone['price'])