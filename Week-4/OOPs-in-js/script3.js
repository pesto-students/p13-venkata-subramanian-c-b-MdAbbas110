const person = {
    _age: 0
}

Object.defineProperties(person, 'name',{
    value: 'abbas',
    writable: false,
    enumerable: true,
    configurable: false
})

Object.defineProperties(person, 'email',{
    value: 'abbas110@gmail.com',
    writable: false,
    enumerable: true,
    configurable: false
})

Object.defineProperties(person, 'age', {
    set: function(value) {
        this._age = value
    },
    enumerable: true,
    configurable: false
})


// second part of the question where use of prototype

class Vehicle  {
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }
    getDetails() {
        return `Make: ${this.make} and Model is ${this.model} and year ${this.year}`
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numDoors){
        super(make, model, year)
        this.numDoors = numDoors
    }
    getDetails() {
        return `${super.getDetails()} Number of Doors are ${this.numDoors}`
    }
}

const vehicle = new Vehicle('Honda','i20', 2018)
console.log(vehicle.getDetails());

const car = new Car('toyota','Cardio',2022, 8)
console.log(car.getDetails());