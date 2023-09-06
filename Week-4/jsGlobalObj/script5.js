class Person {
    constructor(name, age, gender, nationality) {
        this.name = name
        this.age = age
        this.gender = gender
        this.nationality = nationality
    }
    introduce() {
        return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am ${this.nationality}`;
    }
}

class Student extends Person {
    constructor (name, age, gender, nationality, study) {
        super(name, age, gender, nationality)
        this.study = study
    }
    subject() {
        return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am ${this.nationality}, and I am studying ${this.study}`;
    }
}

const personInstance = new Person('abbas', 35,'male', 'Indian')
const studentInstance = new Student('Anas', 23,'male','Indian','MERN')

console.log(personInstance.introduce())
console.log(studentInstance.subject())