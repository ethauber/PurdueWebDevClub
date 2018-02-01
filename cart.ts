import { Person } from './person';
class Car {
    wheels: number;
    doors: number;
    driver: Person;
    constructor(inputWheels: number, inputDoors: number, driver: Person) {
        this.wheels = inputWheels;
        this.doors = inputDoors;
        this.driver = drive;
    }
}
let me = new Person("someName", 15);
let myCar = new Car(5, 3, me);
let anotherCar = new Car(4, 3, me); //Cannot pass in too few or many arguments. Has to pass in the right types as well.

//compile with:  tsc .\cart.ts