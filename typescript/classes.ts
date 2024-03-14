//import { addEmitHelper } from "typescript";

class Employee {
    id: number;
    name: string;
    address: string;

    constructor(id: number, name: string, address: string) {
     this.id = id;
     this.name = name;
     this.address = address;   
    }

    getNameAddress() : string {
        return this.name + " " + this.address;
    }
}   

let mohan = new Employee(1, "Mohan", "Cbe");

console.log(mohan);
console.log(mohan.getNameAddress());
