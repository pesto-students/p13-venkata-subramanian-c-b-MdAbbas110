class Vehicle {
    constructor (make, model, year, color) {
        this.make = make
        this.model = model
        this.year = year
        this.color = color 
    }

    drive() {
        console.log(`Driving ${this.make} ${this.model}`);
    }
} 

class Car extends Vehicle {
    constructor(make, model, year, color, numSeats) {
        super(make, model, year, color)
        this.numSeats = numSeats
    }
}

class rideShare extends Car {
    constructor(make, model, year, color, isAvailable) {
        super(make, model, year, color)
        this.isAvailable = isAvailable;
    }
}

const vehicle1 = new Vehicle('Honda', 'Sidon', '2018', 'Red')
const car1 = new Car('8')
const rideShare1 = new rideShare('Yes')

console.log(vehicle1.drive());
console.log(car1.drive());
console.log(rideShare1.drive());

//* Section 2 polymorphism 

class Shape {
    constructor() {
        //not required any here
    }
    calculateArea() {
        // providing it from subclasses
    }
}

class Rectangle extends Shape{
 constructor(width, hight) {
    super()
    this.width = width;
    this.hight = hight;
 }
 calculateArea() {
    return this.width * this.hight;
 }
}

class Triangle extends Shape{
    constructor(base, hight) {
        super()
        this.base = base;
        this.hight = hight;
    }
    calculateArea() {
        return (this.base * this.hight) / 2;
    }
}

class Circle extends Shape{
    constructor(radios) {
        super()
        this.radios = radios;
    }
    calculateArea() {
        return Math.PI * this.radios * this.radios;
    }
}

const rect = new Rectangle(223,145)
const trang = new Triangle(98,145)
const circ = new Circle(284)

console.log(rect.calculateArea());
console.log(trang.calculateArea());
console.log(circ.calculateArea());


//* Abstraction Implementation 

class BankAccount {
    #accountNumber;
    #balance = 0
    #accountHolderName;

    constructor(accNo, accName) {
        this.accNo = accNo
        this.accName = accName
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw (amount) {
        if(amount < this.#balance){
            return this.#balance -= amount
        }  else {
            console.log(`insufficient balance to withdraw `);
        }
    }

    getBalance() {
        this.#balance
    }
}

class CheckingAccount extends BankAccount{
    constructor (accNo, accName) {
        super(accNo, accName)
    }
}

class SavingAccount extends BankAccount {
    constructor (accNo, accName) {
        super(accNo, accName)
    }
}    

const checking = new CheckingAccount(343523, 'Abbas')
const saving = new CheckingAccount(3435, 'Abidi')

console.log(saving.deposit(344));
console.log(saving.withdraw(267));

console.log(checking.deposit());
console.log(checking.getBalance());