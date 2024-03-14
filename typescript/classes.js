"use strict";
//import { addEmitHelper } from "typescript";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameAddress() {
        return this.name + " " + this.address;
    }
}
let mohan = new Employee(1, "Mohan", "Cbe");
console.log(mohan);
console.log(mohan.getNameAddress());
